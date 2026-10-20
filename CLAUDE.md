# CLAUDE.md

LP de captação do Kauê Horácio (gerente de vendas, Cury) para o primeiro imóvel na Zona
Oeste de SP. Público Minha Casa Minha Vida, 90%+ mobile. Leia o README antes de mexer.

## Regras do projeto

- **Formulário único.** Todo CTA aponta para `#simulacao` (componente `ui/Cta.astro` com
  `origem` distinta). Nenhum botão abre WhatsApp. A única saída extra é o Instagram.
- **`src/lib/site.ts` é a fonte única de verdade.** Texto, número e foto moram lá.
- **Número inventado não sobe.** Valores de financiamento só entram quando o Kauê mandar.
  Até lá, os cards de renda ficam trancados (`simulacao.trancado`).
- **Nada de promessa de aprovação** nem subsídio afirmado como certo ("pode ter", "consulte").
- **CRECI visível** no rodapé e no bloco do Kauê (Lei 6.530/78).
- **Sem endereço** de empreendimento ou plantão. Só bairro e referência.
- **Imagens MCMV:** apartamento compacto, condomínio popular, famílias reais. Nunca alto padrão.
- **Só lançamentos atuais da Cury** que o Kauê trabalha. Confira o status antes de adicionar.
- **Nada de dependência nova** sem justificar (peso no 4G ruim do público).
- Nomes de componentes, variáveis e comentários em português.

## Detalhes que já custaram bug

- Erro de formulário some no evento `input`, nunca no `blur`/`change`: sumir no blur desloca o
  layout no meio do clique seguinte e o toque cai fora do alvo.
- `sr-only` (position absolute) dentro de carrossel precisa de ancestral `relative`, senão
  alarga a página no mobile.
- Carrossel com snap precisa de `scroll-padding-inline`, senão o primeiro card cola na borda.
- `hidden` + `md:inline-flex` no mesmo elemento de um componente que já tem `inline-flex`
  conflita: envolva num wrapper.

## Verificação antes de entregar

`npm run build` e `npx astro check` limpos; screenshots em 390px e 1440px (rolar a página
antes, por causa do lazy-load); `document.documentElement.scrollWidth` igual ao viewport;
formulário ponta a ponta com `/api/lead` mockado.
