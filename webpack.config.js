var path = require("path");
var webpack = require("webpack");
// ls = require("webpack-node-externals");

module.exports = {
    entry: "./src/main",
    target: "node",
    output: {
        filename: "artcite.js"
    },
    resolve: {
        extensions: [ ".js", ".ts" ],
        modules: [ "node_modules" ]
    },
    module: {
        rules: [
            {
                test: /\.html?$/,
                use: "html-loader"
            },
            {
                test: /\.ts$/,
                use: "ts-loader"
            }
        ]
    },
    devtool: "#sourcemap",
    plugins: [
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)@angular/,
            path.resolve('./src'),
            {}
        )
    ]
    // externals: [ nodeExternals() ]
};