import React, { useEffect } from "react";

const ScollLoad = (props) => {
  let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
  const scrollHandler = (e) => {
    const target = e.target.documentElement;
    if (
      target.scrollHeight - (target.scrollTop + window.innerHeight) < 100 &&
      props.currentPage < pageCount
    ) {
      props.getLazyUsersThunk(props.pageSize, props.currentPage);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, [props.currentPage]);

  return <div className='scroll'>{props.children}</div>;
};

export default ScollLoad;

//
