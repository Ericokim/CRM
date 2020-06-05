import React, { useState, useEffect, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { UpdateSong, getSong } from "../../actions/data";

const initialState = {
  title: "",
  artist: "",
  genre: "",
  subGenre: "",
  releaseDate: "",
};

const Edit = ({
  data: { data, loading },
  UpdateSong,
  getSong,
  history,
  match,
}) => {
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (!data) getSong(match.params.id);
    if (!loading && data) {
      const songData = { ...initialState };

      for (const key in data.songs) {
        if (key in songData) songData[key] = data.songs[key];
      }
      setFormData(songData);
    }
  }, [loading, getSong, match.params.id, data]);

  // useEffect(() => {
  //   if (!data)
  //     getSong(match.params.id).catch(function (error) {
  //       console.log(error);
  //     });
  //   if (!loading && data) {
  //     setFormData({
  //       title: title,
  //       artist: artist,
  //       genre: genre,
  //       subGenre: subGenre,
  //       releaseDate: releaseDate,
  //     });
  //   }
  // }, [loading, data, getSong, match.params.id]);

  const { title, artist, genre, subGenre, releaseDate } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

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
                      onChange={onChange}
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
                      <option select="select">Select Genre</option>
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
                      <option select="select">Select Sub-Genre</option>
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
