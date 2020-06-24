import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [value, setValue] = useState({ hidden: true });

  const toggleShow = () => {
    setValue({ hidden: !value.hidden });
  };

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <div className="login-box">
        <div className="login-logo">
          <b>Sign</b>In
        </div>
        <div className="login-box-body">
          <p className="login-box-msg"> Sign Into Your Account</p>
          <form onSubmit={(e) => onSubmit(e)}>
            {/* <div
              className="illustration"
              onClick={toggleShow}
              style={{ cursor: "pointer", color: "#000" }}
            >
              {value.hidden ? (
                <i className="fa fa-eye-slash" />
              ) : (
                <i className="fa fa-eye" />
              )}
            </div> */}

            <div className="form-group has-feedback">
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
                name="email"
                value={email}
                onChange={(e) => onChange(e)}
                required
                autoFocus
              />
              <span className="glyphicon glyphicon-envelope form-control-feedback" />
            </div>
            <div className="form-group has-feedback">
              <input
                type={value.hidden ? "password" : "text"}
                className="form-control"
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => onChange(e)}
                minLength="6"
              />
              <span className="glyphicon glyphicon-lock form-control-feedback" />
            </div>
            <div className="row">
              <div className="col-xs-8">
                <div className="checkbox icheck">
                  <label htmlFor="checkbox">
                    <input
                      type="checkbox"
                      id="checkbox"
                      onClick={toggleShow}
                      checked={!value.hidden}
                    />
                    Show password
                  </label>
                </div>
              </div>
              <div className="col-xs-4">
                <input
                  type="submit"
                  className="btn btn-primary btn-block btn-flat"
                  value="Login"
                />
              </div>
            </div>
          </form>
          <p className="">
            Don't have an account? <Link to="/register">Sign Up</Link>
          </p>
        </div>
      </div>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
