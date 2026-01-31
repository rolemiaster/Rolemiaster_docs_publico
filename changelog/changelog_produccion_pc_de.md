****************************************************************************************************
30/01/2026 02:09 - Multi-GPU, Handbücher-Fix & Stabilität - Beta_v050
****************************************************************************************************
- Neuigkeiten:
  **Multi-GPU-Leistung und kritische Korrekturen!**
  
  * **🚀 Multi-GPU-Unterstützung:** Implementierung der Fähigkeit, große KI-Modelle auf mehrere Grafikkarten aufzuteilen. *Jetzt kannst du dein gesamtes Hardware-Arsenal nutzen; unbegrenzte Macht!*
  * **🛡️ Stabilität:** Alle fehlenden DLL-Bibliotheken hinzugefügt, um unerwartete Abstürze zu vermeiden. *Ich habe die Engine gepanzert, wenn sie jetzt versagt, ist ein Patzer beim Würfeln schuld.*
  * **📖 Dynamische Web-Handbücher:**
    * **Echter Selektor:** Das Sprachmenü prüft nun, welche Dateien tatsächlich existieren, bevor es sie anzeigt. *Schluss mit Phantom-Optionen, die nichts bewirkten; Wahrsagerei-Magie Stufe 5.*
    * **Fix Fehler 403:** Berechtigungsfehler behoben, der das Anzeigen des Changelogs im Spiel verhinderte. *Ich habe der App beigebracht, korrekt um Einlass zu bitten ("Sesam öffne dich!").*
  * **🌍 Sprachen:** Überarbeitung von Texten und Übersetzungen. *Polyglott-Modus aktiviert.*

****************************************************************************************************
28/01/2026 22:49 - Stabilisierung und KI-Verbesserungen - Beta_v049
****************************************************************************************************
- Neuigkeiten:
  Wir haben das Spielerlebnis mit wichtigen Korrekturen und einem neuen visuellen Tool aufpoliert:

  * **Sauberes und zuverlässiges Inventar:** Schluss mit "Phantom-Objekten" oder Items mit seltsamen Namen im Rucksack. Wir haben ein System zur narrativen Validierung implementiert, das sicherstellt, dass alles, was du sammelst oder kaufst, wirklich in der Spielwelt existiert.
  * **Flüssige Dialoge:** Wir haben diese lästigen Buttons repariert, die manchmal als "Unknown" erschienen oder nicht reagierten. Jetzt zeigen die Dialogoptionen mit den NPCs immer den korrekten Text an.
  * **Robuste Charaktererstellung:** Das Erstellen deines Helden ist jetzt ein solider Prozess. Wir haben die Konflikte gelöst, die manchmal das Charakterblatt unvollständig ließen oder fehlerhafte Statistiken beim Kombinieren von Biografie und Stats verursachten.
  * **Neue KI-Statusleiste:** Jetzt kannst du dem Gehirn der Maschine bei der Arbeit zusehen! Wir haben oben eine Leiste hinzugefügt, die dir die Antwortgeschwindigkeit und die Speichernutzung in Echtzeit anzeigt. So weißt du immer, ob die KI gerade über dein nächstes Abenteuer "nachdenkt".

****************************************************************************************************
28/01/2026 03:50 - Kritischer Kompilierungs-Fix - Beta_v048
****************************************************************************************************
- Neuigkeiten:
  Ein kritischer Fehler wurde behoben, der den Spielstart bei Neuinstallationen verhinderte. Verbesserte Stabilität und Kompatibilität mit verschiedenen Computern.

