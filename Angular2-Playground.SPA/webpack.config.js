var isDevBuild = process.argv.indexOf('--env.prod') < 0;
var path = require('path');
var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');
var merge = require('webpack-merge');
// to attach to chrome in vscode
var WriteFilePlugin = require('write-file-webpack-plugin');
var allFilenamesExceptJavaScript = /\.(?!js(\?|$))([^.]+(\?|$))/;


// Configuration in common to both client-side and server-side bundles
var sharedConfig = {
    resolve: { extensions: [ '', '.js', '.ts' ] },
    output: {
        filename: '[name].js',
        publicPath: '/dist/' // Webpack dev middleware, if enabled, handles requests for this URL prefix
    },
    module: {
        loaders: [
            { test: /\.ts$/, include: /ClientApp/, loader: 'ts', query: { silent: true } },
            { test: /\.html$/, loader: 'raw' },
            { test: /\.css$/, loader: 'to-string!css' },
            { test: /\.(png|jpg|jpeg|gif|svg)$/, loader: 'url', query: { limit: 25000 } }
        ]
    },
    devServer: {
        port: 30000,
        historyApiFallback: true,
        contentBase: path.join(__dirname, './wwwroot/'),
        inline: true,
        open: true,
        // to attach to chrome in vscode
        outputPath: path.join(__dirname, './wwwroot/dist'),
        plugins: [new webpack.HotModuleReplacementPlugin()]
    } 
};

// Configuration for client-side bundle suitable for running in browsers
var clientBundleConfig = merge(sharedConfig, {
    entry: { 'main-client': './ClientApp/boot-client.ts' },
    output: { path: path.join(__dirname, './wwwroot/dist') },
    devtool: isDevBuild ? 'source-map' : null,
    plugins: [
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./wwwroot/dist/vendor-manifest.json')
        })
    ].concat(isDevBuild ?
        [
        // Plugins that apply in dev builds only
        new WriteFilePlugin()
        ] :
        [
        // Plugins that apply in production builds only
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ])
});

// Configuration for server-side (prerendering) bundle suitable for running in Node
var serverBundleConfig = merge(sharedConfig, {
    entry: { 'main-server': './ClientApp/boot-server.ts' },
    output: {
        libraryTarget: 'commonjs',
        path: path.join(__dirname, './ClientApp/dist')
    },
    target: 'node',
    devtool: 'inline-source-map',
    externals: [nodeExternals({ whitelist: [allFilenamesExceptJavaScript] })] // Don't bundle .js files from node_modules
});

module.exports = [clientBundleConfig, serverBundleConfig];
