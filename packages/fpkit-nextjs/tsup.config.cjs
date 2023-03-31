import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/hooks.ts", "src/libs.ts"],
  outDir: "libs",
  splitting: true,
  sourcemap: true,
  treeshake: true,
  external: ["react", "react-dom", "next", "nextra"],
  clean: true,
  format: ["esm", "cjs"],
  minify: true,
  dts: true,
});
