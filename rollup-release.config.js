import createDefaultConfig from '@open-wc/building-rollup/modern-config';

// noinspection JSUnusedGlobalSymbols
export default [
    {
        input: 'src/tm-hand-drawn-outline.js',
        output: {
            file: 'dist/release/index.js',
            format: 'cjs'
        },
        outputDir: 'dist/release'
    }
];
