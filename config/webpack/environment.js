const { environment } = require('@rails/webpacker')

module.exports = environment

const webpack = require('webpack')
// JQuery
environment.plugins.append(
  'Provide',
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    'window.jQuery': 'jquery',
    Popper: ['popper.js', 'default']
  })
)