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

  return (
    <Fragment>
      <div className="box">
        <div className="box-header">
          <h3 className="box-title">Song Tracks</h3>
        </div>
        <div className="box-body">
          <Link
            to="/create"
            type="button"
            style={{ float: "right" }}
            className="btn btn-primary btn-sm"
          >
            Add
          </Link>
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
            <tbody>
              {song &&
                song.map((item, index) => (
                  <tr key={item._id}>
                    <td>{item.title}</td>
                    <td>{item.artist}</td>
                    <td>{item.genre}</td>
                    <td>{item.subGenre}</td>
                    <td>
                      <Moment format="YYYY/MM/DD">
                        {moment.utc(item.releaseDate)}
                      </Moment>
                    </td>
                    <td>
                      <div className="btn-group">
                        <Link
                          to={`/edit/${item._id}`}
                          type="button"
                          className="btn btn-success btn-sm"
                        >
                          Edit
                        </Link>

                        <button
                          type="button"
                          onClick={() => deleteSong(item._id)}
                          className="btn btn-danger btn-sm"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
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
