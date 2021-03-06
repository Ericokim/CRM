import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ReactLoading from "react-loading";
import ProfileTop from "./ProfileTop";
import { getProfileById, deleteAccount } from "../../actions/profile";

const Loading = () => <ReactLoading type="bars" color="#20ad4f" />;

const Profile = ({
  getProfileById,
  deleteAccount,
  profile: { profile, loading },
  auth,
  match,
}) => {
  const nullProfile = !profile;
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById, match.params.id, nullProfile]);

  return (
    <Fragment>
      {profile === null || loading ? (
        <section className="content">
          <p>You have not yet setup a profile, please add some info</p>
          <Link to="/create-profile" className="btn btn-primary btn-sm">
            Create Profile
          </Link>
        </section>
      ) : (
        <section className="content">
          <div className="col-md-3">
            <div className="box box-primary">
              <div className="box-body box-profile">
                <ProfileTop profile={profile} />

                {auth.isAuthenticated &&
                  auth.loading === false &&
                  auth.user._id === profile.user._id && (
                    <>
                      
                      <Link to="/edit-profile" className="btn btn-dark btn-sm">
                        Edit Profile
                      </Link>

                      <p
                        className="btn btn-dark btn-sm"
                        onClick={() => deleteAccount()}
                      >
                        Delete My Account
                      </p>
                    </>
                  )}
              </div>
            </div>
          </div>
        </section>
      )}
    </Fragment>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getProfileById, deleteAccount })(
  Profile
);
