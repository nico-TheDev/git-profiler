import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Search from "./components/Search";
import UserProfile from "./components/UserProfile";
import ErrorPage from "./components/ErrorPage";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Search}></Route>
        <Route path="/user/:username" component={UserProfile}></Route>
        <Route path="/error" component={ErrorPage}></Route>
        <Route component={ErrorPage}></Route>
      </Switch>
    </Router>
  );
}
