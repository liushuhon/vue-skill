const webpack = require('webpack');
const path = require('path');
const resolve = dir => path.join(__dirname, dir);

module.exports = {
    lintOnSave: false,
    devServer: {
        host: '127.0.0.1'
    },
    chainWebpack: config => {
        config.plugin('provide').use(webpack.ProvidePlugin, [
            {
                $: 'jquery',
                jquery: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery'
            }
        ]);
        config.resolve.alias
            .set('public', resolve('public'));
    }
};
