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
import { MdOutlineAdd, MdMinimize } from "react-icons/md";

function Wadya_Aman_Saving() {

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

    const [showContent, setshowContent] = useState(true)
    const handleShowContent = () => {
        setshowContent(!showContent)
    }
    const [showContent2, setshowContent2] = useState(false)
    const handleShowContent2 = () => {
        setshowContent2(!showContent2)
    }
    const [showContent3, setshowContent3] = useState(false)
    const handleShowContent3 = () => {
        setshowContent3(!showContent3)
    }

    const contentClass = showContent ? `${styles.fadeIn}` : '';
    const contentClass2 = showContent2 ? `${styles.fadeIn}` : '';
    const contentClass3 = showContent3 ? `${styles.fadeIn}` : '';
    useEffect(() => {
        Aos.init();
    }, []);

    const handleClick = (index) => {
        setDisplay(index);
        MySwal.close();
        window.scrollTo(0, 0);
    };

    // const MySwal = withReactContent(Swal);

    const menutoggle = () => {
        MySwal.fire({
            html: (
                <div className="leftNavBars" style={{ marginTop: '20px' }} >
                    <div className={`animate__animated animate__fadeInLeft ${styles.popupshortInfo}`}>
                        <p onClick={() => handleNavigationClick(1)} style={{ backgroundColor: '#004360', color: 'white', padding: '7px', fontSize: '16px' }}> 1. Wadia Amana Saving Account</p>
                        <p onClick={() => { handleClick(1, showMenu) }} style={dispaly === 1 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>1.1 Wadia saving accounts</p>
                        <p onClick={() => { handleClick(2, showMenu) }} style={dispaly === 2 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>1.2 Muday Wadia Amana</p>
                        <p onClick={() => { handleClick(3, showMenu) }} style={dispaly === 3 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>1.3 Equb Wadia Amana Saving Account</p>
                        <p onClick={() => { handleClick(4, showMenu) }} style={dispaly === 4 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>1.4 Zakat Wadia Amana Saving Account</p>
                        <p onClick={() => { handleClick(5, showMenu) }} style={dispaly === 5 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>1.5 School Wadia Amana Saving Account</p>
                        <p onClick={() => { handleClick(6, showMenu) }} style={dispaly === 6 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>1.6 Financial Inclusion/ Akatach/ Wadia Amana Saving Account</p>
                        <p onClick={() => { handleClick(7, showMenu) }} style={dispaly === 7 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>1.7 Amana Admas Business Personal Account</p>
                        <p onClick={() => { handleClick(8, showMenu) }} style={dispaly === 8 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>1.8 Amana Admas Saving / Finance -Women Entrepreneurs</p>
                        <p onClick={() => { handleClick(9, showMenu) }} style={dispaly === 9 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>1.9 Amana Admas Saving/Finance- Small and Medium Scale Enterprises</p>
                        <p onClick={() => { handleClick(10, showMenu) }} style={dispaly === 10 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>1.10 Tsilal Local Wadia Saving  Account</p>

                        <p onClick={() => handleNavigationClick(1)} style={{ backgroundColor: '#004360', color: 'white', padding: '7px', fontSize: '16px' }}> 2. Qard current account</p>
                        <p onClick={() => { handleClick(11, showMenu) }} style={dispaly === 11 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>2.1 Qard Normal Account</p>

                        <p onClick={() => handleNavigationClick(1)} style={{ backgroundColor: '#004360', color: 'white', padding: '7px', fontSize: '16px' }}>  Mudarabah Investment Account</p>
                        <p onClick={() => { handleClick(12, showMenu) }} style={dispaly === 12 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>3.1 Normal Mudarabah Investment Account</p>
                        <p onClick={() => { handleClick(13, showMenu) }} style={dispaly === 13 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>3.2 Haji Mudarabah Investment Account</p>
                        <p onClick={() => { handleClick(14, showMenu) }} style={dispaly === 14 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>3.3 Goh Mudarabah Investment Account</p>
                        <p onClick={() => { handleClick(15, showMenu) }} style={dispaly === 15 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>3.4 Biruh/Youth Mudarabah Investment Account</p>
                        <p onClick={() => { handleClick(16, showMenu) }} style={dispaly === 16 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>3.5 Nigat Mudarabah Investment Account</p>
                        <p onClick={() => { handleClick(17, showMenu) }} style={dispaly === 17 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>3.6 Warka Mudarabah Investment Account</p>
                        <p onClick={() => { handleClick(18, showMenu) }} style={dispaly === 18 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>3.7 Mudarabah Special Saving Account</p>

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

            <StikyNav />
            <Mega_Menu path="interestFree" headerSelect="interestFree" />
            <div>
                <img src={img3} />
            </div>
            <div className={styles.establishment}>

                <p className={styles.aboutUsMenu} onClick={() => { menutoggle() }} ><MdMenuOpen style={{ fontSize: '30px' }} /></p>

                <div className={styles.leftNavBars}>
                    <div className={`animate__animated animate__fadeInLeft ${styles.shortInfo}`}>
                        <p style={{ backgroundColor: '#007070', color: 'white', display: 'flex', justifyContent: 'space-between', padding: '10px' }} onClick={handleShowContent}>1. Wadia saving accounts   {showContent === true ? <MdMinimize style={{ fontSize: '16px', marginBottom: '8px' }} /> : <MdOutlineAdd style={{ fontSize: '24px', }} />} </p>
                        {showContent === true ?
                            <div className={`${styles.content} ${contentClass}`} style={{ marginTop: '10px', paddingLeft: '10px' }}>
                                <p onClick={() => handleNavigationClick(1)} style={dispaly === 1 ? { backgroundColor: '#ff6b0b', color: 'white', padding: '7px', fontSize: '16px' } : null}> 1.1 Wadia Amana Saving Account</p>
                                <p onClick={() => handleNavigationClick(2)} style={dispaly === 2 ? { backgroundColor: '#ff6b0b', color: 'white', padding: '7px', fontSize: '16px' } : null}> 1.2 Muday Wadia Amana</p>
                                <p onClick={() => handleNavigationClick(3)} style={dispaly === 3 ? { backgroundColor: '#ff6b0b', color: 'white', padding: '7px', fontSize: '16px' } : null}> 1.3 Equb Wadia Amana Saving Account</p>
                                <p onClick={() => handleNavigationClick(4)} style={dispaly === 4 ? { backgroundColor: '#ff6b0b', color: 'white', padding: '7px', fontSize: '16px' } : null}> 1.4 Zakat Wadia Amana Saving Account</p>
                                <p onClick={() => handleNavigationClick(5)} style={dispaly === 5 ? { backgroundColor: '#ff6b0b', color: 'white', padding: '7px', fontSize: '16px' } : null}> 1.5 School Wadia Amana Saving Account</p>
                                <p onClick={() => handleNavigationClick(6)} style={dispaly === 6 ? { backgroundColor: '#ff6b0b', color: 'white', padding: '7px', fontSize: '16px' } : null}> 1.6 Financial Inclusion/ Akatach/ Wadia Amana Saving Account</p>
                                <p onClick={() => handleNavigationClick(7)} style={dispaly === 7 ? { backgroundColor: '#ff6b0b', color: 'white', padding: '7px', fontSize: '16px' } : null}> 1.7 Amana Admas business personal  Account </p>
                                <p onClick={() => handleNavigationClick(8)} style={dispaly === 8 ? { backgroundColor: '#ff6b0b', color: 'white', padding: '7px', fontSize: '16px' } : null}> 1.8 Amana Admas Saving / Finance - Women Entrepreneurs</p>
                                <p onClick={() => handleNavigationClick(9)} style={dispaly === 9 ? { backgroundColor: '#ff6b0b', color: 'white', padding: '7px', fontSize: '16px' } : null}> 1.9 Amana Admas Saving/Finance- Small and Medium Scale Enterprises</p>
                                <p onClick={() => handleNavigationClick(10)} style={dispaly === 10 ? { backgroundColor: '#ff6b0b', color: 'white', padding: '7px', fontSize: '16px' } : null}> 1.10 Tsilal Local Wadia Saving Account</p>
                            </div> : ""}
                        <p style={{ backgroundColor: '#007070', color: 'white', display: 'flex', justifyContent: 'space-between', padding: '10px' }} onClick={handleShowContent2}>2. Qard current account   {showContent2 === true ? <MdMinimize style={{ fontSize: '16px', marginBottom: '8px' }} /> : <MdOutlineAdd style={{ fontSize: '24px', }} />} </p>
                        {showContent2 === true ?
                            <div className={`${styles.content2} ${contentClass2}`} style={{ margin: '10px', paddingLeft: '10px', marginRight: '0px' }}>
                                <p onClick={() => handleNavigationClick(11)} style={dispaly === 11 ? { backgroundColor: '#ff6b0b', color: 'white', padding: '7px', fontSize: '16px' } : null}> 2.1 Qard Normal Account</p>
                            </div> : ""}
                        <p style={{ backgroundColor: '#007070', color: 'white', display: 'flex', justifyContent: 'space-between', padding: '10px' }} onClick={handleShowContent3}>3. Mudarabah Investment Account   {showContent3 === true ? <MdMinimize style={{ fontSize: '16px', marginBottom: '8px' }} /> : <MdOutlineAdd style={{ fontSize: '24px', }} />} </p>

                        {showContent3 === true ?
                            <div className={`${styles.content3} ${contentClass3}`} style={{ marginTop: '10px', paddingLeft: '10px' }}>
                                <p onClick={() => handleNavigationClick(12)} style={dispaly === 12 ? { backgroundColor: '#ff6b0b', color: 'white', padding: '7px', fontSize: '16px' } : null}> 3.1 Normal Mudarabah Investment Account </p>
                                <p onClick={() => handleNavigationClick(13)} style={dispaly === 13 ? { backgroundColor: '#ff6b0b', color: 'white', padding: '7px', fontSize: '16px' } : null}> 3.2 Haji Mudarabah Investment Account</p>
                                <p onClick={() => handleNavigationClick(14)} style={dispaly === 14 ? { backgroundColor: '#ff6b0b', color: 'white', padding: '7px', fontSize: '16px' } : null}> 3.3 Goh Mudarabah Investment Account</p>
                                <p onClick={() => handleNavigationClick(15)} style={dispaly === 15 ? { backgroundColor: '#ff6b0b', color: 'white', padding: '7px', fontSize: '16px' } : null}> 3.4 Biruh/Youth Mudarabah Investment Account</p>
                                <p onClick={() => handleNavigationClick(16)} style={dispaly === 16 ? { backgroundColor: '#ff6b0b', color: 'white', padding: '7px', fontSize: '16px' } : null}> 3.5 Nigat Mudarabah Investment Account</p>
                                <p onClick={() => handleNavigationClick(17)} style={dispaly === 17 ? { backgroundColor: '#ff6b0b', color: 'white', padding: '7px', fontSize: '16px' } : null}>3.6 Warka Mudarabah Investment Account</p>
                                <p onClick={() => handleNavigationClick(18)} style={dispaly === 18 ? { backgroundColor: '#ff6b0b', color: 'white', padding: '7px', fontSize: '16px' } : null}> 3.7 Mudarabah Special Saving Account</p>
                            </div> : ""}
                    </div>
                </div>
                <div>

                    {dispaly == 1 ?
                        <div className="animate__animated animate__bounceInUp" style={{ marginBottom: '100px' }}>
                            <p className={styles.title}>
                                <h5>Wadia Amana Saving Account</h5>
                                <h5 style={{ fontSize: '21px', color: '#007070' }}>Target Group</h5>
                            </p>
                            <div className={styles.description}>
                                <p>
                                    Any legally capable person who is willing to fulfil the sharia requirement can open an account.
                                </p>
                            </div>
                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#007070', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginLeft: '1px' }}></p>
                                    <p>FEATURES:</p>
                                </div>
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li >In Wadia Amana the bank acts as a guarantee of safe custody. </li>
                                    <li> In the Wadia contract, the customer gives consent to the bank the right to utilize the funds in line with the Shari'ah
                                        requirements, wherein the bank shall guarantee payment of the whole or a part whenever demanded.</li>
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
                                    <p>The minimum balance to open this account is Birr 5o.oo </p>
                                </div>
                            </div>
                        </div>
                        : ""}

                    {dispaly == 2 ?

                        <div className="animate__animated animate__bounceInUp" style={{ marginBottom: '100px' }}>

                            <p className={styles.title}>
                                <h5>Muday Wadia Amana</h5>
                                <h5 style={{ fontSize: '21px', color: '#007070' }}>Target Group</h5>
                            </p>
                            <div className={styles.description}>
                                <p>
                                    Individuals engaged in small-scale businesses such as petty traders, retail shops,
                                    barbershops, coffee houses, shoe shiners, and others
                                </p>
                            </div>
                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#007070', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginLeft: '1px' }}></p>
                                    <p>FEATURES:</p>
                                </div>
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li>Muday Box Savings Account creates opportunities for targeted groups of people to
                                        save their sales on a daily basis without the need to go to bank branches, thereby enhancing their saving habits.</li>
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
                                    <p>The minimum balance to open this account is Birr 500.00</p>
                                </div>
                            </div>
                        </div>
                        : ""}

                    {dispaly == 3 ?
                        <div className="animate__animated animate__bounceInUp" style={{ marginBottom: '100px' }}>
                            <p className={styles.title}>
                                <h5>Equb Wadia Amana Saving Account</h5>
                                <h5 style={{ fontSize: '21px', color: '#007070' }}>Target Group</h5>
                            </p>
                            <div className={styles.description}>
                                <p>
                                    This type of Wadia Amanasavings account is designed specifically for Equb collectors and payers.
                                </p>
                            </div>
                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#007070', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginLeft: '1px' }}></p>
                                    <p>FEATURES:</p>
                                </div>
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li > Priority of the corporate social responsibly will be given to these account holders when reaching a certain milestone in deposits.</li>
                                    <li > (For local road construction, sponsoring events, printing Edir / Equb books, giving pins, diary/agendas etc)</li>
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
                                    <p>To All the requirements stipulated for the opening of accounts for individuals, businesses,
                                        and associations will also apply for this account. </p>
                                </div>
                            </div>
                        </div>
                        : ""}

                    {dispaly == 4 ?
                        <div className="animate__animated animate__bounceInUp" style={{ marginBottom: '100px' }}>
                            <p className={styles.title}>
                                <h5>Zakat Wadia Amana Saving Account</h5>
                                <h5 style={{ fontSize: '21px', color: '#007070' }}>Target Group</h5>
                            </p>
                            <div className={styles.description}>
                                <p>
                                    A Zakat account may open and operated by natural and/or legal persons
                                    (individuals, companies, institutions etc.)
                                </p>
                            </div>
                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#007070', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginLeft: '1px' }}></p>
                                    <p>FEATURES:</p>
                                </div>
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li > Priority of the corporate social responsibly will be given to these account holders when reaching a certain milestone in deposits.</li>
                                    <li > (For local road construction, sponsoring events, printing Edir / Equb books, giving pins, diary/agendas etc)</li>
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
                                    <p>All the requirements stipulated for the opening of accounts for individuals and businesses,</p>
                                </div>
                            </div>

                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}>
                                    <IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll>
                                </div>
                                <div className={styles.rightFeatures}>
                                    <p>And associations will also apply for this account. </p>
                                </div>
                            </div>
                        </div>
                        : ""}

                    {dispaly == 5 ?
                        <div className="animate__animated animate__bounceInUp" style={{ marginBottom: '100px' }}>
                            <p className={styles.title}>
                                <h5>School Wadia Amana Saving Account</h5>
                                <h5 style={{ fontSize: '21px', color: '#007070' }}>Target Group</h5>
                            </p>
                            <div className={styles.description}>
                                <p>
                                    Private schools, technical and vocational training institutes, Universities, Colleges and professional training institutes.
                                </p>
                            </div>
                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#007070', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginLeft: '1px' }}></p>
                                    <p>FEATURES:</p>
                                </div>
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li> The Bank provides consumer/personal finance to employees of the school and also
                                        provide finance for working capital and expansion projects of the school as per the IFB personal financing  procedure of the bank </li>
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
                                    <p>The minimum balance to open this Account is Birr 500,000.00</p>
                                </div>
                            </div>
                        </div>
                        : ""}

                    {dispaly == 6 ?
                        <div className="animate__animated animate__bounceInUp" style={{ marginBottom: '100px' }}>
                            <p className={styles.title}>
                                <h5>Financial Inclusion/Akatach/Wadia Amana Saving Account</h5>
                                <h5 style={{ fontSize: '21px', color: '#007070' }}>Target Group</h5>
                            </p>
                            <div className={styles.description}>
                                <p>
                                    A saving account designed for those customers who do not have identification
                                    card (ID card) or bring a valid identification card (lD card).
                                </p>
                            </div>
                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#007070', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginLeft: '1px' }}></p>
                                    <p>FEATURES:</p>
                                </div>
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li >All withdrawal from the account shall be verified through biometric data verification system.</li>
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
                                    <p>The maximum deposit balance kept at any time shall not exceed birr 300,000.00 (Three Hundred Thousand)</p>
                                </div>
                            </div>

                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}>
                                    <IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll>
                                </div>
                                <div className={styles.rightFeatures}>
                                    <p>And associations will also apply for this account. </p>
                                </div>
                            </div>
                        </div>
                        : ""}

                    {dispaly == 7 ?
                        <div className="animate__animated animate__bounceInUp" style={{ marginBottom: '100px' }}>
                            <p className={styles.title}>
                                <h5>Amana Admas business personal  Account </h5>
                                <h5 style={{ fontSize: '21px', color: '#007070' }}>Target Group</h5>
                            </p>
                            <div className={styles.description}>
                                <p>
                                    Individual employees where they save a certain amount of money to get finance for purchase of new/used vehicle or house.
                                </p>
                            </div>
                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#007070', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginLeft: '1px' }}></p>
                                    <p>FEATURES:</p>
                                </div>
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li > Purchase of new/used vehicles, machineries, and equipment for business purpose, and business premise. </li>
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
                                    <p>The customer should save 40% and 30% of the financing amount to get a vehicle and house financing respectively</p>
                                </div>
                            </div>
                        </div>
                        : ""}

                    {dispaly == 8 ?
                        <div className="animate__animated animate__bounceInUp" style={{ marginBottom: '100px' }}>
                            <p className={styles.title}>
                                <h5> Amana Admas Saving/Finance - Women Entrepreneurs</h5>
                                <h5 style={{ fontSize: '21px', color: '#007070' }}>Target Group</h5>
                            </p>
                            <div className={styles.description}>
                                <p>
                                    It is a save-for-finance scheme that targets business women where they save a certain
                                    amount of money to get finance for working capital (In the form of goods and service)
                                </p>
                            </div>
                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#007070', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginLeft: '1px' }}></p>
                                    <p>FEATURES:</p>
                                </div>
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li > Purchase of new/used vehicles, machinery, and equipment for business purposes, and business premises. </li>
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
                                    <p> The customer should be in the business at least for
                                        one year before starting the deposit by opening Admas Saving account.</p>
                                </div>
                            </div>
                        </div>
                        : ""}

                    {dispaly == 9 ?
                        <div className="animate__animated animate__bounceInUp" style={{ marginBottom: '100px' }}>
                            <p className={styles.title}>
                                <h5>Amana Admas Saving/Finance-Small and Medium Scale Enterprises</h5>
                                <h5 style={{ fontSize: '21px', color: '#007070' }}>Target Group</h5>
                            </p>
                            <div className={styles.description}>
                                <p>
                                    It is a save-for-finance scheme that targets small and Medium Enterprises, Associations, Trade Unions.
                                </p>
                            </div>
                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#007070', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginLeft: '1px' }}></p>
                                    <p>FEATURES:</p>
                                </div>
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li > The Bank provides finance for the remaining 60% of the value.</li>
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
                                    <p>Is a save-for-finance scheme that targets small and medium enterprises, associations, and Trade Unions.</p>
                                </div>
                            </div>
                        </div>
                        : ""}

                    {dispaly == 10 ?
                        <div className="animate__animated animate__bounceInUp" style={{ marginBottom: '100px' }}>
                            <p className={styles.title}>
                                <h5>Tsilal Local Wadia Saving  Account</h5>
                                <h5 style={{ fontSize: '21px', color: '#007070' }}>Target Group</h5>
                            </p>
                            <div className={styles.description}>
                                <p>
                                    Any legally capable person who is willing to fulfil the Sharia requirement can
                                    open an account
                                </p>
                            </div>
                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#007070', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginLeft: '1px' }}></p>
                                    <p>FEATURES:</p>
                                </div>
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li > It’s a save for financing scheme for the purpose of purchasing a house from real estate companies </li>
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
                                    <p>Opening balance is 100 birr</p>
                                </div>
                            </div>
                        </div>
                        : ""}

                    {dispaly == 11 ?
                        <div className="animate__animated animate__bounceInUp" style={{ marginBottom: '100px' }}>
                            <p className={styles.title}>
                                <h5>Qard Normal Account</h5>
                                <h5 style={{ fontSize: '21px', color: '#007070' }}>Target Group</h5>
                            </p>
                            <div className={styles.description}>
                                <p>
                                    Individual and companies who engages in sharia compliant business
                                </p>
                            </div>
                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#007070', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginLeft: '1px' }}></p>
                                    <p>FEATURES:</p>
                                </div>
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li > Cheque book facility is available to provide ease of withdrawal. No restrictions on withdrawals and deposit transactions</li>
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
                                    <p>The account can be opened with a minimum balance of Birr 250.00 (Birr two hundred fifty).</p>
                                </div>
                            </div>
                        </div>
                        : ""}


                    {dispaly == 12 ?

                        <div className="animate__animated animate__bounceInUp" style={{ marginBottom: '100px' }}>
                            <p className={styles.title}>
                                <h5>Normal Mudarabah Investment Account </h5>
                                <h5 style={{ fontSize: '21px', color: '#007070' }}>Target Group</h5>
                            </p>
                            <div className={styles.description}>
                                <p>
                                    Any individual, legal person or companies  who fulfil the criteria
                                </p>
                            </div>
                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#007070', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginLeft: '1px' }}></p>
                                    <p>FEATURES:</p>
                                </div>
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li >  Mudarabah is a profit and loss sharing partnership in which one party (the customer) provides capital, and the other party (the Bank) manages the venture. </li>
                                    <li>The profits generated by the venture are shared between the investor and the mudarib according to a predetermined ratio.</li>
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
                                    <p> The Account can be opened with a minimum balance of Birr 100, 000.00 (One Hundred Thousand only). </p>
                                </div>
                            </div>
                        </div>
                        : ""}

                    {dispaly == 13 ?
                        <div className="animate__animated animate__bounceInUp" style={{ marginBottom: '100px' }}>
                            <p className={styles.title}>
                                <h5>Haji Mudarabah Investment Account</h5>
                                <h5 style={{ fontSize: '21px', color: '#007070' }}>Target Group</h5>
                            </p>
                            <div className={styles.description}>
                                <p>
                                    Any individual who desire of performing Hajj.
                                </p>
                            </div>
                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#007070', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginLeft: '1px' }}></p>
                                    <p>FEATURES:</p>
                                </div>
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li> Mudarabah is a profit and loss sharing partnership in which one party (the customer) provides capital, and the other party (the Bank) manages the venture. </li>
                                    <li>The profits generated by the venture are shared between the investor and the mudarib according to a predetermined ratio.</li>
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
                                    <p>The minimum balance to open this account is ETB 1,000</p>
                                </div>
                            </div>
                        </div>
                        : ""}


                    {dispaly == 14 ?
                        <div className="animate__animated animate__bounceInUp" style={{ marginBottom: '100px' }}>
                            <p className={styles.title}>
                                <h5>Goh Mudarabah Investment Account
                                </h5>
                                <h5 style={{ fontSize: '21px', color: '#007070' }}>Target Group</h5>
                            </p>
                            <div className={styles.description}>
                                <p>
                                    Children less than 18 years of age.
                                </p>
                            </div>
                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#007070', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginLeft: '1px' }}></p>
                                    <p>FEATURES:</p>
                                </div>
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li> Mudarabah is a profit and loss sharing partnership in which one party (the customer) provides capital, and the other party (the Bank) manages the venture. </li>
                                    <li>The profits generated by the venture are shared between the investor and the mudarib according to a predetermined ratio.</li>
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
                                    <p>Goh Mudarabah saving account shall be opened with an initial deposit of Birr 100</p>
                                </div>
                            </div>
                        </div>
                        : ""}


                    {dispaly == 15 ?
                        <div className="animate__animated animate__bounceInUp" style={{ marginBottom: '100px' }}>
                            <p className={styles.title}>
                                <h5>Biruh/Youth Mudarabah Investment Account</h5>
                                <h5 style={{ fontSize: '21px', color: '#007070' }}>Target Group</h5>
                            </p>
                            <div className={styles.description}>
                                <p>
                                    The target customers for the Youth Saving Account are young people in the age range of 18 - 24 years
                                </p>
                            </div>
                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#007070', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginLeft: '1px' }}></p>
                                    <p>FEATURES:</p>
                                </div>
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li> Profit sharing ratio of the Mudarib and the Rab al Mal is ranging from (75/25%-5o/5o %) based on the amount of deposit </li>
                                    <li>i.e for deposit up to Birr 50, 000 (75/25%) for Birr 50, 001 -100,000 (60/40%) and above Birr 100,000 (50/50%). In addition withdrawal is permitted 4 times in a month.</li>
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
                                    <p>It can be opened with minimum deposit of Birr 25.00,</p>
                                </div>
                            </div>
                        </div>
                        : ""}

                    {dispaly == 16 ?
                        <div className="animate__animated animate__bounceInUp" style={{ marginBottom: '100px' }}>
                            <p className={styles.title}>
                                <h5> Nigat Mudarabah Investment Account </h5>
                                <h5 style={{ fontSize: '21px', color: '#007070' }}>Target Group</h5>
                            </p>
                            <div className={styles.description}>
                                <p>
                                    Women
                                </p>
                            </div>
                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#007070', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginLeft: '1px' }}></p>
                                    <p>FEATURES:</p>
                                </div>
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li> In addition to the profit sharing feature it includes Unique payment card for individual account holder with discounts from selected merchants and service providers (arranged by the Bank) for purchases and/or payments effected through POS</li>
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
                                    <p>The minimum balance to open this Account is Birr 100</p>
                                </div>
                            </div>
                        </div>
                        : ""}

                    {dispaly == 17 ?
                        <div className="animate__animated animate__bounceInUp" style={{ marginBottom: '100px' }}>
                            <p className={styles.title}>
                                <h5>Warka Mudarabah Investment Account</h5>
                                <h5 style={{ fontSize: '21px', color: '#007070' }}>Target Group</h5>
                            </p>
                            <div className={styles.description}>
                                <p>
                                    Elders at age of 50 and above
                                </p>
                            </div>
                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#007070', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginLeft: '1px' }}></p>
                                    <p>FEATURES:</p>
                                </div>
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li> In addition to the profit sharing feature it includes Small gifts like customized pens, Pins, holiday cards, customized diary will be provided.</li>
                                    <li>The Marketing and communication directorate shall be responsible to serve those gifts.</li>
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
                                    <p> Minimum initial account opening balance should be not less than 500 Birr.</p>
                                </div>
                            </div>
                        </div>
                        : ""}

                    {dispaly == 18 ?
                        <div className="animate__animated animate__bounceInUp" style={{ marginBottom: '100px' }}>
                            <p className={styles.title}>
                                <h5>Mudarabah Special Saving Account </h5>
                                <h5 style={{ fontSize: '21px', color: '#007070' }}>Target Group</h5>
                            </p>
                            <div className={styles.description}>
                                <p>
                                    Opened by individual who is legally travelling abroad for work temporarily through the agencies.
                                </p>
                            </div>
                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#007070', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginLeft: '1px' }}></p>
                                    <p>FEATURES:</p>
                                </div>
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li > The profit sharing ration will be higher in favor of the customer based on negotiation</li>
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
                                    <p>The depositor will channel the fund in hard currency and deposit in local currency</p>
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

export default Wadya_Aman_Saving