import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <div className="register-box">
        <div className="register-logo">
          <b>Sign</b>Up
        </div>
        <div className="register-box-body">
          <p className="login-box-msg">Create Your Account</p>
          <form onSubmit={(e) => onSubmit(e)} method="post">
            <div className="form-group has-feedback">
              <input
                type="text"
                autoFocus
                className="form-control"
                placeholder="Full name"
                name="name"
                value={name}
                onChange={(e) => onChange(e)}
              />
              <span className="glyphicon glyphicon-user form-control-feedback" />
            </div>
            <div className="form-group has-feedback">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
                value={email}
                onChange={(e) => onChange(e)}
              />
              <span className="glyphicon glyphicon-envelope form-control-feedback" />
            </div>
            <div className="form-group has-feedback">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => onChange(e)}
              />
              <span className="glyphicon glyphicon-lock form-control-feedback" />
            </div>
            <div className="form-group has-feedback">
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                name="password2"
                value={password2}
                onChange={(e) => onChange(e)}
              />
              <span className="glyphicon glyphicon-log-in form-control-feedback" />
            </div>
            <div className="row">
              <div className="col-xs-8"></div>

              <div className="col-xs-4">
                <input
                  type="submit"
                  className="btn btn-primary btn-block btn-flat"
                  value="Register"
                />
              </div>
            </div>
          </form>
          <p>
            Already have an account? <Link to="/">Sign In</Link>
          </p>
        </div>
      </div>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
