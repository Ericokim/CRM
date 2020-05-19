import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
  },
}) => {
  return (
    <div>
      <Link to={`/profile/${_id}`} className="btn btn-primary">
        View Profile
      </Link>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
