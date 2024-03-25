import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/base.ts", "src/next-config.ts"],
  splitting: false,
  sourcemap: true,
  clean: true,
  dts: true,
});
