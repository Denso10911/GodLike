import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const ScollLoad = (props) => {
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    console.log("fetch");
    if (props.users.length >= props.totalUsersCount) {
      setHasMore(false);
      return;
    }
    props.getLazyUsersThunk(props.pageSize, props.currentPage);
  };

  return (
    <InfiniteScroll
      dataLength={props.users.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={
        <h4 style={{ textAlign: "center", color: "white", zIndex: 500 }}>
          Loading...
        </h4>
      }
      endMessage={
        <p style={{ textAlign: "center", color: "white", zIndex: 500 }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
      style={{ overflow: "hidden" }}
    >
      {props.children}
    </InfiniteScroll>
  );
};

export default ScollLoad;

//
