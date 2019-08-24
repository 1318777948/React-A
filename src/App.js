import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Admain from './routers/admain/Admain';
import Login from './routers/login/Login';
export default class App extends Component {
  handleClick() {
    console.log(111);
  }
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact  component={Admain}/>
            <Route path="/login" exact component={Login}/>
          </Switch>
        </BrowserRouter>
      </Fragment>
    );
  }
}
