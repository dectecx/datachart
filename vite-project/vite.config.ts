import basicSsl from '@vitejs/plugin-basic-ssl';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isDev = mode === 'development';
  const env = loadEnv(mode, process.cwd(), '');

  const plugins = [vue()];
  if (isDev) {
    plugins.push(basicSsl());
  }

  return {
    base: '/',
    plugins: plugins,
    define: {
      __APP_ENV__: env.APP_ENV,
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
    },
    build: {
      minify: 'terser',
      target: 'esnext',
      terserOptions: isDev ? devTerserConfig : releaseTerserConfig,
      sourcemap: isDev ? 'inline' : false,
      rollupOptions: {},
    },
    server: {
      host: 'localhost',
      port: 3000,
    },
  };
});

/**
 * @type {import('vite').Terser.MinifyOptions}
 */
const devTerserConfig: import('vite').Terser.MinifyOptions = {
  compress: false,
};

/**
 * @type {import('vite').Terser.MinifyOptions}
 */
const releaseTerserConfig: import('vite').Terser.MinifyOptions = {
  compress: {
    drop_console: true,
    drop_debugger: true,
  },
  format: {
    comments: false,
  },
};
