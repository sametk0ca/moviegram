import React, { useState } from 'react';
import './DropdownMenu.css';

const ProfileDropdown = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="profile-dropdown">
      <button onClick={toggleMenu} className="profile-button">
      <span class="material-symbols-outlined">
menu
</span>
      </button>
      {isMenuOpen && (
        <div className="menu-items">
          <a href='./UserPage'><div className="menu-item">Profile</div></a>
          <a href='./'><div className="menu-item">Log out</div></a>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
