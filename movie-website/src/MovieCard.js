

import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = ({ movie }) => {
  const { title, rating, imageUrl } = movie;

  return (
    <div className="movie-card">
      <img src={imageUrl} alt={title} />
      <div className="movie-info">
        <h3>{title}</h3>
        <i class="fa-solid fa-star"></i>  {rating}
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
