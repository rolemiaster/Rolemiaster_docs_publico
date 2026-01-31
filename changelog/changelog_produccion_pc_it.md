****************************************************************************************************
30/01/2026 02:09 - Multi-GPU, Fix Manuali & Stabilità - Beta_v050
****************************************************************************************************
- Novità:
  **Potenza Multi-GPU e Correzioni Critiche!**
  
  * **🚀 Supporto Multi-GPU:** Implementata la capacità di dividere grandi modelli di IA tra più schede grafiche. *Ora puoi usare tutto il tuo arsenale hardware; Potere Illimitato!*
  * **🛡️ Stabilità:** Aggiunte tutte le librerie DLL mancanti per evitare chiusure impreviste. *Ho blindato il motore, se fallisce ora sarà colpa di un fallimento critico coi dadi.*
  * **📖 Manuali Web Dinamici:**
    * **Selettore Reale:** Il menu delle lingue ora verifica quali file esistono realmente prima di mostrarli. *Finite le opzioni fantasma che non facevano nulla; magia di divinazione livello 5.*
    * **Fix Errore 403:** Risolto l'errore di permessi che impediva di visualizzare il Changelog all'interno del gioco. *Ho insegnato all'app a chiedere il passaggio correttamente ("Apriti Sesamo!").*
  * **🌍 Lingue:** Revisione di testi e traduzioni. *Modalità Poliglotta attivata.*

****************************************************************************************************
28/01/2026 22:49 - Stabilizzazione e Miglioramenti IA - Beta_v049
****************************************************************************************************
- Novità:
  Abbiamo perfezionato l'esperienza di gioco con correzioni importanti e un nuovo strumento visivo:

  * **Inventario Pulito e Affidabile:** Basta trovare "oggetti fantasma" o item con nomi strani nel tuo zaino. Abbiamo implementato un sistema di validazione narrativa che assicura che tutto ciò che raccogli o compri esista realmente nel mondo di gioco.
  * **Dialoghi Fluidi:** Abbiamo riparato quei fastidiosi pulsanti che a volte apparivano come "Unknown" o non rispondevano. Ora le opzioni di dialogo con gli NPC mostreranno sempre il testo corretto.
  * **Generazione Personaggi Robusta:** Creare il tuo eroe è ora un processo solido. Abbiamo risolto i conflitti che a volte lasciavano la scheda incompleta o con statistiche errate combinando biografia e stats.
  * **Nuova Barra di Stato IA:** Ora puoi vedere il cervello della macchina in funzione! Abbiamo aggiunto una barra nella parte superiore che ti mostra la velocità di risposta e l'uso della memoria in tempo reale. Così saprai sempre se l'IA sta "pensando" alla tua prossima avventura.

****************************************************************************************************
28/01/2026 03:50 - Fix Critico Compilazione - Beta_v048
****************************************************************************************************
- Novità:
  Risolto un errore critico che impediva l'avvio del gioco su nuove installazioni. Migliorata la stabilità e la compatibilità con diversi computer.

****************************************************************************************************
26/01/2026 19:38 - Launcher Web & Supporto RTX 50 - Beta_v047
****************************************************************************************************
- Novità:

  > [!IMPORTANTE]
  > **PER MOTIVI DI COMPATIBILITÀ, È NECESSARIO ELIMINARE IL DB PRECEDENTE ALTRIMENTI È MOLTO PROBABILE CHE SI VERIFICHINO ERRORI NELLA CONFIGURAZIONE IA**
  > **(Soluzione: Clicca sull'icona dell'ingranaggio ⚙️ del Launcher -> Cancella Database)**

  *Supporto Critico per RTX Serie 50: Risolto un errore grave che causava la chiusura imprevista durante il tentativo di generare personaggi sulle nuove schede grafiche NVIDIA (RTX 5070, 5080, 5090).
  (Siccome non dispongo di una RTX della serie 5000 non ho potuto provare direttamente se la soluzione è al 100%, ma in teoria dovrebbe essere risolto. Aspetto i vostri canti di vittoria qui!)
  
  *Aggiornamento del Motore IA: Abbiamo aggiornato il cervello locale del gioco per renderlo compatibile con l'ultima tecnologia hardware, assicurando che tutti possano godersi l'esperienza offline, indipendentemente da quanto sia moderno il loro computer.
  
  *Nuovo Launcher: Aggiornamenti e notizie in tempo reale dal sito ufficiale.


****************************************************************************************************
26/01/2026 06:49 - Integrazione Web Documentazione - Beta_v045
****************************************************************************************************
- Novità:
  *Ora il Manuale Utente e il Registro delle Modifiche vengono caricati direttamente dal nostro sito ufficiale, garantendo che tu abbia sempre le informazioni più aggiornate senza bisogno di scaricare patch. Include modalità offline intelligente.

  *Abbiamo rinforzato la stabilità del gioco affinché non si blocchi mai all'avvio. Inoltre, i venditori sono tornati dalle loro vacanze nel limbo: ora appaiono correttamente, hanno merce sugli scaffali e rispettano l'ambientazione del mondo (niente pozioni magiche nel futuro).

  *È stato risolto il bug che non permetteva di modificare i parametri dell'IA e la selezione del modello di IA, impedendo ad alcuni utenti con VRAM limitata di giocare.
  **In caso di necessità di modificare i parametri dell'IA, raccomando caldamente di provare prima abbassando la % di VRAM all'85%, riavviare e provare; se questo non è ancora sufficiente, raccomando di controllare che la VRAM della GPU non sia utilizzata da altri processi che non siano del gioco stesso (riavvio del PC se necessario, chiusura di applicazioni che possano occupare VRAM). Se dopo aver abbassato la quantità di VRAM anche fino al 70% continua a non funzionare, sconsiglio di scendere ulteriormente perché il gioco non potrà gestire i prompt che vengono inviati all'IA, quindi anche se si riesce a evitare l'overflow della VRAM, il gioco non potrà funzionare perché non ha le risorse per farlo; in quel caso l'unica opzione rimanente è passare a un modello inferiore, reimpostare i parametri dell'IA su automatico e riavviare.

****************************************************************************************************
26/01/2026 04:00 - Stabilizzazione Core e Diagnostica Servizi - Beta_v044
****************************************************************************************************
- Novità:
  Stabilizzazione Core e Diagnostica Servizi" "Correzioni critiche nella generazione dei personaggi, UI (MainWindow) e ottimizzazione della ricerca semantica. Avvio della diagnostica profonda della modalità servizi.

****************************************************************************************************
25/01/2026 19:28 - Hotfix: Log e Stabilità - Beta_v043
****************************************************************************************************
- Description:
  Patch correttiva focalizzata sulla diagnostica e correzione del loop dell'UI.

- Changes:
  Risolto bug visivo della finestra di riavvio
  Nuovo sistema di log in %LOCALAPPDATA% per la diagnostica
  Ottimizzazioni delle prestazioni interne

****************************************************************************************************
24/01/2026 06:30 - Supporto Biografia Backend - Beta_v042
****************************************************************************************************
- Description:
  Esposizione dei dati della biografia per l'UI e regolazioni i18n.

<!-- source_hash: 5f218fc5 -->