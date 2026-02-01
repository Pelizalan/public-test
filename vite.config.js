import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // This tells Vite that "@" points to the src folder relative to this config file
      "@": path.resolve(__dirname, "./src"),
    },
  },
})