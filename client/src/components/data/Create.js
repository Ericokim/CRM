import React, { useState, Fragment } from "react";
import { Modal } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import $ from "jquery";
import { addData } from "../../actions/data";

const Create = ({ show, hideUpdateModal, addData, history }) => {
  const initialState = {
    title: "",
    isbn: "",
    author: "",
    description: "",
    published_date: "",
    publisher: "",
  };
  const [formData, setFormData] = useState(initialState);

  const {
    title,
    isbn,
    author,
    description,
    published_date,
    publisher,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addData(formData, history, true);
  };
  return (
    <Fragment>
      <div className="modal fade" id="add-user-modal" data-reset="true">
        <div class="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
              <h4 className="modal-title">Add Book</h4>
            </div>

            <div className="modal-body">
              <form className="form" onSubmit={onSubmit} id="add">
                <div className="form-group">
                  <label>Title:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Title"
                    name="title"
                    value={title}
                    onChange={onChange}
                  />
                </div>
                <div className="form-group">
                  <label>Author:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Author"
                    name="author"
                    value={author}
                    onChange={onChange}
                  />
                </div>
                <div className="form-group">
                  <label>ISBN:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="ISBN"
                    name="isbn"
                    value={isbn}
                    onChange={onChange}
                  />
                </div>

                <div className="form-group">
                  <label>Description:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Description"
                    name="description"
                    value={description}
                    onChange={onChange}
                  />
                </div>

                <div className="form-group">
                  <label>Publisher: </label>
                  <select
                    name="publisher"
                    value={publisher}
                    onChange={onChange}
                    className="form-control select2"
                  >
                    <option select="select">Select </option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
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
                      placeholder="Published Date"
                      name="published_date"
                      value={published_date}
                      onChange={onChange}
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-default  btn-flat pull-left"
                data-dismiss="modal"
              >
                Close
              </button>

              <button
                type="submit"
                form="add"
                className="btn btn-primary btn-flat"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Create.propTypes = {
  addData: PropTypes.func.isRequired,
};

export default connect(null, { addData })(withRouter(Create));
