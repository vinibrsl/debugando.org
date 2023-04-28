+++
slug = "medo-de-merge"
title = "Medo de merge"
date = "2023-04-28"
description = "Um foguete falhou após seu lançamento por conta de uma conversão de float para inteiro. Um erro de programação. E você, já quebrou produção? Existe uma forma de lidar com isso de forma saudável, sem medo de merges."
+++

Você acaba de terminar uma feature que estava trabalhando há semanas. Você abre um pull request, escreve uma detalhada descrição e está pronto para o code review. Após uma boa sessão de reviews, hora de *mergear* - ou _mesclar_ se você for um erudito. 10 minutos após o merge um colega que estava de plantão recebe uma ligação do PagerDuty dizendo que os *status checks* já não mais funcionam. **Você quebrou produção.**

![Botão de merge do GitHub](/images/github-merge.png)

O incidente faz um péssimo par com a síndrome do impostor, te convencendo da sua incompetência como programador, achando que não é tão bom quanto outros desenvolvedores que parecem infalíveis. Isso começa um ciclo sem fim - calma, tem fim! - com todos os seus próximos pull requests.

Essa história não é simplesmente um conto de um infeliz programador, mas uma história pessoal de algo que enfrento na minha carreira. Para quebrar esse ciclo, é preciso entender duas coisas: (1) que todos erram, do iniciante ao especialista e (2) que existe uma forma de lidar com os inevitáveis erros. Geralmente paramos no primeiro ponto, mas entendê-lo sem o segundo não é sustentável.

## Foguetes e OpenSSL

Sim, todos erram. [O foguete Ariane 5 falhou 40 segundos após seu lançamento em 1996](https://www.rvs.uni-bielefeld.de/publications/Incidents/DOCS/Research/Rvs/Misc/Additional/Reports/ariane.html) por conta de um erro de programação ao tentar converter um float em um inteiro. Uma exceção do tipo `Operand Error` foi lançada e não tratada, forçando o foguete em modo de autodestruição. Será que os programadores contratados pela agência espacial europeia não eram competentes?

![Falha do foguete Ariane 5 em 1996](/images/ariane-5.jpg)

Um bug na biblioteca OpenSSL permitiu que hackers acessassem a memória de servidores web, deixando uma porta aberta para roubar informações de cartões, senhas, certificados digitais, mensagens, e-mails, documentos confidenciais. O bug ficou conhecido como [Heartbleed](https://heartbleed.com) e ficou dois anos em aberto até a correção em 2014. É certo dizer que esse bug afetou uma boa parte de toda a internet, e será que os desenvolvedores do OpenSSL são ruins?

É claro que não! São todos ótimos desenvolvedores, mas nós erramos, do estagiário ao CTO. Porém, existem diferenças fundamentais em como os mais experientes lidam com os incidentes, e essas são elas:

- Desenvolvedores experientes não tentam encontrar um culpado, mas focam em resolver o problema
- Sabem diferenciar um problema crítico de um problema não crítico
- Não tem medo de pedir ajuda a outros desenvolvedores
- Sabem a hora certa de pedir ajuda a outros desenvolvedores
- Avisam a equipe assim que percebem um problema em produção, mesmo que eles mesmos tenham causado o incidente
- São proativos em documentar incidentes em forma escrita e pesquisável para referência futura - isso inclui detalhes técnicos e possíveis implicações comerciais do incidente

A regra número um é: seja proativo em resolver o problema. Isso envolve uma abordagem sistemática para investigar a causa raiz do incidente e implementar correções ou soluções temporárias para restaurar o estado normal do sistema.

## Construa um cercado

Deixada a culpa e a síndrome do impostor de lado e com o incidente resolvido, agora é hora de erguer as proteções. Essas defesas não se limitam apenas a parte técnica, pois a cultura do time de engenharia influencia como a equipe lida com incidentes. São práticas de times saudáveis:

- Testes automatizados e manuais
- Ferramentas de CI e CD integradas a cada submissão de código
- Ferramentas de monitoramento de erros com notificações em tempo real
- Cultura saudável de revisão de código
- Ferramentas de comunicação eficazes
- Esperar que pessoas cometam erros e saber como lidar com eles de forma sustentável

Uma cultura forte que prioriza testes automatizados, deploys mais frequentes em vez de grandes batches de código a cada release e compartilha a responsabilidade do pull request com o time pode melhorar significativamente a resolução de incidentes e diminuir a pressão sobre os desenvolvedores. Essas práticas ajudam a garantir uma boa cobertura de testes, permitindo a detecção precoce de problemas e a correção rápida de erros em produção.

Organizações e equipes devem estar preparadas para incidentes acontecerem. Isso cria uma cultura forte e saudável do ambiente de engenharia. Isso não significa que os incidentes devam acontecer com frequência, mas se estão acontecendo, é uma oportunidade para a organização aprender como se preparar melhor quando ocorrerem.