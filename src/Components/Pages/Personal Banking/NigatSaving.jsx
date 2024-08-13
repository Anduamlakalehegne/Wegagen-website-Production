import React, { useState, useEffect } from "react";
import Header from '../Common/Header'
import ExchangeRate from '../Common/ExchangeRate'
import Slider from '../Common/Slider'
import About_us from "../../../assets/Images/common.jpg";
import agar1 from "../../../assets/Images/agar1.png";
import styles from "./agar.module.css";
import "animate.css";
import Aos from "aos";
import "aos/dist/aos.css";
// import { FaUserCheck } from "react-icons/fa";
import { IoIosDoneAll } from "react-icons/io";
import Mega_Menu from "../Common/Mega_Menu";
import Footer from "../Common/Footer";

function NigatSaving() {

    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <div>
            <Mega_Menu path="bankingServices" />
            <div className={styles.agarImage}>
                <img src={About_us} ></img>
            </div>
            <p style={{ textAlign: 'left', fontSize: '19px', marginLeft: '10%', marginTop: '30px' }}>
                This is a special saving account intended for women so as to enhance
                their saving habits and economic benefits.
            </p>
            <p>TARGETS :INDIVIDUAL WOMEN AND BUSINESS WOMEN</p>
            <div className={styles.features}>
                <div className={styles.featuresTitle}>
                    <p style={{ backgroundColor: '#ff6b0b', margin: '10px', marginRight: '1px' }}></p>
                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginLeft: '1px' }}></p>
                    <p>FEATURES:</p>
                </div>
                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                    <li >Higher Interest rate</li>
                    <li >Operated through uniquely prepared pass book and payment card</li>
                    <li >Can be linked to internet and mobile banking</li>
                    <li>Individual account holders will get discounts from selected merchants and service providers (arranged by the Bank) for purchases and/or payments effected through POS.</li>
                    <li>Free of charge Bank statement once monthly</li>
                </ul>
            </div>

            <div className={styles.moreFeatures} style={{ marginBottom: '100px' }}>
                <div className={styles.leftFeatures}>
                    <IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll>
                </div>
                <div className={styles.rightFeatures}>
                    <h6>Birth Certificate</h6>
                    <p>of the child from Government Office, or Hospital, Church,</p>
                </div>
            </div>


            <Footer />
        </div>
    )
}

export default NigatSaving