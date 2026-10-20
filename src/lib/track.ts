/**
 * Disparo de conversao para Meta Pixel, GA4 e dataLayer ao mesmo tempo.
 * Cada bloco tem try/catch proprio: se um script nao carregou (bloqueador,
 * conta ainda nao criada, 4G ruim), os outros seguem e a pagina nunca quebra.
 */
type Parametros = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

function disparar(evento: string, parametros: Parametros = {}, padraoMeta = true) {
  try {
    if (padraoMeta) window.fbq?.("track", evento, parametros);
    else window.fbq?.("trackCustom", evento, parametros);
  } catch {
    /* silencioso de proposito */
  }
  try {
    window.gtag?.("event", evento, parametros);
  } catch {
    /* silencioso de proposito */
  }
  try {
    window.dataLayer?.push({ event: evento, ...parametros });
  } catch {
    /* silencioso de proposito */
  }
}

/** Clique num CTA que leva ao formulario. */
export const rastrearIntencao = (origem: string) => disparar("IntencaoFormulario", { origem }, false);

/** Envio do formulario com sucesso: o evento que importa para a campanha. */
export const rastrearLead = (extras: Parametros) => disparar("Lead", extras);

/** Clique no Instagram do Kaue. */
export const rastrearInstagram = (origem: string) => disparar("CliqueInstagram", { origem }, false);

/** Marcos de rolagem (25/50/75/100%). Responde "a pagina esta longa demais?". */
export const rastrearRolagem = (percentual: number) => disparar("Rolagem", { percentual }, false);
