import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import { Navigation, Pagination, Scrollbar, EffectCoverflow, A11y, Autoplay, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./aboutUs.module.css";
import "animate.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Slider from '../Common/Slider';
import ExchangeRate from '../Common/ExchangeRate';
import Mega_Menu from '../Common/Mega_Menu';

export default function CSR() {
    return (
        <div>
            {/* <ExchangeRate /> */}

            <Mega_Menu path="aboutUs"/>

            <Slider />

            <div className={styles.aboutUsHeader}>
                Corporate Social Responsibility (CSR)
            </div>
            
            <Footer />
        </div>
    )
}
