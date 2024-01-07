

import React from 'react';
import Header from './header';

import MovieCard from './MovieCard';
import './Movies.css';

const movies = [
  { id: 1, title: 'avatar', rating: 8.5, imageUrl: 'avatar.jpg' },
  { id: 2, title: 'avengers', rating: 7.9, imageUrl: 'avengers.jpg' },
  { id: 3, title: 'gora', rating: 6.3, imageUrl: 'gora.jpg' },
  { id: 4, title: 'godfather', rating: 7.0, imageUrl: 'godfather.jpg' },
  { id: 5, title: 'oppenheimer', rating: 7.7, imageUrl: 'oppenheimer.jpg' },
  { id: 6, title: 'toystory', rating: 6.5, imageUrl: 'toystory.jpg' },
  { id: 7, title: 'vendetta', rating: 5.1, imageUrl: 'vendetta.jpg' },
  { id: 8, title: 'titanic', rating: 4.7, imageUrl: 'titanic.jpg' },
  
];

const Movies = () => {
  return (
    <div className="movies-page">
      
       <Header />

      
      <div className="movies-list-header">
        <h2>Movies</h2>
      </div>

      <div className="movies-list-container">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

     
      <div className="footer">
        &copy; 2024 Moviegram | Contact | Privacy Policy | <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          Samet Koca <i className="fa-brands fa-github fa-lg"></i></a>
      </div>
    </div>
  );
};

export default Movies;
