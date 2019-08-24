import React, { Component,Fragment} from 'react'
import "./login.css"
import {reqLogin} from '../../api/index'
import memoryUtils from "../../utils/memoryUtils"
import { Form, Icon, Input, Button, Checkbox,message } from 'antd';
class Login extends Component {
    constructor(){
        super()
        this.state={
            username:"",
            pass:"",
        }
    }
    handleSubmit = e => {
        e.preventDefault()
        this.props.form.validateFields(async(err, values) => {
          if (!err) {       
            const {username,password}=values
            const result=await reqLogin(username,password)
            // console.log('请求成功',result)
            // const result=response.data      //返回的结果
            if(result.status===0){
                const user=result.data        
                memoryUtils.user=user           //保存此时的user
                message.success('登陆成功')
                this.props.history.replace("/")//进入主界面，不需要回退回去
                
            }else{
                message.error(result.msg)
            }
          }else{
              console.log('校验失败了')
          }
        })
      }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Fragment>
                <div className="login">
                <h1>登录</h1>
                <Form onSubmit={this.handleSubmit} className="login-form">
               `<Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: '请输入你的用户名' }],
                    })(
                    <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Username"
                    />
                    )}
               </Form.Item>
                <Form.Item>
                    {
                        getFieldDecorator('password', {
                        rules: [ 
                                {required: true, message: '密码不能为空' },
                                {max:12,  message: '长度最长为12'},
                                {min:4 ,  message: '长度最小为4'},
                                {pattern:/^[0-9A-Za-z_]+$/,message: '密码必须为数字、字母、下划线'},
                        ],
                    })(
                        <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="Password"
                        />
                    )
                    }
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(<Checkbox>Remember me</Checkbox>)}
                    <a className="login-form-forgot" href="">
                        Forgot password
                    </a>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    {/* Or <a href="">register now!</a> */}
                </Form.Item>
                </Form>
                </div>
            </Fragment>
        )
    }
}
const WrapLogin=Form.create()(Login)
export default WrapLogin