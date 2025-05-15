import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  // base needs to be changed for links to work in GitHub pages
  base: process.env.NODE_ENV === 'production' ? './' : '/',
  server: {
    port: 8080,
    open: process.env.NODE_ENV !== 'production',
  }, // maintain the old webpack behavior in dev
  plugins: [react()],
  resolve: {
    preserveSymlinks: true, // Fixes https://github.com/rjsf-team/react-jsonschema-form/issues/3228
    alias: {
      // mapping packages in monorepo to make vite use sources directly avoiding build step
      '@lonli-lokli/dynamic-forms-antd': path.resolve(__dirname, '../antd/src'),
      '@lonli-lokli/dynamic-forms-chakra-ui': path.resolve(__dirname, '../chakra-ui/src'),
      '@lonli-lokli/dynamic-forms-core': path.resolve(__dirname, '../core/src'),
      '@lonli-lokli/dynamic-forms-fluentui-rc': path.resolve(__dirname, '../fluentui-rc/src'),
      '@lonli-lokli/dynamic-forms-mui': path.resolve(__dirname, '../mui/src'),
      '@lonli-lokli/dynamic-forms-react-bootstrap': path.resolve(__dirname, '../react-bootstrap/src'),
      '@lonli-lokli/dynamic-forms-semantic-ui': path.resolve(__dirname, '../semantic-ui/src'),
      '@lonli-lokli/dynamic-forms-shadcn': path.resolve(__dirname, '../shadcn/src'),
      // We want to pick up the browser version of the utils
      '@lonli-lokli/dynamic-forms-utils': path.resolve(__dirname, '../utils/src'),
      '@lonli-lokli/dynamic-forms-validator-ajv8': path.resolve(__dirname, '../validator-ajv8/src'),
      '@lonli-lokli/dynamic-forms-daisyui': path.resolve(__dirname, '../daisyui/src'),
    },
  },
});
