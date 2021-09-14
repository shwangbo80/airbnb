import React from 'react';

function ListingsSearchBar() {
  return (
    <div className="listings-search-bar rounded-pill">
      <div className="listings-search-title">
        <span className="bold">Los Angeles</span>
      </div>
      <div className="listings-search-section">
        <div className="search-sub-text">Add dates</div>
      </div>
      <div className="listings-search-section">
        <div className="search-sub-text">Add guests</div>
      </div>
      <i className="bi bi-search listings-search-icon" />
    </div>
  );
}

export default ListingsSearchBar;
