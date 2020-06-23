const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const config = require('./webpack.config');
const port = process.env.PORT || 3000;

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    disableHostCheck: true
}).listen(port, '0.0.0.0', function(err) {
    if (err) {
        return console.log(err);
    }
    console.log('Listening at http://localhost:' + port + '/');
});
