import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./components/Main";
import Reports from "./components/Reports";
import Activities from "./components/Activities";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/reports">
          <Reports />
        </Route>
        <Route exact path="/activities">
          <Activities />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
