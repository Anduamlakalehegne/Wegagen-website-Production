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

function DiasporaSaving() {

    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div>

            {/* <ExchangeRate /> */}

            <Mega_Menu path="bankingServices" />

            <div className={styles.agarImage}>
                <img src={About_us} ></img>
            </div>
            <p style={{ textAlign: 'left', fontSize: '19px', marginLeft: '10%', marginTop: '30px' }}>
                This credit scheme allows Diaspora Ethiopians (Non-resident Ethiopians and Non-Resident Foreign Nationals of Ethiopian Origin)
                to purchase or construct residential or commercial buildings in Ethiopia by saving with the Bank certain
                portion of the value in a dvance in foreign currency for a certain period of time
            </p>
            <div className={styles.features}>
                <div className={styles.featuresTitle}>
                    <p style={{ backgroundColor: '#ff6b0b', margin: '10px', marginRight: '1px' }}></p>
                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginLeft: '1px' }}></p>
                    <p>FEATURES:</p>
                </div>
                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                    <li >The loan facility is given to :</li>
                    <ol style={{ marginLeft: '30px', fontSize: '10px' }}>
                        <li style={{ fontSize: '15px' }}> - Purchase residential house from real estate, individual sellers or associations,<br /></li>
                        <li style={{ fontSize: '15px' }}>- Construct residential house on their own plot of land, <br /></li>
                        <li style={{ fontSize: '15px' }}> - Purchase or construct commercial buildings, <br /></li>
                        <li style={{ fontSize: '15px' }}> - Finish construction of residential house or commercial building. <br /></li>
                    </ol>
                    <li>Withdrawal is not allowed from the special Diaspora mortgage saving account but if the customer wants to withdraw,
                        it will be considered as a breach of the contract, and thus will be treated
                        based on the agreement that has been made between the Bank and the Diaspora.</li>
                    <li>The Bank shall finance up to 50% of the value of the residential or commercial building as per the sales
                        agreement or the Bank’s engineering valuation, whichever is lower</li>
                    <li>For purchase of a finished house or for those who can present additional collateral in case of under construction below 50% status,
                        the Bank shall finance up to 70% of the value</li>
                    <li>Loan interest rate shall be as per the Bank’s terms and tariffs,</li>
                    <li>If the Diaspora returns to Ethiopia for permanent living, the loan repayment will be in Birr but with a 1% additional interest rate</li>
                </ul>
            </div>

            <div className={styles.moreFeatures}>
                <div className={styles.leftFeatures}>
                    <IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll>
                </div>
                <div className={styles.rightFeatures}>
                    <h6>Customer can transfer fund</h6>
                    <p>and effect payment to third-party through check</p>
                </div>
            </div>

            <div className={styles.moreFeatures}>
                <div className={styles.leftFeatures}>
                    <IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll>
                </div>
                <div className={styles.rightFeatures}>
                    <h6>This account can be accessed through</h6>
                    <p>internet banking service</p>
                </div>
            </div>
            <div className={styles.moreFeatures}>
                <div className={styles.leftFeatures}>
                    <IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll>
                </div>
                <div className={styles.rightFeatures}>
                    <h6>Only individually operated accounts</h6>
                    <p>can be linked to payment card and mobile banking services</p>
                </div>
            </div>
            <div className={styles.moreFeatures} style={{ marginBottom: '100px' }}>
                <div className={styles.leftFeatures}>
                    <IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll>
                </div>
                <div className={styles.rightFeatures} >
                    <h6>The account is captured in a system</h6>
                    <p>for quick and effcient deposits and withdrawal at any branch of the Bank</p>
                </div>
            </div>

            <div className={styles.cards}>
                <div className={styles.topImage}>
                    <img src={agar1}></img>
                    <p>Agar <span>Checking</span></p>
                </div>

                <div className={styles.topImage}>
                    <img src={agar1}></img>
                    <p>Agar <span>Fixed</span></p>
                </div>

                <div className={styles.topImage}>
                    <img src={agar1}></img>
                    <p>Agar <span>Now</span></p>
                </div>

                <div className={styles.topImage}>
                    <img src={agar1}></img>
                    <p>Agar <span>Plus</span></p>
                </div>
            </div>

            <Footer />

        </div>
    )
}

export default DiasporaSaving