****************************************************************************************************
30/01/2026 02:09 - Multi-GPU, Reparare Manuale & Stabilitate - Beta_v050
****************************************************************************************************
- Noutăți:
  **Putere Multi-GPU și Corecții Critice!**
  
  * **🚀 Suport Multi-GPU:** A fost implementată capacitatea de a împărți modelele mari de IA între mai multe plăci grafice. *Acum îți poți folosi tot arsenalul hardware; Putere Nelimitată!*
  * **🛡️ Stabilitate:** Au fost adăugate toate bibliotecile DLL lipsă pentru a preveni închiderile neașteptate. *Am blindat motorul, dacă eșuează acum va fi din cauza unei aruncări critice greșite cu zarurile.*
  * **📖 Manuale Web Dinamice:**
    * **Selector Real:** Meniul de limbi verifică acum ce fișiere există cu adevărat înainte de a le afișa. *S-a terminat cu opțiunile fantomă care nu făceau nimic; magie de divinație de nivelul 5.*
    * **Reparare Eroare 403:** S-a rezolvat eroarea de permisiuni care împiedica vizualizarea Changelog-ului în joc. *Am învățat aplicația să ceară trecere corect („Sesam, deschide-te!”).*
  * **🌍 Limbi:** Revizuirea textelor și a traducerilor. *Mod Poliglot activat.*

****************************************************************************************************
28/01/2026 22:49 - Stabilizare și Îmbunătățiri IA - Beta_v049
****************************************************************************************************
- Noutăți:
  Am șlefuit experiența de joc cu corecții importante și un nou instrument vizual:

  * **Inventar Curat și Fiabil:** S-a terminat cu găsirea „obiectelor fantomă” sau a itemelor cu nume ciudate în rucsac. Am implementat un sistem de validare narativă care asigură că tot ceea ce culegi sau cumperi există cu adevărat în lumea jocului.
  * **Dialoguri Fluide:** Am reparat acele butoane enervante care uneori apăreau ca „Unknown” sau nu răspundeau. Acum opțiunile de dialog cu NPC-urile vor afișa întotdeauna textul corect.
  * **Generare Robustă de Personaje:** Crearea eroului tău este acum un proces solid. Am rezolvat conflictele care uneori lăsau fișa incompletă sau cu statistici eronate la combinarea biografiei și a stats-urilor.
  * **Noua Bară de Stare IA:** Acum poți vedea creierul mașinii funcționând! Am adăugat o bară în partea superioară care îți arată viteza de răspuns și utilizarea memoriei în timp real. Astfel vei ști întotdeauna dacă IA-ul „gândește” următoarea ta aventură.

****************************************************************************************************
28/01/2026 03:50 - Fix Critic Compilare - Beta_v048
****************************************************************************************************
- Noutăți:
  S-a rezolvat o eroare critică ce împiedica pornirea jocului în instalări noi. S-a îmbunătățit stabilitatea și compatibilitatea cu diferite echipamente.

****************************************************************************************************
26/01/2026 19:38 - Launcher Web & Suport RTX 50 - Beta_v047
****************************************************************************************************
- Noutăți:

  > [!IMPORTANT]
  > **DIN MOTIVE DE COMPATIBILITATE, ESTE NECESAR SĂ ȘTERGEȚI DB-UL ANTERIOR, ALTFEL ESTE FOARTE PROBABIL SĂ APARĂ ERORI ÎN CONFIGURAȚIA IA**
  > **(Soluție: Click pe pictograma roată dințată ⚙️ din Launcher -> Șterge Baza de Date)**

  *Suport Critic pentru RTX Seria 50: S-a rezolvat o eroare gravă care provoca închiderea neașteptată la încercarea de a genera personaje pe noile plăci grafice NVIDIA (RTX 5070, 5080, 5090).
  (Cum nu dispun de un RTX din seria 5000 nu am putut testa direct dacă soluția este 100%, dar teoria este că ar trebui să fie rezolvat. Aștept cântecele voastre de victorie aici!)
  
  *Actualizare Motor IA: Am actualizat creierul local al jocului pentru a fi compatibil cu cea mai recentă tehnologie hardware, asigurând că toți se pot bucura de experiență offline, indiferent cât de modern este echipamentul lor.
  
  *Launcher Nou: Actualizări și știri în timp real de pe site-ul oficial.


****************************************************************************************************
26/01/2026 06:49 - Integrare Web Documentație - Beta_v045
****************************************************************************************************
- Noutăți:
  *Acum Manualul de Utilizare și Jurnalul de Modificări (Changelog) se încarcă direct de pe site-ul nostru oficial, garantând că ai mereu informația cea mai actualizată fără a fi nevoie să descarci patch-uri. Include mod offline inteligent.

  *Am consolidat stabilitatea jocului astfel încât să nu se blocheze niciodată la pornire. În plus, vânzătorii s-au întors din vacanțele lor din limb: acum apar corect, au marfă pe rafturi și respectă ambientul lumii (fără poțiuni magice în viitor).

  *S-a reparat bug-ul care nu permitea modificarea parametrilor IA și selectarea modelului IA, făcând ca unii utilizatori cu VRAM limitat să nu poată juca.
  **În caz de necesitate de a modifica parametrii IA, recomand cu tărie să încercați mai întâi reducând % de VRAM la 85%, reporniți și testați; dacă acest lucru tot nu este suficient, recomand să verificați ca VRAM-ul GPU-ului să nu fie folosit de alte procese care nu țin de jocul propriu-zis (repornire pc dacă este necesar, închiderea aplicațiilor care pot ocupa VRAM). Dacă după scăderea cantității de VRAM chiar și până la 70%, tot nu funcționează, nu recomand să scădeți mai mult deoarece jocul nu va putea gestiona prompt-urile trimise către IA, astfel că, deși se reușește evitarea depășirii VRAM-ului, jocul nu va putea funcționa pentru că nu are cu ce să o facă; în acel caz singura opțiune rămasă este să coborâți la un model inferior, să puneți din nou parametrii IA pe automat și să reporniți.

****************************************************************************************************
26/01/2026 04:00 - Stabilizare Core și Diagnostic Servicii - Beta_v044
****************************************************************************************************
- Noutăți:
  Stabilizare Core și Diagnostic Servicii" "Corecții critice în generarea de personaje, UI (MainWindow) și optimizarea căutării semantice. Începerea diagnosticului profund al modului servicii.

****************************************************************************************************
25/01/2026 19:28 - Hotfix: Logs și Stabilitate - Beta_v043
****************************************************************************************************
- Description:
  Patch corectiv axat pe diagnosticare și corectarea buclei de UI.

- Changes:
  S-a reparat bug-ul vizual al dialogului de repornire
  Nou sistem de logs în %LOCALAPPDATA% pentru diagnosticare
  Optimizări de performanță internă

****************************************************************************************************
24/01/2026 06:30 - Suport Biografie Backend - Beta_v042
****************************************************************************************************
- Description:
  Expunerea datelor de biografie pentru UI și ajustări de i18n.

<!-- source_hash: 5f218fc5 -->