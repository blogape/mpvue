import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./home.js";
import App from "./App";
import Ihome from "./components/content/index";
import Login from "./pages/login/";
class IRouter extends Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Route exact path="/login" component={Login} />
          <Route
            path="/home"
            render={() => (
              <Home>
                <Switch>
                  <Route exact path="/home" component={Ihome} />
                </Switch>
              </Home>
            )}
          />
        </App>
      </HashRouter>
    );
  }
}
export default IRouter;
