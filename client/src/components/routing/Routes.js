import React from "react";
import { Route, Switch } from "react-router-dom";
import Register from "../auth/Register";
import Login from "../auth/Login";
import Alert from "../layout/Alert";
import Dashboard from "../dashboard/Dashboard";

import EditTrack from "../dashboard/EditSongs";
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
        <Route exact path="/profile/:id" component={Profile} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/create-profile" component={CreateProfile} />
        <PrivateRoute exact path="/edit-profile" component={EditProfile} />

        <PrivateRoute
          exact
          path="/data/songs/update/:id"
          component={EditTrack}
        />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default Routes;
