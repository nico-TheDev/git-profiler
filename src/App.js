import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Search from "./components/Search";
import UserProfile from "./components/UserProfile";

export default function App() {

  return (
    <Router>
      <Route
        exact
        path="/"
        component={Search}
      ></Route>

      <Route
        path="/user/:username"
        component={UserProfile}
      ></Route>
    </Router>
  );
}
