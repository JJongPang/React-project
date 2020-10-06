import React from "react";
import Login from "./component/login/login";
import styles from "./App.module.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Maker from "./component/maker/maker";

const App = ({ authService }) => {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login authService={authService} />
          </Route>
          <Route exact path="/maker">
            <Maker authService={authService} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
