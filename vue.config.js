const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: process.env.DEPLOY_ENV === "GH_PAGES" ? "/meme-generator/" : "",
})
