/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [tsconfigPaths(), react(), svgr()],
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: "./tests/setup.ts",
    },
});
