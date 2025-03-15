import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/api": {
        target:
          "https://script.google.com/macros/s/AKfycbxutNaXtissUbeA2ZLaQYxYv7-t41iZo1MBkMvx4qT_2RLF7ztUO2xLV9jdoH4agSrO/exec",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
