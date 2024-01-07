import React from 'react';
import './App.css';

import Carousel from './carousel';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <label className='logo'>
          <h1 className='title'>Moviegram</h1>
          <span class="material-symbols-outlined">
          videocam
        </span>
        </label>

        <label className='search-label'>
          <input className='search-bar' type='text' placeholder='Search'  />
        <span class="material-symbols-outlined">
        search
        </span>
        </label>
        <label className='auth-label'>
          <a href='./login'>Log in</a>
          |
          <a href='./signup'>Sign Up</a>
        </label>
        
      </header>
      <main>
        <Carousel />
        <div className="categories">
          <div className="category" id='movies'><a href='./movies'>Movies</a></div>
          <div className="category" id='shows'><a href='./shows'>Shows</a></div>
          
        </div>
        <div className="footer">
        &copy; 2024 Moviegram | Contact | Privacy Policy | <a href="https://github.com/" target="_blank" rel="noopener noreferrer">Samet Koca <i class="fa-brands fa-github fa-lg"></i></a>

      </div>
      </main>
      
    </div>
  );
}

export default App;