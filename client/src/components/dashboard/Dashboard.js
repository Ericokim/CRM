import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import SongTrack from "./Songs";
import { getAllSongs } from "../../actions/data";

const Dashboard = ({ getAllSongs, auth: { user }, data: { data, loading } }) => {
  useEffect(() => {
    getAllSongs();
  }, [getAllSongs]);

  return loading && data === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <section className="content-header">
        <h1>Dashboard</h1>
      </section>
      {data !== null ? (
        <section className="content">
          <div className="row">
            <div className="col-xs-12">
              <SongTrack song={data} />
            </div>
          </div>
        </section>
      ) : (
        <Fragment>
          <section className="content-header">
            <p>Not Data, please add some info</p>
          </section>
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getAllSongs: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  data: state.data,
});

export default connect(mapStateToProps, { getAllSongs})(Dashboard);
