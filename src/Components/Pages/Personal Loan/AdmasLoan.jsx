import React, { useState, useEffect } from "react";
import Header from '../Common/Header'
import ExchangeRate from '../Common/ExchangeRate'
import Slider from '../Common/Slider'
import About_us from "../../../assets/Images/common.jpg";
import agar1 from "../../../assets/Images/agar1.png";
import styles from "./personalLoan.module.css";
import "animate.css";
import Aos from "aos";
import "aos/dist/aos.css";
// import { FaUserCheck } from "react-icons/fa";
import { IoIosDoneAll } from "react-icons/io";
import Mega_Menu from "../Common/Mega_Menu";
import Footer from "../Common/Footer";

function AdmasLoan() {

    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div>

            <Mega_Menu path="bankingServices" />

            <div className={styles.agarImage}>
                <img src={About_us} ></img>
            </div>

            <p className={styles.title}>
             It is a saving account for credit scheme that targets individuals particularly employees 
             where they save a certain amount of money to get loan for purchase of a vehicle and a house.
            </p>
            <div className={styles.features}>
                <div className={styles.featuresTitle}>
                    <p style={{ backgroundColor: '#ff6b0b', margin: '10px', marginRight: '1px' }}></p>
                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginLeft: '1px' }}></p>
                    <p>FEATURES:</p>
                </div>
                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                    <li>For purchase of a vehicle the customer should deposit 10% of the value initially, and additional 15% within the first six 
                        months and the remaining 15% in the next six months.Then after, the Bank provides loan for the remaining 60% of the value.</li>
                    <li>For purchase of a house the customer should deposit 10% of the value initially and additional 10% within the first six 
                        months and the remaining 10% in the next six months.Then after, the Bank provides loan for the remaining 70% of the value.</li>
                    <li>The interest rate is calculated as per the Bank’s terms and tariffs.</li>
                    <li>The maturity of the loan for a Vehicle is 7 years and 10 years for acquisition of a House</li>
                    <li>The assets acquired with the Bank’s finance shall be used as collateral.</li>
                    <li>The account holder should deposit at least for one year to be eligible for the loan.</li>
                </ul>
            </div>

            <div className={styles.moreFeatures} style={{ marginTop: '50px' }}>
                <div className={styles.leftFeatures}>
                    <IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll>
                </div>
                <div className={styles.rightFeatures}>
                    <p>
                        Wegagen Bank provides loan to employees of companies that are corporate customer. The loan facilities provided includes
                        household items, vehicles and houses, with relaxed repayment schedules extending from mid to long term, depending on the loan.
                    </p>
                </div>
            </div>

            {/* <div className={styles.moreFeatures} style={{ marginBottom: '150px' }}>
                <div className={styles.leftFeatures}>
                    <IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll>
                </div>
                <div className={styles.rightFeatures}>
                    <p>Or this product targets employees of companies or institutions currently working with the
                        Bank or potential customers (such as, International Organizations, Embassies, NGOs and micro-finance institutions, etc.)</p>
                </div>
            </div> */}

            <Footer />

        </div>
    )
}

export default AdmasLoan