const { composePlugins, withNx } = require('@nx/webpack');
const { withReact } = require('@nx/react');
const ModuleFederationPlugin =
  require('webpack').container.ModuleFederationPlugin;
const { dependencies: deps } = require('../package.json');

// Nx plugins for webpack.
module.exports = composePlugins(
  withNx(),
  withReact({
    // Uncomment this line if you don't want to use SVGR
    // See: https://react-svgr.com/
    // svgr: false
  }),

  (config) => {
    // Update the webpack config as needed here.
    // e.g. `config.plugins.push(new MyPlugin())`
    config.plugins.push(
      new ModuleFederationPlugin({
        remotes: {
          ReactMFE: 'ReactMFE@http://localhost:4202/remoteEntry.js',
        },
        shared: {
          react: { singleton: true, requiredVersion: deps.react },
          'react-dom': { singleton: true, requiredVersion: deps['react-dom'] },
        },
      })
    );
    return config;
  }
);
