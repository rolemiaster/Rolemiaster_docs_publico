/**
 * Servidor para la Web Oficial de RoleMIAster
 * Gestiona la entrega de contenido y la base de datos de reportes de errores.
 */

function doGet(e) {
    if (e.parameter && e.parameter.p === 'condiciones') {
        return HtmlService.createHtmlOutputFromFile('condiciones')
            .setTitle('RoleMIAster - Condiciones')
            .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
            .addMetaTag('viewport', 'width=device-width, initial-scale=1')
            .setFaviconUrl('https://raw.githubusercontent.com/RoleMIAster/RoleMIAster/main/src/imagepack/--system--logos_app_icon.ico');
    }

    return HtmlService.createHtmlOutputFromFile('index')
        .setTitle('RoleMIAster - Web Oficial')
        .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
        .addMetaTag('viewport', 'width=device-width, initial-scale=1')
        .setFaviconUrl('https://raw.githubusercontent.com/RoleMIAster/RoleMIAster/main/src/imagepack/--system--logos_app_icon.ico'); // Placeholder favicon if available
}

function doPost(e) {
    // Permite recibir reportes vía POST (JSON) desde la aplicación de escritorio
    if (e.postData && e.postData.contents) {
        try {
            var data = JSON.parse(e.postData.contents);
            var result = saveError(data);
            return ContentService.createTextOutput(JSON.stringify(result))
                .setMimeType(ContentService.MimeType.JSON);
        } catch (error) {
            return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
                .setMimeType(ContentService.MimeType.JSON);
        }
    }
    return ContentService.createTextOutput("Método no soportado").setMimeType(ContentService.MimeType.TEXT);
}

function setupSheet() {
    var props = PropertiesService.getScriptProperties();
    var sheetId = props.getProperty('SPREADSHEET_ID');
    var ss;

    if (sheetId) {
        try {
            ss = SpreadsheetApp.openById(sheetId);
        } catch (e) {
            console.warn('No se pudo abrir la hoja con ID: ' + sheetId + '. Creando una nueva.');
        }
    }

    if (!ss) {
        ss = SpreadsheetApp.create('RoleMIAster DB');
        var newId = ss.getId();
        props.setProperty('SPREADSHEET_ID', newId);
        console.log('Nueva base de datos creada: ' + ss.getUrl());
    }

    var sheet = ss.getSheetByName('Errores');
    if (!sheet) {
        sheet = ss.insertSheet('Errores');
        // Cabeceras
        sheet.appendRow(['Timestamp', 'Tipo', 'Severidad', 'Descripción', 'Pasos', 'Contacto', 'Versión', 'Estado', 'Notas Admin']);
        sheet.setFrozenRows(1);
        sheet.getRange(1, 1, 1, 9).setFontWeight('bold');
    }
    return sheet;
}

function saveError(data) {
    var sheet = setupSheet();
    var timestamp = new Date();

    // Anti-spam: Verificar descripción mínima (evita envíos vacíos/bots)
    if (!data.description || data.description.trim().length < 10) {
        return { status: 'error', message: 'La descripción debe tener al menos 10 caracteres' };
    }

    // Anti-spam: Rate limiting - verificar últimos envíos en los últimos 5 minutos
    var now = new Date().getTime();
    var cooldownMs = 5 * 60 * 1000; // 5 minutos
    var allData = sheet.getDataRange().getValues();

    // Buscar envíos recientes (últimas 50 filas para rendimiento)
    var recentRows = allData.slice(-50);
    for (var i = recentRows.length - 1; i >= 1; i--) { // Saltar header
        var rowTimestamp = recentRows[i][0];
        if (rowTimestamp instanceof Date) {
            var rowTime = rowTimestamp.getTime();
            if ((now - rowTime) < cooldownMs) {
                // Verificar si es el mismo contacto o descripción similar
                var rowContact = recentRows[i][5] || '';
                var rowDesc = recentRows[i][3] || '';

                if ((data.contact && data.contact === rowContact) ||
                    (data.description && data.description === rowDesc)) {
                    return { status: 'error', message: 'Por favor espera 5 minutos entre reportes' };
                }
            }
        }
    }

    // Sanitización básica
    var type = data.type || 'General';
    var severity = data.severity || 'Normal';
    var description = data.description || '';
    var steps = data.steps || '';
    var contact = data.contact || '';
    var version = data.version || 'Desconocida';

    sheet.appendRow([
        timestamp,
        type,
        severity,
        description,
        steps,
        contact,
        version,
        'Nuevo', // Estado inicial
        ''       // Notas admin vacías
    ]);

    return { status: 'success', message: 'Reporte guardado correctamente' };
}

