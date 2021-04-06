import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Home from "routes/Home";
import Search from "routes/Search";
import TV from "routes/TV";

function CustomRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tv" exact component={TV} />
        <Route path="/search" exact component={Search} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}
export default CustomRouter;