import React from 'react';
import Carousel, { consts } from 'react-elastic-carousel';
import "../styles/components/productCarousel.css"

const ProductCarrousel = ({ id = 'carousel', children }) => {

  const carouselArrow = ({ type, onClick, isEdge }) => {

    const pointer = type === consts.PREV ? ((<span class="material-icons">arrow_back_ios</span>)) : ((<span class="material-icons">arrow_forward_ios</span>))
    
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
        <Carousel itemsToShow={5} renderArrow={carouselArrow}>{children}</Carousel>
    </div>
  );
};

export default ProductCarrousel;
