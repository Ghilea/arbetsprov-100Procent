import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@utiles': path.resolve(__dirname, './src/utiles'),
      '@features': path.resolve(__dirname, './src/features'),
      '@routes': path.resolve(__dirname, './src/routes'),
      '@helpers': path.resolve(__dirname, './src/helpers'),
    }
  }
})