function getErrors(password) {
    var props = PropertiesService.getScriptProperties();

    // Anti brute-force: verificar intentos fallidos
    var MAX_ATTEMPTS = 3;
    var LOCKOUT_MINUTES = 15;
    var failedAttemptsStr = props.getProperty('LOGIN_FAILED_ATTEMPTS') || '[]';
    var failedAttempts = [];

    try {
        failedAttempts = JSON.parse(failedAttemptsStr);
    } catch (e) {
        failedAttempts = [];
    }

    // Filtrar intentos dentro de la ventana de tiempo
    var now = new Date().getTime();
    var lockoutMs = LOCKOUT_MINUTES * 60 * 1000;
    failedAttempts = failedAttempts.filter(function (ts) {
        return (now - ts) < lockoutMs;
    });

    // Si hay demasiados intentos, bloquear
    if (failedAttempts.length >= MAX_ATTEMPTS) {
        var remainingMs = lockoutMs - (now - failedAttempts[0]);
        var remainingMins = Math.ceil(remainingMs / 60000);
        throw new Error('Demasiados intentos fallidos. Espera ' + remainingMins + ' minutos.');
    }

    // Verificar contraseña
    var adminPass = props.getProperty('ADMIN_PASSWORD') || 'admin123';

    if (password !== adminPass) {
        // Registrar intento fallido
        failedAttempts.push(now);
        props.setProperty('LOGIN_FAILED_ATTEMPTS', JSON.stringify(failedAttempts));
        throw new Error('Contraseña incorrecta. Intentos restantes: ' + (MAX_ATTEMPTS - failedAttempts.length));
    }

    // Login exitoso - limpiar intentos fallidos
    props.deleteProperty('LOGIN_FAILED_ATTEMPTS');

    var sheet = setupSheet();
    var data = sheet.getDataRange().getValues();
    var headers = data.shift(); // Quitar cabeceras

    // Mapear a objetos para facilitar el uso en JS
    var errors = data.map(function (row, index) {
        // Convertir timestamp a ISO string para evitar problemas de serialización
        var timestamp = row[0];
        if (timestamp instanceof Date) {
            timestamp = timestamp.toISOString();
        } else {
            timestamp = String(timestamp);
        }

        return {
            id: index + 2, // Fila en la hoja (1-based, +1 por header)
            timestamp: timestamp,
            type: row[1] || '',
            severity: row[2] || '',
            description: row[3] || '',
            steps: row[4] || '',
            contact: row[5] || '',
            version: row[6] || '',
            status: row[7] || 'Nuevo',
            adminNotes: row[8] || ''
        };
    });

    return errors.reverse(); // Mostrar más recientes primero
}

function updateErrorStatus(password, rowId, newStatus, notes) {
    var adminPass = PropertiesService.getScriptProperties().getProperty('ADMIN_PASSWORD') || 'admin123';

    if (password !== adminPass) {
        throw new Error('Contraseña incorrecta');
    }

    var sheet = setupSheet();
    // rowId corresponde directamente a la fila en la hoja
    if (rowId > 1 && rowId <= sheet.getLastRow()) {
        sheet.getRange(rowId, 8).setValue(newStatus); // Columna H (Estado)
        if (notes !== undefined) {
            sheet.getRange(rowId, 9).setValue(notes); // Columna I (Notas)
        }
        return { status: 'success' };
    } else {
        throw new Error('ID de reporte inválido');
    }
}

/**
 * Función auxiliar para incluir archivos HTML parciales (si decidimos modularizar en el futuro)
 */
function include(filename) {
    return HtmlService.createHtmlOutputFromFile(filename)
        .getContent();
}