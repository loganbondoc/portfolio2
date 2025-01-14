import React from 'react';
import { Link, useHistory } from 'react-router-dom';

function Work({ id, title, description, image }) {
    return (
      <Link to={`/${id}`} className="past-work">
        <img src={image} alt={title} />
        <h3 class = "comfortaa">{title}</h3>
        <p class = "body">{description}</p>
      </Link>
    );
  }

export default Work;