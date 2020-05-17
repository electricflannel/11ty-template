import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import replace from '@rollup/plugin-replace'
import resolve from '@rollup/plugin-node-resolve'
import svg from 'rollup-plugin-svg'
import { terser } from 'rollup-plugin-terser'

const dev = process.env.NODE_ENV !== 'production'

export default {
  input: 'src/_scripts/_main.js',
  output: {
    sourcemap: false,
    format: 'iife',
    name: 'main',
    file: 'dist/assets/main.bundle.js',
  },
  plugins: [
    replace({
      DEV_MODE: dev,
    }),
    svg(),
    postcss({
      extract: 'main.bundle.css',
      minimize: !dev,
    }),
    resolve({
      browser: true,
    }),
    commonjs(),
    !dev && terser(),
  ],
  watch: {
    clearScreen: false,
  },
}
