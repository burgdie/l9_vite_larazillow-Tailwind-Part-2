import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import Mainlayout from '@/Layouts/MainLayout.vue';
import { ZiggyVue } from 'ziggy';
import { InertiaProgress } from '@inertiajs/progress';
import '../css/app.css';

InertiaProgress.init({
  delay: 0,
  color: '#29d',
  includeCSS: true,
  showSpinner: true,

})

createInertiaApp({
  resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`,  import.meta.glob('./Pages/**/*.vue')),
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .use(ZiggyVue)
      .mount(el)
  },
});
// createInertiaApp({
//   resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
//   setup({ el, App, props, plugin }) {
//     createApp({ render: () => h(App, props) })
//       .use(plugin)
//       .mount(el)
//   },
// });
