const webpack = require('webpack');

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
    }
};
