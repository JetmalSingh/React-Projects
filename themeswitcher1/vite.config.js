import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss({
      config: {
        darkMode: 'class', // enable dark mode
        content: [
          './index.html',
          './src/**/*.{js,ts,jsx,tsx}', // all your component files
        ],
        theme: {
          extend: {},
        },
        plugins: [],
      }
    }),
  ],
})