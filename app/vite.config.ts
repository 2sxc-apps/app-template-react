import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import basicSsl from '@vitejs/plugin-basic-ssl'

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    basicSsl(),
    mode === 'ssl' && basicSsl()
  ],
  server: {
    https: mode === 'ssl',
    port: 5173,
    cors: {
      origin: 'https://app-dev.2sxc.org',
      credentials: false,
    },
  },
}))