import React from 'react';

function SearchBar() {
  return (
    <button className="btn bg-white rounded-pill search-bar">
      <div className="container">
        <div className="row">
          <div className="col-3 search-bar-col">
            <div className="row">Location</div>
            <div className="row">Where are you going?</div>
          </div>
          <div className="col-3 search-bar-col">
            <div className="row">Check in</div>
            <div className="row">Add dates</div>
          </div>
          <div className="col-3 search-bar-col">
            <div className="row">Check out</div>
            <div className="row">Add dates</div>
          </div>
          <div className="col-3 search-bar-col">
            <div className="row">Guests</div>
            <div className="row">Add guests</div>
          </div>
        </div>
      </div>
    </button>
  );
}

export default SearchBar;
