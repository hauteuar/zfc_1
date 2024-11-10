import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../Styles/HeroPage.css';
import background1 from '../assets/images/background1.jpg';
import background2 from '../assets/images/background6.avif';
import background3 from '../assets/images/background3.jpg';
import background4 from '../assets/images/background4.jpg';
import image2 from '../assets/images/canadian.png';
import image1 from '../assets/images/image1.png';
import image3 from '../assets/images/image2.png';
import image4 from '../assets/images/image3.png';
import image5 from '../assets/images/image7.png';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';

const slides = [
    {
        bgImage: background1,
        captionPart1: 'IMMIGRATION EXPERTS',
        captionPart2: 'WITH 25+ YEARS OF EXPERIENCE',
        overlayImages: [{ src: image2, style: { right: '2%', top: '40%' } }]
    },
    {
        bgImage: background2,
        captionPart1: `BUILDING YOUR'S &`,
        captionPart2: 'YOUR FAMILIES FUTURE',
        overlayImages: [{ src: image1, style: { left: '0%', top: '50%' } }]
    },
    {
        bgImage: background3,
        captionPart1: 'IMMIGRATION MADE',
        captionPart2: 'SIMPLE AND EASY',
        overlayImages: [{ src: image4, style: { top: '50%', left: '60%' } }]
    },
    {
        bgImage: background4,
        captionPart1: 'EXPERIENCE &',
        captionPart2: 'DEDICATION',
        overlayImages: [{ src: image5, style: { left: '3%', bottom: '0%' } }]
    }
];

const HeroPage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const navigate = useNavigate(); // Initialize navigate

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentSlide === slides.length - 1) {
                setIsTransitioning(false);
                setCurrentSlide(0); // Instantly jump to the start
                setTimeout(() => setIsTransitioning(true), 50); // Re-enable transition
            } else {
                setCurrentSlide((prevSlide) => prevSlide + 1);
            }
        }, 6000); // 6 seconds per slide

        return () => clearInterval(interval);
    }, [currentSlide]);

    const handleConsultClick = () => {
        navigate('/consultation'); // Navigate to /consultation
    };

    return (
        <div className="carousel-container">
            <div
                className="slides"
                style={{
                    transform: `translateX(-${currentSlide * 100}vw)`,
                    transition: isTransitioning ? 'transform 1s ease-in-out' : 'none'
                }}
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="hero-container"
                        style={{ backgroundImage: `url(${slide.bgImage})` }}
                    >
                        <div className="tagline-top">
                            <FlightTakeoffIcon className="flight-icon" />
                            WE SPEAK FOR YOU, WE MAKE THE LAW WORK FOR YOU
                        </div>
                        <div className="hero-caption">
                            <div className="caption">
                                <span className="caption-part1">{slide.captionPart1}</span>
                                <span className="caption-part2">{slide.captionPart2}</span>
                            </div>
                            <button className="consult-button" onClick={handleConsultClick}>
                                ZFCANADA IMMIGRATION
                            </button>
                        </div>
                        <div className="overlay-container">
                            {slide.overlayImages.map((image, idx) => (
                                <img key={idx} src={image.src} style={image.style} className="overlay-image" alt="overlay" />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HeroPage;
