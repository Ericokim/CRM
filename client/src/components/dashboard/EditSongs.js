import React, { useState, useEffect, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { Modal, Form, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { UpdateSong, getSong } from "../../actions/data";

const Edit = ({
  data: { data, loading },
  UpdateSong,
  getSong,
  history,
  match,
}) => {
  const [formData, setFormData] = useState({
    title: "",
    artist: "",
    genre: "",
    subGenre: "",
    releaseDate: "",
  });

  useEffect(() => {
    getSong(match.params.id);
    setFormData({
      title: loading || !data.songs ? "" : data.songs.title,
      artist: loading || !data.songs ? "" : data.songs.artist,
      genre: loading || !data.songs ? "" : data.songs.genre,
      subGenre: loading || !data.songs ? "" : data.songs.subGenre,
      releaseDate: loading || !data.songs ? "" : data.songs.releaseDate,
    });
  }, [loading, getSong, match.params.id]);

  const { title, artist, genre, subGenre, releaseDate } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    UpdateSong(match.params.id, formData, history, true);
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
                    <label>Title:</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="title"
                      name="title"
                      value={title}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Artist:</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Artist"
                      name="artist"
                      value={artist}
                      onChange={onChange}
                    />
                  </div>

                  <div className="form-group">
                    <label>Genre: </label>
                    <select
                      name="genre"
                      value={genre}
                      onChange={onChange}
                      className="form-control select2"
                    >
                      <option selected="selected">Select Genre</option>
                      <option value="bongo">bongo</option>
                      <option value="gospel">gospel</option>
                      <option value="genge">genge</option>
                      <option value="R N'B">R N'B</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Sub-Genre: </label>
                    <select
                      name="subGenre"
                      value={subGenre}
                      onChange={onChange}
                      className="form-control select2"
                    >
                      <option selected="selected">Select Sub-Genre</option>
                      <option value="bongo">bongo</option>
                      <option value="gospel">gospel</option>
                      <option value="genge">genge</option>
                      <option value="R N'B">R N'B</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Date:</label>
                    <div className="input-group">
                      <div className="input-group-addon">
                        <i className="fa fa-calendar" />
                      </div>
                      <input
                        type="date"
                        className="form-control"
                        placeholder="Release Date"
                        name="releaseDate"
                        value={releaseDate}
                        onChange={onChange}
                      />
                    </div>
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

Edit.propTypes = {
  UpdateSong: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  getSong: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, { UpdateSong, getSong })(
  withRouter(Edit)
);
