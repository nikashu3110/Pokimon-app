import React from "react";

export default function Pagination({ gotoNextPage, gotoPrevPage }) {
  return (
    <div className="btn">
      {gotoPrevPage && (
        <button onClick={gotoPrevPage} className="btn-prev">
          Previous
        </button>
      )}
      {gotoNextPage && (
        <button onClick={gotoNextPage} className="btn-prev">
          Next
        </button>
      )}
    </div>
  );
}
