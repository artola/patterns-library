const rollup = require('rollup');
const dir = require('node-dir');
const mkdirp = require('mkdirp'); // eslint-disable-line import/no-extraneous-dependencies
// const multiEntry = require('rollup-plugin-multi-entry');
const resolve = require('rollup-plugin-node-resolve');
const uglify = require('rollup-plugin-uglify');
const commonjs = require('rollup-plugin-commonjs');
const babel = require('rollup-plugin-babel');
const sass = require('rollup-plugin-sass');

const constants = require('../constants');

const ENV = process.argv[2]; // second element is the first argument.
const CWD = process.cwd();

// polyfill files
const inputOptions = {
  input: `${CWD}/src/app/es6-polyfills.js`,
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs({
      include: 'node_modules/**',
      exclude: ['node_modules/@webcomponents/webcomponentsjs/**'],
    }),
    ENV === constants.ENV.PROD ? uglify() : () => {},
  ],
};

const outputOptions = {
  format: 'iife',
  name: 'StyleGuideWebComponent',
};

// @TODO: dry principle with buildApp
async function buildPolyfills() {
  const bundle = await rollup.rollup(inputOptions);
  const file = `${CWD}/${ENV === constants.ENV.PROD ? 'dist' : '.tmp'}/app/es6-polyfills.js`;
  console.log(`Styleguide Bundel: ${file}`); // eslint-disable-line
  // or write the bundle to disk
  await bundle.write({
    ...outputOptions,
    file,
  });
}

buildPolyfills();

async function buildApp() {
  const bundle = await rollup.rollup({
    ...inputOptions,
    input: `${CWD}/src/app/app.js`,
  });
  const file = `${CWD}/${ENV === constants.ENV.PROD ? 'dist' : '.tmp'}/app/app.js`
  console.log(`Styleguide Bundel: ${file}`); // eslint-disable-line
  // or write the bundle to disk
  await bundle.write({
    ...outputOptions,
    file,
  });
}

buildApp();

// vendors: @TODO

// components:
const inputOptionsComponents = {
  ...inputOptions,
  plugins: [
    ...inputOptions.plugins,
    sass({
      insert: false,
    }),
    babel({
      runtimeHelpers: true,
    }),
  ],
};

const outputOptionsComponents = {
  ...outputOptions,
};

const reGetParentDirAndFileAndComponent = /\/components\/(?:[^/]+\/)+index\.js$/;

mkdirp(`${CWD}/.tmp`, () => {
  dir.files(`${CWD}/src/components`, (err, allFiles) => {
    const jsFiles = allFiles.filter(_file => _file.match(reGetParentDirAndFileAndComponent));
    jsFiles.sort((lx, rx) => {
      if (lx < rx) return -1;
      if (lx > rx) return 1;
      return 0;
    });
    jsFiles.forEach((filePath) => {
      const fPath = filePath.replace('/src/', ENV === constants.ENV.PROD ? '/dist/' : '/.tmp/');
      async function buildComponents() {
        const bundle = await rollup.rollup({
          ...inputOptionsComponents,
          plugins: [
            ...inputOptionsComponents.plugins,
          ],
          input: filePath,
        });
        console.log(fPath.replace('.js', '.css'));
        console.log(`Bundled to: ${fPath}`); // eslint-disable-line
        // or write the bundle to disk
        await bundle.write({
          ...outputOptionsComponents,
          file: fPath,
        });
      }
      buildComponents();
    });
  });
});
