/**
 * FONTE UNICA DE VERDADE
 * ----------------------------------------------------------------------------
 * Todo texto, numero, foto e empreendimento da pagina mora aqui.
 * Para trocar qualquer palavra voce NAO precisa abrir nenhum componente.
 *
 * O que ainda e provisorio esta em `PENDENCIAS`, no fim do arquivo.
 */

export type Foto = { src: string; largura: number; altura: number; alt: string };

/* -------------------------------------------------------------------------- */
/* Quem atende                                                                 */
/* -------------------------------------------------------------------------- */

export const marca = {
  nome: "Apê na Mão",
  assinatura: "com Kauê Horácio e equipe",
} as const;

export const pessoa = {
  nome: "Kauê Horácio",
  primeiroNome: "Kauê",
  cargo: "Gerente de Vendas",
  empresa: "Cury",
  logo: "/img/cury-logo.png",
  logoBranco: "/img/cury-logo-branco.png",
  /** Obrigatorio em publicidade imobiliaria (Lei 6.530/78). */
  creci: "CRECI 269601",
  instagram: "gerentehoracio",
  instagramUrl: "https://www.instagram.com/gerentehoracio/",
} as const;

/* -------------------------------------------------------------------------- */
/* Faixas de renda e regioes (usadas no formulario e nos cards)               */
/* -------------------------------------------------------------------------- */

export const faixasRenda = [
  "Até R$ 3.500",
  "R$ 3.500 a R$ 4.500",
  "R$ 4.500 a R$ 6.000",
  "R$ 6.000 a R$ 9.000",
  "Acima de R$ 9.000",
] as const;

export const regioes = [
  "Lapa",
  "Perdizes",
  "Barra Funda",
  "Vila Leopoldina",
  "Ainda não decidi",
] as const;

/* -------------------------------------------------------------------------- */
/* Hero                                                                        */
/* -------------------------------------------------------------------------- */

export const hero = {
  sobretitulo: "Primeiro apê na Zona Oeste de SP",
  tituloAntes: "Seu primeiro apartamento na Zona Oeste pode estar",
  tituloDestaque: "mais perto",
  tituloDepois: "do que você imagina.",
  subtitulo:
    "Descubra gratuitamente quanto você pode financiar de acordo com sua renda e conheça as condições disponíveis para comprar seu primeiro imóvel.",
  checks: ["Minha Casa Minha Vida", "Use seu FGTS", "Entrada facilitada", "Simulação gratuita"],
  cta: "Fazer minha simulação",
  micro: "Gratuito · Sem compromisso · Leva menos de 1 minuto",
  selo: { rotulo: "Entrada a partir de", valor: "R$ 800", asterisco: "*" },
  prova: {
    linha1: `Atendimento com ${pessoa.nome} e equipe`,
    linha2: "+600 imóveis vendidos · Campeão de vendas da Zona Oeste",
  },
  imagem: {
    src: "/img/hero-bosque-da-barra.webp",
    largura: 1440,
    altura: 900,
    alt: "Perspectiva ilustrativa da fachada do Bosque da Barra, lançamento Cury na Barra Funda",
  } satisfies Foto,
  legenda: "Bosque da Barra · Barra Funda",
} as const;

/* -------------------------------------------------------------------------- */
/* Simulacao por renda — VALORES TRANCADOS de proposito                         */
/* -------------------------------------------------------------------------- */

/**
 * Os valores de financiamento/entrada/parcela NAO foram fornecidos pelo
 * cliente. Por isso os cards mostram o valor borrado e levam ao formulario.
 * Numero inventado em anuncio de financiamento e propaganda enganosa.
 * Quando o Kaue mandar os valores reais, preencha `valores` e troque
 * `trancado` para false.
 */
export const simulacao = {
  sobretitulo: "Simulação por renda",
  titulo: "Quanto você pode financiar?",
  descricao:
    "Escolha sua faixa de renda e descubra, na simulação gratuita, quanto você pode financiar.",
  trancado: true,
  faixas: [
    { renda: "R$ 3.500", faixaFormulario: faixasRenda[0], subsidio: true, destaque: false },
    { renda: "R$ 4.500", faixaFormulario: faixasRenda[1], subsidio: true, destaque: true },
    { renda: "R$ 5.500", faixaFormulario: faixasRenda[2], subsidio: false, destaque: false },
    { renda: "R$ 7.000", faixaFormulario: faixasRenda[3], subsidio: false, destaque: false },
    { renda: "R$ 9.000+", faixaFormulario: faixasRenda[4], subsidio: false, destaque: false },
  ],
  rotuloDestaque: "Mais buscada",
  rotuloSubsidio: "Pode ter subsídio MCMV",
  ctaCard: "Confira na sua simulação",
  cta: "Descobrir minha condição",
  aviso:
    "*Exemplo de simulação. Valores podem variar de acordo com idade, renda, FGTS, análise de crédito e condições do empreendimento.",
} as const;

