import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served from https://<user>.github.io/allotment/ in production, but from /
// locally. Everything else (asset URLs, lazy chunks) is derived by Vite.
export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? '/allotment/' : '/',
  plugins: [react()],
  build: {
    target: 'es2022',
  },
  // @ts-expect-error -- `test` is vitest's extension to the Vite config.
  test: {
    environment: 'jsdom',
    include: ['src/**/*.test.{ts,tsx}'],
  },
})
