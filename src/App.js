import React, { Component,Fragment } from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Admain from "./routers/admain/Admain"
import Login  from "./routers/login/Login"
export default class App extends Component {
  handleClick(){
    console.log(111)
  }
  render() {
    return (
      <Fragment>
          <BrowserRouter>
              <Switch>
                <Route path="/admain" component={Admain}></Route>
                <Route path="/" component={Login}></Route>
              </Switch>
          </BrowserRouter>
      </Fragment>
         
     
    )
  }
}
