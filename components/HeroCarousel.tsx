"use client"

import { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";

const heroImages = [
  { imgUrl: '/assets/images/hero-1.svg', alt: 'smartwatch' },
  { imgUrl: '/assets/images/hero-2.svg', alt: 'bag' },
  { imgUrl: '/assets/images/hero-3.svg', alt: 'lamp' },
  { imgUrl: '/assets/images/hero-4.svg', alt: 'air fryer' },
  { imgUrl: '/assets/images/hero-5.svg', alt: 'chair' },
];

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the current index, looping back to the first image if necessary
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // 5000 milliseconds = 5 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="hero-carousel">
      <Carousel
        showThumbs={false}
        selectedItem={currentIndex}
        infiniteLoop
        showArrows={false}
        showStatus={false}
      >
        {heroImages.map((image) => (
          <Image 
            src={image.imgUrl}
            alt={image.alt}
            width={484}
            height={484}
            className="object-contain"
            key={image.alt}
          />
        ))}
      </Carousel>

      <Image 
        src="assets/icons/hand-drawn-arrow.svg"
        alt="arrow"
        width={175}
        height={175}
        className="max-xl:hidden absolute -left-[15%] bottom-0 z-0"
      />
    </div>
  )
}

export default HeroCarousel;
