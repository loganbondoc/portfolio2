import React, { useState } from 'react';
import Work from './Work.js';

function CurrentWorks() {
  
    return (
      <div id="CurrentWorks">
        <h2>UX/UI Design Case Studies</h2>
        <span className="work-container">
          <Work
            id="memento"
            title="Memento"
            description="Addressing Post Party Blues"
            image="https://source.unsplash.com/100x100"
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
            description="A case study... FOR THE WEBSITE YOU'RE ON???"
            image="https://source.unsplash.com/100x100"
          />
          {/* Add more Work components for other "past-works" */}
        </span>
      </div>
    );
  }
  
export default CurrentWorks;