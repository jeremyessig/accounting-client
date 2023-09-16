import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
      '@assets' : path.resolve(__dirname, './src/assets'),
      '@components' : path.resolve(__dirname, './src/components'),
      '@forms' : path.resolve(__dirname, './src/forms'),
      '@layouts' : path.resolve(__dirname, './src/layouts'),
      '@pages' : path.resolve(__dirname, './src/pages'),
      '@routers' : path.resolve(__dirname, './src/routers'),
      '@services' : path.resolve(__dirname, './src/utils/services'),
      '@interfaces' : path.resolve(__dirname, './src/utils/interfaces'),
      '@helpers' : path.resolve(__dirname, './src/utils/helpers'),
    }
  }

})
