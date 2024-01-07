
import React from 'react';
import './CollectionCard.css';

const CollectionCard = ({ movie }) => {
  const { title, imageUrl, imdbRating, year, type } = movie;

  return (
    <div className="collection-card">
      <img src={imageUrl} alt={title} className="collection-card-image" />
      <div className="collection-card-details">
        <h3 className="collection-card-title">{title}</h3>
        <p className="collection-card-year">Year: {year}</p>
        <p className="collection-card-rating">IMDb Rating: {imdbRating}</p>
        <p className="collection-card-year">Type: {type}</p>
      </div>
    </div>
  );
};

export default CollectionCard;
