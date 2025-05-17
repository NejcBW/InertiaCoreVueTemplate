# InertiaCoreVueTemplate

## Running

### Manually

To run the dev environment:

```bash
cd ClientApp
npm run dev

# in another terminal in the InertiaCoreVueApp project directory
dotnet watch run
```

### Compound build (JetBrains Rider)

If you are using JetBrains Rider IDE you can also use a compound build
configuration named **Run compound** (it is located in the `.run` directory and
should normally be automatically picked up by the IDE). The configuration is
a compound of two separate configurations:

- dotnet-watch 'Watch'
- npm 'run dev'

### npm run start:all

```bash
cd ClientApp
npm run start:all
```

The start:all npm script allows for starting both, the development Vite server
and the backend ASP.NET Core server in watch mode. This running method first
waits for the Vite server to become available (by waiting for the TCP port 5173
to open) before starting the backend server.

## Changing from TypeScript to JavaScript

To change the project from TypeScript to JavaScript you should perform the
following changes in the `ClientApp` folder:

1. Rename `vite.config.ts` to `vite.config.js`. No content must be changed.
2. Remove `tsconfig.json` file because it is not needed.
3. From `package.json` remove the following dependencies:
    * ts-node
    * typescript
    * vue-tsc
4. Rename `app.ts` to `app.js` and make the following changes:

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

5. Rename `bootstrap.ts` to `bootstrap.js`.
6. You also need to modify the `Index.vue` file accordingly.
