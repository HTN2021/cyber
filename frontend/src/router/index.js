import React from "react";
import { Switch, Route, Redirect } from "react-router";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../pages/Home";
import Dashboard from "../components/Dashboard";
import Login from "../components/Login";

import GlobalStyles from "../globalStyles";

const Router = () => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Switch>
        <Route exact path="/" component={() => <Landing />} />
        <Route exact path="/login" component={() => <Login />} />
        <Route exact path="/home" component={() => <Dashboard />} />
        <Redirect to="/" />
      </Switch>
    </React.Fragment>
  );
};

const Landing = ({ match }) => {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
};

export default Router;
