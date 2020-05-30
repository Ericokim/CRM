import React, { useState, useEffect, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile, getCurrentProfile } from "../../actions/profile";

const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history,
}) => {
  const [formData, setFormData] = useState({
    company: "",
    location: "",
    status: "",
  });

  useEffect(() => {
    getCurrentProfile();
    setFormData({
      company: loading || !profile.company ? "" : profile.company,
      location: loading || !profile.location ? "" : profile.location,
      status: loading || !profile.status ? "" : profile.status,
    });
  }, [loading, getCurrentProfile]);

  const { company, location, status } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history, true);
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
                      placeholder="Company"
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

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(EditProfile)
);