/* -------------------------------------------------------------------------- */
/* Objecoes                                                                    */
/* -------------------------------------------------------------------------- */

export const objecoes = {
  sobretitulo: "Sem complicação",
  titulo: "Você pode estar mais perto do seu primeiro imóvel do que imagina.",
  nota: "Atendemos a partir de R$ 3.200 de renda familiar.",
  itens: [
    {
      icone: "carteira",
      titulo: "“Não tenho uma entrada alta”",
      texto: "Entrada a partir de R$ 800, com possibilidade de parcelamento.",
    },
    {
      icone: "cofre",
      titulo: "“Tenho FGTS”",
      texto: "Seu saldo pode ser usado dentro das condições aplicáveis.",
    },
    {
      icone: "maleta",
      titulo: "“Sou autônomo ou MEI”",
      texto: "Existem formas de comprovação de renda que podem ser analisadas.",
    },
    {
      icone: "pessoas",
      titulo: "“Só a minha renda não é suficiente”",
      texto: "Você pode compor renda com cônjuge, pais, filhos ou familiares.",
    },
  ],
} as const;

/* -------------------------------------------------------------------------- */
/* Oportunidades — lancamentos Cury com MCMV na Zona Oeste                      */
/* -------------------------------------------------------------------------- */

/**
 * Fonte: cury.net (paginas oficiais, conferidas em 20/10/2026) + metragens do
 * portal apto.vc. Todos sao lancamentos com unidades HIS (Minha Casa Minha
 * Vida). Imagens sao as perspectivas oficiais da Cury (ilustrativas).
 * Preco NAO aparece de proposito: muda toda semana e sai na simulacao.
 * Nunca coloque endereco: so bairro e ponto de referencia.
 * `registro` e o texto legal de incorporacao (Lei 4.591/64): obrigatorio em
 * qualquer publicidade do empreendimento. Vai para o rodape.
 */
export const oportunidades = {
  sobretitulo: "Zona Oeste de SP",
  titulo: "Lançamentos Cury disponíveis na Zona Oeste",
  descricao: "Opções para diferentes perfis. A simulação mostra quais combinam com você.",
  rotuloPreco: "Valores e condições",
  valorPreco: "Na sua simulação",
  cta: "Simular para este empreendimento",
  avisoImagem: "Imagem ilustrativa",
  itens: [
    {
      nome: "Parque das Perdizes",
      bairro: "Barra Funda",
      regiaoFormulario: "Barra Funda",
      referencia: "Perto do Parque da Água Branca, da estação Palmeiras-Barra Funda e do Nubank Parque",
      tag: "Lançamento",
      specs: ["1 e 2 dorms", "25 a 52 m²", "Opção de suíte e vaga"],
      lazer: "Piscinas, beach tennis, mini quadra e playground",
      imagem: { src: "/img/empreendimentos/parque-das-perdizes.webp", largura: 565, altura: 475, alt: "Perspectiva ilustrativa das torres do Parque das Perdizes" },
      registro:
        "CCISA187 INCORPORADORA LTDA. (PARQUE DAS PERDIZES). Incorporação registrada em 23/09/2026, R.18 da matrícula 29.041 do 15º Oficial de Registro de Imóveis da Comarca de São Paulo/SP. Com 676 unidades HIS-2 para famílias de 3 a 6 salários mínimos e 140 unidades R2V sem limite de renda.",
    },
    {
      nome: "Bosque da Barra",
      bairro: "Barra Funda",
      regiaoFormulario: "Barra Funda",
      referencia: "Perto do Sesc Bom Retiro, da estação Júlio Prestes e do Memorial da América Latina",
      tag: "Lançamento",
      specs: ["2 dorms", "32 a 46 m²", "Opção de suíte e vaga"],
      lazer: "Piscinas, rooftop, espaço yoga e playground",
      imagem: { src: "/img/empreendimentos/bosque-da-barra.webp", largura: 800, altura: 500, alt: "Perspectiva ilustrativa do rooftop do Bosque da Barra" },
      registro:
        "CCISA 185 INCORPORADORA LTDA. (BOSQUE DA BARRA). Incorporação registrada em 25/05/2026, R.3 da matrícula 332.813 do 15º Oficial de Registro de Imóveis da Comarca de São Paulo/SP. Com 273 unidades HIS-1 para famílias de até 3 salários mínimos, 174 unidades HIS-2 para famílias de 3 a 6 salários mínimos, 100 unidades HMP para famílias de 6 a 10 salários mínimos e 77 unidades R2V sem limite de renda.",
    },
    {
      nome: "Cidade Lapa – Perdizes",
      bairro: "Lapa",
      regiaoFormulario: "Lapa",
      referencia: "Perto do Mercado Municipal da Lapa, da estação Lapa e do Centro de Tradições Nordestinas",
      tag: "Lançamento",
      specs: ["2 dorms", "34 a 46 m²", "Opção de suíte e vaga"],
      lazer: "Piscinas, rooftop, espaço zen e solário",
      imagem: { src: "/img/empreendimentos/cidade-lapa-perdizes.webp", largura: 800, altura: 500, alt: "Perspectiva ilustrativa das torres do Cidade Lapa – Perdizes" },
      registro:
        "CCISA29 INCORPORADORA LTDA. (CIDADE LAPA - PERDIZES). Incorporação registrada em 19/05/2026, R.6 da matrícula 174.806 do 10º Oficial de Registro de Imóveis da Comarca de São Paulo/SP. Com 504 unidades HIS-2 para famílias de 3 a 6 salários mínimos e 149 unidades R2V sem limite de renda.",
    },
    {
      nome: "Nova Leopoldina",
      bairro: "Vila Leopoldina",
      regiaoFormulario: "Vila Leopoldina",
      referencia: "Perto do Ceagesp, do Sesc Leopoldina e da estação Ceasa",
      tag: "Lançamento",
      specs: ["2 dorms com terraço", "37 a 39 m²"],
      lazer: "Piscinas, sport bar, playground e pet place",
      imagem: { src: "/img/empreendimentos/nova-leopoldina.webp", largura: 800, altura: 500, alt: "Perspectiva ilustrativa da piscina e das torres do Nova Leopoldina – Condomínio Art" },
      registro:
        "CCISA205 INCORPORADORA LTDA. (NOVA LEOPOLDINA COND. ART). Incorporação registrada em 08/05/2026, R.2 da matrícula 188.611 do 10º Oficial de Registro de Imóveis da Comarca de São Paulo/SP. Com 527 unidades HIS-2 para famílias de 3 a 6 salários mínimos e 126 unidades R2V sem limite de renda.",
    },
  ],
  /** Fecho comum dos textos de registro, publicado pela Cury. */
  registroComum:
    "Compradores com renda mensal acima dos limites mencionados podem adquirir as unidades para investimento nos termos do Decreto Municipal 63.130/2024. Para mais informações, consulte a Central de Vendas da Cury (CNPJ 14.055.045/0001-78: CCISA 08 Consultoria Imobiliária Ltda. – CRECI 23.670-J).",
} as const;

