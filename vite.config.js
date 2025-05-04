import { defineConfig, loadEnv  } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'

import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  return {
    base: "/mp_website/",
    plugins: [
      react(),
      tailwindcss(),
    ],
    server: {
      host: env.VITE_APP_HOST,
      port: env.VITE_APP_PORT,
      strictPort: true,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@js': path.resolve(__dirname, 'src/js'),
        '@router': path.resolve(__dirname, 'src/router'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@assets': path.resolve(__dirname, 'src/assets')
      }
    },
    esbuild: {
      loader: "jsx",
      include: /src\/.*\.jsx?$/,
      exclude: [],
    },
  }
})