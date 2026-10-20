# Apê na Mão · LP Kauê Horácio

Landing page de captação para o primeiro imóvel na Zona Oeste de SP (lançamentos Cury com
Minha Casa Minha Vida), com atendimento do gerente de vendas Kauê Horácio e equipe.

**Oferta da página:** simulação gratuita. Todo botão leva ao **formulário único**
(`#simulacao`), que grava o lead numa planilha do Google via Apps Script.

## ⚠️ Não rodar tráfego antes de resolver

- **Autorização de uso de imagem** das pessoas nas fotos e vídeos de prova social.
- **Valores da simulação por renda.** Hoje os cards estão trancados (valores borrados +
  "Confira na sua simulação") de propósito: não temos números reais. Quando o Kauê mandar,
  preencha em `src/lib/site.ts` (`simulacao`).
- **Planilha configurada na Netlify** (`LEAD_WEBHOOK_URL` e `LEAD_WEBHOOK_TOKEN`). Sem ela,
  em produção o formulário mostra erro, de propósito, para não perder lead calado.

Demais pendências (nome oficial do lançamento da Playball, logo Cury, foto profissional,
imagens oficiais) estão em `PENDENCIAS`, no fim de `src/lib/site.ts`.

## Stack

| Camada | Escolha |
| --- | --- |
| Framework | Astro 7, saída estática |
| Estilo | Tailwind CSS v4 (tokens em `@theme`, em `src/styles/global.css`) |
| Fontes | Montserrat + Inter, auto-hospedadas via Fontsource |
| Ícones | SVG inline (`src/components/ui/Icone.astro`) |
| Formulário | Função Netlify `netlify/functions/lead.ts` → Google Apps Script |
| Hospedagem | Netlify (plano gratuito) |

## Rodar local

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # gera dist/
npx astro check    # tipos
```

Para testar a função de lead localmente use `netlify dev` (Netlify CLI).

## Onde mudar as coisas

**Todo texto, número, foto e empreendimento está em `src/lib/site.ts`.** Os componentes só
leem de lá. Para trocar uma palavra, não precisa abrir nenhum `.astro`.

## Deploy na Netlify

1. New site → Import from Git → este repositório. Build `npm run build`, publish `dist`
   (já configurado no `netlify.toml`).
2. Configure a planilha seguindo o passo a passo no topo de `scripts/planilha-apps-script.gs`.
3. Em **Site configuration → Environment variables**, cadastre as variáveis de
   `.env.example` (as de rastreamento são opcionais: cada script só entra se o ID existir).
4. Trigger deploy.

## Rastreamento

`src/lib/track.ts` dispara para Meta Pixel, GA4 e `dataLayer` ao mesmo tempo:

| Evento | Quando |
| --- | --- |
| `Lead` | formulário enviado com sucesso (com `origem`, `renda`, `regiao`) |
| `IntencaoFormulario` | clique em qualquer CTA (com `origem`: hero, card-renda, sobre…) |
| `CliqueInstagram` | clique no botão do Instagram |
| `Rolagem` | marcos de 25/50/75/100% da página |

A planilha também recebe a `origem` do último CTA clicado e as UTMs da URL.

## Decisões

- **Sem WhatsApp por enquanto**, por decisão do cliente. Se pedirem, o lugar é a tela de
  sucesso do formulário (`src/components/Formulario.astro`), abrindo `wa.me` com os dados.
- **Sem endereço** de empreendimento ou plantão na página: só bairro e ponto de referência.
- **Instagram** é a única saída da página além do formulário, a pedido do cliente.
- Imagens dos empreendimentos são de banco e estão **marcadas como ilustrativas**.
