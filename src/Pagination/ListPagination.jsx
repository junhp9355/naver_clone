import React from "react";
import "./ListPagination.css";

const ListPagination = ({ total, listlimit, listpage, setListPage }) => {
  const numlistPages = Math.ceil(total / listlimit);
  return (
    <>
      <nav className="ListPageNav">
        <button
          className="PageLeft"
          onClick={() => setListPage(listpage - 1)}
          disabled={listpage === 0}
        >
          &lt;
        </button>
        {Array(numlistPages)
          .fill()
          .map((_, i) => (
            <button
              className="numbering"
              key={i + 1}
              onClick={() => setListPage(i + 1)}
              aria-current={listpage === i + 1 ? "page" : null}
            >
              {i + 1}
            </button>
          ))}
        <button
          className="PageRight"
          onClick={() => setListPage(listpage + 1)}
          disabled={listpage === numlistPages}
        >
          &gt;
        </button>
      </nav>
    </>
  );
};

export default ListPagination;
