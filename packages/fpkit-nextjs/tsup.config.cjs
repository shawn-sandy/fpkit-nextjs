import { defineConfig } from "tsup";

export default defineConfig({
  entry: [
    "src/index.ts",
    "src/hooks.ts",
    "src/hooks/index.ts",
    "src/libs.ts",
    "src/libs/index.ts",
  ],
  outDir: "libs",
  splitting: true,
  sourcemap: true,
  treeshake: true,
  external: ["react", "react-dom", "next", "nextra", "@fpkit/react"],
  clean: true,
  format: ["esm", "cjs"],
  minify: true,
  dts: true,
  include: ["./src/test/setup.ts"],
});
