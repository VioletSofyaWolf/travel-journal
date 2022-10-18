import React from 'react';

import location from '../images/location.png';

const Card = (props) => {
  return (
    <div className='card'>
      <div>{<img className='card-image' src={props.imageUrl} alt='' />}</div>
      <div className='card-info'>
        <p className='card-location'>
          <img className='location-icon' src={location} alt='' />
          <span>{props.location}</span>
          <a href={props.googleMapsUrl}>View on Google Maps</a>
        </p>
        <h2 className='card-title'>{props.title}</h2>
        <p className='card-date'>
          {props.startDate} - {props.endDate}
        </p>
        <p className='card-description'>{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
