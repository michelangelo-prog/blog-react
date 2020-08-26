import React, { useState } from "react";

function Paginate(props) {
  const [page, setPage] = useState("");

  const incrementPage = () => {
    props.setPage(props.currentPage + 1);
  };

  const decrementPage = () => {
    props.setPage(props.currentPage - 1);
  };

  const goToPage = () => {
    if (page && page >= 1 && page <= props.pages) {
      props.setPage(page);
    }
  };

  const isItFirstPage = props.currentPage === 1;
  const isItLastPage = props.currentPage === props.pages;

  return (
    <div className="pagination">
      <p>
        {!isItFirstPage && (
          <button onClick={decrementPage} disabled={isItFirstPage}>
            &#8592;
          </button>
        )}
        {props.currentPage} / {props.pages}
        {!isItLastPage && (
          <button onClick={incrementPage} disabled={isItLastPage}>
            &#8594;
          </button>
        )}
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
