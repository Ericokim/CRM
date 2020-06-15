import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import moment from "moment";
import EditSongs from "./EditSongs";
import Confirm from "react-confirm-bootstrap";
import { connect } from "react-redux";
import { deleteSong } from "../../actions/data";

const Songs = ({ song, deleteSong }) => {
  const script = document.createElement("script");
  script.src = "js/content.js";
  script.async = true;
  document.body.appendChild(script);

  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  return (
    <Fragment>
      <div className="box">
        <div className="box-header">
          <h3 className="box-title">Song Tracks</h3>
          <Link
            to="/create"
            type="button"
            style={{ float: "right" }}
            className="btn btn-primary btn-sm"
          >
            Add
          </Link>
        </div>
        <div className="box-body">
          <EditSongs data={song} show={isOpen} hide={hideModal} />
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
                  <tr key={index}>
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
                      <button
                        type="button"
                        onClick={showModal}
                        className="btn btn-success btn-sm btn-flat"
                      >
                        Edit
                      </button>

                      <Confirm
                        onConfirm={() => deleteSong(item._id)}
                        body="Are you sure you want to delete this?"
                        confirmText="Confirm Delete"
                        title="Delete Song"
                      >
                        <button
                          type="button"
                          className="btn btn-danger btn-sm btn-flat"
                        >
                          Delete
                        </button>
                      </Confirm>
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
