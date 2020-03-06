import * as React from "react";
import { Route, HashRouter as Router, Switch } from "react-router-dom";
import { App } from "./App";
import { ScrollBar } from "./components/weekly/page";

export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <Router>
      <div className="container-fluid">
        <Route component={ScrollBar} />
        <Switch>
          <Route exact path="/weekly" component={ScrollBar} />
        </Switch>
      </div>
    </Router>
  );
};
