import React from 'react';
import './App.css';

import Carousel from './carousel';
import Header from './header';

function Home() {
  return (
    <div className="App">
     <Header />
      <main>
        <Carousel />
        <div className="categories">
        <div className="category" id='movies'><a href='./movies'>Movies</a></div>
          <div className="category" id='shows'><a href='./shows'>Shows</a></div>
          
        </div>
        <div className="footer">
          &copy; 2024 Moviegram | Contact | Privacy Policy | <a href="https://github.com/" target="_blank" rel="noopener noreferrer">Samet Koca <i className="fa-brands fa-github fa-lg"></i></a>
        </div>
      </main>
    </div>
  );
}

export default Home;
