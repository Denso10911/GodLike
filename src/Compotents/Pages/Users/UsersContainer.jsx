import React from "react";
import { connect } from "react-redux";
import {
  unFollowThunk,
  followThunk,
  getUsersThunk,
  changePageThunk,
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

  onChangePageClick = (selectedPage) => {
    let selected = selectedPage.selected;
    console.log(selected);
    // Функция принимающая в параметре номер страници, делает запрос на сервер и возвращает пользователей этой страници
    this.props.changePageThunk(selected, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Fetching />
        ) : (
          <Users {...this.props} onChangePageClick={this.onChangePageClick} />
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
  }),
  withAuthRedirecrt
)(UsersContainer);
