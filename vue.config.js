module.exports = {
    devServer: {
        port: 8888,
        host: 'localhost',
        https: false,
        open: true,  //启动服务时自动打开浏览器访问
        proxy: {  //开发环境代理配置
            // key用变量用[]包裹，如'/dev-api'
            [ process.env.VUE_APP_BASE_API ]: {
                target: process.env.VUE_APP_SERVICE_URL,  //目标服务器地址
                changeOrigin: true,  //开启代理服务器
                pathRewrite: {
                    [ '^' + process.env.VUE_APP_SERVICE_URL ]: ''  //正则匹配，将左变为空
                }
            }
        }
    },

    lintOnSave: false, //关闭格式检查
    productionSourceMap: false, //打包时不会生成.map文件，加快打包是速度
}