import pkg from './package.json';

import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/plugin.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'default'
    },
    {
      file: pkg.module,
      format: 'es'
    }
  ],
  plugins: [
    typescript(),
    terser(),
  ],
  external: [ 'fs', 'js-yaml', '@rollup/pluginutils' ]
}
