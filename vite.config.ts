import react from "@vitejs/plugin-react"
import checker from "vite-plugin-checker"
import { defineConfig } from "vite"
import path from "path"
import { readdirSync } from "fs"

const absolutePathAliases: { [key: string]: string } = {}
const srcPath = path.resolve("./src/")
const srcRootContent = readdirSync(srcPath, { withFileTypes: true }).map(
  dirent => dirent.name.replace(/(\.ts){1}(x?)/, "")
)

srcRootContent.forEach(directory => {
  absolutePathAliases[directory] = path.join(srcPath, directory)
})

// https://vitejs.dev/config/
export default defineConfig({
  root: "src",
  publicDir: "../public",
  base: "/vite-test-color-picker",
  resolve: {
    alias: {
      ...absolutePathAliases,
    },
  },

  build: {
    outDir: "../dist",
  },
  server: {
    open: true,
    port: 3000,
  },
  plugins: [
    react(),
    checker({
      typescript: true,
    }),
  ],
})
