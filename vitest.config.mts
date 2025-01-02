import {configDefaults, defineConfig} from 'vitest/config'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: 'jsdom',
    clearMocks: true,
    mockReset: true,
    open: false,
    restoreMocks: true,
    ui: true,
    coverage: {
      // you can include other reporters, but 'json-summary' is required, json is recommended
      reporter: ['text', 'json-summary', 'json'],
      // If you want a coverage reports even if your tests are failing, include the reportOnFailure option
      reportOnFailure: true,
      exclude: [
        // @ts-expect-error type inconnu
        ...configDefaults.coverage.exclude,
        '**/*.config.ts', // Fichiers de configuration
        '**/types/**', // Fichiers de types TypeScript
        '**/constants/**', // Constantes globales
        '**/__tests__/**', // Dossiers de tests unitaires
        '**/*.entity.ts', // Entités (modèles de base de données)
        '**/*.schema.ts', // Fichiers de schéma
        '**/*.state.ts' // Fichiers de gestion d'état
      ]
    }
  }
})
