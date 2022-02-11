import React from "react";
import ReactPaginate from "react-paginate";
import "./UsersPages.css";

const UsersPages = (props) => {
  let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
  console.log(props.currentPage);
  console.log(pageCount);
  return (
    <>
      <ReactPaginate
        pageCount={pageCount}
        onPageChange={props.onChangePageClick}
        forcePage={props.currentPage - 1}
        renderOnZeroPageCount={null}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        previousLabel='<'
        nextLabel='>'
        breakLabel='...'
        breakClassName='pages__break'
        containerClassName='pages__list'
        pageClassName='pages__item'
        pageLinkClassName='pages__link'
        activeClassName='select'
      />
    </>
  );
};

export default UsersPages;
