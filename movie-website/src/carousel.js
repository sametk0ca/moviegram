import React, { useState } from 'react';
import crs from'./carousel.module.css';

const Carousel = () => {
  const [currentPage, setCurrentPage] = useState(0);

  // Mevcut fotoğraf dizisi
  const photos = [
    'vendetta.jpg', 'avengers.jpg', 'titanic.jpg',
    'avatar.jpg', 'oppenheimer.jpg', 'toystory.jpg',
    'gora.jpg', 'godfather.jpg', 'brba.jpg',
    'got.jpg', 'lcdp.jpg', 'himym.jpg' 
  ];

  const itemsPerPage = 3; 
  const totalPages = Math.ceil(photos.length / itemsPerPage);

  const showNext = () => {
    setCurrentPage((prevPage) => (prevPage < totalPages - 1 ? prevPage + 1 : 0));
  };

  const showPrev = () => {
    setCurrentPage((prevPage) => (prevPage > 0 ? prevPage - 1 : totalPages - 1));
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = photos.slice(startIndex, endIndex);

  return (
    <div className={crs.carousel}>
      <div className={crs['carousel-container']}>
        {currentItems.map((image, index) => (
          <div key={index} className={crs["carousel-item"]}>
            <img src={image} alt={`Movie ${startIndex + index + 1}`} />
          </div>
        ))}
      </div>
      <button className={crs.button} onClick={showPrev}><i className="fa-solid fa-chevron-left fa-xl"></i></button>
      <button className={crs.button} onClick={showNext}><i className="fa-solid fa-chevron-right fa-xl"></i></button>
    </div>
  );
};

export default Carousel;
