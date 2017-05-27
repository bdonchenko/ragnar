module.exports = {
    entry: "./src/Ragnar.ts",
    output: {
        filename: "Ragnar.js",
        path: __dirname + "/lib"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        extensions: [".ts", ".js", ".json"]
    },

    module: {
        rules: [
            {
                test: /\.ts?$/,
                loader: "ts-loader",
                exclude: [/node_modules/]
            },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    }
};