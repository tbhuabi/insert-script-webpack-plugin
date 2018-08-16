function InsertScriptWebpackPlugin(options) {
    this.options = options;
}

InsertScriptWebpackPlugin.prototype.apply = function (compiler) {
    var paths = this.options.paths || [];
    compiler.hooks.compilation.tap('InsertScriptWebpackPlugin', function (compilation) {
        compilation.hooks.htmlWebpackPluginBeforeHtmlProcessing
            .tapAsync('InsertScriptWebpackPlugin', function (htmlPluginData, callback) {
                for (var i = paths.length - 1; i >= 0; i--) {
                    htmlPluginData.assets.js.unshift(paths[i]);
                }
                callback(null, htmlPluginData);
            });
    });
};

module.exports = InsertScriptWebpackPlugin;