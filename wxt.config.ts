import { defineConfig } from 'wxt';
import vue from '@vitejs/plugin-vue';
import vueI18n from '@intlify/unplugin-vue-i18n/vite';

export default defineConfig({
  imports: {
    addons: {
      vueTemplate: true,
    },
  },
  vite: () => ({
    plugins: [
      vue(),
      // See https://vue-i18n.intlify.dev/guide/advanced/optimization.html
      vueI18n({
        include: 'assets/locales/*.json',
      }),
    ],
  }),
  manifest: {
    name: 'backlog-tools',
    description: 'backlog-tools',
    permissions: ["storage"],
    default_locale: 'ja',
  },
});
