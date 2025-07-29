import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// // https://vite.dev/config/
// export default defineConfig({
//   base: "/website/",
//   plugins: [react()],
// });
export default defineConfig(({ command }) => ({
  // command === "serve"  →  npm run dev
  base: command === "serve" ? "/" : "/website/",
  plugins: [react()],
}));
