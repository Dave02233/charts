/*
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
*/




// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,         // 👈 questo dice a Vite di ascoltare su 0.0.0.0 (tutte le interfacce)
    port: 5173          // 👈 opzionale, puoi cambiare porta se vuoi
  }
});

