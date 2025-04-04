import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/tablero-comunicaciones/', // Usa el nombre exacto de tu repositorio
});