/* -------------------------------------------------------------------------- */
/* Como funciona                                                               */
/* -------------------------------------------------------------------------- */

export const comoFunciona = {
  sobretitulo: "Como funciona",
  titulo: "Simples assim",
  passos: [
    { titulo: "Faça sua simulação", texto: "Informe sua renda e algumas informações básicas." },
    { titulo: "Analisamos seu perfil", texto: "Nossa equipe verifica as condições disponíveis." },
    { titulo: "Encontramos as melhores opções", texto: "Imóveis compatíveis com sua renda e momento." },
    { titulo: "Você escolhe", texto: "Conheça os projetos e avance só se fizer sentido para você." },
  ],
  cta: "Fazer minha simulação",
} as const;

/* -------------------------------------------------------------------------- */
/* Prova social                                                                */
/* -------------------------------------------------------------------------- */

export const provas = {
  titulo: "Pessoas que também achavam que ainda não conseguiriam comprar.",
  metricas: [
    { valor: "+600", rotulo: "imóveis vendidos" },
    { valor: "4 anos", rotulo: "de mercado" },
    { valor: "15", rotulo: "corretores no time" },
    { valor: "Campeão", rotulo: "de vendas da Zona Oeste" },
  ],
  videosSobretitulo: "Momentos reais no plantão",
  videosTitulo: "Cada comemoração é uma família saindo do aluguel.",
  videoLegenda: "Venda comemorada",
  videos: ["02", "03", "06", "07"].map((n) => ({
    src: `/videos/comemoracao-${n}.mp4`,
    poster: `/videos/comemoracao-${n}.webp`,
  })),
  /** Ordem pensada para alternar familias, casais e criancas. */
  fotos: ["01", "03", "04", "07", "09", "10", "11", "13", "15", "17"].map((n) => ({
    src: `/img/provas/prova-${n}.webp`,
    largura: 640,
    altura: 853,
    alt: "Clientes do time do Kauê com a pasta do apartamento no stand de vendas",
  })),
  rodape: "Clientes reais atendidos pelo time do Kauê Horácio.",
} as const;

/* -------------------------------------------------------------------------- */
/* Quem e o Kaue                                                               */
/* -------------------------------------------------------------------------- */

