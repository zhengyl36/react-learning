/**
 * Created by karl.zheng on 2018/1/8.
 */
var path = require('path');
module.exports = {
    entry: './index.js',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'./dist/'),
        // publicPath: ''
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader?presets[]=es2015&presets[]=react'
            },
            {
                test: /\.css$/, use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'file-loader?name=img/[name].[ext]'
            }
        ]
    }
}
