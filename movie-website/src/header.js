
import React from 'react';
import ProfileDropdown from './DropdownMenu';
import './header.css';

const Header = () => {
  return (
    <header className="App-header">
      <label className='logo'>
        <h1 className='title'><a href='./home '>Moviegram</a></h1>
        <span className="material-symbols-outlined">
          videocam
        </span>
      </label>

      <label className='search-label'>
        <input className='search-bar' type='text' placeholder='Search'  />
        <span className="material-symbols-outlined">
          search
        </span>
      </label>
      <ProfileDropdown />
    </header>
  );
};

export default Header;
