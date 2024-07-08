import React, { useState } from 'react';
import Work from './Work.js';
import mementoImg from '../images/memento_work.png';
import portfolioImg from '../images/portfolio_work.png';

function CurrentWorks() {
  
    return (
      <div id="CurrentWorks">
        <h2>UX/UI Design Case Studies</h2>
        <span className="work-container">
          <Work
            id="memento"
            title="Memento"
            description="Addressing Post Party Blues"
            image={mementoImg}
          />
          {/* <Work
            id="athlog"
            title="Athlog"
            description="Tracking your athletic progress"
            image="https://source.unsplash.com/100x100"
          /> */}
          <Work
            id="portfolio"
            title="Portfolio"
            description="A case study... for this website?"
            image={portfolioImg}
          />
          {/* Add more Work components for other "past-works" */}
        </span>
      </div>
    );
  }
  
export default CurrentWorks;