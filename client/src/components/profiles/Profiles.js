import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import ProfileItem from "./ProfileItem";
import { getProfileById } from "../../actions/profile";

const Profiles = ({
  getProfileById,
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
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div className="profiles">
            <ProfileItem profile={profile} />
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Profiles.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfileById })(Profiles);
