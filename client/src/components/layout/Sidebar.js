import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCurrentProfile } from "../../actions/profile";

const Sidebar = ({
  getCurrentProfile,
  auth: { user, isAuthenticated, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return (
    <div>
      {isAuthenticated && loading === false && (
        <aside className="main-sidebar">
          <section className="sidebar">
            {/* User Panel */}
            <Link to={`/profile/${user && user._id}`}>
              <div className="user-panel">
                <div className="pull-left image">
                  <img
                    src={user && user.avatar}
                    className="img-circle"
                    alt="User Image"
                  />
                </div>
                <div className="pull-left info">
                  <p>{user && user.name}</p>
                  <a href="#">
                    <i className="fa fa-circle text-success" /> Online
                  </a>
                </div>
              </div>
            </Link>
            {/* Menu */}
            <ul className="sidebar-menu" data-widget="tree">
              <li className="treeview">
                <Link to="/dashboard">
                  <i className="fa fa-dashboard" />{" "}
                  <span className="hide-sm">Dashboard</span>
                </Link>
              </li>

              {/* <li className="treeview">
                <Link to="/table">
                  <i class="fa fa-table" />{" "}
                  <span className="hide-sm">Table</span>
                </Link>
              </li> */}

              {/* <li className="treeview">
                <Link to="/users">
                  <i class="fa fa-users" />{" "}
                  <span className="hide-sm">Members</span>
                </Link>
              </li> */}
            </ul>
          </section>
        </aside>
      )}
    </div>
  );
};

Sidebar.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { getCurrentProfile })(Sidebar);
