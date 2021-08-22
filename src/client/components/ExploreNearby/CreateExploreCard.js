import React from 'react';
import ExploreCard from './ExploreCard';
import ExploreData from './ExploreData';
import LosAngeles from './img/Los-Angeles.png';
import SanDiego from './img/San-Diego.png';
import LasVegas from './img/Los-Vegas.png';
import Henderson from './img/Henderson.png';
import Paradise from './img/Paradise.png';
import BigBearLake from './img/Big-Bear-Lake.png';
import PalmSprings from './img/Palm-Springs.png';
import Anaheim from './img/Anaheim.png';

function CreateExploreCard() {
  return (
    <div>
      <div className="row">
        <div className="col">
          <ExploreCard
            id={ExploreData[0].id}
            image={LosAngeles}
            destination={ExploreData[0].destination}
            distance={ExploreData[0].distance}
          />
        </div>
        <div className="col">
          <ExploreCard
            id={ExploreData[1].id}
            image={SanDiego}
            destination={ExploreData[1].destination}
            distance={ExploreData[1].distance}
          />
        </div>
        <div className="col">
          <ExploreCard
            id={ExploreData[2].id}
            image={LasVegas}
            destination={ExploreData[2].destination}
            distance={ExploreData[2].distance}
          />
        </div>
        <div className="col d-none d-lg-inline">
          <ExploreCard
            id={ExploreData[3].id}
            image={Henderson}
            destination={ExploreData[3].destination}
            distance={ExploreData[3].distance}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ExploreCard
            id={ExploreData[4].id}
            image={Paradise}
            destination={ExploreData[4].destination}
            distance={ExploreData[4].distance}
          />
        </div>
        <div className="col">
          <ExploreCard
            id={ExploreData[5].id}
            image={BigBearLake}
            destination={ExploreData[5].destination}
            distance={ExploreData[5].distance}
          />
        </div>
        <div className="col d-none d-lg-inline">
          <ExploreCard
            id={ExploreData[6].id}
            image={PalmSprings}
            destination={ExploreData[6].destination}
            distance={ExploreData[6].distance}
          />
        </div>
        <div className="col">
          <ExploreCard
            id={ExploreData[7].id}
            image={Anaheim}
            destination={ExploreData[7].destination}
            distance={ExploreData[7].distance}
          />
        </div>
      </div>
    </div>
  );
}

export default CreateExploreCard;
