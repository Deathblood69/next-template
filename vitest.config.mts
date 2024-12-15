import {defineConfig} from 'vitest/config'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: 'jsdom',
    coverage: {
      // you can include other reporters, but 'json-summary' is required, json is recommended
      reporter: ['text', 'json-summary', 'json'],
      // If you want a coverage reports even if your tests are failing, include the reportOnFailure option
      reportOnFailure: true,
      thresholds: {
        lines: 80,
        branches: 80,
        functions: 80,
        statements: 80
      },
      exclude: [
        '**/.next/**',
        '**/types/**',
        '**/constants/**',
        '**/*.config.ts',
        '**/__tests__/**',
        '**/*.entity.ts',
        '**/*.schema.ts',
        '**/*.state.ts'
      ]
    }
  }
})
