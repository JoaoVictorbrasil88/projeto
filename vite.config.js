import react from '@vitejs/plugin-react';

export default {
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://63069afec0d0f2b8011f9944.mockapi.io',
        changeOrigin: true,
      },
    },
  },
};
