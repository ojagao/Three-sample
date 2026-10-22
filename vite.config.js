import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    build: {
        // 既存のデプロイ設定（CRA の出力先）に合わせる
        outDir: "build",
    },
});
