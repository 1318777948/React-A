import ajax from "./ajax";
//应用格式：export const 自定义请求函数的名字=( 请求参数，请求参数)=>ajax('请求后缀地址',{请求参数，请求参数},'什么方式请求？是GET还是POST')
//登录注册(参数少的话就把参数全都写上)
export const reqLogin=(username,password)=>ajax('/login',{username,password},'POST')
//添加用户(参数多的话就，使用usr就是一个对象存起来，)
export const reqAddUser=(user)=>ajax('/manage/user/add',user,'POST')