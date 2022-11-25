import { defineConfig } from "father";

export default defineConfig({
  sourcemap: true,
  cjs: {
    input: "src", // 默认编译目录
    platform: "node",
    output: "lib",
  },
  prebundle: {
    deps: [],
  },
});
