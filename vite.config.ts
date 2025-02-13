import path from 'node:path';

// import terser from '@rollup/plugin-terser';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
// import viteCompression from 'vite-plugin-compression';
import { ViteEjsPlugin } from 'vite-plugin-ejs';
import topLevelAwait from 'vite-plugin-top-level-await';
import wasm from 'vite-plugin-wasm';

import { getFileList } from './tools/get_file_list';

const publicDir = path.resolve(__dirname, './public');
const getPublicFileList = async (targetPath: string) => {
  const filePaths = await getFileList(targetPath);
  const publicFiles = filePaths
    .map((filePath) => path.relative(publicDir, filePath))
    .map((filePath) => path.join('/', filePath));

  return publicFiles;
};

export default defineConfig(async () => {
  const videos = await getPublicFileList(path.resolve(publicDir, 'videos'));

  return {
    build: {
      assetsInlineLimit: 20480,
      cssCodeSplit: false,
      cssTarget: 'es6',
      minify: false,
      rollupOptions: {
        output: {
          experimentalMinChunkSize: 40960,
          // entryFileNames: 'assets/bundle.js'
        },
        plugins: [
          // viteCompression(),
          // terser(),
          visualizer()
        ]
      },
      target: 'es2015',
    },
    plugins: [
      react(),
      wasm(),
      topLevelAwait(),
      ViteEjsPlugin({
        module: '/src/client/index.tsx',
        title: '買えるオーガニック',
        videos,
      }),
    ],
  };
});
