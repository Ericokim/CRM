import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ReactLoading from "react-loading";
import { getAll } from "../../actions/data";
import DashboardItems from "./DashboardItems";
// import $ from "jquery";

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
        {/* Info boxes */}
        <div className="row">
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="info-box">
              <span className="info-box-icon bg-aqua">
                <i className="ion ion-ios-gear-outline" />
              </span>
              <div className="info-box-content">
                <span className="info-box-text">CPU Traffic</span>
                <span className="info-box-number">
                  90<small>%</small>
                </span>
              </div>
              {/* /.info-box-content */}
            </div>
            {/* /.info-box */}
          </div>
          {/* /.col */}
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="info-box">
              <span className="info-box-icon bg-red">
                <i className="fa fa-google-plus" />
              </span>
              <div className="info-box-content">
                <span className="info-box-text">Likes</span>
                <span className="info-box-number">41,410</span>
              </div>
              {/* /.info-box-content */}
            </div>
            {/* /.info-box */}
          </div>
          {/* /.col */}
          {/* fix for small devices only */}
          <div className="clearfix visible-sm-block" />
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="info-box">
              <span className="info-box-icon bg-green">
                <i className="ion ion-ios-cart-outline" />
              </span>
              <div className="info-box-content">
                <span className="info-box-text">Sales</span>
                <span className="info-box-number">760</span>
              </div>
              {/* /.info-box-content */}
            </div>
            {/* /.info-box */}
          </div>
          {/* /.col */}
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="info-box">
              <span className="info-box-icon bg-yellow">
                <i className="ion ion-ios-people-outline" />
              </span>
              <div className="info-box-content">
                <span className="info-box-text">New Members</span>
                <span className="info-box-number">2,000</span>
              </div>
              {/* /.info-box-content */}
            </div>
            {/* /.info-box */}
          </div>
          {/* /.col */}
        </div>

        {/* TABLE: LATEST ORDERS */}
        <div className="box box-info collapsable" data-widget="box-widget">
          <div className="box-header with-border">
            <h3 className="box-title">Latest Orders</h3>
            <div className="box-tools pull-right">
              <button
                type="button"
                className="btn btn-box-tool"
                data-widget="collapse"
              >
                <i className="fa fa-minus" />
              </button>
              <button
                type="button"
                className="btn btn-box-tool"
                data-widget="remove"
              >
                <i className="fa fa-times" />
              </button>
            </div>
          </div>
          {/* /.box-header */}
          <div className="box-body">
            <div className="table-responsive">
              <table className="table no-margin">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Item</th>
                    <th>Status</th>
                    <th>Popularity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <a href="pages/examples/invoice.html">OR9842</a>
                    </td>
                    <td>Call of Duty IV</td>
                    <td>
                      <span className="label label-success">Shipped</span>
                    </td>
                    <td>
                      <div
                        className="sparkbar"
                        data-color="#00a65a"
                        data-height={20}
                      >
                        90,80,90,-70,61,-83,63
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="pages/examples/invoice.html">OR1848</a>
                    </td>
                    <td>Samsung Smart TV</td>
                    <td>
                      <span className="label label-warning">Pending</span>
                    </td>
                    <td>
                      <div
                        className="sparkbar"
                        data-color="#f39c12"
                        data-height={20}
                      >
                        90,80,-90,70,61,-83,68
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="pages/examples/invoice.html">OR7429</a>
                    </td>
                    <td>iPhone 6 Plus</td>
                    <td>
                      <span className="label label-danger">Delivered</span>
                    </td>
                    <td>
                      <div
                        className="sparkbar"
                        data-color="#f56954"
                        data-height={20}
                      >
                        90,-80,90,70,-61,83,63
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="pages/examples/invoice.html">OR7429</a>
                    </td>
                    <td>Samsung Smart TV</td>
                    <td>
                      <span className="label label-info">Processing</span>
                    </td>
                    <td>
                      <div
                        className="sparkbar"
                        data-color="#00c0ef"
                        data-height={20}
                      >
                        90,80,-90,70,-61,83,63
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="pages/examples/invoice.html">OR1848</a>
                    </td>
                    <td>Samsung Smart TV</td>
                    <td>
                      <span className="label label-warning">Pending</span>
                    </td>
                    <td>
                      <div
                        className="sparkbar"
                        data-color="#f39c12"
                        data-height={20}
                      >
                        90,80,-90,70,61,-83,68
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="pages/examples/invoice.html">OR7429</a>
                    </td>
                    <td>iPhone 6 Plus</td>
                    <td>
                      <span className="label label-danger">Delivered</span>
                    </td>
                    <td>
                      <div
                        className="sparkbar"
                        data-color="#f56954"
                        data-height={20}
                      >
                        90,-80,90,70,-61,83,63
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="pages/examples/invoice.html">OR9842</a>
                    </td>
                    <td>Call of Duty IV</td>
                    <td>
                      <span className="label label-success">Shipped</span>
                    </td>
                    <td>
                      <div
                        className="sparkbar"
                        data-color="#00a65a"
                        data-height={20}
                      >
                        90,80,90,-70,61,-83,63
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* /.table-responsive */}
          </div>
          {/* /.box-body */}
          <div className="box-footer clearfix">
            <a
              href="javascript:void(0)"
              className="btn btn-sm btn-info btn-flat pull-left"
            >
              Place New Order
            </a>
            <a
              href="javascript:void(0)"
              className="btn btn-sm btn-default btn-flat pull-right"
            >
              View All Orders
            </a>
          </div>
          {/* /.box-footer */}
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
