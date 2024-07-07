import { defineConfig } from 'wxt';

export default defineConfig({
  modules: ['@wxt-dev/module-vue'],
  manifest: {
    name: 'backlog-tools',
    description: 'backlog-tools',
    permissions: ["storage"],
  },
});
