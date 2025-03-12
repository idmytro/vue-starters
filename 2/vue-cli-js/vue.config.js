module.exports = {
    chainWebpack: config => {
        config
          .plugin('html')
          .tap((args) => {
            return [{
              ...args[0],
              title: '@product_name@',
            }]
          })
    }
  }
