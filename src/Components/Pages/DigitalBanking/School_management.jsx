import React, { useState, useEffect } from "react";
import Header from '../Common/Header'
import ExchangeRate from '../Common/ExchangeRate'
import Slider from '../Common/Slider'
import About_us from "../../../assets/Images/common.jpg";
import agar1 from "../../../assets/Images/agar1.png";
import styles from "./cardBanking.module.css";
import "animate.css";
import Aos from "aos";
import "aos/dist/aos.css";
// import { FaUserCheck } from "react-icons/fa";
import { IoIosDoneAll } from "react-icons/io";
import Mega_Menu from "../Common/Mega_Menu";
import Footer from "../Common/Footer";
import StikyNav from "../Common/StikyNav";

function School_management() {

    useEffect(() => {
        Aos.init();
    }, []);

    return ( 
        <div>

            <StikyNav />

            <Mega_Menu path="digitalBanking" />

            <div className={styles.agarImage}>
                <img src={About_us} ></img>
            </div>

            <p className={styles.title}>
                <h5>School management Solution</h5>
                <h5 style={{ fontSize: '21px', color: '#004360' }}>Description</h5>
            </p>
            <div className={styles.description}>
                <p>
                    Enables schools and learning institutions to collect fees and offers a comprehensive school management system
                </p>
            </div>
            <div className={styles.features}>
                <div className={styles.featuresTitle}>
                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginRight: '1px' }}></p>
                    <p style={{ backgroundColor: '#004360', margin: '10px', marginLeft: '1px' }}></p>
                    <p>FEATURES:</p>
                </div>
                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                    <li>School fee collection</li>
                </ul>
            </div>

            <p className={styles.RequirementTitle} >
                Basic Requirement to get the Product
            </p>
            <div className={styles.moreFeatures}>
                <div className={styles.leftFeatures}>
                    <IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll>
                </div>
                <div className={styles.rightFeatures}>
                    <p>
                        Signing the contractual agreement with Wegagen Bank
                    </p>
                </div>
            </div>
            <div className={styles.moreFeatures} style={{ marginBottom: '50px' }}>
                <div className={styles.leftFeatures}>
                    <IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll>
                </div>
                <div className={styles.rightFeatures}>
                    <p>
                        Open a school account
                    </p>
                </div>
            </div>

            <Footer />

        </div>
    )
}

export default School_management