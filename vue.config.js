module.exports = {
    devServer: {
        port: 8888,
        host: 'localhost',
        https: false,
        open: true,  //启动服务时自动打开浏览器访问
    },

    lintOnSave: false, //关闭格式检查
    productionSourceMap: false, //打包时不会生成.map文件，加快打包是速度
}