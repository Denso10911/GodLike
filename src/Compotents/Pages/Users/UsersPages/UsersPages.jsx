import React from "react";
import ReactPaginate from "react-paginate";
import "./UsersPages.css";

const UsersPages = (props) => {
  let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);

  return (
    <div className='pages'>
      <ReactPaginate
        pageCount={pageCount}
        onPageChange={props.onChangePageClick}
        forcePage={props.currentPage}
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
    </div>
  );
};

export default UsersPages;
