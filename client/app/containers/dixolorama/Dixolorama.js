import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import preparations from './preparations'; // Adjust the path to your data file

export const DixoloramaCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  // Prepare carousel items
  const items = preparations.map(prep => ({
    src: prep.image || '/images/placeholder.jpg', // Ensure placeholder image exists in `/public/images`
    altText: prep.name,
    caption: prep.description
  }));

  const slides = items.map((item, index) => (
    <CarouselItem
      key={index}
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
    >
      <img
        src={'http://localhost:3000/api/utils/images/' + item.src}
        alt={item.altText}
        className='d-block w-100'
        style={{
          maxHeight: '350px',
          minHeight: '350px',
          overflow: 'hidden',
          objectFit: 'cover',
          backgroundColor: 'rgba(0,0,0,0.5)'
        }} // Adjust styling as needed
      />
      <CarouselCaption
        captionText={item.caption}
        captionHeader={item.altText}
        className='text-black' // Optional: Make text visible on light backgrounds
      />
    </CarouselItem>
  ));

  return (
    <div
      style={{
        maxWidth: '400px',
        margin: 'auto'
      }}
    >
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction='prev'
          directionText='Previous'
          onClickHandler={previous}
        />
        <CarouselControl
          direction='next'
          directionText='Next'
          onClickHandler={next}
        />
      </Carousel>
    </div>
  );
};
