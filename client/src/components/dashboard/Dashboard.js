import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ReactLoading from "react-loading";
import SongTrack from "./Songs";
import { getAll } from "../../actions/data";

const Loading = () => <ReactLoading type="bars" color="#20ad4f" />;

const Dashboard = ({ getAll, data: { datas, loading } }) => {
  useEffect(() => {
    getAll();
  }, [getAll]);

  return loading && datas === null ? (
    <div className="loading">
      <Loading />
    </div>
  ) : (
    <Fragment>
      <section className="content-header">
        <h1>Dashboard</h1>
      </section>

      <section className="content">
        <div className="row">
          <div className="col-xs-12">
            {datas !== null ? (
              <SongTrack key={datas._id} song={datas.songs} />
            ) : (
              <div className="loading">
                <Loading />
              </div>
            )}
          </div>
        </div>
      </section>
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
