/// <reference types="vitest" />
import { defineConfig } from 'vite'

export default defineConfig({
  test: { 
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/test/setupTests.ts'],
    include: ['src/**/*.test.ts?(x)'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
    }
  },
  resolve: {
    alias: {
      src: "/src",
    },
  }
})