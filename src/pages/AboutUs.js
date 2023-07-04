import React, { useState } from 'react';
import {Carousel,CarouselItem,CarouselControl,CarouselIndicators} from 'reactstrap';
import "../styles/AboutUs.css"

const items = [
  {
    src: require('../assets/Tucker_711x400.jpeg'),
    altText: 'Picture of Tucker',
    key: 1,
  },
  {
    src: require('../assets/Ernesto_711x400.jpeg'),
    altText: 'Picture of Ernesto',
    key: 2,
  },
  {
    src: require('../assets/Bea.jpeg'),
    altText: 'Picture of Bea',
    key: 3,
  },
  {
    src: require('../assets/Rashaan_711x400.jpeg'),
    altText: 'Picture of Rashaan',
    key: 4,
  },

];

function Creators(args) {
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

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={item.src}>
        <div className="carousel-image">
          <img src={item.src} alt={item.altText} />
        </div>
      </CarouselItem>
    );
  });

  return (
    <>
      <h1 className="creators">Meet The Creators!</h1>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        {...args}
        className="carousel-container"
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </>
  );
}

export default Creators;