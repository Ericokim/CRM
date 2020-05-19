import React, { useState, useEffect, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createSong, getAllSongs} from "../../actions/data";

const UpdateProductModal = ({
  data: { data, loading },
  getAllSongs,
  createSong,
  history,
}) => {
  const [formData, setFormData] = useState({
    title: "",
    artist: "",
    genre: "",
    subGenre: "",
    currentName: "",
    releaseDate: "",
    id: "",
  });

  useEffect(() => {
    getAllSongs();
    setFormData({
      title: loading || !data ? "" : data.title,
      artist: loading || !data ? "" : data.artist,
      genre: loading || !data ? "" : data.genre,
      subGenre: loading || !data ? "" : data.subGenre,
      releaseDate: loading || !data ? "" : data.releaseDate,
    });
  }, [loading, getSong]);

  const { title, artist, genre, subGenre, releaseDate } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createSong(formData, history, true);
  };

  return (
    <Fragment>
      <section className="content-header">
        <h1>Edit Songs</h1>
      </section>
      <section className="content">
        <div className="row">
          <div className="col-xs-12">
            <div className="box">
              <form className="form" onSubmit={(e) => onSubmit(e)}>
                <div className="form-group">
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
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Artist"
                    name="artist"
                    value={artist}
                    onChange={(e) => onChange(e)}
                  />
                </div>

                <div className="form-group">
                  <select
                    name="genre"
                    value={genre}
                    onChange={(e) => onChange(e)}
                  >
                    <option value="0">Select Genre</option>
                    <option value="bongo">bongo</option>
                    <option value="gospel">gospel</option>
                    <option value="genge">genge</option>
                    <option value="R N'B">R N'B</option>
                  </select>
                </div>
                <div className="form-group">
                  <select
                    name="subGenre"
                    value={subGenre}
                    onChange={(e) => onChange(e)}
                  >
                    <option value="0">Select Genre</option>
                    <option value="bongo">bongo</option>
                    <option value="gospel">gospel</option>
                    <option value="genge">genge</option>
                    <option value="R N'B">R N'B</option>
                  </select>
                </div>

                <div className="form-group">
                  <input
                    type="date"
                    placeholder="Release Date"
                    name="releaseDate"
                    value={releaseDate}
                    onChange={(e) => onChange(e)}
                  />
                </div>

                <input type="submit" className="btn btn-primary my-1" />
                <Link className="btn btn-light my-1" to="/dashboard">
                  Go Back
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

UpdateProductModal.propTypes = {
  createSong: PropTypes.func.isRequired,
  getAllSongs: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, { createSong, getAllSongs})(
  withRouter(UpdateProductModal)
);
