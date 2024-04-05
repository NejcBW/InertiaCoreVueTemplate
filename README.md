# InertiaCoreVueTemplate

## Running

To run the dev environment:

```
cd ClientApp
npm run dev

# in another terminal in the Inertia CoreVueApp project directory
dotnet watch run
```

## Changing from TypeScript to JavaScript

To change the project from TypeScript to JavaScript you should perform the following changes in the ```ClientApp```
folder:

1. Rename ```vite.config.ts``` to ```vite.config.js```. No content must be changed.
2. Remove ```tsconfig.json``` file because it is not needed.
3. From ```package.json``` remove the following dependencies:
    * ts-node
    * typescript
    * vue-tsc
4. Rename ```app.ts``` to ```app.js``` and make the following changes:

```diff
-import {createApp, h, DefineComponent} from 'vue';
+import {createApp, h} from 'vue';
import {createInertiaApp} from '@inertiajs/vue3';
import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers';
import './app.css';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Inertia';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
-            import.meta.glob<DefineComponent>('./Pages/**/*.vue')
+            import.meta.glob('./Pages/**/*.vue')
        ),
    setup({el, App, props, plugin}) {
        createApp({render: () => h(App, props)})
            .use(plugin)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
```

5. Rename ```bootstrap.ts``` to ```bootstrap.js```.
6. You also need to modify the ```Index.vue``` file accordingly.
