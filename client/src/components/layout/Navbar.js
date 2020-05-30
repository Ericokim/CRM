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
        <li>
          <Link to={`/profile/${user && user._id}`}>Profile</Link>
        </li>

        <li>
          <a onClick={logout} href="#!">
            <span className="hide-sm">Logout</span>
          </a>
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
