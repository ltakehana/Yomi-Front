import React from 'react';
import Carousel, { consts } from 'react-elastic-carousel';
import "../styles/components/productCarousel.css"

const ProductCarrousel = ({ id = 'carousel', children }) => {


  const breakPoints = [
    {
      width: 1,
      itemsToShow: 1
    },
    {
      width:600,
      itemsToShow: 2
    },
    {
      width: 800,
      itemsToShow: 3
    },
    {
      width: 1100,
      itemsToShow: 4
    },
    {
      width: 1400,
      itemsToShow: 5
    },
    {
      width: 1920,
      itemsToShow: 6
    }
  ];


  const carouselArrow = ({ type, onClick, isEdge }) => {

    const pointer = type === consts.PREV ? ((<span className="material-icons">arrow_back_ios</span>)) : ((<span className="material-icons">arrow_forward_ios</span>))
    
    return (
      <a className="carouselArrows" onClick={onClick} disabled={isEdge}>
          {pointer}
      </a>
    )
  }

  return (
      <div id="component-carousel-container">
        <div id="component-carousel-content">
        </div>
        <Carousel pagination={false} breakPoints={breakPoints} renderArrow={carouselArrow}>{children}</Carousel>
    </div>
  );
};

export default ProductCarrousel;
