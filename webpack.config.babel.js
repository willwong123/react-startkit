export default {
    entry: {
        app: './src/app.js',
    },
    output: {
        filename: './dest/[name].min.js',
    },
    module: {
        preLoaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'eslint',
            },
        ],
        loaders: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                loader: 'babel',
            },
        ],
    },
    eslint: {
        configFile: './.eslintrc.yml',
        failOnWarning: false,
        failOnError: true,
    },
};
