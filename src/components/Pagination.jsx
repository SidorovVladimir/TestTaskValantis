import React from 'react';
import ReactPaginate from 'react-paginate';
import './Pagination.css';

const Pagination = ({ handlePageClick, pageCount, currentPage }) => (
  <ReactPaginate
    nextLabel="Следующая >"
    onPageChange={handlePageClick}
    forcePage={currentPage}
    pageRangeDisplayed={5}
    marginPagesDisplayed={2}
    pageCount={pageCount}
    previousLabel="< Предыдущая"
    pageClassName="page-item"
    pageLinkClassName="page-link"
    previousClassName="page-item"
    previousLinkClassName="page-link"
    nextClassName="page-item"
    nextLinkClassName="page-link"
    breakLabel="..."
    breakClassName="page-item"
    breakLinkClassName="page-link"
    containerClassName="pagination"
    activeClassName="active"
    renderOnZeroPageCount={null}
  />
);

export default Pagination;
