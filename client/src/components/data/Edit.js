import React, { useState, useEffect, Component, Fragment } from "react";
import { Modal } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { UpdateData, getData } from "../../actions/data";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.data.title,
      isbn: this.props.data.isbn,
      author: this.props.data.author,
      description: this.props.data.description,
      published_date: this.props.data.published_date,
      publisher: this.props.data.publisher,
    };

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeIsbn = this.onChangeIsbn.bind(this);
    this.onChangeAuthor = this.onChangeAuthor.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangePublishedDate = this.onChangePublishedDate.bind(this);
    this.onChangePublisher = this.onChangePublisher.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
  }

  // componentDidMount() {
  //   this.props
  //     .getData(this.props.match.params.id)
  //     .then((response) => {
  //       this.setState({
  //         title: response.data.title,
  //         isbn: response.data.isbn,
  //         author: response.data.author,
  //         description: response.data.description,
  //         published_date: response.data.published_date,
  //         publisher: response.data.publisher,
  //       });
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data) {
      this.setState({
        title: nextProps.data.title,
        isbn: nextProps.data.isbn,
        author: nextProps.data.author,
        description: nextProps.data.description,
        published_date: nextProps.data.published_date,
        publisher: nextProps.data.publisher,
      });
    }
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }
  onChangeIsbn(e) {
    this.setState({
      isbn: e.target.value,
    });
  }
  onChangeAuthor(e) {
    this.setState({
      author: e.target.value,
    });
  }
  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onChangePublishedDate(e) {
    this.setState({
      published_date: e.target.value,
    });
  }

  onChangePublisher(e) {
    this.setState({
      publisher: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const newData = {
      title: this.state.title,
      isbn: this.state.isbn,
      author: this.state.author,
      description: this.state.description,
      published_date: this.state.published_date,
      publisher: this.state.publisher,
    };
    this.props.UpdateData(newData);
  }
  render() {
    const {
      title,
      isbn,
      author,
      description,
      published_date,
      publisher,
    } = this.state;
    return (
      <Fragment>
        <div className="modal fade" id="update-user-modal">
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
                <h4 className="modal-title">Edit Book</h4>
              </div>

              <div className="modal-body">
                <form className="form" onSubmit={this.onSubmit} id="update">
                  <div className="form-group">
                    <label>Title:</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Title"
                      name="title"
                      value={title}
                      onChange={this.onChange}
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
                      onChange={this.onChange}
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
                      onChange={this.onChange}
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
                      onChange={this.onChange}
                    />
                  </div>

                  <div className="form-group">
                    <label>Publisher: </label>
                    <select
                      name="publisher"
                      value={publisher}
                      onChange={this.onChange}
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
                        onChange={this.onChange}
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
                  form="update"
                  className="btn btn-primary btn-flat"
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

Edit.propTypes = {
  UpdateData: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  getData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, { UpdateData, getData })(
  withRouter(Edit)
);
