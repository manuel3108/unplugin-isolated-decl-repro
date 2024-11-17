// @ts-check
import fs from 'node:fs';
import dts from 'unplugin-isolated-decl/rollup';
import esbuild from 'rollup-plugin-esbuild';

/** @import { RollupOptions } from "rollup" */

const projectRoot = `./packages/sample`;
const outDir = `${projectRoot}/dist`;
fs.rmSync(outDir, { force: true, recursive: true });

/** @type {RollupOptions["input"]} */
let inputs = {
    index: `${projectRoot}/index.ts`,
    bar: `${projectRoot}/foo/bar/index.ts`,
};

/** @type {RollupOptions} */
export default {
    input: inputs,
    output: {
        dir: outDir,
        format: 'esm',
        sourcemap: true,
    },
    plugins: [dts(), esbuild()],
};
