import React from "react";
import { connect } from "react-redux";
import {
  unFollowThunk,
  followThunk,
  getUsersThunk,
  changePageThunk,
  setFetching,
  setPageSize,
  setPageStyle,
  getLazyUsersThunk,
} from "../../../Redux/UsersReducer";
import Users from "./Users";
import Fetching from "../../../assets/Fetching/Fetching";
import { compose } from "redux";
import { withAuthRedirecrt } from "../../../hoc/AuthHoc";
import {
  getCurrentPage,
  getIsAuth,
  getIsFetching,
  getPageSize,
  getStatusOfFallowingRequest,
  getTotalUsersCount,
  getUsers,
} from "../../../Redux/UsersSelectors";
import ScollLoad from "../../../assets/ScrollLoad/ScollLoad";
import "./UsersContainer.css";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsersThunk(this.props.pageSize, this.props.currentPage);
  }

  componentDidUpdate(prevProps) {
    if (this.props.pageSize !== prevProps.pageSize) {
      this.props.getUsersThunk(this.props.pageSize, this.props.currentPage);
    }
  }

  onChangePageClick = (selectedPage) => {
    console.log(selectedPage);
    let selected = selectedPage.selected + 1;
    this.props.changePageThunk(selected, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching && <Fetching />}
        {!this.props.isFetching && (
          <ScollLoad
            getLazyUsersThunk={this.props.getLazyUsersThunk}
            currentPage={this.props.currentPage}
            pageSize={this.props.pageSize}
            totalUsersCount={this.props.totalUsersCount}
          >
            <Users
              {...this.props}
              onChangePageClick={this.onChangePageClick}
              setFetching={this.props.setFetching}
              setPageSize={this.props.setPageSize}
              setPageStyle={this.props.setPageStyle}
              pageStyle={this.props.pageStyle}
            />
          </ScollLoad>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    totalUsersCount: getTotalUsersCount(state),
    pageSize: getPageSize(state),
    pageStyle: state.usersPage.pageStyle,
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    statusOfFallowingRequest: getStatusOfFallowingRequest(state),
    isAuth: getIsAuth(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    unFollowThunk,
    followThunk,
    getUsersThunk,
    changePageThunk,
    setFetching,
    setPageSize,
    setPageStyle,
    getLazyUsersThunk,
  }),
  withAuthRedirecrt
)(UsersContainer);
