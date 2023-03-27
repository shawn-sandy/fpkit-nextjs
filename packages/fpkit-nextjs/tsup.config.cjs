import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/hooks.ts"],
  outDir: "libs",
  splitting: true,
  sourcemap: true,
  external: ["react", "react-dom", "next"],
  clean: true,
  format: ["esm", "cjs"],
  minify: true,
});
