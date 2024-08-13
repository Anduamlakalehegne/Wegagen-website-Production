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
import StikyNav from "../Common/StikyNav";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { MdMenuOpen } from "react-icons/md";
import { useLocation } from 'react-router-dom';

function Personal_Loans_for_Salaried_Persons() {

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
        window.scrollTo(0, 280);
    };

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
                <div className="leftNavBars" style={{ marginTop: '40px' }} >
                    <div className={`animate__animated animate__fadeInLeft ${styles.popupshortInfo}`}>
                        <p onClick={() => { handleClick(1, showMenu) }} style={dispaly === 1 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>Personal Loans for Salaried Persons</p>
                        <p onClick={() => { handleClick(2, showMenu) }} style={dispaly === 2 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>Consumer Loans</p>
                        <p onClick={() => { handleClick(3, showMenu) }} style={dispaly === 3 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>Alegnita Emergency Loan</p>
                        <p onClick={() => { handleClick(4, showMenu) }} style={dispaly === 4 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>House Renovation Loan</p>
                        <p onClick={() => { handleClick(5, showMenu) }} style={dispaly === 5 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>House Completion Loan</p>
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

            <Mega_Menu path="bankingServices" />

            <div className={styles.agarImage}>
                <img src={About_us} ></img>
            </div>

            <div className={styles.establishment}>

                <p className={styles.aboutUsMenu} onClick={() => { menutoggle() }} ><MdMenuOpen style={{ fontSize: '30px' }} /></p>

                <div className={styles.leftNavBars}>
                    <div className={`animate__animated animate__fadeInLeft ${styles.shortInfo}`} style={{ height: '250px' }}>
                        <p onClick={() => handleNavigationClick(1)} style={dispaly === 1 ? { backgroundColor: '#ff6b0b', color: 'white', padding: '7px', fontSize: '16px' } : null}> Personal Loans for Salaried Persons</p>
                        <p onClick={() => handleNavigationClick(2)} style={dispaly === 2 ? { backgroundColor: '#ff6b0b', color: 'white', padding: '7px', fontSize: '16px' } : null}> 1. Consumer Loans </p>
                        <p onClick={() => handleNavigationClick(3)} style={dispaly === 3 ? { backgroundColor: '#ff6b0b', color: 'white', padding: '7px', fontSize: '16px' } : null}> 2. Alegnita Emergency Loan</p>
                        <p onClick={() => handleNavigationClick(4)} style={dispaly === 4 ? { backgroundColor: '#ff6b0b', color: 'white', padding: '7px', fontSize: '16px' } : null}> 3. House Renovation Loan</p>
                        <p onClick={() => handleNavigationClick(5)} style={dispaly === 5 ? { backgroundColor: '#ff6b0b', color: 'white', padding: '7px', fontSize: '16px' } : null}> 4. House Completion Loan</p>
                    </div>
                </div>
                <div>

                    {dispaly == 1 ?
                         <div className="animate__animated animate__bounceInUp" style={{ marginBottom: '100px' }}>
                            <p className={styles.title}>
                                <h5>Personal Loans for Salaried Persons</h5>
                                <h5 style={{ fontSize: '21px', color: '#004360' }}>Description</h5>
                            </p>
                            <div className={styles.description} >
                                <p>
                                    The rationale for these products is to attract companies and government institutions with resource potential by providing credit products to their employees.
                                </p>
                            </div>
                        </div>
                        : ""}

                    {dispaly == 2 ?
                          <div className="animate__animated animate__bounceInUp" style={{ marginBottom: '100px' }}>
                            <p className={styles.title} s>
                                <h5 style={{ fontSize: '23px' }}>1. Consumer Loans </h5>
                                <h5 style={{ fontSize: '21px', color: '#004360' }}>Description</h5>
                            </p>
                            <div className={styles.description} >
                                <p>
                                    It is a personal loan offered to employees only for the purchase of different household items
                                </p>
                            </div>
                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#004360', margin: '10px', marginLeft: '1px' }}></p>
                                    <p>FEATURES:</p>
                                </div>
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li>The loan amount is based on the repayment capacity of the individual borrower which is based on his/her salary.</li>
                                </ul>
                            </div>
                            <p className={styles.title} style={{ color: '#ff6b0b', textAlign: 'center', fontSize: '21px', paddingBottom: '20px' }}>
                                Basic Requirement to get the Product
                            </p>
                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll> </div>
                                <div className={styles.rightFeatures}>
                                    <p>Applicants who have fulfils General and specific eligibility Criteria of the Bank</p>
                                </div>
                            </div>
                        </div>
                        : ""}

                    {dispaly == 3 ?
                          <div className="animate__animated animate__bounceInUp" style={{ marginBottom: '100px' }}>
                            <p className={styles.title}>
                                <h5>2. Alegnita Emergency Loan </h5>
                                <h5 style={{ fontSize: '21px', color: '#004360' }}>Description</h5>
                            </p>
                            <div className={styles.description} >
                                <p>
                                    It is a personal loan offered for any emergency purposes to cover
                                    expenses such as medical expense, school fees, and other unplanned expenses.
                                </p>
                            </div>
                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#004360', margin: '10px', marginLeft: '1px' }}></p>
                                    <p>FEATURES:</p>
                                </div>
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li>The Loan amount is based on the repayment capacity of the individual borrower which is based on his/her salary.</li>
                                </ul>
                            </div>

                            <p className={styles.title} style={{ color: '#ff6b0b', textAlign: 'center', fontSize: '21px', paddingBottom: '20px' }}>
                                Basic Requirement to get the Product
                            </p>
                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll> </div>
                                <div className={styles.rightFeatures}>
                                    <p>Applicants who have fulfils General and specific eligibility Criteria of the Bank</p>
                                </div>
                            </div>
                        </div>
                        : ""}

                    {dispaly == 4 ?
                        <div className="animate__animated animate__bounceInUp" style={{ marginBottom: '100px' }}>
                            <p className={styles.title}>
                                <h5>3. House Renovation Loan</h5>
                                <h5 style={{ fontSize: '21px', color: '#004360' }}>Description</h5>
                            </p>
                            <div className={styles.description} >
                                <p>
                                    It is a personal loan offered for the purpose of renovation of a residential house.
                                </p>
                            </div>
                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#004360', margin: '10px', marginLeft: '1px' }}></p>
                                    <p>FEATURES:</p>
                                </div>
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li>The Loan amount is based on the repayment capacity of the individual borrower which is based on his salary. </li>
                                </ul>
                            </div>
                            <p className={styles.title} style={{ color: '#ff6b0b', textAlign: 'center', fontSize: '21px', paddingBottom: '20px' }}>
                                Basic Requirement to get the Product
                            </p>
                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll> </div>
                                <div className={styles.rightFeatures}>
                                    <p>Applicants who have fulfils General and specific eligibility Criteria of the Bank</p>
                                </div>
                            </div>
                        </div>
                        : ""}

                    {dispaly == 5 ?
                        <div className="animate__animated animate__bounceInUp" style={{ marginBottom: '100px' }}>
                            <p className={styles.title}>
                                <h5>3. House Completion Loan</h5>
                                <h5 style={{ fontSize: '21px', color: '#004360' }}>Description</h5>
                            </p>
                            <div className={styles.description} >
                                <p>
                                    It is a personal loan offered for the purpose of completion of a residential house that is currently under construction.
                                </p>
                            </div>
                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#004360', margin: '10px', marginLeft: '1px' }}></p>
                                    <p>FEATURES:</p>
                                </div>
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li>The Loan amount is based on the repayment capacity of the individual borrower which is based on his salary.</li>
                                </ul>
                            </div>
                            <p className={styles.title} style={{ color: '#ff6b0b', textAlign: 'center', fontSize: '21px', paddingBottom: '20px' }}>
                                Basic Requirement to get the Product
                            </p>
                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll> </div>
                                <div className={styles.rightFeatures}>
                                    <p>Applicants who have fulfils General and specific eligibility Criteria of the Bank</p>
                                </div>
                            </div>
                        </div>
                        : ""}
                </div>
            </div>
            <Footer />

        </div>
    )
}

export default Personal_Loans_for_Salaried_Persons