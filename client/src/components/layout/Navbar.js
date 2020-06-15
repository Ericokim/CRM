import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getProfileById } from "../../actions/profile";
import { logout } from "../../actions/auth";

const Navbar = ({ auth: { user, isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <div className="navbar-custom-menu">
      <ul className="nav navbar-nav">
        <li className="dropdown user user-menu">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown">
            <img
              src={user && user.avatar}
              className="user-image"
              alt="User Image"
            />
            <span className="hidden-xs">{user && user.name}</span>
          </a>
          <ul className="dropdown-menu user">
            <li className="user-header pull-left">
              <img
                src={user && user.avatar}
                className="img-circle no-border"
                alt="User Image"
              />
              <p>
                <b>{user && user.name}</b>
              </p>
              <p>{user && user.email}</p>
            </li>

            <li className="user">
              <div className="btn btn-group">
                <Link to={`/profile/${user && user._id}`}>
                  <p className="btn btn-default btn-flat btn-sm">Profile</p>
                </Link>
              </div>
              <div className="btn btn-group">
                <p
                  onClick={() => logout()}
                  className="btn btn-default btn-flat btn-sm"
                >
                  Sign out
                </p>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );

  return (
    <header className="main-header">
      <Link to="/" className="logo">
        <span className="logo-mini">
          <b>A</b>LT
        </span>
        <span className="logo-lg">
          <b>Admin</b>LTE
        </span>
      </Link>
      <nav className="navbar navbar-static-top">
        <a
          href="#"
          className="sidebar-toggle"
          data-toggle="push-menu"
          role="button"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </a>
        {!loading && <div>{isAuthenticated ? authLinks : null}</div>}{" "}
      </nav>
    </header>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
