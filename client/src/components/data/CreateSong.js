import React, { useState, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addSong } from "../../actions/data";

const CreateSong = ({ addSong, history }) => {
  const initialState = {
    title: "",
    artist: "",
    genre: "",
    subGenre: "",
    currentName: "",
    releaseDate: "",
  };
  const [formData, setFormData] = useState(initialState);

  const { title, artist, genre, subGenre, releaseDate } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addSong(formData, history);
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
                  <Link className="btn btn-light my-1" to="/table">
                    Go Back
                  </Link>
                </form>
              </div>{" "}
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

CreateSong.propTypes = {
  addSong: PropTypes.func.isRequired,
};

export default connect(null, { addSong })(withRouter(CreateSong));
