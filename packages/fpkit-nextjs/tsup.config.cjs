import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/hooks.ts"],
  outDir: "libs",
  splitting: true,
  sourcemap: true,
  clean: true,
  format: ["esm", "cjs"],
  minify: true,
});
