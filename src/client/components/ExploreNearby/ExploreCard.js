import React from 'react';

// function ExploreCard(props) {
//   return (
//     <div className="container mb-4">
//       <div className="row">
//         <div className="col col-md-4">
//           <img
//             src={props.image}
//             alt={props.destination}
//             className="explore-img"
//           />
//         </div>
//         <div className="col col-md-8 pt-2">
//           <div className="row">{props.destination}</div>
//           <div className="row">{props.distance}</div>
//         </div>
//       </div>
//     </div>
//   );
// }
function ExploreCard(props) {
  return (
    <div className="mb-3">
      <div className="row">
        <div className="col-md-4 img-padding">
          <img
            src={props.image}
            className="img-fluid explore-img ms-4"
            alt={props.destination}
          />
        </div>
        <div className="col-md-8 img-padding">
          <div>
            <p className="card-destination">{props.destination}</p>
            <p className="card-distance">
              <small className="text-muted">{props.distance}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreCard;
