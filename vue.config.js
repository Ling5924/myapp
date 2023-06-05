const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
      host: '0.0.0.0',
    // https:true,
      port: 3000,
      client: {
        webSocketURL: 'ws://0.0.0.0:3000/ws',
      },
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
  },
  
  transpileDependencies: true
})