const {override,fixBabelImports,addLessLoader}=require('customize-cra')

module.exports=override(
    //针对antd实现按需打包：根据import来打包（使用babel-plugin-import这个插件）
    fixBabelImports('import',{
        libraryName:'antd',
        libraryDirectory:'es',
        style:true,             //自动打包相关的样式
    }),
    addLessLoader({
        javascriptEnabled:true,
        modifyVars:{'@primary-color':'#80688C'}  //配置主题颜色，官网还有许多，可以自行配置
    })
);