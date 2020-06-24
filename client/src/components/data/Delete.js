import React, { useState, useEffect, Fragment } from "react";
import { Modal } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from "axios";
import { getData, deleteData } from "../../actions/data";

class Delete extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  // componentWillReceiveProps(nextProps) {
  //   this.onDeleteClick();
  // }

  onDeleteClick(id) {
    const { deleteData } = this.props;
    deleteData(id);
  }

  render() {
    const { data } = this.props;

    return (
      <div className="modal fade" id="delete-book-modal">
        <div className="modal-dialog">
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
              <h4 className="modal-title">Delete</h4>
            </div>
            <div className="modal-body">
              <form className="form" id="delete-book">
                <p>Are you sure you want to delete this ?</p>
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
                type="button"
                id="delete-book"
                className="btn btn-danger btn-flat"
                onClick={this.onDeleteClick.bind(this, data._id)}
              >
                Delete
              </button>
              {/* <br />
              <button
                type="submit"
                id="delete-book"
                onClick={() => deleteData(data._id)}
                className="btn btn-danger btn-flat"
              >
                Delete
              </button> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Delete.propTypes = {
  data: PropTypes.object.isRequired,
  getData: PropTypes.func.isRequired,
  deleteData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, { deleteData, getData })(
  withRouter(Delete)
);
