import { createApp, h } from 'vue';
import type { DefineComponent } from "vue";
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
// Import css resources here instead in vite.config.ts under laravel settings
import './app.css';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Inertia';

await createInertiaApp({
  resolve: (name) =>
    resolvePageComponent(
      `./Pages/${name}.vue`,
      import.meta.glob<DefineComponent>('./Pages/**/*.vue')
    ),
  setup({el, App, props, plugin}) {
    createApp({render: () => h(App, props)})
      .use(plugin)
      .mount(el);
  },
  title: (title) => `${title} - ${appName}`,
  progress: {
    color: '#4B5563',
  },
});