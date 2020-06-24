import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { connect } from "react-redux";

const DataItem = ({
  auth,
  songs: { _id, title, isbn, author, description, published_date, publisher },
  showActions,
}) => (
  <div className="post bg-white p-1 my-1">
    <div>
      {showActions && (
        <Fragment>
          <span>{author.length > 0 && <span>{author.length}</span>}</span>

          {title.length > 0 && (
            <span className="comment-count">{title.length}</span>
          )}
        </Fragment>
      )}
    </div>
  </div>
);

DataItem.defaultProps = {
  showActions: true,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(DataItem);
