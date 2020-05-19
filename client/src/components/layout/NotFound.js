import React, { Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const NotFound = ({ auth: { user, isAuthenticated, loading } }) => {
  return (
    <Fragment>
      {isAuthenticated && loading ? (
        <div className="error-page">
          <h2 className="headline text-yellow"> 404</h2>
          <div className="error-content">
            <h3>
              <i className="fa fa-warning text-yellow" /> Oops! Page not found.
            </h3>
            <p>
              We could not find the page you were looking for. Meanwhile, you
              may{" "}
              <Link to="/dashboard">
                <span className="hide-sm">Return to dashboard</span>
              </Link>
            </p>
          </div>
        </div>
      ) : (
        <Redirect to="/" />
      )}
    </Fragment>
  );
};

NotFound.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(NotFound);
