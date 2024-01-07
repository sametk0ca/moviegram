import React from 'react';
import Header from './header';
import "./movieInfo.css"



const MovieInfo = () => {
  return (
    <div className="film-info-container">
      <Header />

      <div className="film-info-content">
        <img src="vendetta.jpg" alt="Film Poster" className="film-poster" />

        <div className="info">
          <h2>V For Vendetta</h2>
          <p>
            <strong>IMDb rating:</strong> 8.2
          </p>
          <p>
            <strong>Release Date:</strong> 2005
          </p>
          <p>
            <strong>Writer(s):</strong> Lilly Wachowski-Lana Wachowski
          </p>
          <p>
            <strong>Director:</strong> James McTeigue
          </p>
          <p>
            <strong>Stars:</strong> Hugo Weaving , Natalie Portman , Rupert Graves  
          </p>
          <p id='about-movie'>
             In a future British dystopian society,
             a shadowy freedom fighter, known only by the alias of "V", plots to overthrow the tyrannical government - with the help of a young woman.
          </p>
        </div>
        
      </div>

      <div className="action-buttons">
          <button className="collection-button">Add to collection</button>
          <button className="review-button">Write review</button>
        </div>

      <div className="review-content">
       
        <div className="review-card">
          
          <div className="user-profile"></div>
          
         
          <div className="username">samet2626</div>

          
          <div className="review">Bu film harikaydı!</div>
        </div>

        <div className="review-card">
          
          <div className="user-profile"></div>
          
         
          <div className="username">filmlover</div>

          
          <div className="review">Gelmiş geçmiş en iyi film!!</div>
        </div>

      </div>
      

      <div className="footer">
          &copy; 2024 Moviegram | Contact | Privacy Policy | <a href="https://github.com/" target="_blank" rel="noopener noreferrer">Samet Koca <i className="fa-brands fa-github fa-lg"></i></a>
        </div>
    </div>
  );
};

export default MovieInfo;
