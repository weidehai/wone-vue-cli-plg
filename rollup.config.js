import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import alias from '@rollup/plugin-alias';
import path from 'path';

const baseConfig = [
  {
    input: 'src/generator.ts',
    output: [
      {
        file: 'generator.js',
        name: '',
        format: 'umd',
      },
    ],
    plugins: [
      typescript(),
      alias({
        entries: [{ find: 'src', replacement: path.resolve(__dirname, 'src') }],
      }),
      nodeResolve(),
      commonjs(),
    ],
  },
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'index.js',
        name: '',
        format: 'umd',
      },
    ],
    plugins: [
      typescript(),
      alias({
        entries: [{ find: 'src', replacement: path.resolve(__dirname, 'src') }],
      }),
      nodeResolve(),
      commonjs(),
    ],
  },
];

export default baseConfig;
