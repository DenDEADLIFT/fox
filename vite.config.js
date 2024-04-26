import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "127.0.0.1",
    //host: "localhost",
    port: 443,
    //port: 3000,
  },
});
