
import React from 'react';
import Header from './header';

import MovieCard from './MovieCard';
import './Movies.css';

const movies = [
  { id: 1, title: 'la casa de papel', rating: 8.5, imageUrl: 'lcdp.jpg' },
  { id: 2, title: 'how i met your mother', rating: 7.9, imageUrl: 'himym.jpg' },
  { id: 3, title: 'breaking bad', rating: 10.0, imageUrl: 'brba.jpg' },
  { id: 4, title: 'prison break', rating: 7.0, imageUrl: 'pb.jpg' },
  { id: 5, title: 'game of thrones', rating: 7.7, imageUrl: 'got.jpg' }
 
  
];

const Shows = () => {
  return (
    <div className="movies-page">
      
       <Header />

      
      <div className="movies-list-header">
        <h2>TV Shows</h2>
      </div>

      <div className="movies-list-container">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      
      <div className="footer">
        &copy; 2024 Moviegram | Contact | Privacy Policy | <a href="https://github.com/" target="_blank" rel="noopener noreferrer">Samet Koca <i className="fa-brands fa-github fa-lg"></i></a>
      </div>
    </div>
  );
};

export default Shows;
