// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  root: "./", // ソースコードのディレクトリを設定
  build: {
    outDir: "dist", // ビルドされたファイルを出力するディレクトリを設定
    lib: {
      entry: "./main.ts", // エントリーポイントを設定
      name: "MyCLI", // ライブラリ名を設定
      formats: ["cjs"], // CommonJS形式で出力するように設定
    },
    rollupOptions: {
      external: ["node_modules"], // node_modulesを外部依存として扱う
      output: {
        banner: "#!/usr/bin/env node", // スクリプトの先頭にシバンを追加
      },
    },
  },
});
