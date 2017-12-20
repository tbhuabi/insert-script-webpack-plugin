function InsertScriptWebpackPlugin(options) {
    this.options = options;
}

InsertScriptWebpackPlugin.prototype.apply = function (compiler) {
    var paths = this.options.paths || [];
    compiler.plugin('compilation', function (compilation) {
        compilation.plugin('html-webpack-plugin-before-html-processing', function (htmlPluginData, callback) {
            for (var i = paths.length - 1; i >= 0; i--) {
                htmlPluginData.assets.js.unshift(paths[i]);
            }
            callback(null, htmlPluginData);
        });
    });
};

module.exports = InsertScriptWebpackPlugin;