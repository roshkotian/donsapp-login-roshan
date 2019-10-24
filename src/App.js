import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Login } from "./components/loginComponent/login";
import { HomePage } from "./components/loginComponent/HomePage";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/homePage" component={HomePage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
