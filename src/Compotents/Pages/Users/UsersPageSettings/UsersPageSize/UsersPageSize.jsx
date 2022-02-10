import React from "react";
import "./UsersPageSize.scss";

const UsersPageSize = (props) => {
  const pageSizeVariants = [5, 10, 50, 100];
  const handlePageSize = (size) => {
    props.setPageSize(size);
  };

  return (
    <div className='pageSize'>
      <h4>Page size</h4>
      {pageSizeVariants.map((size) => {
        return (
          <div className='pageSize__point' key={size}>
            <span
              onClick={() => handlePageSize(size)}
              className={props.pageSize === size ? "active" : null}
            >
              {size}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default UsersPageSize;
