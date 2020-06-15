import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ReactLoading from "react-loading";
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
        <div className="col-lg-3 col-xs-6">
          <div className="small-box bg-green">
            <div className="inner">
              <h3>
                53<sup style={{ fontSize: 20 }}>%</sup>
              </h3>
              <p>Bounce Rate</p>
            </div>
            <div className="icon">
              <i className="ion ion-stats-bars" />
            </div>
            <a href="#" className="small-box-footer">
              More info <i className="fa fa-arrow-circle-right" />
            </a>
          </div>
        </div>

        <div className="col-lg-3 col-xs-6">
          <div className="small-box bg-red">
            <div className="inner">
              <h3>65</h3>
              <p>Unique Visitors</p>
            </div>
            <div className="icon">
              <i className="ion ion-pie-graph" />
            </div>
            <a href="#" className="small-box-footer">
              More info <i className="fa fa-arrow-circle-right" />
            </a>
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
