****************************************************************************************************
30/01/2026 02:09 - Multi-GPU, Correção de Manuais & Estabilidade - Beta_v050
****************************************************************************************************
- Novidades:
  **Potência Multi-GPU e Correções Críticas!**
  
  * **🚀 Suporte Multi-GPU:** Implementada a capacidade de dividir grandes modelos de IA entre múltiplas placas de vídeo. *Agora você pode usar todo o seu arsenal de hardware; Poder Ilimitado!*
  * **🛡️ Estabilidade:** Adicionadas todas as bibliotecas DLL ausentes para evitar fechamentos inesperados. *Blindei o motor, se falhar agora será culpa de uma falha crítica nos dados.*
  * **📖 Manuais Web Dinâmicos:**
    * **Seletor Real:** O menu de idiomas agora verifica quais arquivos realmente existem antes de mostrá-los. *Acabaram-se as opções fantasma que não faziam nada; magia de adivinhação nível 5.*
    * **Correção Erro 403:** Solucionado o erro de permissões que impedia a visualização do Changelog dentro do jogo. *Ensinei o app a pedir passagem corretamente ("Abre-te Sésamo!").*
  * **🌍 Idiomas:** Revisão de textos e traduções. *Modo Poliglota ativado.*

****************************************************************************************************
28/01/2026 22:49 - Estabilização e Melhorias de IA - Beta_v049
****************************************************************************************************
- Novidades:
  Polimos a experiência de jogo com correções importantes e uma nova ferramenta visual:

  * **Inventário Limpo e Confiável:** Acabou-se encontrar "objetos fantasma" ou itens com nomes estranhos na sua mochila. Implementamos um sistema de validação narrativa que garante que tudo o que você colete ou compre realmente exista no mundo do jogo.
  * **Diálogos Fluidos:** Reparamos esses botões irritantes que às vezes apareciam como "Unknown" ou não respondiam. Agora as opções de diálogo com os NPCs sempre mostrarão o texto correto.
  * **Geração de Personagens Robusta:** Criar seu herói é agora um processo sólido. Solucionamos os conflitos que às vezes deixavam a ficha incompleta ou com estatísticas erradas ao combinar biografia e stats.
  * **Nova Barra de Status de IA:** Agora você pode ver o cérebro da máquina funcionando! Adicionamos uma barra na parte superior que mostra a velocidade de resposta e o uso de memória em tempo real. Assim você sempre saberá se a IA está "pensando" na sua próxima aventura.

****************************************************************************************************
28/01/2026 03:50 - Correção Crítica de Compilação - Beta_v048
****************************************************************************************************
- Novidades:
  Solucionado um erro crítico que impedia iniciar o jogo em instalações novas. Melhorada a estabilidade e a compatibilidade com diferentes equipamentos.

****************************************************************************************************
26/01/2026 19:38 - Launcher Web e Suporte RTX 50 - Beta_v047
****************************************************************************************************
- Novidades:

  > [!IMPORTANTE]
  > **POR MOTIVOS DE COMPATIBILIDADE, É NECESSÁRIO ELIMINAR O DB PRÉVIO, CASO CONTRÁRIO É MUITO PROVÁVEL QUE OCORRAM ERROS NA CONFIGURAÇÃO DA IA**
  > **(Solução: Clique no ícone de engrenagem ⚙️ do Launcher -> Apagar Banco de Dados)**

  *Suporte Crítico para RTX Série 50: Solucionado um erro grave que provocava o fechamento inesperado ao tentar gerar personagens nas novas placas de vídeo NVIDIA (RTX 5070, 5080, 5090).
  (Como não disponho de uma RTX da série 5000, não pude testar diretamente se a solução é 100%, mas a teoria é que deve estar solucionado. Espero seus cânticos de vitória aqui!)
  
  *Atualização do Motor de IA: Atualizamos o cérebro local do jogo para que seja compatível com a mais recente tecnologia de hardware, garantindo que todos possam aproveitar a experiência offline, não importa o quão moderno seja seu equipamento.
  
  *Novo Launcher: Atualizações e notícias em tempo real no site oficial.


****************************************************************************************************
26/01/2026 06:49 - Integração Web Documentação - Beta_v045
****************************************************************************************************
- Novidades:
  *Agora o Manual do Usuário e o Registro de Alterações carregam diretamente do nosso site oficial, garantindo que você tenha sempre as informações mais atualizadas sem a necessidade de baixar patches. Inclui modo offline inteligente.

  *Reforçamos a estabilidade do jogo para que nunca trave ao iniciar. Além disso, os vendedores voltaram de suas férias no limbo: agora aparecem corretamente, têm mercadorias nas prateleiras e respeitam a ambientação do mundo (nada de poções mágicas no futuro).

  *Foi corrigido o bug que não permitia modificar os parâmetros de IA e a seleção do modelo de IA, fazendo com que alguns usuários com VRAM limitada não pudessem jogar.
  **Em caso de necessidade de modificar os parâmetros de IA, recomendo fortemente tentar primeiro baixar a % de VRAM para 85%, reiniciar e testar; se isso ainda não for suficiente, recomendo verificar se a VRAM da GPU não está sendo usada por outros processos que não sejam do próprio jogo (reinicie o PC se necessário, feche aplicativos que possam ocupar VRAM). Se depois de baixar a quantidade de VRAM até mesmo para 70%, continuar sem funcionar, não recomendo baixar mais porque o jogo não conseguirá gerenciar os prompts enviados para a IA, portanto, embora se consiga evitar o estouro de VRAM, o jogo não poderá funcionar porque não tem com o que fazê-lo; nesse caso, a única opção restante é mudar para um modelo inferior, voltar a colocar os parâmetros de IA em automático e reiniciar.

****************************************************************************************************
26/01/2026 04:00 - Estabilização do Core e Diagnóstico de Serviços - Beta_v044
****************************************************************************************************
- Novidades:
  Estabilização do Core e Diagnóstico de Serviços. Correções críticas na geração de personagens, UI (MainWindow) e otimização de busca semântica. Início de diagnóstico profundo do modo serviços.

****************************************************************************************************
25/01/2026 19:28 - Hotfix: Logs e Estabilidade - Beta_v043
****************************************************************************************************
- Descrição:
  Patch corretivo focado em diagnóstico e correção de loop de UI.

- Mudanças:
  Corrigido bug visual do diálogo de reinicialização
  Novo sistema de logs em %LOCALAPPDATA% para diagnóstico
  Otimizações de desempenho interno

****************************************************************************************************
24/01/2026 06:30 - Suporte Biografia Backend - Beta_v042
****************************************************************************************************
- Descrição:
  Exposição de dados de biografia para UI e ajustes de i18n.

<!-- source_hash: 5f218fc5 -->