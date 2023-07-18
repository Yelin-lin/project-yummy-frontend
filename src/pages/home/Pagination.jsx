import React from 'react';
import ReactPagination from 'react-js-pagination';
import "./Paging.css"

function Pagination({ activePage, itemsCountPerPage, totalItemsCount, onChange }) {
  return (
    <ReactPagination
      activePage={activePage}
      itemsCountPerPage={itemsCountPerPage}
      totalItemsCount={totalItemsCount}
      pageRangeDisplayed={5}
      prevPageText={'‹'}
      nextPageText={'›'}
      onChange={onChange}
    />
  );
}

export default Pagination;

