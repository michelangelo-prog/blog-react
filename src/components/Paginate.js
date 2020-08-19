import React, { useState } from "react";

function Paginate(props) {
  const [page, setPage] = useState("");

  const incrementPage = () => {
    props.setPage(props.currentPage + 1);
  };

  const decrementPage = () => {
    props.setPage(props.currentPage - 1);
  };

  const isItFirstPage = () => {
    return props.currentPage === 1;
  };

  const isItLastPage = () => {
    return props.currentPage === props.pages;
  };

  const goToPage = () => {
    if (page && page >= 1 && page <= props.pages) {
      props.setPage(page);
    }
  };

  return (
    <div className="paginate">
      <p>
        <button onClick={decrementPage} disabled={isItFirstPage()}>
          previous
        </button>
        {props.currentPage} / {props.pages}
        <button onClick={incrementPage} disabled={isItLastPage()}>
          next
        </button>
      </p>
      <p>
        <button onClick={goToPage}>Go to page:</button>
        <input
          type="number"
          onChange={(event) => setPage(event.target.value)}
        />
      </p>
    </div>
  );
}

export default Paginate;
