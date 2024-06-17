import { createApp } from 'vue';
 import Content from "./content/Content.vue";

export default defineContentScript({
  matches: ['*://*.backlog.com/*'],
  main(ctx) {
    const ui = createIntegratedUi(ctx, {
      position: 'inline',
      anchor: '#gantt',
      append: 'first',
      onMount: (container) => {
        const app = createApp(Content);
        app.mount(container);
        return app;
      }
    });
    ui.mount();
  },
});
