****************************************************************************************************
30/01/2026 02:09 - Multi-GPU, Oprava manuálů a stabilita - Beta_v050
****************************************************************************************************
- Novinky:
  **Výkon Multi-GPU a kritické opravy!**
  
  * **🚀 Podpora Multi-GPU:** Implementována možnost rozdělit velké modely AI mezi více grafických karet. *Nyní můžete využít celý svůj hardwarový arzenál; Neomezená moc!*
  * **🛡️ Stabilita:** Přidány všechny chybějící knihovny DLL, aby se zabránilo neočekávaným pádům. *Obrnil jsem engine; pokud teď selže, bude to vina kritického neúspěchu při hodu kostkou.*
  * **📖 Dynamické webové manuály:**
    * **Skutečný výběr:** Nabídka jazyků nyní před zobrazením ověřuje, které soubory skutečně existují. *Konec fantomových možností, které nic nedělaly; věštecká magie 5. úrovně.*
    * **Oprava chyby 403:** Vyřešena chyba oprávnění, která bránila zobrazení seznamu změn přímo ve hře. *Naučil jsem aplikaci správně požádat o průchod („Sezame, otevři se!“).*
  * **🌍 Jazyky:** Revize textů a překladů. *Režim polyglota aktivován.*

****************************************************************************************************
28/01/2026 22:49 - Stabilizace a vylepšení AI - Beta_v049
****************************************************************************************************
- Novinky:
  Vyladili jsme herní zážitek důležitými opravami a novým vizuálním nástrojem:

  * **Čistý a spolehlivý inventář:** Už žádné nalézání „fantomových předmětů“ nebo věcí s podivnými názvy v batohu. Implementovali jsme systém narativního ověřování, který zajišťuje, že vše, co seberete nebo koupíte, v herním světě skutečně existuje.
  * **Plynulé dialogy:** Opravili jsme ta otravná tlačítka, která se někdy zobrazovala jako „Unknown“ nebo nereagovala. Nyní budou možnosti dialogu s NPC vždy zobrazovat správný text.
  * **Robustní tvorba postav:** Vytvoření vašeho hrdiny je nyní solidní proces. Vyřešili jsme konflikty, které někdy při kombinování biografie a statistik zanechávaly kartu postavy neúplnou nebo s chybnými statistikami.
  * **Nová stavová lišta AI:** Nyní můžete vidět mozek stroje v chodu! Do horní části jsme přidali lištu, která v reálném čase zobrazuje rychlost odezvy a využití paměti. Vždy tak budete vědět, zda AI „přemýšlí“ o vašem dalším dobrodružství.

****************************************************************************************************
28/01/2026 03:50 - Kritická oprava kompilace - Beta_v048
****************************************************************************************************
- Novinky:
  Vyřešena kritická chyba, která bránila spuštění hry u nových instalací. Vylepšena stabilita a kompatibilita s různými sestavami.

****************************************************************************************************
26/01/2026 19:38 - Webový Launcher & Podpora RTX 50 - Beta_v047
****************************************************************************************************
- Novinky:

  > [!DŮLEŽITÉ]
  > **Z DŮVODŮ KOMPATIBILITY JE NUTNÉ ODSTRANIT PŘEDCHOZÍ DATABÁZI, JINAK JE VELMI PRAVDĚPODOBNÉ, ŽE DOJDE K CHYBÁM V KONFIGURACI AI**
  > **(Řešení: Klikněte na ikonu ozubeného kola ⚙️ v Launcheru -> Smazat databázi)**

  *Kritická podpora pro RTX řady 50: Vyřešena závažná chyba, která způsobovala neočekávané ukončení při pokusu o generování postav na nových grafických kartách NVIDIA (RTX 5070, 5080, 5090).
  (Jelikož nemám k dispozici RTX řady 5000, nemohl jsem přímo ověřit, zda je řešení 100%, ale teoreticky by to mělo být vyřešeno. Čekám zde na vaše vítězné chorály!)
  
  *Aktualizace AI enginu: Aktualizovali jsme lokální mozek hry, aby byl kompatibilní s nejnovějším hardwarem, čímž zajišťujeme, že si offline zážitek mohou užít všichni, bez ohledu na to, jak moderní je jejich vybavení.
  
  *Nový Launcher: Aktualizace a novinky v reálném čase z oficiálního webu.


****************************************************************************************************
26/01/2026 06:49 - Webová integrace dokumentace - Beta_v045
****************************************************************************************************
- Novinky:
  *Uživatelská příručka a seznam změn se nyní načítají přímo z našeho oficiálního webu, což zaručuje, že budete mít vždy nejaktuálnější informace bez nutnosti stahovat opravy. Zahrnuje inteligentní offline režim.

  *Posílili jsme stabilitu hry, aby při spuštění nikdy nezamrzla. Navíc se obchodníci vrátili z dovolené v limbu: nyní se objevují správně, mají zboží v regálech a respektují zasazení světa (žádné kouzelné lektvary v budoucnosti).*

  *Byla opravena chyba, která neumožňovala měnit parametry AI a výběr modelu AI, kvůli čemuž někteří uživatelé s omezenou VRAM nemohli hrát.
  **V případě nutnosti úpravy parametrů AI důrazně doporučuji nejprve zkusit snížit % VRAM na 85 %, restartovat a vyzkoušet. Pokud to stále nestačí, doporučuji zkontrolovat, zda VRAM GPU není využívána jinými procesy mimo hru (v případě potřeby restartujte PC, zavřete aplikace, které mohou zabírat VRAM). Pokud ani po snížení množství VRAM až na 70 % hra nefunguje, nedoporučuji dále snižovat, protože hra nebude schopna zpracovat prompty odesílané do AI. I když se tedy podaří zabránit přetečení VRAM, hra nebude fungovat, protože nebude mít s čím pracovat. V takovém případě je jedinou zbývající možností přejít na nižší model, vrátit parametry AI na automatické nastavení a restartovat.

****************************************************************************************************
26/01/2026 04:00 - Stabilizace jádra a diagnostika služeb - Beta_v044
****************************************************************************************************
- Novinky:
  Stabilizace jádra a diagnostika služeb. Kritické opravy při generování postav, UI (MainWindow) a optimalizace sémantického vyhledávání. Zahájení hloubkové diagnostiky režimu služeb.

****************************************************************************************************
25/01/2026 19:28 - Hotfix: Logy a stabilita - Beta_v043
****************************************************************************************************
- Popis:
  Opravný patch zaměřený na diagnostiku a opravu smyčky v uživatelském rozhraní.

- Změny:
  Opravena vizuální chyba dialogu restartu
  Nový systém logování v %LOCALAPPDATA% pro diagnostiku
  Optimalizace interního výkonu

****************************************************************************************************
24/01/2026 06:30 - Podpora backendu biografie - Beta_v042
****************************************************************************************************
- Popis:
  Zpřístupnění dat biografie pro UI a úpravy i18n.

<!-- source_hash: 5f218fc5 -->