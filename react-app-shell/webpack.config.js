const { composePlugins, withNx } = require('@nx/webpack');
const { withReact, withModuleFederation } = require('@nx/react');
const { dependencies: deps } = require('../../package.json');

// Nx plugins for webpack.
module.exports = composePlugins(
  withNx(),
  withReact({
    // Uncomment this line if you don't want to use SVGR
    // See: https://react-svgr.com/
    // svgr: false
  }),
  withModuleFederation({
    remotes: {
      ReactMFE: 'ReactMFE@http://localhost:4201/remoteEntry.js',
    },
    shared: {
      react: { singleton: true, requiredVersion: deps.react },
      'react-dom': { singleton: true, requiredVersion: deps['react-dom'] },
    },
  }),
  (config) => {
    // Update the webpack config as needed here.
    // e.g. `config.plugins.push(new MyPlugin())`
    return config;
  }
);