****************************************************************************************************
26/01/2026 19:38 - Web-Launcher & RTX 50 Support - Beta_v047
****************************************************************************************************
- Neuigkeiten:

  > [!WICHTIG]
  > **AUS KOMPATIBILITÄTSGRÜNDEN IST ES NOTWENDIG, DIE VORHERIGE DB ZU LÖSCHEN, ANDERNFALLS TRETEN HÖCHSTWAHRSCHEINLICH FEHLER IN DER KI-KONFIGURATION AUF**
  > **(Lösung: Klick auf das Zahnrad-Symbol ⚙️ im Launcher -> Datenbank löschen)**

  *Kritischer Support für RTX 50-Serie: Ein schwerwiegender Fehler wurde behoben, der einen unerwarteten Absturz beim Versuch verursachte, Charaktere auf den neuen NVIDIA-Grafikkarten (RTX 5070, 5080, 5090) zu generieren.
  (Da ich keine RTX der 5000er-Serie besitze, konnte ich nicht direkt testen, ob die Lösung zu 100% funktioniert, aber theoretisch sollte es behoben sein. Ich erwarte eure Siegesgesänge hier!)
  
  *Update der KI-Engine: Wir haben das lokale Gehirn des Spiels aktualisiert, um kompatibel mit der neuesten Hardware-Technologie zu sein und sicherzustellen, dass jeder das Erlebnis offline genießen kann, egal wie modern sein Computer ist.
  
  *Neuer Launcher: Updates und Nachrichten in Echtzeit von der offiziellen Website.


****************************************************************************************************
26/01/2026 06:49 - Web-Dokumentations-Integration - Beta_v045
****************************************************************************************************
- Neuigkeiten:
  *Das Benutzerhandbuch und das Änderungsprotokoll werden nun direkt von unserer offiziellen Website geladen, was garantiert, dass du immer die aktuellsten Informationen hast, ohne Patches herunterladen zu müssen. Inklusive intelligentem Offline-Modus.

  *Wir haben die Stabilität des Spiels verstärkt, damit es beim Starten nie hängen bleibt. Außerdem sind die Händler aus ihrem Urlaub im Limbus zurückgekehrt: Sie erscheinen jetzt korrekt, haben Waren in den Regalen und respektieren das Setting der Welt (keine magischen Tränke in der Zukunft).

  *Der Bug wurde behoben, der das Ändern der KI-Parameter und die Auswahl des KI-Modells verhinderte, wodurch einige Benutzer mit begrenztem VRAM nicht spielen konnten.
  **Falls die KI-Parameter geändert werden müssen, empfehle ich dringend, zunächst den VRAM-Prozentsatz auf 85% zu senken, neu zu starten und zu testen. Wenn dies immer noch nicht ausreicht, empfehle ich zu überprüfen, ob der VRAM der GPU nicht von anderen Prozessen verwendet wird, die nicht zum Spiel gehören (PC-Neustart falls nötig, Schließen von Anwendungen, die VRAM belegen könnten). Wenn es auch nach dem Senken der VRAM-Menge auf bis zu 70% immer noch nicht funktioniert, empfehle ich nicht, weiter herunterzugehen, da das Spiel die an die KI gesendeten Prompts nicht verwalten kann. Auch wenn der VRAM-Überlauf vermieden wird, kann das Spiel nicht funktionieren, da es keine Ressourcen dafür hat. In diesem Fall bleibt als einzige Option, auf ein niedrigeres Modell zu wechseln, die KI-Parameter wieder auf automatisch zu stellen und neu zu starten.

****************************************************************************************************
26/01/2026 04:00 - Core-Stabilisierung und Dienste-Diagnose - Beta_v044
****************************************************************************************************
- Neuigkeiten:
  Core-Stabilisierung und Dienste-Diagnose. Kritische Korrekturen bei der Charaktergenerierung, UI (MainWindow) und Optimierung der semantischen Suche. Beginn der tiefgehenden Diagnose des Dienste-Modus.

****************************************************************************************************
25/01/2026 19:28 - Hotfix: Logs und Stabilität - Beta_v043
****************************************************************************************************
- Beschreibung:
  Korrektur-Patch mit Fokus auf Diagnose und Behebung von UI-Schleifen.

- Änderungen:
  Visueller Bug des Neustart-Dialogs behoben
  Neues Log-System in %LOCALAPPDATA% zur Diagnose
  Interne Leistungsoptimierungen

****************************************************************************************************
24/01/2026 06:30 - Backend-Biografie-Support - Beta_v042
****************************************************************************************************
- Beschreibung:
  Offenlegung von Biografie-Daten für UI und i18n-Anpassungen.

<!-- source_hash: 5f218fc5 -->