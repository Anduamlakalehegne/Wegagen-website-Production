import React, { useState, useEffect } from "react";
import Header from '../Common/Header'
import ExchangeRate from '../Common/ExchangeRate'
import Slider from '../Common/Slider'
import wadya from "../../../assets/Images/Full Slide 3.png";
import agar1 from "../../../assets/Images/agar1.png";
import styles from "./wadya_aman_saving.module.css";
import "animate.css";
import Aos from "aos";
import "aos/dist/aos.css";
// import { FaUserCheck } from "react-icons/fa";
import { IoIosDoneAll } from "react-icons/io";
import Mega_Menu from "../Common/Mega_Menu";
import Footer from "../Common/Footer";
import StikyNav from "../Common/StikyNav";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { MdMenuOpen } from "react-icons/md";
import { useLocation } from 'react-router-dom';
import img3 from '../../../assets/Images/Home Page/menu3.png'

function Guarantee_Kafalah() {

    useEffect(() => {
        Aos.init();
    }, []);

    const [dispaly, setDisplay] = useState(1);
    const MySwal = withReactContent(Swal);
    useEffect(() => {
        if (dispaly !== 0) {
            MySwal.close();
        }
    }, [dispaly]);

    const location = useLocation();

    useEffect(() => {
        // Check if state is passed
        if (location.state && location.state.display) {
            setDisplay(location.state.display);
        }
    }, [location]);

    const handleNavigationClick = (index) => {
        setDisplay(index);
        window.scrollTo(0, 500);
    };


    return (
        <div> 
            <StikyNav />
            <Mega_Menu path="interestFree" headerSelect="interestFree" />
            <div>
                <img src={img3} />
            </div>
            <div className={styles.establishment}> 
                <div className={styles.leftNavBars}>
                    <div className={`animate__animated animate__fadeInLeft ${styles.shortInfo}`} style={{ height: '200px' }}>
                        <p onClick={() => handleNavigationClick(1)} style={dispaly === 1 ? { backgroundColor: '#ff6b0b', color: 'white', padding: '7px', fontSize: '16px' } : null}> 1 Guarantee (Kafalah)</p>
                    </div>
                </div>
                <div> 

                    {dispaly == 1 ?
                        <div className="animate__animated animate__bounceInUp">
                            <p className={styles.title}>
                                <h5>1. Guarantee (Kafalah)</h5>
                                <h5 style={{ fontSize: '21px', color: '#007070' }}>Target Group</h5>
                            </p>
                            <p style={{ textAlign: 'left', fontSize: '19px', marginLeft: '10%', marginTop: '10px' }}>
                                Any Individual,  legal person and companies
                            </p>
                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#007070', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginLeft: '1px' }}></p>
                                    <p>FEATURES:</p>
                                </div>
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li>A written promise/irrevocable obligation by the Bank/Kafil to compensate (pay a sum of money)
                                        to the beneficiary/Makful lahu (local or foreign) in the event that the obligor/Makful lahu fails
                                        to honor his/her/its obligations in accordance with the terms and conditions of the guarantee/agreement/contract.</li>
                                </ul>
                            </div>

                            <p className={styles.title} style={{ color: '#ff6b0b', textAlign: 'center', fontSize: '21px', paddingBottom: '20px' }}>
                                Basic Requirement to get the Product
                            </p>

                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}>
                                    <IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll>
                                </div>
                                <div className={styles.rightFeatures}>
                                    <p>All persons engaged in permissible trading activities, viable businesses and fulfill the required documents are eligible to apply for financing</p>
                                </div>
                            </div>

                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#007070', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginLeft: '1px' }}></p>
                                    <p style={{ fontSize: '23px' }}>List of products under Kafalah:</p>
                                </div>
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li>Bid bond </li>
                                    <li>Performance guarantee </li>
                                    <li>Advance payment guarantee</li>
                                    <li>Retention guarantee</li>
                                    <li>Steamers' Guarantee</li>
                                    <li>Suppliers’ credit guarantee</li>
                                    <li>Order guarantee</li>
                                    <li>Lease payment guarantee</li>
                                    <li>Customs duty guarantee and others</li>
                                </ul>
                            </div>
                        </div>
                        : ""}

                    {dispaly == 2 ?

                        <div className="animate__animated animate__bounceInUp">

                            <p className={styles.title}>
                                <h5>2. Qard Financing </h5>
                                <h5 style={{ fontSize: '21px', color: '#007070' }}>Target Group</h5>
                            </p>

                            <p style={{ textAlign: 'left', fontSize: '19px', marginLeft: '10%', marginTop: '10px' }}>
                                Exporters
                            </p>
                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#007070', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginLeft: '1px' }}></p>
                                    <p>FEATURES:</p>
                                </div>
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li>Qard pre-shipment export financing is a facility extended for the purchase of exportable
                                        goods in which the borrower need only to pay back the borrowed amount with foreign currency, with no profit</li>
                                </ul>
                            </div>

                            <p className={styles.title} style={{ color: '#ff6b0b', textAlign: 'center', fontSize: '21px', paddingBottom: '20px' }}>
                                Basic Requirement to get the Product
                            </p>

                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}>
                                    <IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll>
                                </div>
                                <div className={styles.rightFeatures}>
                                    <p>Must have a clean track record in the export business.</p>
                                </div>
                            </div>
                        </div>
                        : ""}

                    {dispaly == 3 ?
                        <div className="animate__animated animate__bounceInUp">
                            <p className={styles.title}>
                                <h5>3. Qard Benevolent</h5>
                                <h5 style={{ fontSize: '21px', color: '#007070' }}>Target Group</h5>
                            </p>
                            <p style={{ textAlign: 'left', fontSize: '19px', marginLeft: '10%', marginTop: '10px' }}>
                                Needy persons such as small producers, entrepreneurs, farmers who are not able to secure
                                financing for investment or working capital from other alternative sources.
                            </p>
                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#007070', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginLeft: '1px' }}></p>
                                    <p>FEATURES:</p>
                                </div>
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li> It is a profit free financing</li>
                                </ul>
                            </div>

                            <p className={styles.title} style={{ color: '#ff6b0b', textAlign: 'center', fontSize: '21px', paddingBottom: '20px' }}>
                                Basic Requirement to get the Product
                            </p>

                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}>
                                    <IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll>
                                </div>
                                <div className={styles.rightFeatures}>
                                    <p>Bank's Choice as part Coprorate social responsbility </p>
                                </div>
                            </div>
                        </div>
                        : ""}

                </div>
            </div>

            <Footer footerColor="wadya" />

        </div>
    )
}

export default Guarantee_Kafalah