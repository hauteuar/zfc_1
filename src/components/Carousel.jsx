import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';
import styles from './Carousel.module.css';
import background1 from '../assets/images/background1.jpg';
import background2 from '../assets/images/background2.jpg';
import background3 from '../assets/images/background3.jpg';
import background4 from '../assets/images/background4.jpg';
import image1 from '../assets/images/image1.png';
import image2 from '../assets/images/image2.png';
import image3 from '../assets/images/image3.png';
import image4 from '../assets/images/image4.png';
import image5 from '../assets/images/image6.png';

const Carousel = () => {
  const [textStyles, setTextStyles] = useState({});

  const slides = [
    { background: background1, overlay1: image1, overlay2: image3 },
    { background: background2, overlay1: image2, overlay2: image4 },
    { background: background3, overlay1: image1, overlay2: image5 },
    { background: background4, overlay1: image3, overlay2: image2 },
  ];

  const getAverageColor = (imageElement) => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = imageElement.width;
    canvas.height = imageElement.height;
    context.drawImage(imageElement, 0, 0, imageElement.width, imageElement.height);

    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;
    let r = 0, g = 0, b = 0;
    for (let i = 0; i < pixels.length; i += 4) {
      r += pixels[i];
      g += pixels[i + 1];
      b += pixels[i + 2];
    }

    r = Math.floor(r / (pixels.length / 4));
    g = Math.floor(g / (pixels.length / 4));
    b = Math.floor(b / (pixels.length / 4));

    return [r, g, b];
  };

  const updateTextColor = (backgroundImage) => {
    const img = new window.Image();
    img.src = backgroundImage;
    img.crossOrigin = 'Anonymous'; // Ensure the image is loaded properly from cross-origin

    img.onload = () => {
      const [r, g, b] = getAverageColor(img);
      const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

      const contrastTextColor = luminance > 0.5 ? '#000' : '#fff';
      const contrastBackgroundColor = luminance > 0.5 ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)';

      const updatedStyles = {
        color: contrastTextColor,
        backgroundColor: contrastBackgroundColor,
      };

      setTextStyles(updatedStyles);
    };
  };

  useEffect(() => {
    // Analyze the first background image when the component is mounted
    updateTextColor(slides[0].background);
  }, []);

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 5000 }}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      onSlideChange={({ activeIndex }) => updateTextColor(slides[activeIndex].background)}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
        <div className={styles.carouselSlide}>
          <img className={styles.backgroundImage} src={slide.background} alt={`Background ${index + 1}`} />
          
          {/* Apply specific class names for the first and second overlay images */}
          <img className={`${styles.overlayImage} ${styles.firstOverlay}`} src={slide.overlay1} alt="Overlay 1" />
          <img className={`${styles.overlayImage} ${styles.secondOverlay}`} src={slide.overlay2} alt="Overlay 2" />
          
          <div className={styles.carouselText} style={textStyles}>
            <p>
              <i className="fas fa-paper-plane"></i> WE SPEAK FOR YOU, WE MAKE THE LAW WORK FOR YOU
            </p>
            <h1>IMMIGRATION EXPERTS WITH 25+ YEARS OF EXPERIENCE</h1>
          </div>
        </div>
      </SwiperSlide>
      
      ))}
    </Swiper>
  );
};

export default Carousel;
