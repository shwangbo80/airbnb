import React from 'react';

function ExploreCard(props) {
  return (
    <div className="container mb-4">
      <div className="row">
        <div className="col col-md-4">
          <img
            src={props.image}
            alt={props.destination}
            className="explore-img"
          />
        </div>
        <div className="col col-md-8">
          <div className="row">{props.destination}</div>
          <div className="row">{props.distance}</div>
        </div>
      </div>
    </div>
  );
}

export default ExploreCard;
