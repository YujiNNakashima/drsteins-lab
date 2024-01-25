const { composePlugins, withNx } = require('@nx/webpack');
const ModuleFederationPlugin =
  require('webpack').container.ModuleFederationPlugin;
const { dependencies: deps } = require('../package.json');

const { withReact } = require('@nx/react');

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
        name: 'ReactMFE',
        filename: 'remoteEntry.js',
        exposes: {
          './Module': './src/app/app.tsx',
        },
        shared: {
          react: { singleton: true, requiredVersion: deps.react },
          'react-dom': { singleton: true, requiredVersion: deps['react-dom'] },
        },
      })
    );

    // Make sure to return the config object itself
    return config;
  }
);
