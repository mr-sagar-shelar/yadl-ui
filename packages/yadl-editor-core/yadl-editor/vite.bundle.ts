import { resolve } from 'path';
import { defineConfig } from 'vite';

const config = defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, './src/index.ts'),
            name: 'yadl-editor',
            fileName: () => 'index.js',
            formats: ['es']
        },
        outDir: resolve(__dirname, 'bundle/yadl-editor'),
        assetsDir: resolve(__dirname, 'bundle/yadl-editor/assets'),
        emptyOutDir: true,
        cssCodeSplit: false,
        commonjsOptions: {
            strictRequires: true
        },
        rollupOptions: {
            output: {
                name: 'yadl-editor',
                exports: 'named',
                sourcemap: false,
                assetFileNames: (assetInfo) => {
                    return `assets/${assetInfo.name}`;
                }
            }
        }
    },
    resolve: {
        dedupe: ['monaco-editor', 'vscode']
    }
});

export default config;
