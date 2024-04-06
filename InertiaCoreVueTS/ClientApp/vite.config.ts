import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import laravel from "laravel-vite-plugin";
import path from "path";
import { mkdirSync } from "fs";

const outDir = "../wwwroot/build";

mkdirSync(outDir, {recursive: true});

export default defineConfig({
  plugins: [
    // Using laravel-vite-plugin package because it offers Vite 
    // configuration options that are also useful for other
    // server frameworks such as ASP.NET Core.
    laravel({
      input: ["src/app.js"],
      publicDirectory: outDir,
      // When your application is built using traditional server-side
      // rendering with Blade, Vite can improve your development workflow
      // by automatically refreshing the browser when you make changes
      // to view files in your application. To get started, you can
      // simply specify the refresh option as true.
      // When the refresh option is true, saving files in the following
      // directories will trigger the browser to perform a full page refresh
      // while you are running npm run dev:
      // - app/View/Components/**
      // - lang/**
      // - resources/lang/**
      // - resources/views/**
      // - routes/**
      // If these default paths do not suit your needs, you can specify
      // your own list of paths to watch:
      // refresh: ['resources/views/**'],
      // For more information check the Laravel docs on Vite.
      // What is currently not known to me is what is the root folder
      // that it takes into account if you specify your own list
      // of paths to watch.
      refresh: true,
    }),
    vue({
      template: {
        transformAssetUrls: {
          // The Vue plugin will re-write asset URLs, when referenced
          // in Single File Components, to point to the ASP.NET Core web
          // server. Setting this to `null` allows the Laravel plugin
          // to instead re-write asset URLs to point to the Vite
          // server instead.
          base: null,
          // The Vue plugin will parse absolute URLs and treat them
          // as absolute paths to files on disk. Setting this to
          // `false` will leave absolute URLs un-touched so they can
          // reference assets in the public directory as expected.
          includeAbsolute: false,
        },
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    outDir,
    emptyOutDir: true,
  },
});