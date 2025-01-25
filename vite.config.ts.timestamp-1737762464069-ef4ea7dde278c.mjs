// vite.config.ts
import { reactRouter } from "file:///C:/Users/Sam-Sahir/Documents/Mis%20Proyectos/tienda/node_modules/.pnpm/@react-router+dev@7.1.3_@react-router+serve@7.1.3_@types+node@20.17.14_react-router@7.1.3_typescript@5.7.3_vite@5.4.12/node_modules/@react-router/dev/dist/vite.js";
import autoprefixer from "file:///C:/Users/Sam-Sahir/Documents/Mis%20Proyectos/tienda/node_modules/.pnpm/autoprefixer@10.4.20_postcss@8.5.1/node_modules/autoprefixer/lib/autoprefixer.js";
import tailwindcss from "file:///C:/Users/Sam-Sahir/Documents/Mis%20Proyectos/tienda/node_modules/.pnpm/tailwindcss@3.4.17/node_modules/tailwindcss/lib/index.js";
import { defineConfig } from "file:///C:/Users/Sam-Sahir/Documents/Mis%20Proyectos/tienda/node_modules/.pnpm/vite@5.4.12_@types+node@20.17.14/node_modules/vite/dist/node/index.js";
import tsconfigPaths from "file:///C:/Users/Sam-Sahir/Documents/Mis%20Proyectos/tienda/node_modules/.pnpm/vite-tsconfig-paths@5.1.4_typescript@5.7.3_vite@5.4.12/node_modules/vite-tsconfig-paths/dist/index.js";
var vite_config_default = defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer]
    }
  },
  plugins: [reactRouter(), tsconfigPaths()],
  build: {
    target: "esnext"
  },
  optimizeDeps: {
    esbuildOptions: {
      target: "esnext"
    }
  },
  ssr: void 0
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxTYW0tU2FoaXJcXFxcRG9jdW1lbnRzXFxcXE1pcyBQcm95ZWN0b3NcXFxcdGllbmRhXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxTYW0tU2FoaXJcXFxcRG9jdW1lbnRzXFxcXE1pcyBQcm95ZWN0b3NcXFxcdGllbmRhXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9TYW0tU2FoaXIvRG9jdW1lbnRzL01pcyUyMFByb3llY3Rvcy90aWVuZGEvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyByZWFjdFJvdXRlciB9IGZyb20gXCJAcmVhY3Qtcm91dGVyL2Rldi92aXRlXCI7XG5pbXBvcnQgYXV0b3ByZWZpeGVyIGZyb20gXCJhdXRvcHJlZml4ZXJcIjtcbmltcG9ydCB0YWlsd2luZGNzcyBmcm9tIFwidGFpbHdpbmRjc3NcIjtcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgdHNjb25maWdQYXRocyBmcm9tIFwidml0ZS10c2NvbmZpZy1wYXRoc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBjc3M6IHtcbiAgICBwb3N0Y3NzOiB7XG4gICAgICBwbHVnaW5zOiBbdGFpbHdpbmRjc3MsIGF1dG9wcmVmaXhlcl0sXG4gICAgfSxcbiAgfSxcbiAgcGx1Z2luczogW3JlYWN0Um91dGVyKCksIHRzY29uZmlnUGF0aHMoKV0sXG4gIGJ1aWxkOiB7XG4gICAgdGFyZ2V0OiBcImVzbmV4dFwiXG4gIH0sXG4gIG9wdGltaXplRGVwczoge1xuICAgIGVzYnVpbGRPcHRpb25zOiB7XG4gICAgICB0YXJnZXQ6ICdlc25leHQnXG4gICAgfVxuICB9LFxuICBzc3I6IHVuZGVmaW5lZFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW1WLFNBQVMsbUJBQW1CO0FBQy9XLE9BQU8sa0JBQWtCO0FBQ3pCLE9BQU8saUJBQWlCO0FBQ3hCLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sbUJBQW1CO0FBRTFCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLEtBQUs7QUFBQSxJQUNILFNBQVM7QUFBQSxNQUNQLFNBQVMsQ0FBQyxhQUFhLFlBQVk7QUFBQSxJQUNyQztBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVMsQ0FBQyxZQUFZLEdBQUcsY0FBYyxDQUFDO0FBQUEsRUFDeEMsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLEVBQ1Y7QUFBQSxFQUNBLGNBQWM7QUFBQSxJQUNaLGdCQUFnQjtBQUFBLE1BQ2QsUUFBUTtBQUFBLElBQ1Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxLQUFLO0FBQ1AsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
