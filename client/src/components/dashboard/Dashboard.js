import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ReactLoading from "react-loading";
import SongTrack from "./Songs";
import { getAll } from "../../actions/data";

const Loading = () => <ReactLoading type="bars" color="#20ad4f" />;

const Dashboard = ({ getAll, data: { data, loading } }) => {
  useEffect(() => {
    getAll();
  }, [getAll]);

  return loading && data === null ? (
    <div className="loading">
      <Loading />
    </div>
  ) : (
    <Fragment>
      <section className="content-header">
        <h1>Dashboard</h1>
      </section>
      {data !== null ? (
        <section className="content">
          <div className="row">
            <div className="col-xs-12">
              <SongTrack key={data._id} song={data.songs} />
            </div>
          </div>
        </section>
      ) : (
        <Fragment>
          <div className="loading">
            <Loading />
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getAll: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, { getAll })(Dashboard);
