import React from 'react';

function ExploreCard(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <img src={props.image} alt={props.destination} />
        </div>
        <div className="col">
          <div className="row">{props.destination}</div>
          <div className="row">{props.distance}</div>
        </div>
      </div>
    </div>
  );
}

export default ExploreCard;
