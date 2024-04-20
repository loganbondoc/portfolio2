import React from 'react';
import { Link, useHistory } from 'react-router-dom';

function Work({ id, title, description, image }) {
    return (
      <Link to={`/work/${id}`} className="past-work">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </Link>
    );
  }

export default Work;