import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve, relative, extname } from "path";
import dts from "vite-plugin-dts";
// import { libInjectCss } from "vite-plugin-lib-inject-css";
import { fileURLToPath } from "node:url";
import { glob } from "glob";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        vanillaExtractPlugin(),
        // libInjectCss(),
        tsconfigPaths(),
        dts({ include: ["lib"] }),
    ],
    build: {
        lib: {
            entry: resolve(__dirname, "lib/main.ts"),
            formats: ["es"],
        },
        rollupOptions: {
            external: ["react", "react/jsx-runtime"],
            input: Object.fromEntries(
                glob.sync("lib/**/*.{ts,tsx}").map(file => [
                    // The name of the entry point
                    // lib/nested/foo.ts becomes nested/foo
                    relative("lib", file.slice(0, file.length - extname(file).length)),
                    // The absolute path to the entry file
                    // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
                    fileURLToPath(new URL(file, import.meta.url)),
                ]),
            ),
            output: {
                entryFileNames: "[name].js",
            },
        },
        copyPublicDir: false,
    },
});
