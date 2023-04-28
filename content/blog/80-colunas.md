+++
slug = "80-colunas"
title = "A regra das 80 colunas, a nota de dólar e cartões perfurados"
date = "2023-04-28"
description = "Este artigo aborda a origem da regra das 80 colunas no código, que surgiu na época dos cartões perfurados da IBM. Apesar de parecer antiquada, essa regra ainda é aplicada para melhorar a legibilidade do código."
+++

Os textos sagrados de engenharia de software afirmam que o código não deve ultrapassar as 80 colunas. Essa regra ainda é aplicada em muitos lugares, incluindo mensagens de commit no Git e linters de código modernos. Essa convenção é muito antiga, e hoje pode parecer estranho quebrar a linha de código em 80 caracteres quando temos monitores widescreen e displays de alta densidade de pixels.

Antes das fitas cassete e dos disquetes, os dados eram armazenados em cartões perfurados ou *punched cards*. Programadores não tinham monitores nem teclados, e todo o código e entrada de dados eram feitos nesses cartões perfurados. Infelizmente, eu não estava vivo para ter experimentado esses dias dourados da programação.

Em 1928, [a IBM redesenhou e patenteou](https://www.ibm.com/ibm/history/history/year_1928.html) seu próprio cartão perfurado permitindo 80 colunas por cartão, dobrando o limite anterior. Por razões logísticas e de armazenamento físico, os cartões perfurados tinham o mesmo tamanho que a cédula de dólar americano de 1887, 3,25 por 7,375 polegadas.

![Cartão perfurado](/images/cartao-perfurado.jpg)

Avançando um pouco no tempo, terminais de vídeo (CRTs) na década de 70 substituíram terminais baseados em papel, como o Teletype e o DECwriter. Esses terminais tinham uma restrição de impressão que podem explicar a adoção do padrão de 80 colunas - sim, imprimir código em papel era comum. Terminais CRT, como o VT52 e VT100 da DEC, seguiram o padrão de 80 colunas da IBM.

![Terminal CRT modelo VT52](/images/terminal-crt.jpg)

É essa mesma regra das 80 colunas que seu editor de código moderno aplica - uma regra adotada desde os cartões perfurados, por causa do tamanho das cédulas de dólar da época. No entanto, agora evoluímos para um estado em que os computadores não precisam mais de uma sala inteira para caber, e armazenamos código na nuvem - onde quer que seja a "nuvem". Por que raios ainda quebramos o código em 80 colunas?

Tradições tendem a seguir sem questionamentos, mas isso não significa que sejam ruins. Existem razões para quebrar o código em um limite específico de colunas, por exemplo:

- Linhas longas de código são difíceis de ler
- Ao reduzir o tamanho da linha pode-se ter vários editores lado a lado na tela
- Nem todo mundo usa telas horizontais
- Os displays cresceram ao longo do tempo, mas nossos olhos não

O limite de 80 colunas pode parecer demais para alguns, mas devemos concordar que ter _algum_ limite é bom. O guia de estilo de codificação do kernel do Linux recentemente atualizou para 100 colunas [neste commit](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=bdc48fa11e46f867ea4d75fa59ee87a7f48be144).

## Bônus: Vim e o limite de 80 caracteres

![](/images/vim-colorcolumn.png)

Eu acho útil ter uma indicação clara de onde está o limite no meu editor. Com essa simples configuração no Vim, você pode ter uma régua visual para as colunas que deseja. O Vim também pode automaticamente quebrar o texto na coluna 80. Com um bloco visual selecionado, basta digitar `gq`.

```vimscript
" Adiciona uma indicação clara de onde as colunas 80 e 100 estão
set colorcolumn=80,100

" Informa o vim em quantas colunas o texto deve ser quebrado
set textwidth=80
```