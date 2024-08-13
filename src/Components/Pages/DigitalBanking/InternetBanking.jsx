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
import { Sticky } from "semantic-ui-react";
import StikyNav from "../Common/StikyNav";

function InternetBanking() {

    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div>
            <Mega_Menu path="digitalBanking" />
            <StikyNav />
            <div className={styles.agarImage}>
                <img src={About_us} ></img>
            </div>
            <p className={styles.title}>
                <h5>Internet Banking Service</h5>
                <h5 style={{ fontSize: '21px', color: '#004360' }}>Description</h5>
            </p>
            <div className={styles.description}>
                <p>
                    This digital channel provides browser-based access to customers to review transactions and make payments.
                </p>
            </div>

            <div className={styles.features}>
                <div className={styles.featuresTitle}>
                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginRight: '1px' }}></p>
                    <p style={{ backgroundColor: '#004360', margin: '10px', marginLeft: '1px' }}></p>
                    <p>FEATURES:</p>
                </div>
                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                    <li>Account to account transfer</li>
                    <li>View transactions</li>
                </ul>
            </div>

            <p className={styles.RequirementTitle}>
                Basic Requirement to get the Product
            </p>
            <div className={styles.moreFeatures}>
                <div className={styles.leftFeatures}>
                    <IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll>
                </div>
                <div className={styles.rightFeatures}>
                    <p>
                        Must have an account with Wegagen Bank account
                    </p>
                </div>
            </div>
            <div className={styles.moreFeatures}>
                <div className={styles.leftFeatures}>
                    <IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll>
                </div>
                <div className={styles.rightFeatures}>
                    <p>
                        Apply for the service at Branch
                    </p>
                </div>
            </div>
            <div className={styles.moreFeatures} style={{ marginBottom: '50px' }}>
                <div className={styles.leftFeatures}>
                    <IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll>
                </div>
                <div className={styles.rightFeatures}>
                    <p>
                        Internet access
                    </p>
                </div>
            </div>

            <Footer />

        </div>
    )
}

export default InternetBanking