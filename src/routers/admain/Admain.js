import React, { Component } from 'react'
import memoryUtils from "../../utils/memoryUtils"
import {Redirect} from "react-router-dom"
export default class Admain extends Component {
    render(){
        const user=memoryUtils.user
        console.log(user)
        if(!user||!user._id){
			return <Redirect to="/login"/>	  
        }
        return(
            <div>我是主页hello{user.username}</div>
            // <div>我是主页啊{}</div>
        )
        }
}
