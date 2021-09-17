import React from 'react';

function SearchBar() {
  return (
    <div className="search-bar rounded-pill">
      <div className="search-section">
        <span className="bold">Location</span>
        <div className="search-sub-text">Where are you going?</div>
      </div>
      <div className="search-section-left">
        <span className="bold">Check in</span>
        <div className="search-sub-text">Add dates</div>
      </div>
      <div className="search-section-left">
        <span className="bold">Check out</span>
        <div className="search-sub-text">Add dates</div>
      </div>
      <div className="search-section-left">
        <span className="bold">Guests</span>
        <div className="search-sub-text">Add guests</div>
      </div>
      <i className="bi bi-search search-icon" />
    </div>
  );
}

export default SearchBar;
