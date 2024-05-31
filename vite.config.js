/* eslint-disable no-undef */
import react from '@vitejs/plugin-react'
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default ({ mode = 'development'}) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd(), ['VITE_']) };
  return defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    server: {
      host: true,
      port: parseInt(process.env.VITE_PORT),
    },
    optimizeDeps: {
      include: ["swiper/react"],
    }
  });
}