module.exports = {
  // npm start [key]
  scripts: {
    // server
    default: 'next start',
    dev: 'next',

    // build
    build: 'next build && next export',
    typeCheck: 'tsc',

    // tools
    update: 'npx npm-check-updates -u',
  },
};
