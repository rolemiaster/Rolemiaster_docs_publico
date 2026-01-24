@echo off
cd /d "%~dp0"
echo Desplegando Web Oficial de RoleMIAster a Google Apps Script...
clasp push
if %errorlevel% neq 0 (
    echo Error en el despliegue.
    pause
    exit /b %errorlevel%
)
echo Despliegue completado con exito.
pause