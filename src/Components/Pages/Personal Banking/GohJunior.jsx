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

function GohJunior() {

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
            Goh Junior Saving is a higher interest yielding saving account opened by parents or guardians on behalf of their children for their future use when they turn 18.
            </p>
            <div className={styles.features}>
                <div className={styles.featuresTitle}>
                    <p style={{ backgroundColor: '#ff6b0b', margin: '10px', marginRight: '1px' }}></p>
                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginLeft: '1px' }}></p>
                    <p>FEATURES:</p>
                </div>
                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                    <li >Higher Interest rate</li>
                    <li >Parents or guardians are encouraged to deposit any amount on monthly basis,</li>
                    <li >The minimum deposit per annum is Birr 1200.00.</li>
                    <li>The account shall be renewed every five years upon consent of the customer; Otherwise normal saving interest rate shall be applied</li>
                    <li>Withdrawal is not allowed before the agreed maturity date. If withdrawal is made before the maturity date, only normal saving interest rate shall be paid</li>
                    <li>Withdrawal is not allowed before the agreed maturity date. If withdrawal is made before the maturity date, only normal saving interest rate shall be paid. - At each five years’ renewal, the Bank will provide bonus depending on the deposit amount at maturity date.</li>
                    <li>Incremental interest rate will be calculated at every renewal until the child reaches 18.</li>
                    <li>The money in the account and the ownership right shall be transferred to the child when he/she turns 18.</li>
                </ul>
            </div>

            <div className={styles.moreFeatures}>
                <div className={styles.leftFeatures}>
                    <IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll>
                </div>
                <div className={styles.rightFeatures}>
                    <h6>Birth Certificate</h6>
                    <p>of the child from Government Office, or Hospital, Church,</p>
                </div>
            </div>

            <div className={styles.moreFeatures}>
                <div className={styles.leftFeatures}>
                    <IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll>
                </div>
                <div className={styles.rightFeatures}>
                    <h6>One Passport Size Photograph </h6>
                    <p>of each the child and the parent or guardian</p>
                </div>
            </div>
            <div className={styles.moreFeatures} style={{marginBottom:'100px'}}>
                <div className={styles.leftFeatures}>
                    <IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll>
                </div>
                <div className={styles.rightFeatures}>
                    <h6>Court Appointment  Document</h6>
                    <p>if the account is to be opend by a person other than perentsy </p>
                </div>
            </div>

           
           <Footer /> 

        </div>
    )
}

export default GohJunior