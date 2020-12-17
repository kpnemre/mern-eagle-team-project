import React from 'react'
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Main from "../pages/Main";
import UserComments from "../pages/UserComments"

// import Navbar from "../components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function AppRouter() {

  return (
    <Router>
      {/* <Navbar /> */}

      <Switch>
      <Route exact path="/register" component={SignUp} />
    <Route exact path="/login" component={SignIn} />
    <Route exact path="/UserComments" component={UserComments} />
    <Route path="/" component={Main} />
      </Switch>

    </Router>
  );
}

export default AppRouter;