export const sobre = {
  sobretitulo: "Quem vai te atender",
  texto:
    "4 anos no mercado imobiliário, mais de 600 imóveis vendidos com o time e campeão de vendas da Zona Oeste de São Paulo. À frente de uma equipe de 15 corretores dedicada a ajudar famílias a conquistar o primeiro imóvel.",
  metricas: [
    { valor: "+600", rotulo: "imóveis vendidos" },
    { valor: "15", rotulo: "corretores" },
    { valor: "#1", rotulo: "Zona Oeste" },
  ],
  cta: "Fazer minha simulação",
  foto: {
    src: "/img/kaue/kaue.webp",
    largura: 791,
    altura: 674,
    alt: "Kauê Horácio, gerente de vendas",
  } satisfies Foto,
  avatar: "/img/kaue/avatar.webp",
} as const;

/* -------------------------------------------------------------------------- */
/* Formulario — o UNICO ponto de conversao da pagina                           */
/* -------------------------------------------------------------------------- */

export const formulario = {
  sobretitulo: "Simulação gratuita",
  titulo: "Quer descobrir se já consegue comprar seu primeiro apartamento?",
  descricao: `Faça sua simulação gratuitamente com o time do ${pessoa.nome}. Leva menos de 1 minuto.`,
  checks: ["Minha Casa Minha Vida", "Use seu FGTS na entrada", "Autônomo e MEI também podem"],
  tituloCard: "Faça sua simulação",
  campos: {
    nome: { rotulo: "Qual é o seu nome?", placeholder: "Digite seu nome" },
    whatsapp: { rotulo: "Qual é o seu WhatsApp?", placeholder: "(11) 90000-0000" },
    renda: { rotulo: "Qual é sua renda familiar?", placeholder: "Selecione sua faixa de renda" },
    regiao: { rotulo: "Qual região você prefere?" },
  },
  lgpd: "Autorizo o contato e concordo com a",
  lgpdLink: "Política de Privacidade",
  botao: "Fazer minha simulação",
  botaoEnviando: "Enviando...",
  nota: `Um especialista do time do ${pessoa.primeiroNome} entra em contato com você.`,
  seguranca: "Seus dados são usados apenas para este atendimento.",
  erros: {
    nome: "Digite seu nome, por favor.",
    whatsapp: "Digite um WhatsApp válido com DDD.",
    renda: "Escolha sua faixa de renda.",
    regiao: "Escolha uma região.",
    lgpd: "Precisamos da sua autorização para entrar em contato.",
    envio: "Não conseguimos enviar agora. Confira sua internet e tente de novo.",
  },
  sucesso: {
    titulo: "Recebemos!",
    texto: `Recebemos seus dados. Em breve um especialista do time do ${pessoa.primeiroNome} entra em contato com você.`,
  },
} as const;

/* -------------------------------------------------------------------------- */
/* Rodape e metadados                                                          */
/* -------------------------------------------------------------------------- */

export const rodape = {
  linkPrivacidade: "Política de privacidade",
  aviso:
    "*Exemplo de simulação. Valores podem variar de acordo com idade, renda, FGTS, análise de crédito e condições do empreendimento. Imagens dos empreendimentos meramente ilustrativas. Condições sujeitas à análise de crédito e às regras vigentes do Minha Casa Minha Vida.",
  avisoNaoOficial: `Página de atendimento do ${pessoa.cargo.toLowerCase()} ${pessoa.nome} e equipe. Não é um canal oficial da Cury Construtora.`,
} as const;

export const meta = {
  titulo: "Apê na Mão · Seu primeiro apartamento na Zona Oeste de SP",
  descricao:
    "Descubra gratuitamente quanto você pode financiar para comprar seu primeiro apartamento na Zona Oeste de São Paulo. Minha Casa Minha Vida, FGTS e entrada a partir de R$ 800. Atendimento com Kauê Horácio e equipe.",
} as const;

/* -------------------------------------------------------------------------- */
/* Pendencias — nao rodar trafego antes de resolver as marcadas com (!)        */
/* -------------------------------------------------------------------------- */

export const PENDENCIAS = [
  "(!) simulacao.faixas — valores reais de financiamento por faixa. Hoje os cards estao trancados (borrados) de proposito.",
  "(!) Autorizacao de uso de imagem das pessoas nas fotos e videos de prova social.",
  "Confirmar com o Kaue que ele atende os 4 lancamentos listados (Parque das Perdizes, Bosque da Barra, Cidade Lapa – Perdizes, Nova Leopoldina).",
  "Metragens vem do portal apto.vc; conferir com as plantas oficiais.",
  "Uso da marca e das perspectivas da Cury: confirmar que o Kaue, como gerente, pode usar nesta pagina.",
  "WhatsApp apos envio: desligado por decisao do cliente. Se pedirem, entra como wa.me na tela de sucesso.",
] as const;
