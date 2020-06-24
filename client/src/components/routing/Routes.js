import React from "react";
import { Route, Switch } from "react-router-dom";
import Register from "../auth/Register";
import Login from "../auth/Login";
import Alert from "../layout/Alert";
import Dashboard from "../dashboard/Dashboard";
import Table from "../data/Table";
import CreateBook from "../data/Create";
import EditBook from "../data/Edit";
import Profile from "../profile/Profile";
import CreateProfile from "../profile-forms/CreateProfile";
import EditProfile from "../profile-forms/EditProfile";
import NotFound from "../layout/NotFound";
import PrivateRoute from "../routing/PrivateRoute";

const Routes = (props) => {
  return (
    <div className="content-wrapper">
      <Alert />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/profile/:id" component={Profile} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/table" component={Table} />
        <PrivateRoute exact path="/create-profile" component={CreateProfile} />
        <PrivateRoute exact path="/edit-profile" component={EditProfile} />
        <PrivateRoute exact path="/create" component={CreateBook} />
        <PrivateRoute exact path="/edit/:id" component={EditBook} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default Routes;
