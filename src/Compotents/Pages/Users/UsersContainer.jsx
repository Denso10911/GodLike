import React from "react";
import { connect } from "react-redux";
import {
  unFollowThunk,
  followThunk,
  getUsersThunk,
  changePageThunk,
  setFetching,
  setPageSize,
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
    let selected = selectedPage.selected;
    this.props.changePageThunk(selected, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching && <Fetching />}
        {!this.props.isFetching && (
          <Users
            {...this.props}
            onChangePageClick={this.onChangePageClick}
            setFetching={this.props.setFetching}
            setPageSize={this.props.setPageSize}
          />
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
  }),
  withAuthRedirecrt
)(UsersContainer);
