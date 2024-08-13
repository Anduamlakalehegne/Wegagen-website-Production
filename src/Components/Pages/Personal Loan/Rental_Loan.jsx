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

function Rental_Loan() {

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
                        <p onClick={() => { handleClick(1, showMenu) }} style={{ backgroundColor: '#004360', color: 'white', padding: '7px', fontSize: '16px' }}>Retail Loans</p>
                        <p onClick={() => { handleClick(2, showMenu) }} style={dispaly === 2 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>Retail loans for employees of FCY generating companies (NGO, Exporters) or large /stable depositor companies/sole proprietors</p>
                        <p onClick={() => { handleClick(3, showMenu) }} style={dispaly === 3 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>Retail Mortgage Loan</p>
                        <p onClick={() => { handleClick(4, showMenu) }} style={dispaly === 4 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>Retail loan for construction of residential building</p>
                        <p onClick={() => { handleClick(5, showMenu) }} style={dispaly === 5 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>Retail loan for purchase of residential building</p>
                        <p onClick={() => { handleClick(6, showMenu) }} style={dispaly === 6 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>Retail Automobile Loan</p>
                        <p onClick={() => { handleClick(7, showMenu) }} style={dispaly === 7 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>Retail Consumer Loan</p>
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
                    <div className={`animate__animated animate__fadeInLeft ${styles.shortInfo}`}>
                        <p onClick={() => handleNavigationClick(1)} style={{ backgroundColor: '#004360', color: 'white', padding: '7px', fontSize: '16px' }}> Retail Loans</p>
                        <p onClick={() => handleNavigationClick(2)} style={dispaly === 2 ? { backgroundColor: '#ff6b0b', color: 'white', padding: '7px', fontSize: '16px' } : null}> 1. Retail loans for employees of FCY generating companies (NGO, Exporters) or large /stable depositor companies/sole proprietors </p>
                        <p onClick={() => handleNavigationClick(3)} style={dispaly === 3 ? { backgroundColor: '#ff6b0b', color: 'white', padding: '7px', fontSize: '16px' } : null}> 2. Retail Mortgage Loan</p>
                        <p onClick={() => handleNavigationClick(4)} style={dispaly === 4 ? { backgroundColor: '#ff6b0b', color: 'white', padding: '7px', fontSize: '16px' } : null}> 3. Retail loan for construction of residential building</p>
                        <p onClick={() => handleNavigationClick(5)} style={dispaly === 5 ? { backgroundColor: '#ff6b0b', color: 'white', padding: '7px', fontSize: '16px' } : null}> 4. Retail loan for purchase of residential building</p>
                        <p onClick={() => handleNavigationClick(6)} style={dispaly === 6 ? { backgroundColor: '#ff6b0b', color: 'white', padding: '7px', fontSize: '16px' } : null}> 5. Retail Automobile Loan</p>
                        <p onClick={() => handleNavigationClick(7)} style={dispaly === 7 ? { backgroundColor: '#ff6b0b', color: 'white', padding: '7px', fontSize: '16px' } : null}> 6. Retail Consumer Loan </p>
                    </div>
                </div>
                <div>

                    {dispaly == 1 ?
                        <div className="animate__animated animate__bounceInUp" style={{ marginBottom: '100px' }}>
                            <p className={styles.title}>
                                <h5>Retail Loans</h5>
                                <h5 style={{ fontSize: '21px', color: '#004360' }}>Description</h5>
                            </p>
                            <div className={styles.description} >
                                <p>
                                    Retail loan is a kind of short, medium or long term asset financing extended for purchase of household items, tuition fee, cover medical expenses residential
                                    house, and automobile to employees of companies that haves large and stable deposit in our Bank, utilizing a range of other banking services, generate foreign currency.
                                </p>
                            </div>
                        </div>
                        : ""}

                    {dispaly == 2 ?
                        <div className="animate__animated animate__bounceInUp" style={{ marginBottom: '100px' }}>
                            <p className={styles.title} s>
                                <h5 style={{ fontSize: '23px' }}>1. Retail loans for employees of FCY generating companies (NGO, Exporters) or large /stable depositor companies/sole proprietors </h5>
                                <h5 style={{ fontSize: '21px', color: '#004360' }}>Description</h5>
                            </p>
                            <div className={styles.description} >
                                <p>
                                    Retail loans offered for employees of international institutions, NGO, and prominent exporter or regular foreign currency generator,
                                    and for employees of the companies and sole proprietors with large and stable deposits
                                </p>
                            </div>
                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#004360', margin: '10px', marginLeft: '1px' }}></p>
                                    <p>FEATURES:</p>
                                </div>
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li>The credit facility can be offered in a short, medium and long-term financing options </li>
                                    <li>The credit facility can be availed to purchase or construct residential/commercial buildings within the country, purchase automobile, and personal loan</li>
                                </ul>
                            </div>
                            <p className={styles.title} style={{ color: '#ff6b0b', textAlign: 'center', fontSize: '21px', paddingBottom: '20px' }}>
                                Basic Requirement to get the Product
                            </p>
                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll> </div>
                                <div className={styles.rightFeatures}>
                                    <p>Employer of the applicants should be generating FCY regularly or have large and stable deposit</p>
                                </div>
                            </div>
                        </div>
                        : ""}

                    {dispaly == 3 ?
                        <div className="animate__animated animate__bounceInUp" style={{ marginBottom: '100px' }}>
                            <p className={styles.title}>
                                <h5>2. Retail Mortgage Loan </h5>
                                <h5 style={{ fontSize: '21px', color: '#004360' }}>Description</h5>
                            </p>
                            <div className={styles.description}>
                                <p>
                                    This is a loan facility extended to permanent staff of entities who have MOU agreement with the Bank
                                </p>
                            </div>
                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#004360', margin: '10px', marginLeft: '1px' }}></p>
                                    <p>FEATURES:</p>
                                </div>
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li>Provides credit facility for purchasing and constructing (new or expansion within the same land holding certificate (LHC) by enlarging or by building a service</li>
                                </ul>
                            </div>

                            <p className={styles.title} style={{ color: '#ff6b0b', textAlign: 'center', fontSize: '21px', paddingBottom: '20px' }}>
                                Basic Requirement to get the Product
                            </p>
                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll> </div>
                                <div className={styles.rightFeatures}>
                                    <p>Applicants who fulfils General and specific eligibility Criteria of the Bank</p>
                                </div>
                            </div>
                        </div>
                        : ""}

                    {dispaly == 4 ?
                        <div className="animate__animated animate__bounceInUp" style={{ marginBottom: '100px' }}>
                            <p className={styles.title}>
                                <h5>3. Retail loan for construction of residential building</h5>
                                <h5 style={{ fontSize: '21px', color: '#004360' }}>Description</h5>
                            </p>
                            <div className={styles.description} >
                                <p>
                                    This is a loan facility extended to permanent staff of entities who have MOU agreement
                                    with the Bank wherein the borrower is expected to finance certain portion on their own
                                </p>
                            </div>
                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#004360', margin: '10px', marginLeft: '1px' }}></p>
                                    <p>FEATURES:</p>
                                </div>
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li>Expected equity contribution of an employee/ borrower for housing loans shall be 5% or as per the MOU signed </li>
                                    <li>The contribution could be in kind/for building construction/ or other forms as long as the required amount is covered </li>
                                </ul>
                            </div>
                            <p className={styles.title} style={{ color: '#ff6b0b', textAlign: 'center', fontSize: '21px', paddingBottom: '20px' }}>
                                Basic Requirement to get the Product
                            </p>
                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll> </div>
                                <div className={styles.rightFeatures}>
                                    <p>Applicants who fulfils General and specific eligibility Criteria of the Bank.</p>
                                </div>
                            </div>
                        </div>
                        : ""}

                    {dispaly == 5 ?
                        <div className="animate__animated animate__bounceInUp" style={{ marginBottom: '100px' }}>
                            <p className={styles.title}>
                                <h5>4. Retail loan for purchase of residential building </h5>
                                <h5 style={{ fontSize: '21px', color: '#004360' }}>Description</h5>
                            </p>
                            <div className={styles.description} >
                                <p>
                                    This is a type of loan that is extended to permanent staff of the entities
                                    which have MOU agreement with Wegagen Bank for purchasing of new residential building.
                                </p>
                            </div>
                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#004360', margin: '10px', marginLeft: '1px' }}></p>
                                    <p>FEATURES:</p>
                                </div>
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li>The credit facility offers a maximum of twenty-five years. </li>
                                    <li>Expected equity contribution of an employee/ borrower for the loan shall be 5% or as per the MOU signed </li>
                                </ul>
                            </div>
                            <p className={styles.title} style={{ color: '#ff6b0b', textAlign: 'center', fontSize: '21px', paddingBottom: '20px' }}>
                                Basic Requirement to get the Product
                            </p>
                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll> </div>
                                <div className={styles.rightFeatures}>
                                    <p>Employer of the applicants should be generating FCY regularly or have large and stable depositor of Wegagen Bank
                                        Applicants who fulfils General and specific eligibility Criteria of the Bank.
                                    </p>
                                </div>
                            </div>
                        </div>
                        : ""}

                    {dispaly == 6 ?
                        <div className="animate__animated animate__bounceInUp" style={{ marginBottom: '100px' }}>
                            <p className={styles.title}>
                                <h5>5. Retail Automobile Loan </h5>
                                <h5 style={{ fontSize: '21px', color: '#004360' }}>Description</h5>
                            </p>
                            <div className={styles.description} >
                                <p>
                                    This is a type of loan that is extended to permanent staff of the entities which have MOU
                                    agreement with Wegagen Bank for purchasing of automobile.
                                </p>
                            </div>
                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#004360', margin: '10px', marginLeft: '1px' }}></p>
                                    <p>FEATURES:</p>
                                </div>
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li>The credit facility offers a maximum of fifteen years period of repayment. </li>
                                    <li>The loan amount can go up to 90% of the lower of the purchase agreement value or the bank’s valuator estimation value </li>
                                </ul>
                            </div>
                            <p className={styles.title} style={{ color: '#ff6b0b', textAlign: 'center', fontSize: '21px', paddingBottom: '20px' }}>
                                Basic Requirement to get the Product
                            </p>
                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll> </div>
                                <div className={styles.rightFeatures}>
                                    <p>Employer of the applicants should be generating FCY regularly or have large and stable depositor of Wegagen Bank.
                                        Applicants who fulfils General and specific eligibility Criteria of the Bank.
                                    </p>
                                </div>
                            </div>
                        </div>
                        : ""}

                    {dispaly == 7 ?
                        <div className="animate__animated animate__bounceInUp" style={{ marginBottom: '100px' }}>
                            <p className={styles.title}>
                                <h5>6. Retail Consumer Loan</h5>
                                <h5 style={{ fontSize: '21px', color: '#004360' }}>Description</h5>
                            </p>
                            <div className={styles.description} >
                                <p>
                                    This is a type of loan that is extended to permanent staff of the entities which have MOU
                                    agreement with Wegagen Bank in order to meet personal need fulfilment such as purchase of furniture &
                                    equipment, home appliances, and/or payment for tuition fee, medical expense etc.
                                </p>
                            </div>
                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#004360', margin: '10px', marginLeft: '1px' }}></p>
                                    <p>FEATURES:</p>
                                </div>
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li>Retail consumer loan offers to provide a loan equating a maximum amount of six months' salary to be repaid within three years or as per the agreed MOU. </li>
                                    <li>The loan is intended to meet . </li>
                                </ul>
                            </div>
                            <p className={styles.title} style={{ color: '#ff6b0b', textAlign: 'center', fontSize: '21px', paddingBottom: '20px' }}>
                                Basic Requirement to get the Product
                            </p>
                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll> </div>
                                <div className={styles.rightFeatures}>
                                    <p>Employer of the applicants should be generating FCY regularly or have large and stable depositor of Wegagen Bank.
                                        Applicants who fulfils General and specific eligibility Criteria of the Bank.
                                    </p>
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

export default Rental_Loan