import React, { useState } from 'react';
import Work from './Work.js';
import mementoImg from '../images/memento_work.png';
import portfolioImg from '../images/portfolio_work.png';

function DevWorks() {
  
    return (
      <div id="WorksCarousel">
        <h2>Development Projects</h2>
        <span className="work-container">
          <Work
            id="memento"
            title="Memento"
            description="Addressing Post Party Blues"
            image={mementoImg}
          />
          <Work
            id="portfolio"
            title="Portfolio"
            description="A case study... for this website?"
            image={portfolioImg}
          />
          <Work
            id="urtrip"
            title="UrTrip"
            description="FILL LATER"
            image={portfolioImg}
          />
          {/* Add more Work components for other "past-works" */}
        </span>
      </div>
    );
  }
  
export default DevWorks;