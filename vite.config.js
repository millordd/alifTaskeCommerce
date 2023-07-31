import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: 'components', replacement: path.resolve(__dirname, 'src/components') },
      { find: 'store', replacement: path.resolve(__dirname, 'src/store') },
      { find: 'hooks', replacement: path.resolve(__dirname, 'src/hooks') },
      { find: 'pages', replacement: path.resolve(__dirname, 'src/pages') },
      { find: 'layout', replacement: path.resolve(__dirname, 'src/layout') },
      { find: 'utils', replacement: path.resolve(__dirname, 'src/utils') },
      { find: 'assets', replacement: path.resolve(__dirname, 'assets') },
    ],
  },
});
