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

function Financing_Products() {

    useEffect(() => {
        Aos.init();
    }, []);

    const [dispaly, setDisplay] = useState(1);
    const [showMenu, setshowMenu] = useState(false);
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

    const handleClick = (index) => {
        setDisplay(index);
        MySwal.close();
        window.scrollTo(0, 0);
    };

    // const MySwal = withReactContent(Swal);

    const menutoggle = () => { 
        MySwal.fire({
            html: (
                <div className="leftNavBars" style={{ marginTop: '20px' }}>
                    <div className={`animate__animated animate__fadeInLeft ${styles.popupshortInfo}`}>
                        <p onClick={() => { handleClick(1, showMenu) }} style={dispaly === 1 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>1 Murabaha</p>
                        <p onClick={() => { handleClick(2, showMenu) }} style={dispaly === 2 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>2 Qard Financing</p>
                        <p onClick={() => { handleClick(3, showMenu) }} style={dispaly === 3 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>3 Qard Benevolent</p>
                    </div>
                </div>
            ),
            showConfirmButton: false,
            showCloseButton: true,
            width: "350px",
            denyButtonText: "Close",
            imageClass: "img-responsive",
            imageAlt: "Custom image",
            showClass: {
                popup: "animate__animated animate__jackInTheBox",
            },
            hideClass: {
                popup: "animate__animated animate__zoomOut",
            }
        }).then((result) => {
            if (result.isDenied) {
                // 
            }
        })
    }


    return (
        <div>
            <Mega_Menu path="interestFree" headerSelect="interestFree" />
            <StikyNav />
            <div>
                <img src={img3} />
            </div>
            <div className={styles.establishment}>

                <p className={styles.aboutUsMenu} onClick={() => { menutoggle() }} ><MdMenuOpen style={{ fontSize: '30px' }} /></p>

                <div className={styles.leftNavBars}>
                    <div className={`animate__animated animate__fadeInLeft ${styles.shortInfo}`} style={{ height: '200px' }}>
                        {/* <p style={{ backgroundColor: '#007070', color: 'white' }}>1. Murabaha</p> */}
                        <p onClick={() => handleNavigationClick(1)} style={dispaly === 1 ? { backgroundColor: '#ff6b0b', color: 'white', padding: '7px', fontSize: '16px' } : null}> 1 Murabaha</p>
                        <p onClick={() => handleNavigationClick(2)} style={dispaly === 2 ? { backgroundColor: '#ff6b0b', color: 'white', padding: '7px', fontSize: '16px' } : null}> 2 Qard Financing</p>
                        <p onClick={() => handleNavigationClick(3)} style={dispaly === 3 ? { backgroundColor: '#ff6b0b', color: 'white', padding: '7px', fontSize: '16px' } : null}> 3 Qard Benevolent</p>
                    </div>
                </div>
                <div>

                    {dispaly == 1 ?
                        <div className="animate__animated animate__bounceInUp" style={{ marginBottom: '100px' }}>
                            <p className={styles.title}>
                                <h5>1. Murabaha</h5>
                                <h5 style={{ fontSize: '21px', color: '#007070' }}>Target Group</h5>
                            </p>
                            <div className={styles.description}>
                                <p>
                                    Any Individual,  legal person and companies
                                </p>
                            </div>
                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#007070', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginLeft: '1px' }}></p>
                                    <p>FEATURES:</p>
                                </div>
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li>It is a type of financing wherein the bank sells an identified asset at a profit rate that is mutually agreed upon and adds to the purchase price that must be paid back.
                                        The price of the items and bank's profit will be disclosed to the customer at the time of contracting.</li>
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
                                    <p>All persons engaged in permissible trading activities, viable business and fulfil the required documents are eligible to apply for financing</p>
                                </div>
                            </div>

                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#007070', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginLeft: '1px' }}></p>
                                    <p style={{ fontSize: '23px' }}>List of products under murabaha:</p>
                                </div> 
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li>Murabaha Building Construction Term Financing</li>
                                    <li>Murabaha Transport Term Financing</li>
                                    <li>Murabaha Construction Machinery & Equipment  Financing</li>
                                    <li>Murabaha Agricultural Input and Equipment Term Financing</li>
                                    <li>Murabaha Project Term Financing</li>
                                    <li>Murabaha Merchandise Facility</li>
                                    <li>Murabaha Revolving Financing Facility</li>
                                    <li>Murabaha Import Financing Facility</li>
                                    <li>Murabaha Pre-shipment Export Financing Facility</li>
                                    <li>Murabaha Wholesale and retail</li>
                                    <li>Murabaha hotel and tourism</li>
                                    <li>Murabaha health service and others</li>
                                </ul>
                            </div>
                        </div>
                        : ""}

                    {dispaly == 2 ?

                        <div className="animate__animated animate__bounceInUp" style={{ marginBottom: '100px' }}>
                            <p className={styles.title}>
                                <h5>2. Qard Financing </h5>
                                <h5 style={{ fontSize: '21px', color: '#007070' }}>Target Group</h5>
                            </p>
                            <div className={styles.description}>
                                <p>
                                    Exporters
                                </p>
                            </div>
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
                        <div className="animate__animated animate__bounceInUp" style={{ marginBottom: '100px' }}>
                            <p className={styles.title}>
                                <h5>3. Qard Benevolent</h5>
                                <h5 style={{ fontSize: '21px', color: '#007070' }}>Target Group</h5>
                            </p>
                            <div className={styles.description}>
                                <p>
                                    Needy persons such as small producers, entrepreneurs, farmers who are not able to secure
                                    financing for investment or working capital from other alternative sources.
                                </p> 
                            </div>
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
                                    <p>Bank's Choice as part Corporate social responsibility </p>
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

export default Financing_Products