import React from "react";
import PropTypes from "prop-types";

const ProfileTop = ({
  profile: {
    user: { name, email, avatar },
  },
}) => {
  return (
    <div className="profile-top bg-primary p-2">
      <img className="round-img my-1" src={avatar} alt />
      <h1 className="large">{name}</h1>
      <h1 className="large">{email}</h1>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileTop;
