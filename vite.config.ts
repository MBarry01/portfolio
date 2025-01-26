import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // Ajustez ceci selon le nom de votre dépôt GitHub
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});