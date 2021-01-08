import React from "react";
import SignUp from "../pages/SignUp";
// import SignIn from "../pages/SignIn";
import Main from "../pages/Main";
import AllComments from "../pages/AllComments";

// import Navbar from "../components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function AppRouter() {
  return (


    <Router>


      <Switch>
        <Route exact path="/register" component={SignUp} />
        <Route exact path="/Comments" component={AllComments} />
        <Route path="/" component={Main} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
