import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias:[{
      find: '@',
      replacement: path.resolve(__dirname, '/src')
    }]
  },
  plugins: [react()]
})
