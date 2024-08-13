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

function Working_Capital_Loan() {

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
                        <p onClick={() => { handleClick(1, showMenu) }} style={dispaly === 1 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>Working Capital Loan and Advances</p>
                        <p onClick={() => { handleClick(2, showMenu) }} style={dispaly === 2 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>Overdraft Facility</p>
                        <p onClick={() => { handleClick(3, showMenu) }} style={dispaly === 3 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>Overdrawal Facility</p>
                        <p onClick={() => { handleClick(4, showMenu) }} style={dispaly === 4 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>Merchandise Loan Facility</p>
                        <p onClick={() => { handleClick(5, showMenu) }} style={dispaly === 5 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>Warehouse Receipt Financing</p>
                        <p onClick={() => { handleClick(6, showMenu) }} style={dispaly === 6 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>Import Letter of Credit Facility</p>
                        <p onClick={() => { handleClick(7, showMenu) }} style={dispaly === 7 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>Pre-shipment Export Credit Facility</p>
                        <p onClick={() => { handleClick(8, showMenu) }} style={dispaly === 8 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>Working Capital Term Loan</p>
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
                        <p onClick={() => handleNavigationClick(1)} style={dispaly === 1 ? { backgroundColor: '#ff6b0b', color: 'white', padding: '7px', fontSize: '16px' } : null}> Working Capital Loan and Advances</p>
                        <p onClick={() => handleNavigationClick(2)} style={dispaly === 2 ? { backgroundColor: '#ff6b0b', color: 'white', padding: '7px', fontSize: '16px' } : null}> 1. Overdraft Facility</p>
                        <p onClick={() => handleNavigationClick(3)} style={dispaly === 3 ? { backgroundColor: '#ff6b0b', color: 'white', padding: '7px', fontSize: '16px' } : null}> 2. Overdrawal Facility</p>
                        <p onClick={() => handleNavigationClick(4)} style={dispaly === 4 ? { backgroundColor: '#ff6b0b', color: 'white', padding: '7px', fontSize: '16px' } : null}> 3. Merchandise Loan Facility</p>
                        <p onClick={() => handleNavigationClick(5)} style={dispaly === 5 ? { backgroundColor: '#ff6b0b', color: 'white', padding: '7px', fontSize: '16px' } : null}> 4. Warehouse Receipt Financing</p>
                        <p onClick={() => handleNavigationClick(6)} style={dispaly === 6 ? { backgroundColor: '#ff6b0b', color: 'white', padding: '7px', fontSize: '16px' } : null}> 5. Import Letter of Credit Facility</p>
                        <p onClick={() => handleNavigationClick(7)} style={dispaly === 7 ? { backgroundColor: '#ff6b0b', color: 'white', padding: '7px', fontSize: '16px' } : null}> 6. Pre-shipment Export Credit Facility </p>
                        <p onClick={() => handleNavigationClick(8)} style={dispaly === 8 ? { backgroundColor: '#ff6b0b', color: 'white', padding: '7px', fontSize: '16px' } : null}> 7. Working Capital Term loan</p>
                    </div>
                </div>
                <div>

                    {dispaly == 1 ?
                        <div className="animate__animated animate__bounceInUp" style={{ marginBottom: '100px' }}>
                            <p className={styles.title}>
                                <h5>Working Capital Loan and Advances</h5>
                                <h5 style={{ fontSize: '21px', color: '#004360' }}>Description</h5>
                            </p>
                            <div className={styles.description} >
                                <p>It is a loan extended by Wegagen bank to bridge short-term financial constraints/cash flow problem of the borrower’s business.
                                    Wegagen Bank provides the following credit products for working capital purpose.
                                </p>
                            </div>
                        </div>
                        : ""}

                    {dispaly == 2 ?
                        <div className="animate__animated animate__bounceInUp" style={{ marginBottom: '100px' }}>
                            <p className={styles.title}>
                                <h5>1. Overdraft Facility</h5>
                                <h5 style={{ fontSize: '21px', color: '#004360' }}>Description</h5>
                            </p>
                            <div className={styles.description} >
                                <p>This is a form of credit facility availed for business borrowers by which the borrower may be allowed to draw beyond the
                                    deposits under its current accounts for the sole purpose of the day-to- day operational needs of a viable and ongoing business.
                                </p>
                            </div>
                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#004360', margin: '10px', marginLeft: '1px' }}></p>
                                    <p>FEATURES:</p>
                                </div>
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li>A maximum period of the facility is one year and reviewed every year unless the Bank demands it to be reviewed in less than this period.</li>
                                </ul>
                            </div>
                            <p className={styles.title} style={{ color: '#ff6b0b', textAlign: 'center', fontSize: '21px', paddingBottom: '20px' }}>
                                Basic Requirement to get the Product
                            </p>
                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll> </div>
                                <div className={styles.rightFeatures}>
                                    <p>Applicants who fulfils General and specific eligibility Criteria of the Bank and have good account
                                        utilization with our or other Banks. (Applicants who have good account utilization with other Bank should
                                        promise to transfer their account transaction to our Bank)</p>
                                </div>
                            </div>
                        </div>
                        : ""}

                    {dispaly == 3 ?
                        <div className="animate__animated animate__bounceInUp" style={{ marginBottom: '100px' }}>
                            <p className={styles.title}>
                                <h5>2. Overdrawal Facility</h5>
                                <h5 style={{ fontSize: '21px', color: '#004360' }}>Description</h5>
                            </p>
                            <div className={styles.description} >
                                <p>
                                    This is a temporary facility that grants a customer the right to withdraw a specified amount of fund
                                    over and above the Overdraft limit in order to meet unexpected seasonal cash shortage.
                                </p>
                            </div>
                            <p className={styles.title} style={{ color: '#ff6b0b', textAlign: 'center', fontSize: '21px', paddingBottom: '20px' }}>
                                Basic Requirement to get the Product
                            </p>
                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll> </div>
                                <div className={styles.rightFeatures}>
                                    <p>Applicants who fulfils general and specific eligibility Criteria of the Bank</p>
                                </div>
                            </div>
                        </div>
                        : ""}

                    {dispaly == 4 ?
                        <div className="animate__animated animate__bounceInUp" style={{ marginBottom: '100px' }}>
                            <p className={styles.title}>
                                <h5>3. Merchandise Loan Facility</h5>
                                <h5 style={{ fontSize: '21px', color: '#004360' }}>Description</h5>
                            </p>
                            <div className={styles.description} >
                                <p>
                                    A Merchandise Loan is a short-term credit facility provided by the Bank against which the merchandise or
                                    documentary evidence (Railway Receipt, Warehouse Receipt and Airway Bills) is held as a pledge or collateral for the loan.
                                </p>
                            </div>
                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#004360', margin: '10px', marginLeft: '1px' }}></p>
                                    <p>FEATURES:</p>
                                </div>
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li>Provides a relieve to the customer against cash flow problems arising from money being tied up in merchandise. </li>
                                    <li>The Bank extends one-time or revolving merchandise loan facilities </li>
                                </ul>
                            </div>
                            <p className={styles.title} style={{ color: '#ff6b0b', textAlign: 'center', fontSize: '21px', paddingBottom: '20px' }}>
                                Basic Requirement to get the Product
                            </p>
                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll> </div>
                                <div className={styles.rightFeatures}>
                                    <p>Applicants who fulfils general and specific eligibility Criteria of the Bank</p>
                                </div>
                            </div>
                        </div>
                        : ""}

                    {dispaly == 5 ?
                        <div className="animate__animated animate__bounceInUp" style={{ marginBottom: '100px' }}>
                            <p className={styles.title}>
                                <h5>4. Warehouse Receipt Financing</h5>
                                <h5 style={{ fontSize: '21px', color: '#004360' }}>Description</h5>
                            </p>
                            <div className={styles.description} >
                                <p>
                                    This is a financing mechanism in which Wegagen Bank provides loans/advances for members and clients of the ECX
                                </p>
                            </div>
                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#004360', margin: '10px', marginLeft: '1px' }}></p>
                                    <p>FEATURES:</p>
                                </div>
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li>Offers affordable credit facility for applicants who can submit ECX warehouse receipt by pledging the warehouse receipts issued by the ECX in their names.</li>
                                </ul>
                            </div>
                            <p className={styles.title} style={{ color: '#ff6b0b', textAlign: 'center', fontSize: '21px', paddingBottom: '20px' }}>
                                Basic Requirement to get the Product
                            </p>
                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll> </div>
                                <div className={styles.rightFeatures}>
                                    <p>Applicants who fulfils general and specific eligibility Criteria of the Bank</p>
                                </div>
                            </div>
                        </div>
                        : ""}

                    {dispaly == 6 ?
                        <div className="animate__animated animate__bounceInUp" style={{ marginBottom: '100px' }}>
                            <p className={styles.title}>
                                <h5>5. Import Letter of Credit Facility</h5>
                                <h5 style={{ fontSize: '21px', color: '#004360' }}>Description</h5>
                            </p>
                            <div className={styles.description} >
                                <p>
                                    The import letter of credit facility is a credit product that the Bank extends to the
                                    applicants who are engaged in import business, or other applicants who import for various purposes
                                </p>
                            </div>
                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#004360', margin: '10px', marginLeft: '1px' }}></p>
                                    <p>FEATURES:</p>
                                </div>
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li>Avails credit facility for importers based on certain percentage of the value of the document while opening a Letter of Credit</li>
                                    <li>Depending on the financial strength of the customer, the letter of credit facility account performance and marketability
                                        of the import goods, the minimum margin to be paid on Import Letter of Credit facility shall be 30% of the document value. </li>
                                </ul>
                            </div>
                            <p className={styles.title} style={{ color: '#ff6b0b', textAlign: 'center', fontSize: '21px', paddingBottom: '20px' }}>
                                Basic Requirement to get the Product
                            </p>
                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll> </div>
                                <div className={styles.rightFeatures}>
                                    <p>Applicants who fulfils general and specific eligibility Criteria of the Bank</p>
                                </div>
                            </div>
                        </div>
                        : ""}


                    {dispaly == 7 ?
                        <div className="animate__animated animate__bounceInUp" style={{ marginBottom: '100px' }}>
                            <p className={styles.title}>
                                <h5>6. Pre-shipment Export Credit Facility</h5>
                                <h5 style={{ fontSize: '21px', color: '#004360' }}>Description</h5>
                            </p>
                            <div className={styles.description} >
                                <p>
                                    Is credit facility offers to avail financing to exporters to bridge their temporary working capital requirement
                                </p>
                            </div>
                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#004360', margin: '10px', marginLeft: '1px' }}></p>
                                    <p>FEATURES:</p>
                                </div>
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li>Offers credit facility to finance working capital requirement for purchase of exportable items,
                                        processing and converting them into finished goods, transporting, warehousing and packing until such time the goods are shipped. </li>
                                    <li>The facility can be one-time or revolving.</li>
                                </ul>
                            </div>
                            <p className={styles.title} style={{ color: '#ff6b0b', textAlign: 'center', fontSize: '21px', paddingBottom: '20px' }}>
                                Basic Requirement to get the Product
                            </p>
                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll> </div>
                                <div className={styles.rightFeatures}>
                                    <p>Applicants who fulfils general and specific eligibility Criteria of the Bank</p>
                                </div>
                            </div>
                        </div>
                        : ""}
 
                    {dispaly == 8 ?
                        <div className="animate__animated animate__bounceInUp" style={{ marginBottom: '100px' }}>
                            <p className={styles.title}>
                                <h5>7. Working Capital Term Loan</h5>
                                <h5 style={{ fontSize: '21px', color: '#004360' }}>Description</h5>
                            </p>
                            <div className={styles.description} >
                                <p>
                                    Working capital Term Loan is a loan granted for working capital to be repaid within a specific period of time usually with interest.
                                </p>
                            </div>
                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#004360', margin: '10px', marginLeft: '1px' }}></p>
                                    <p>FEATURES:</p>
                                </div>
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li>The loan can be repaid in a lump sum on maturity, or in periodic instalments (i.e. monthly, quarterly, semi-annually, or annually), depending on the nature of the business and its cash flow.</li>
                                    <li>The Bank extends Short-Term Loan, Medium-Term Loan and Long-Term Loan.</li>
                                    <li>The Bank avails Working Capital Term Loans for all sectors</li>
                                </ul>
                            </div>
                            <p className={styles.title} style={{ color: '#ff6b0b', textAlign: 'center', fontSize: '21px', paddingBottom: '20px' }}>
                                Basic Requirement to get the Product
                            </p>
                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll> </div>
                                <div className={styles.rightFeatures}>
                                    <p>Applicants who fulfils general and specific eligibility criteria of the Bank</p>
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

export default Working_Capital_Loan