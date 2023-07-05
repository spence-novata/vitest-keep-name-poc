import { defineConfig } from "vitest/config";

export default defineConfig({
  esbuild: {
    keepNames: true,
  },
  test: {
    globals: true,
  },
});
