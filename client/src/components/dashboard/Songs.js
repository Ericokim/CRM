import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import moment from "moment";
import { connect } from "react-redux";
import { deleteSong } from "../../actions/data";

const Songs = ({ song, deleteSong }) => {
  const script = document.createElement("script");
  script.src = "js/content.js";
  script.async = true;
  document.body.appendChild(script);

  const Tracklist = song.map((exp) => (
    <tr key={exp._id}>
      <td>{exp.title}</td>
      <td>{exp.artist}</td>
      <td>{exp.genre}</td>
      <td>{exp.subGenre}</td>
      <td>
        <Moment format="YYYY/MM/DD">{moment.utc(exp.releaseDate)}</Moment>
      </td>
      <td>
        <div className="btn-group">
          <Link
            to={`/data/songs/update/${exp._id}`}
            type="button"
            className="btn btn-success btn-sm"
          >
            Edit
          </Link>

          <button
            type="button"
            onClick={() => deleteSong(exp._id)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <div className="box">
        <div className="box-header">
          <h3 className="box-title">Song Tracks</h3>
        </div>
        <div className="box-body">
          <table
            id="example1"
            className="table table-bordered table-striped alter table-hover"
          >
            <thead>
              <tr>
                <th>Title</th>
                <th>Artist</th>
                <th>Genre</th>
                <th>Sub-Genre</th>
                <th>Release Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>{Tracklist}</tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

Songs.propTypes = {
  song: PropTypes.array.isRequired,
  deleteSong: PropTypes.func.isRequired,
};

export default connect(null, { deleteSong })(Songs);
