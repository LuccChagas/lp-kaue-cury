// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

/**
 * URL publica: a Netlify injeta URL (producao) e DEPLOY_PRIME_URL (previews).
 * Nunca hardcode o dominio — og:url e og:image apontando para um dominio que
 * ainda nao existe quebram a previa do link no WhatsApp.
 */
const site =
  process.env.PUBLIC_SITE_URL ||
  process.env.URL ||
  process.env.DEPLOY_PRIME_URL ||
  "http://localhost:4321";

export default defineConfig({
  site,
  output: "static",
  vite: { plugins: [tailwindcss()] },
});
