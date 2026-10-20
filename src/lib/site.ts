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
  selo: { rotulo: "Entrada a partir de", valor: "R$ 800*" },
  prova: {
    linha1: `Atendimento com ${pessoa.nome} e equipe`,
    linha2: "+600 imóveis vendidos · Campeão de vendas da Zona Oeste",
  },
  imagem: {
    src: "/img/hero-familia.webp",
    largura: 1000,
    altura: 1334,
    alt: "Família de clientes do Kauê com a pasta do apartamento novo no stand de vendas",
  } satisfies Foto,
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
      titulo: "“Minha renda sozinho não é suficiente”",
      texto: "Você pode compor renda com cônjuge, pais, filhos ou familiares.",
    },
  ],
} as const;

/* -------------------------------------------------------------------------- */
/* Oportunidades — lancamentos Cury com MCMV na Zona Oeste                      */
/* -------------------------------------------------------------------------- */

/**
 * Dados conferidos em 20/10/2026 em portais de lancamento (apto.vc). Todos
 * sao lancamentos com beneficio Minha Casa Minha Vida. Preco NAO aparece de
 * proposito: muda toda semana e quem passa e o time do Kaue, na simulacao.
 * Nunca coloque endereco: so bairro e ponto de referencia.
 */
export const oportunidades = {
  sobretitulo: "Zona Oeste de SP",
  titulo: "Algumas oportunidades disponíveis na Zona Oeste",
  descricao: "Opções para diferentes perfis. A simulação mostra quais combinam com você.",
  rotuloPreco: "Valores e condições",
  valorPreco: "Na sua simulação",
  cta: "Simular para este empreendimento",
  avisoImagem: "Imagem ilustrativa",
  itens: [
    {
      nome: "Parque das Perdizes",
      bairro: "Barra Funda / Perdizes",
      regiaoFormulario: "Perdizes",
      referencia: "Pertinho da estação Barra Funda, do Shopping Bourbon e em frente à Playball",
      tag: "Lançamento",
      specs: ["1 e 2 dorms", "25 a 52 m²", "Lazer completo"],
      imagem: { src: "/img/empreendimentos/playball.webp", largura: 800, altura: 1200, alt: "Imagem ilustrativa de prédio residencial" },
    },
    {
      nome: "Bosque da Barra",
      bairro: "Barra Funda",
      regiaoFormulario: "Barra Funda",
      referencia: "Perto de metrô e trem",
      tag: "Lançamento",
      specs: ["1 e 2 dorms", "32 a 46 m²", "Lazer completo"],
      imagem: { src: "/img/empreendimentos/bosque-da-barra.webp", largura: 800, altura: 445, alt: "Imagem ilustrativa de área de lazer com piscina" },
    },
    {
      nome: "Nova Leopoldina",
      bairro: "Vila Leopoldina",
      regiaoFormulario: "Vila Leopoldina",
      referencia: "Perto de transporte e de parque",
      tag: "Lançamento",
      specs: ["2 dorms", "37 a 39 m²", "Lazer completo"],
      imagem: { src: "/img/empreendimentos/nova-leopoldina.webp", largura: 800, altura: 1198, alt: "Imagem ilustrativa de sala de apartamento compacto" },
    },
  ],
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
    largura: 460,
    altura: 540,
    alt: "Kauê Horácio, gerente de vendas, em Perdizes",
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
  "Nome oficial do lancamento da Playball (aqui: 'Parque das Perdizes', Cury, Barra Funda). Confirmar com o Kaue.",
  "Logo da Cury em PNG oficial (e autorizacao de uso). Hoje a Cury aparece so em texto.",
  "Foto profissional do Kaue (hoje: recorte de post do Instagram).",
  "Imagens oficiais dos empreendimentos (hoje: banco de imagens, marcadas como ilustrativas).",
  "WhatsApp apos envio: desligado por decisao do cliente. Se pedirem, entra como wa.me na tela de sucesso.",
] as const;
