import React, { Fragment, Component, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import axios from "axios";
import $ from "jquery";
import Moment from "react-moment";
import moment from "moment";
import AddBook from "./Create";
import EditBook from "./Edit";
import DeleteBook from "./Delete";
import { connect } from "react-redux";
import { UpdateData, getAll, getData, deleteData } from "../../actions/data";

class Books extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentRecord: {
        title: "",
        isbn: "",
        author: "",
        description: "",
        published_date: "",
        publisher: "",
      },
    };
  }

  componentDidMount() {
    this.$el = $(this.el);
    this.$el.DataTable({
      processing: true,
      retrieve: true,
      colReorder: true,
      responsive: true,
      dom: "lfBrtip",
      dom:
        "<'row'<'col-sm-6'l><'col-sm-6'f>>" +
        "<'row'<'col-sm-6'B>>" +
        "<'row'<'col-sm-12'tr>>" +
        "<'row'<'col-sm-5'i><'col-sm-7'p>>",
      buttons: [
        {
          extend: "colvis",
          exportOptions: {
            columns: ":visible",
          },
        },
        {
          extend: "copy",
          exportOptions: {
            columns: ":visible",
          },
        },
        {
          extend: "csv",
          exportOptions: {
            columns: [0, 1, 2, 3, 4, 5],
            format: {
              body: function (data, row, column, node) {
                return column === 0
                  ? data.charAt(0).toUpperCase() + data.slice(1)
                  : data;
              },
            },
          },
        },
      ],
    });

    deleteData();
    getData();
  }

  componentWillReceiveProps(nextProps) {
    deleteData();
    getData();
  }

  editRecord(data) {
    this.setState({ currentRecord: data });
  }

  deleteRecord(data) {
    this.setState({ currentRecord: data });
  }

  render() {
    const { Item, data } = this.props;

    const { currentRecord } = this.state;
    return (
      <Fragment>
        <div className="box">
          <div className="box-header">
            <h3 className="box-title">Song Tracks</h3>
            <button
              type="button"
              data-toggle="modal"
              data-target="#add-user-modal"
              className="btn btn-primary btn-sm"
              style={{ float: "right" }}
            >
              Add
            </button>
          </div>
          <div className="box-body">
            <EditBook data={this.state.currentRecord} />

            <AddBook data={currentRecord} />

            <DeleteBook data={currentRecord.songs} />
            <table
              ref={(el) => (this.el = el)}
              className="table table-bordered table-striped alter table-hover"
            >
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Author</th>
                  <th>ISBN</th>
                  <th>Publisher</th>
                  <th>Description</th>
                  <th>Published Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {Item &&
                  Item.map((item, index) => (
                    <tr key={index}>
                      <td>{item.title}</td>
                      <td>{item.author}</td>
                      <td>{item.isbn}</td>
                      <td>{item.publisher}</td>
                      <td>{item.description}</td>
                      <td>{item.published_date}</td>
                      <td>
                        <button
                          type="button"
                          data-toggle="modal"
                          data-target="#update-user-modal"
                          onClick={() => this.editRecord(data, item._id)}
                          className="btn btn-success btn-sm btn-flat"
                        >
                          Edit
                        </button>

                        <button
                          type="button"
                          data-toggle="modal"
                          data-target="#delete-book-modal"
                          onClick={() => this.deleteRecord(data, item._id)}
                          className="btn btn-danger btn-sm btn-flat"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </Fragment>
    );
  }
}

Books.propTypes = {
  book: PropTypes.array.isRequired,
  deleteData: PropTypes.func.isRequired,
  getAll: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, {
  UpdateData,
  getAll,
  getData,
  deleteData,
})(Books);
