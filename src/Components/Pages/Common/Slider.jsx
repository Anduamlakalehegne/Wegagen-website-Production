import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import styles from './slider.module.css';
import gif from '../../../assets/gif.gif'; 

export default function Slider() {
  const [slides, setSlides] = useState([]);
  const [isLoading, setIsLoading] = useState(true);  // Manage the loading state

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const response = await axios.get('https://weg.back.strapi.wegagen.com/api/sliders?populate=*');
        const slidersData = response.data.data[0].attributes.wegagen_slider.data;
        const newSlides = slidersData.map(slider => ({ 
          id: slider.id, 
          url: `https://weg.back.strapi.wegagen.com${slider.attributes.url}`, 
          altText: slider.attributes.alternativeText || slider.attributes.name
        })); 
        setSlides(newSlides);
      } catch (error) { 
        console.error('Error fetching sliders:', error);
      } finally {
        setIsLoading(false);  // Set loading to false when data is fetched or an error occurs
      }
    };
    fetchSlides();
  }, []);

  return ( 
    <div>
      {slides.length === 0 || isLoading ? (
        <div className={styles.centeredLoader}>
          <img style={{width:'40%'}} className="size" src={gif} alt="Loading..." />
        </div>
      ) : (
        <Swiper
          modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
          effect="fade"
          spaceBetween={5}
          slidesPerView={1}
          loop={true}
          navigation={{ clickable: true }}
          pagination={{ clickable: true }}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id} className={styles.sliderImage}>
              <img src={slide.url} alt={slide.altText} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}
