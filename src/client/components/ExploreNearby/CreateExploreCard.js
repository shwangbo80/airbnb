import React from 'react';
import ExploreCard from './ExploreCard';
import ExploreData from './ExploreData';

function CreateExploreCard() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <ExploreCard
            id={ExploreData[0].id}
            image={ExploreData[0].image}
            destination={ExploreData[0].destination}
            distance={ExploreData[0].distance}
          />
        </div>
        <div className="col">
          <ExploreCard
            id={ExploreData[1].id}
            image={ExploreData[1].image}
            destination={ExploreData[1].destination}
            distance={ExploreData[1].distance}
          />
        </div>
        <div className="col">
          <ExploreCard
            id={ExploreData[2].id}
            image={ExploreData[2].image}
            destination={ExploreData[2].destination}
            distance={ExploreData[2].distance}
          />
        </div>
        <div className="col">
          <ExploreCard
            id={ExploreData[3].id}
            image={ExploreData[3].image}
            destination={ExploreData[3].destination}
            distance={ExploreData[3].distance}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ExploreCard
            id={ExploreData[4].id}
            image={ExploreData[4].image}
            destination={ExploreData[4].destination}
            distance={ExploreData[4].distance}
          />
        </div>
        <div className="col">
          <ExploreCard
            id={ExploreData[5].id}
            image={ExploreData[5].image}
            destination={ExploreData[5].destination}
            distance={ExploreData[5].distance}
          />
        </div>
        <div className="col">
          <ExploreCard
            id={ExploreData[6].id}
            image={ExploreData[6].image}
            destination={ExploreData[6].destination}
            distance={ExploreData[6].distance}
          />
        </div>
        <div className="col">
          <ExploreCard
            id={ExploreData[7].id}
            image={ExploreData[7].image}
            destination={ExploreData[7].destination}
            distance={ExploreData[7].distance}
          />
        </div>
      </div>
    </div>
  );
}

export default CreateExploreCard;
