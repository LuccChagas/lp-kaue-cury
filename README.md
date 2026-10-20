# 🏠 Apê na Mão · LP Kauê Horácio

> Landing page de captação para quem quer comprar o **primeiro apartamento na Zona Oeste de SP**,
> com lançamentos Cury e Minha Casa Minha Vida. Atendimento do gerente de vendas
> **Kauê Horácio** ([@gerentehoracio](https://www.instagram.com/gerentehoracio/)) e equipe.

**🔗 Ambiente de testes:** **https://lp-horacio-cury.netlify.app/**

| | |
| --- | --- |
| **Oferta** | Simulação gratuita de financiamento |
| **Conversão** | Formulário único (`#simulacao`) → planilha Google |
| **Público** | Primeiro imóvel, faixa MCMV, 90%+ no celular |
| **Status** | Em validação com o cliente |

---

## 📋 Status

### Antes de rodar tráfego

- [ ] **Planilha do formulário.** Cadastrar `LEAD_WEBHOOK_URL` e `LEAD_WEBHOOK_TOKEN` na Netlify
  (passo a passo em [`scripts/planilha-apps-script.gs`](scripts/planilha-apps-script.gs)).
  Sem ela, em produção o envio mostra erro **de propósito**, para não perder lead calado.
- [ ] **Meta Pixel.** Cadastrar `PUBLIC_META_PIXEL_ID` (GA4 e GTM opcionais) e fazer novo deploy.
- [ ] **Domínio e hospedagem** definidos com o cliente (ver [Domínio](#-domínio)).
- [ ] **Autorização de uso de imagem** das pessoas nas fotos e vídeos de prova social.
- [ ] **Valores da simulação por renda.** Hoje os cards estão trancados (valores borrados +
  "Confira na sua simulação") porque não temos números reais. Quando o Kauê mandar, preencha
  `simulacao` em `src/lib/site.ts`.

Pendências menores ficam em `PENDENCIAS`, no fim de [`src/lib/site.ts`](src/lib/site.ts).

---

## 🧭 Estrutura da página

1. **Hero:** promessa + CTA, fachada do Bosque da Barra, selo de entrada a partir de R$ 800
2. **Simulação por renda:** 5 faixas, valores trancados, cada card pré-preenche o formulário
3. **Objeções:** entrada, FGTS, autônomo/MEI, composição de renda
4. **Lançamentos Cury na Zona Oeste:** Parque das Perdizes, Bosque da Barra,
   Cidade Lapa – Perdizes e Nova Leopoldina, com imagens e dados oficiais
5. **Como funciona:** 4 passos
6. **Prova social:** números do time, vídeos de comemoração e fotos reais de clientes
7. **Quem é o Kauê:** foto, CRECI, métricas e Instagram
8. **Formulário:** nome, WhatsApp, faixa de renda, região, LGPD
9. **Rodapé:** CRECI, avisos legais e registro de incorporação de cada empreendimento

---

## 🛠️ Stack

| Camada | Escolha |
| --- | --- |
| Framework | [Astro 7](https://astro.build), saída estática |
| Estilo | Tailwind CSS v4 (tokens em `@theme`, em `src/styles/global.css`) |
| Fontes | Montserrat + Inter, auto-hospedadas via Fontsource |
| Ícones | SVG inline (`src/components/ui/Icone.astro`), sem biblioteca |
| Formulário | Função Netlify [`netlify/functions/lead.ts`](netlify/functions/lead.ts) → Google Apps Script |
| Hospedagem | Netlify (plano gratuito) |

## 🚀 Rodar local

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # gera dist/
npx astro check    # checagem de tipos
```

No `npm run dev` a função de lead não roda, então o envio do formulário mostra erro.
Para testar o fluxo completo, use `netlify dev` (Netlify CLI).

## ✏️ Onde mudar as coisas

**Todo texto, número, foto e empreendimento está em [`src/lib/site.ts`](src/lib/site.ts).**
Os componentes só leem de lá: para trocar uma palavra, não precisa abrir nenhum `.astro`.

```
src/
  lib/site.ts          ⭐ fonte única de verdade
  lib/track.ts         eventos de conversão
  components/          uma seção por arquivo (Hero, Simulacao, Oportunidades…)
  components/ui/       Cta, Logo, Icone, Check…
  pages/               index + política de privacidade
netlify/functions/     lead.ts (formulário → planilha)
scripts/               Apps Script da planilha
public/img, videos/    assets otimizados (WebP / MP4)
_origem/               material bruto (fora do Git)
```

---

## ☁️ Deploy na Netlify

1. **Import from Git** → este repositório. Build e publish já estão no `netlify.toml`.
2. Configure a planilha seguindo o topo de [`scripts/planilha-apps-script.gs`](scripts/planilha-apps-script.gs).
3. Em **Site configuration → Environment variables**, cadastre as variáveis do
   [`.env.example`](.env.example).
4. **Trigger deploy.**

| Variável | Obrigatória | Para quê |
| --- | --- | --- |
| `LEAD_WEBHOOK_URL` | ✅ | URL `/exec` do Apps Script |
| `LEAD_WEBHOOK_TOKEN` | ✅ | Senha combinada com o Apps Script |
| `PUBLIC_META_PIXEL_ID` | Recomendada | Meta Pixel (anúncios) |
| `PUBLIC_GA4_ID` / `PUBLIC_GTM_ID` | Opcional | Google Analytics / Tag Manager |
| `PUBLIC_SITE_URL` | Opcional | URL pública; a Netlify já injeta sozinha |

> Nos **deploy previews** da Netlify, sem planilha o formulário mostra a tela de sucesso
> (dá para testar a interface). Em **produção** mostra erro até a planilha ser configurada.

## 🌐 Domínio

O caminho mais simples e gratuito: o cliente compra só o domínio (Registro.br, por exemplo) e
aponta para a Netlify em **Domain management → Add a domain**. O HTTPS é automático.

Se ele quiser hospedar **fora da Netlify** (hospedagem compartilhada comum), a função de lead
não roda lá. Nesse caso o envio passa a ir direto para o Apps Script, a partir do navegador.

---

## 📊 Rastreamento

[`src/lib/track.ts`](src/lib/track.ts) dispara para Meta Pixel, GA4 e `dataLayer` ao mesmo tempo:

| Evento | Quando |
| --- | --- |
| `Lead` | formulário enviado com sucesso (com `origem`, `renda`, `regiao`) |
| `IntencaoFormulario` | clique em qualquer CTA (com `origem`: hero, card-renda, sobre…) |
| `CliqueInstagram` | clique no botão do Instagram |
| `Rolagem` | marcos de 25/50/75/100% da página |

A planilha recebe também a `origem` do último CTA clicado e as UTMs da URL do anúncio.

## 🧠 Decisões

- **Sem WhatsApp por enquanto**, por decisão do cliente. Se pedirem, entra na tela de sucesso
  do formulário (`src/components/Formulario.astro`), abrindo `wa.me` com os dados.
- **Sem preços** nos empreendimentos: mudam toda semana e saem na simulação.
- **Sem endereço** de empreendimento ou plantão: só bairro e ponto de referência.
- **Instagram** é a única saída da página além do formulário, a pedido do cliente.
- Imagens dos empreendimentos são **perspectivas oficiais da Cury**, marcadas como ilustrativas.
- Página **não oficial** da Cury: o aviso está no rodapé.
