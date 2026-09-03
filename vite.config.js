import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portafolio/', // debe coincidir exactamente con el nombre de tu repositorio en GitHub
})
