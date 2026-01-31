****************************************************************************************************
30/01/2026 02:09 - Multi-GPU, Fiks av Manualer & Stabilitet - Beta_v050
****************************************************************************************************
- Nyheter:
  **Multi-GPU-kraft og kritiske feilrettinger!**
  
  * **🚀 Multi-GPU-støtte:** Implementert evnen til å dele store AI-modeller mellom flere grafikkort. *Nå kan du bruke hele maskinvarearsenalet ditt; Ubegrenset makt!*
  * **🛡️ Stabilitet:** Lagt til alle manglende DLL-biblioteker for å unngå uventede avslutninger. *Jeg har pansret motoren, hvis den feiler nå er det på grunn av et kritisk feilslag med terningene.*
  * **📖 Dynamiske nettmanualer:**
    * **Reell velger:** Språkmenyen verifiserer nå hvilke filer som faktisk eksisterer før de vises. *Slutt på spøkelsesalternativer som ikke gjorde noe; spådomsmagi nivå 5.*
    * **Fiks Feil 403:** Løste rettighetsfeilen som forhindret visning av endringsloggen inne i spillet. *Jeg har lært appen å be om adgang på riktig måte ("Sesam lukk deg opp!").*
  * **🌍 Språk:** Gjennomgang av tekster og oversettelser. *Polyglott-modus aktivert.*

****************************************************************************************************
28/01/2026 22:49 - Stabilisering og AI-forbedringer - Beta_v049
****************************************************************************************************
- Nyheter:
  Vi har pusset på spillopplevelsen med viktige rettelser og et nytt visuelt verktøy:

  * **Rent og pålitelig inventar:** Slutt på å finne "spøkelsesobjekter" eller gjenstander med merkelige navn i ryggsekken din. Vi har implementert et narrativt valideringssystem som sikrer at alt du plukker opp eller kjøper faktisk eksisterer i spillverdenen.
  * **Flytende dialoger:** Vi har reparert de irriterende knappene som noen ganger dukket opp som "Unknown" eller ikke responderte. Nå vil dialogalternativene med NPC-er alltid vise riktig tekst.
  * **Robust karaktergenerering:** Å skape helten din er nå en solid prosess. Vi har løst konfliktene som noen ganger etterlot karakterarket ufullstendig eller med feilaktig statistikk ved sammenslåing av biografi og stats.
  * **Ny statuslinje for AI:** Nå kan du se maskinens hjerne i arbeid! Vi har lagt til en linje øverst som viser responshastigheten og minnebruken i sanntid. Slik vet du alltid om AI-en "tenker" på ditt neste eventyr.

****************************************************************************************************
28/01/2026 03:50 - Kritisk Kompileringsfiks - Beta_v048
****************************************************************************************************
- Nyheter:
  Løste en kritisk feil som forhindret spillet i å starte på nye installasjoner. Forbedret stabilitet og kompatibilitet med forskjellig utstyr.

****************************************************************************************************
26/01/2026 19:38 - Nettstarter & RTX 50 Support - Beta_v047
****************************************************************************************************
- Nyheter:

  > [!VIKTIG]
  > **AV KOMPATIBILITETSÅRSAKER ER DET NØDVENDIG Å SLETTE DEN FORRIGE DB-EN, ELLER SÅ ER DET VELDIG SANNSYNLIG AT DET OPPSTÅR FEIL I AI-KONFIGURASJONEN**
  > **(Løsning: Klikk på tannhjulikonet ⚙️ i Starteren -> Slett database)**

  *Kritisk støtte for RTX 50-serien: Løste en alvorlig feil som forårsaket uventet avslutning ved forsøk på å generere karakterer på de nye NVIDIA-grafikkortene (RTX 5070, 5080, 5090).
  (Siden jeg ikke har en RTX fra 5000-serien, har jeg ikke kunnet teste direkte om løsningen er 100 %, men teorien er at det skal være løst. Jeg venter på seiersropene deres her!)
  
  *Oppdatering av AI-motoren: Vi har oppdatert spillets lokale hjerne for å være kompatibel med den nyeste maskinvareteknologien, og sikrer at alle kan nyte opplevelsen uten nett, uansett hvor moderne utstyret deres er.
  
  *Ny starter: Oppdateringer og nyheter i sanntid fra den offisielle nettsiden.


****************************************************************************************************
26/01/2026 06:49 - Nettintegrasjon Dokumentasjon - Beta_v045
****************************************************************************************************
- Nyheter:
  *Nå lastes brukermanualen og endringsloggen direkte fra vår offisielle nettside, noe som garanterer at du alltid har den mest oppdaterte informasjonen uten å måtte laste ned oppdateringer. Inkluderer smart frakoblet modus.

  *Vi har forsterket spillets stabilitet slik at det aldri henger seg opp ved oppstart. I tillegg har selgerne kommet tilbake fra ferien sin i limbo: nå vises de riktig, har varer i hyllene og respekterer verdens atmosfære (ingen magiske drikker i fremtiden).

  *Feilen som ikke tillot endring av AI-parametere og valg av AI-modell er rettet, noe som gjorde at noen brukere med begrenset VRAM ikke kunne spille.
  **Ved behov for å endre AI-parametere, anbefaler jeg sterkt å prøve å senke VRAM-% til 85 % først, starte på nytt og teste. Hvis dette fortsatt ikke er nok, anbefaler jeg å sjekke at GPU-ens VRAM ikke brukes av andre prosesser enn selve spillet (start PC-en på nytt om nødvendig, lukk applikasjoner som kan oppta VRAM). Hvis det fortsatt ikke fungerer etter å ha senket VRAM-mengden til og med ned til 70 %, anbefaler jeg ikke å gå lavere fordi spillet ikke vil klare å håndtere prompts som sendes til AI-en. Selv om man klarer å unngå overflyt av VRAM, vil ikke spillet kunne fungere fordi det ikke har ressurser til å gjøre det. I så fall er det eneste gjenværende alternativet å bytte til en lavere modell, sette AI-parametrene tilbake til automatisk og starte på nytt.

****************************************************************************************************
26/01/2026 04:00 - Core-stabilisering og Tjenestediagnostikk - Beta_v044
****************************************************************************************************
- Nyheter:
  Core-stabilisering og Tjenestediagnostikk" "Kritiske rettelser i karaktergenerering, UI (Hovedvindu) og optimalisering av semantisk søk. Start av dyp diagnostikk av tjenestemodus.

****************************************************************************************************
25/01/2026 19:28 - Hotfix: Logger og Stabilitet - Beta_v043
****************************************************************************************************
- Beskrivelse:
  Korrigerende oppdatering fokusert på diagnostikk og retting av UI-løkke.

- Endringer:
  Fikset visuell feil i omstartsdialogen
  Nytt loggsystem i %LOCALAPPDATA% for diagnostikk
  Interne ytelsesoptimaliseringer

****************************************************************************************************
24/01/2026 06:30 - Støtte for Biografi Backend - Beta_v042
****************************************************************************************************
- Beskrivelse:
  Eksponering av biografidata for UI og i18n-justeringer.

<!-- source_hash: 5f218fc5 -->