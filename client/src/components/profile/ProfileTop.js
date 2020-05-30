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
      <img className="round-img my-1" src={avatar} alt />
      <h4 className="large">{name}</h4>
      <h5 className="large">{email}</h5>
      <p className="lead">
        {status}
        {company && <span> at {company.toUpperCase()}</span>}
      </p>
      <p>{location && <span>{location}</span>}</p>
    </section>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileTop;
