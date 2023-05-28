// This line is needed for the app to work
import {createApp, h} from 'vue'
import {createInertiaApp} from '@inertiajs/vue3'
import "./app.css"

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.vue', {eager: true})
    return pages[`./Pages/${name}.vue`]
  },
  setup({el, App, props, plugin}) {
    createApp({render: () => h(App, props)})
      .use(plugin)
      .mount(el)
  },
})