import React from "react";

import "./styles.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Layout from "./Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Layout>
          <Route exact path="/home" component={Home} />
          <Route exact path="/profile" component={Profile} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}
