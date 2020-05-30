import React, { useState, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile } from "../../actions/profile";

const CreateProfile = ({ createProfile, history }) => {
  const [formData, setFormData] = useState({
    company: "",
    location: "",
    status: "",
  });


  const {
    company,
    location,
    status,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history);
  };
  return (
    <Fragment>
      <section className="content">
        <div className="row">
          <div className="col-md-6">
            <div className="box">
              <div className="box-body">
                <form className="form" onSubmit={(e) => onSubmit(e)}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Job Title"
                      name="status"
                      value={status}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Company Name"
                      name="company"
                      value={company}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Location"
                      name="location"
                      value={location}
                      onChange={(e) => onChange(e)}
                    />
                  </div>

                  <input type="submit" className="btn btn-primary my-1" />
                  <Link className="btn btn-light my-1" to="/dashboard">
                    Go Back
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
};

export default connect(null, { createProfile })(withRouter(CreateProfile));
