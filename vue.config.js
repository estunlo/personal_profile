module.exports = {
  publicPath : '/',

  outputDir : 'dist',

  assetsDir : 'assets',

  lintOnSave : true,

  runtimeCompiler : true,

  productionSourceMap : true,

  css : {
    extract : true,

    sourceMap : false,

    loaderOptions : {},

    modules : false
  },

  devServer    : {
    hot   : true,
    host  : '0.0.0.0',
    port  : 8080,
    https : false,
    open  : true
  },
  pluginOptions : {}
}
