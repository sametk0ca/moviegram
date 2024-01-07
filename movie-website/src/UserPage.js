
import React from 'react';
import './UserPage.css';
import Header from './header';
import CollectionCard from './CollectionCard';

const UserPage = () => {
  
  const collectionData = [
    {
      title: 'The Godfather',
      imageUrl: 'godfather.jpg',
      type: 'Movie',
      imdbRating: 9.2,
      year: 1972,
    },
    {
        title: 'Toy Story',
        imageUrl: 'toystory.jpg',
        type: 'Movie',
        imdbRating: 8.7,
        year: 1999,
    },
    {
        title: 'Breaking Bad',
        imageUrl: 'brba.jpg',
        type: 'TV Show',
        imdbRating: 9.1,
        year: 2008,
      },
      {
        title: 'Avatar 2',
        imageUrl: 'avatar.jpg',
        type: 'Movie',
        imdbRating: 7.6,
        year: 2022,
      },
      {
        title: 'Game of Thrones',
        imageUrl: 'got.jpg',
        type: 'TV Show',
        imdbRating: 8.3,
        year: 2011,
      },
           
  ];

  return (
    <div className="user-container">
      <Header />

      
      <div className="user-info">
        <img src="godfather.jpg" alt="Profile" className="profile-picture" />
        <div className="user-details">
          <h2>samet2626</h2>
          <p>Membership Date: 02 May 2022</p>
          <p>Reviews: 3</p>
          <p>Collection Size: 5</p>
        </div>
      </div>

      
      <div className="content-area">
        <div className="collection-content">
          <h1>Collection</h1>
          <div className="collection-list">
            {collectionData.map((movie, index) => (
              <CollectionCard key={index} movie={movie} />
            ))}
          </div>
        </div>

        <div className="myreview-content">
          <h1>My Reviews</h1>
          <div className="review-card">
            <div className="user-profile" style={{ backgroundImage: 'url(godfather.jpg)' }}></div>
            <div className="username">samet2626</div>
            <div className="reviewed-item">The Godfather</div>
            <div className="review">Bu film harikaydı!</div>
          </div>
          <div className="review-card">
            <div className="user-profile" style={{ backgroundImage: 'url(godfather.jpg)' }}></div>
            <div className="username">samet2626</div>
            <div className="reviewed-item">V for Vendetta</div>
            <div className="review">İzlediğim en iyi film</div>
          </div>
          <div className="review-card">
            <div className="user-profile" style={{ backgroundImage: 'url(godfather.jpg)' }}></div>
            <div className="username">samet2626</div>
            <div className="reviewed-item">Breaking Bad</div>
            <div className="review">Başroldeki kel adam bir harika!</div>
          </div>
        </div>

        

        
      </div>

      <div className="footer">
        &copy; 2024 Moviegram | Contact | Privacy Policy |{' '}
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          Samet Koca <i className="fa-brands fa-github fa-lg"></i>
        </a>
      </div>
    </div>
  );
};

export default UserPage;
