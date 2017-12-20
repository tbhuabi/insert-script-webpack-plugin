# InsertScriptWebpackPlugin

在 html 中，插入 script 标签。如添加 jQuery;

```js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InsertScriptWebpackPlugin = require('insert-script-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: { /** **/ },
    module: { /** **/ },
    plugins: [
        new InsertScriptWebpackPlugin({
            paths: ['http://www.example.com/jquery.js']
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}

```