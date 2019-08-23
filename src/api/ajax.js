//能发送异步axios，封装axios库，函数返回值使promise对象
//优化定义一个promise,
import {message} from 'antd'
import axios from 'axios'
export default function ajax(url,data={},type='GET'){
    return new Promise((resolve,reject)=>{
        let promise                     //定义一个promise
        if(type==='GET'){
            promise=axios.get(url,{     //把axios放在promise身上
                params:data             //请求的数据
            })
        }else{//发送post请求
            promise=axios.post(url,data)  //把axios放在promise身上
        }
        promise.then(response=>{            //每次调用axios，都会执行这个
            resolve(response)
            console.log("我是封装的axios：我的请求成功了！我返回的数据是：",response.data)
        }).catch(error=>{
            message.error("我是封装的axios:",'我的请求出错了！'+error.message)
        })
    })  
}