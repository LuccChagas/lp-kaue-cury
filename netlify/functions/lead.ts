/**
 * Recebe o lead do formulario e encaminha para a planilha (Google Apps Script).
 *
 * A URL e o token da planilha ficam SO aqui, no servidor, via variaveis de
 * ambiente da Netlify — nunca no codigo que vai para o navegador.
 *
 * Variaveis: LEAD_WEBHOOK_URL e LEAD_WEBHOOK_TOKEN (ver .env.example).
 */

type CorpoLead = {
  nome?: string;
  whatsapp?: string;
  renda?: string;
  regiao?: string;
  origem?: string;
  pagina?: string;
};

function texto(valor: unknown, limite = 200) {
  return typeof valor === "string" ? valor.trim().slice(0, limite) : "";
}

function json(corpo: unknown, status = 200) {
  return new Response(JSON.stringify(corpo), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

/** Extrai as UTMs da URL da pagina para a planilha saber de onde veio o lead. */
function extrairUtms(pagina: string) {
  const chaves = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;
  const saida: Record<(typeof chaves)[number], string> = {
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_content: "",
    utm_term: "",
  };
  try {
    const parametros = new URL(pagina).searchParams;
    for (const chave of chaves) saida[chave] = parametros.get(chave) ?? "";
  } catch {
    /* pagina vazia ou invalida: segue sem UTMs */
  }
  return saida;
}

export default async (requisicao: Request) => {
  if (requisicao.method !== "POST") {
    return json({ ok: false, erro: "metodo_nao_permitido" }, 405);
  }

  let corpo: CorpoLead;
  try {
    corpo = (await requisicao.json()) as CorpoLead;
  } catch {
    return json({ ok: false, erro: "json_invalido" }, 400);
  }

  const nome = texto(corpo.nome, 120);
  const whatsapp = texto(corpo.whatsapp, 30);
  const digitos = whatsapp.replace(/\D/g, "");

  if (nome.length < 2 || digitos.length < 10 || digitos.length > 11) {
    return json({ ok: false, erro: "dados_invalidos" }, 400);
  }

  const pagina = texto(corpo.pagina, 500);

  const lead = {
    recebidoEm: new Date().toISOString(),
    nome,
    whatsapp,
    renda: texto(corpo.renda, 60),
    regiao: texto(corpo.regiao, 60),
    origem: texto(corpo.origem, 60) || "formulario",
    pagina,
    ...extrairUtms(pagina),
  };

  const webhook = process.env.LEAD_WEBHOOK_URL;
  if (!webhook) {
    console.warn("[lead] LEAD_WEBHOOK_URL nao configurada. Lead recebido:", lead);
    // Em producao isso e erro de configuracao: responder ok perderia o lead
    // calado. Em preview/local segue ok para dar pra testar a tela.
    if (process.env.CONTEXT === "production") {
      return json({ ok: false, erro: "webhook_nao_configurado" }, 503);
    }
    return json({ ok: true, aviso: "webhook_nao_configurado" });
  }

  try {
    const resposta = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...lead, token: process.env.LEAD_WEBHOOK_TOKEN ?? "" }),
      redirect: "follow",
      signal: AbortSignal.timeout(8000),
    });
    const retorno = (await resposta.json().catch(() => null)) as { ok?: boolean } | null;
    if (!retorno?.ok) {
      console.error("[lead] planilha recusou o lead:", retorno);
      return json({ ok: false, erro: "planilha_recusou" }, 502);
    }
  } catch (erro) {
    console.error("[lead] falha ao falar com a planilha:", erro);
    return json({ ok: false, erro: "planilha_indisponivel" }, 502);
  }

  return json({ ok: true });
};
