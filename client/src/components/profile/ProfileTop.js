import React from "react";

import PropTypes from "prop-types";

const ProfileTop = ({
  profile: {
    status,
    company,
    location,
    user: { name, email, avatar },
  },
}) => {
  return (
    <section className="content">
      <img
        className="profile-user-img img-responsive img-circle no-border"
        src={avatar}
        alt="User image"
      />
      <h4 className="profile-username text-center">{name}</h4>
      <h5 className="profile-username text-center">{email}</h5>
      <p className="text-muted text-center">
        {status}
        {company && <span> at {company.toUpperCase()}</span>}
      </p>
      <p className="text-muted text-center">
        {location && <span>{location}</span>}
      </p>
    </section>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileTop;
