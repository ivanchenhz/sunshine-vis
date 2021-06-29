module.exports = {
  mode: process.env.NODE_ENV && 'jit',
  purge: [
    './index.html',
    './src/**/*.svelte',
  ],
}
