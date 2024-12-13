import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import styles from './termsAndTarrifs.module.css'
import Mega_Menu from '../Common/Mega_Menu';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { MdMenuOpen } from "react-icons/md";
import "animate.css";
import Aos from "aos";
import "aos/dist/aos.css";
import StikyNav from "../Common/StikyNav";
import Footer from "../Common/Footer";
import About_us from "../../../assets/Images/common.jpg";

const Branch_Terms_And_Tariffs = () => {

    useEffect(() => {
        Aos.init();
    }, []);

    const [dispaly, setDisplay] = useState(1);
    const [showMenu, setshowMenu] = useState(false);

    useEffect(() => {
        if (dispaly !== 0) {
            MySwal.close();
        }
    }, [dispaly]);

    const handleClick = (index) => {
        setDisplay(index);
        MySwal.close();
        window.scrollTo(0, 0);
    };

    const MySwal = withReactContent(Swal);

    const menutoggle = () => {
        MySwal.fire({
            html: (
                <div className="leftNavBars" style={{ marginTop: '20px' }} >
                    <div className={`animate__animated animate__fadeInLeft ${styles.popupshortInfo}`}>
                        <p onClick={() => { handleClick(1, showMenu) }} style={dispaly === 1 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>1. Saving Account Related</p>
                        <p onClick={() => { handleClick(2, showMenu) }} style={dispaly === 2 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>2. Checking Account Related</p>
                        <p onClick={() => { handleClick(3, showMenu) }} style={dispaly === 3 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>3. Time Deposit Related</p>
                        <p onClick={() => { handleClick(4, showMenu) }} style={dispaly === 4 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>4. Fund Transfer Related</p>
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
    const location = useLocation();

    useEffect(() => {
        // Check if state is passed
        if (location.state && location.state.display) {
            setDisplay(location.state.display);
        }
    }, [location]);

    const handleNavigationClick = (index) => {
        setDisplay(index);
        window.scrollTo(0, 0);
    };


    return (
        <>

            <Mega_Menu />

            <StikyNav />

            <div className={styles.agarImage}>
                <img src={About_us} ></img>
            </div>

            <div className={styles.establishment}>

                <p className={styles.aboutUsMenu} onClick={() => { menutoggle() }} ><MdMenuOpen style={{ fontSize: '30px' }} /></p>

                <div className={styles.leftNavBars}>
                    <div className={`animate__animated animate__fadeInLeft ${styles.shortInfo}`}>
                        <p onClick={() => handleNavigationClick(1)} style={dispaly === 1 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 1. Saving Account Related</p>
                        <p onClick={() => handleNavigationClick(2)} style={dispaly === 2 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 2. Checking Account Related</p>
                        <p onClick={() => handleNavigationClick(3)} style={dispaly === 3 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 3. Time Deposit Related</p>
                        <p onClick={() => handleNavigationClick(4)} style={dispaly === 4 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 4. Fund Transfer Related</p>

                    </div>
                </div>
                {dispaly == 1 ?
                    <div>
                        <p className={`${styles.history} animate__animated animate__bounceInUp`}>
                            <p className={styles.termsTitle}>1. Saving Account Related</p>

                            <table className={styles.container}>
                                <thead>
                                    <tr className={styles.headerRowss}>
                                        <th>No.</th>
                                        <th>Description</th>
                                        <th>Charges (VAT Exclusive)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className={styles.headerRow} >
                                        <td>1</td>
                                        <td>Saving Account Related</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>1.1</td>
                                        <td>Replacing lost /Damaged passbook</td>
                                        <td>100</td>
                                    </tr>
                                    <tr>
                                        <td>1.2</td>
                                        <td>Fully utilized Passbook Replacement</td>
                                        <td>50</td>
                                    </tr>
                                    <tr>
                                        <td>1.3</td>
                                        <td>Saving Account closed before 6 months of opening</td>
                                        <td>50</td>
                                    </tr>
                                </tbody>
                            </table>
                        </p>
                    </div> : ""}


                {dispaly == 2 ?

                    <div className={`${styles.history} animate__animated animate__bounceInUp`}>
                        <p className={styles.termsTitle}>2. Checking Account Related</p>
                        <table className={styles.container}>
                            <thead>
                                <tr className={styles.headerRowss}>
                                    <th>No</th>
                                    <th>Description</th>
                                    <th>Charges (VAT Exclusive)</th>
                                </tr> 
                            </thead> 
                            <tbody>
                                <tr className={styles.headerRow} >
                                    <td>2</td>
                                    <td>Checking Account Related</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>2.1</td>
                                    <td>Cost of cheque book 25 leaves</td>
                                    <td>75</td>
                                </tr>
                                <tr>
                                    <td>2.2</td>
                                    <td>Cost of cheque book 50 leaves</td>
                                    <td>120</td>
                                </tr>
                                <tr>
                                    <td>2.3</td>
                                    <td>Cost of cheque book 100 leaves</td>
                                    <td>200</td>
                                </tr>
                                <tr>
                                    <td>2.4</td>
                                    <td>Check returned at the counter/through other bank clearance for the first time</td>
                                    <td>200</td>
                                </tr>
                                <tr>
                                    <td>2.5</td>
                                    <td>Check returned second time</td>
                                    <td rowSpan={2}>As per NBE Directive No. SBB/64/2016</td>
                                </tr>
                                <tr>
                                    <td>2.6</td>
                                    <td>Check returned third time</td>
                                </tr>
                                <tr>
                                    <td>2.7</td>
                                    <td>Stop payment request for a single check</td>
                                    <td>200</td>
                                </tr>
                                <tr>
                                    <td>2.8</td>
                                    <td>Stop Payment request for a bundle of checks per leaf (unissued but stole)</td>
                                    <td>200+5/leaf</td>
                                </tr>
                                <tr>
                                    <td>2.9</td>
                                    <td>Check clearance inward</td>
                                    <td>50</td>
                                </tr>
                                <tr>
                                    <td>2.1</td>
                                    <td>Check clearance special</td>
                                    <td>300</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                    : ""}

                {dispaly == 3 ?
                    <div className={`${styles.history} animate__animated animate__bounceInUp`}>
                        <p className={styles.termsTitle}>3. Time Deposit Related </p>
                        <table className={styles.container}>
                            <thead>
                                <tr className={styles.headerRowss}>
                                    <th>No</th>
                                    <th>Description</th>
                                    <th>Charges (VAT Exclusive)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className={styles.headerRow} >
                                    <td>3</td>
                                    <td>Time Deposit Related</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>3.1</td>
                                    <td>Issuance of time deposit certificate</td>
                                    <td>200</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                    : ""}

                {dispaly == 4 ?

                    <div className={`${styles.history} animate__animated animate__bounceInUp`}>
                        <p className={styles.termsTitle}>4. Fund Transfer Related</p>
                        <table className={styles.container}>
                            <thead>
                                <tr className={styles.headerRowss}>
                                    <th>No</th>
                                    <th>Description</th>
                                    <th>Charges (VAT Exclusive)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className={styles.headerRow} >
                                    <td>4</td>
                                    <td>Fund Transfer Related</td>
                                    <td></td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td>4.1</td>
                                    <td>Fund transfer A/C to A/C at the counter</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>4.1.1</td>
                                    <td>Up to 10,000.00/ request</td>
                                    <td>Free</td>
                                </tr>
                                <tr>
                                    <td>4.1.2</td>
                                    <td>Above 10,000.00/request</td>
                                    <td>5</td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td>4.2</td>
                                    <td>Inter Bank Transfer</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>4.2.1</td>
                                    <td>Fund transfer from customer A/C to other bank through RTGS</td>
                                    <td>100+NBE charge</td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td>4.3</td>
                                    <td>Local Fund Transfer</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>4.3.1</td>
                                    <td>A/C to non-account holder</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>4.3.1.1</td>
                                    <td>Commission Fee</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Up to birr 2,500.00</td>
                                    <td>5</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>From birr 2,501.00 - 50,000.00</td>
                                    <td>5 + 1.25/thousand on the incremental amount &gt; birr 5000.00</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Above birr 50,000.00</td>
                                    <td>64.375 + 1/thousand on the incremental amount &gt; 50,000.00</td>
                                </tr>
                                <tr>
                                    <td>4.3.1.2</td>
                                    <td>Communication Fee/broadband fee</td>
                                    <td>20</td>
                                </tr>
                                <tr>
                                    <td>4.3.2</td>
                                    <td>A/C to non-account holder for Staff</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>4.3.2.1</td>
                                    <td>Commission Rate</td>
                                    <td>Free up to 10,000.00</td>
                                </tr>
                                {/* <tr>
                                    <td></td>
                                    <td></td>
                                    <td> &gt; br. 10,000.00 birr 5</td>
                                </tr> */}
                                <tr>
                                    <td>4.3.2.2</td>
                                    <td>Communication Fee/broadband fee</td>
                                    <td>20</td>
                                </tr>
                                <tr>
                                    <td>4.3.3</td>
                                    <td>Retransfer by remitter &amp; payment by beneficiary for expired TT</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>4.3.3.1</td>
                                    <td>Commission Rate</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Up to birr 2,500.00</td>
                                    <td>25</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>From birr 2,501.00 - 50,000.00</td>
                                    <td>25</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Above birr 50,000.00</td>
                                    <td>25 + 0.50/thousand on incremental amount &gt; br 50,000.00</td>
                                </tr>
                                <tr>
                                    <td>4.3.3.2</td>
                                    <td>Communication Fee/broadband fee</td>
                                    <td>10</td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td>4.4</td>
                                    <td>Cash withdrawals at branch</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>4.4.1</td>
                                    <td>Up to birr 10,000/request</td>
                                    <td>Free</td>
                                </tr>
                                <tr>
                                    <td>4.4.2</td>
                                    <td>Above birr 10,000/request</td>
                                    <td>5</td>
                                </tr>
                                <tr>
                                    <td>4.4.3</td>
                                    <td>Approvals of cash withdrawal in excess of the limit</td>
                                    <td>1000</td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td>4.5</td>
                                    <td>CPO Related</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>4.5.1</td>
                                    <td>CPO Issuance Commission</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>4.5.1.1</td>
                                    <td>From account</td>
                                    <td>50</td>
                                </tr>
                                <tr>
                                    <td>4.5.1.2</td>
                                    <td>By Cash</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>4.5.1.2.1</td>
                                    <td>Up to Birr 100,000.00</td>
                                    <td>150</td>
                                </tr>
                                <tr>
                                    <td>4.5.1.2.2</td>
                                    <td>From 100,001.00 - 500,000.00</td>
                                    <td>250</td>
                                </tr>
                                <tr>
                                    <td>4.5.1.2.3</td>
                                    <td>From 500,001.00 -1 million</td>
                                    <td>500</td>
                                </tr>
                                <tr>
                                    <td>4.5.1.2.4</td>
                                    <td>Above 1 million birr</td>
                                    <td>1.25/thousand</td>
                                </tr>
                                <tr>
                                    <td>4.5.1.3</td>
                                    <td>For staff</td>
                                    <td>20</td>
                                </tr>
                                <tr>
                                    <td>4.5.2</td>
                                    <td>Cancellation/ Amendment of CPO</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>4.5.2.1</td>
                                    <td>From Account holder</td>
                                    <td>200</td>
                                </tr>
                                <tr>
                                    <td>4.5.2.2</td>
                                    <td>From non-account holder</td>
                                    <td>300</td>
                                </tr>
                                <tr>
                                    <td>4.5.2.3</td>
                                    <td>For staff</td>
                                    <td>20</td>
                                </tr>
                                <tr>
                                    <td>4.5.3</td>
                                    <td>Refund of lost CPO</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>4.5.3.1</td>
                                    <td>From account holder</td>
                                    <td>300</td>
                                </tr>
                                <tr>
                                    <td>4.5.3.2</td>
                                    <td>From non-account holder</td>
                                    <td>300</td>
                                </tr>
                                <tr>
                                    <td>4.5.3.3</td>
                                    <td>For staff</td>
                                    <td>20</td>
                                </tr>
                                <tr>
                                    <td>4.5.4</td>
                                    <td>Replacement of lost CPO</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>4.5.4.1</td>
                                    <td>From Account holder</td>
                                    <td>200</td>
                                </tr>
                                <tr>
                                    <td>4.5.4.2</td>
                                    <td>From non-account holder</td>
                                    <td>300</td>
                                </tr>
                                <tr>
                                    <td>4.5.4.3</td>
                                    <td>For staff</td>
                                    <td>20</td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td>4.6</td>
                                    <td>Other Charges (Local)</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>4.6.1</td>
                                    <td>Duplicate statements of checking &amp; saving accounts</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>4.6.1.1</td>
                                    <td>Current Year</td>
                                    <td>25/Page</td>
                                </tr>
                                <tr>
                                    <td>4.6.1.2</td>
                                    <td>More than a year</td>
                                    <td>50/Page</td>
                                </tr>
                                <tr>
                                    <td>4.6.1.3</td>
                                    <td>Issuance of weekly or fortnightly statements</td>
                                    <td>5/Page</td>
                                </tr>
                                <tr>
                                    <td>4.6.1.4</td>
                                    <td>Duplicate advice for current year</td>
                                    <td>20/Advice</td>
                                </tr>
                                <tr>
                                    <td>4.6.1.5</td>
                                    <td>Duplicate advice for items over one year</td>
                                    <td>30/Advice</td>
                                </tr>
                                <tr>
                                    <td>4.6.1.6</td>
                                    <td>Photocopy of any document</td>
                                    <td>10/Page</td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td>4.7</td>
                                    <td>Standing Instruction</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>4.7.1</td>
                                    <td>Standing instruction within WB branches</td>
                                    <td>20/Transaction</td>
                                </tr>
                                <tr>
                                    <td>4.7.2</td>
                                    <td>Standing instruction outside WB branches</td>
                                    <td>50/Transaction</td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td>4.8</td>
                                    <td>Conformation Letters</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>4.8.1</td>
                                    <td>Conformation Letters (Local)</td>
                                    <td>200/request</td>
                                </tr>
                                <tr>
                                    <td>4.8.2</td>
                                    <td>Confirmation  Letters (Foreign)</td>
                                    <td>300/request + Courier</td>
                                </tr>
                                <tr>
                                    <td>4.8.3</td>
                                    <td>Confirmation letters for staff</td>
                                    <td>20</td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td>4.9</td>
                                    <td>Authentication of Power of Attorney (DARA)</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>4.9.1</td>
                                    <td>Online</td>
                                    <td>50</td>
                                </tr>
                                <tr>
                                    <td>4.9.2</td>
                                    <td>Authentication of power of attorney at the &quot;&quot;documents authentication and registration office&quot;&quot;</td>
                                    <td>50 + third party charge</td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td>4.10</td>
                                    <td>Signatory Change Request</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>4.10.1</td>
                                    <td>Individual Account</td>
                                    <td>50</td>
                                </tr>
                                <tr>
                                    <td>4.10.2</td>
                                    <td>Juridical (Legal) Person Account</td>
                                    <td>100</td>
                                </tr>
                                <tr>
                                    <td>4.11</td>
                                    <td>Door to Door Service Related</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>4.11.1</td>
                                    <td>Customers Door to Door service to pay and to collect cash (with in same town)</td>
                                    <td>250/trip</td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td>4.12</td>
                                    <td>Salary Credit</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>4.12.1</td>
                                    <td>Salary Credit with in WB with minimum deposit balance of 100,000.00</td>
                                    <td>Free</td>
                                </tr>
                                <tr>
                                    <td>4.12.2</td>
                                    <td>Salary Credit with in WB with minimum deposit balance below 100,000.00</td>
                                    <td>2/person + 50/request</td>
                                </tr>
                                <tr>
                                    <td>4.12.3</td>
                                    <td>Salary Credit with other Bank</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>4.12.4</td>
                                    <td>Service Charge</td>
                                    <td>2/person</td>
                                </tr>
                                <tr>
                                    <td>4.12.5</td>
                                    <td>Commission</td>
                                    <td>50/request</td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td>4.13</td>
                                    <td>Court Order-individual request</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>4.13.1</td>
                                    <td>Court injunction fee individual request</td>
                                    <td>100/inquiry</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                    : ""}

                {/* {dispaly == 5 ?

                    <div className={`${styles.history} animate__animated animate__bounceInUp`}>
                        <p className={styles.termsTitle}> 5. Incidental and other charges (local)</p>
                        <table className={styles.container}>
                            <thead>
                                <tr className={styles.headerRowss}>
                                    <th>No</th>
                                    <th>Description</th>
                                    <th>Term & Tariff</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className={styles.headerRow}>
                                    <td>5</td>
                                    <td>Incidental and other charges (local)</td>
                                    <td></td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td>5.1</td>
                                    <td>Duplicate statements of checking & saving accounts</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>5.1.1</td>
                                    <td>Current Year</td>
                                    <td>Birr 25/page</td>
                                </tr>
                                <tr>
                                    <td>5.1.2</td>
                                    <td>More than a year</td>
                                    <td>Birr 50/Page</td>
                                </tr>
                                <tr>
                                    <td>5.1.3</td>
                                    <td>Issuance of weekly or fortnightly statements</td>
                                    <td>Birr 5/page</td>
                                </tr>
                                <tr>
                                    <td>5.1.4</td>
                                    <td>Duplicate advice for currently year</td>
                                    <td>Birr 20/Advice</td>
                                </tr>
                                <tr>
                                    <td>5.1.5</td>
                                    <td>Duplicate advice for items over one year</td>
                                    <td>Birr 30/Advice</td>
                                </tr>
                                <tr>
                                    <td>5.1.6</td>
                                    <td>Photocopy of any document</td>
                                    <td>Birr 10/page</td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td>5.2</td>
                                    <td>Standing instruction</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>5.2.1</td>
                                    <td>Standing instruction within WB branches</td>
                                    <td>Birr 20/Transaction</td>
                                </tr>
                                <tr>
                                    <td>5.2.2</td>
                                    <td>Standing instruction outside WB branches</td>
                                    <td>Birr 50/Transaction</td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td>5.3</td>
                                    <td>Certification & Balance Confirmation supporting letters</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>5.3.1</td>
                                    <td>Certification & Balance Confirmation (Local) supporting letters</td>
                                    <td>Birr 200/request plus Courier (if any)</td>
                                </tr>
                                <tr>
                                    <td>5.3.2</td>
                                    <td>Certification & Balance confirmation (Foreign) supporting Letters</td>
                                    <td>Birr 300/request plus Courier</td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td>5.4</td>
                                    <td>Special Clearance of other bank's checks</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>5.4.1</td>
                                    <td>Special Clearance of other bank's checks</td>
                                    <td>Birr 50.00</td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td>5.5</td>
                                    <td>Authentication of power of attorney at the "documents authentication and registration office"</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>5.5.1</td>
                                    <td>Online</td>
                                    <td>Birr 50.00</td>
                                </tr>
                                <tr>
                                    <td>5.5.2</td>
                                    <td>In person (plus third party charge)</td>
                                    <td>Birr 50.00 plus third party charges</td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td>5.6</td>
                                    <td>Signature Change</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>5.6.1</td>
                                    <td>Signature Change</td>
                                    <td>Birr 50.00</td>
                                </tr>
                                <tr>
                                    <td style={{ backgroundColor: '#ff8e42' }}>5.7</td>
                                    <td rowspan="2">Customers Door to Door service to pay and to collect cash (within same town)</td>
                                    <td rowspan="2">Birr 250/trip</td>
                                </tr>
                                <tr>
                                    <td>5.7.1</td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td>5.8</td>
                                    <td>Salary Credit from Account</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>5.8.1</td>
                                    <td>Salary credit within the Bank</td>
                                    <td>Free</td>
                                </tr>
                                <tr>
                                    <td>5.8.2</td>
                                    <td>Salary Credit with other Bank</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>5.8.2.1</td>
                                    <td>Service Charge</td>
                                    <td>Birr 2.00/person</td>
                                </tr>
                                <tr>
                                    <td>5.8.2.2</td>
                                    <td>Commission</td>
                                    <td>Birr 50.00/request</td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td>5.9</td>
                                    <td>Court Injunction fee individual request to block/freeze account by court order</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>5.9.1</td>
                                    <td>Court Injunction fee individual request to block/freeze account by court order</td>
                                    <td>Birr 100/inquiry</td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td>5.10</td>
                                    <td>Cash withdrawal above limit fixed by NBE</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>5.10.1</td>
                                    <td>Cash withdrawal above limit fixed by NBE</td>
                                    <td>Birr 1000/approval</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                    : ""}

                {dispaly == 6 ?

                    <div className={`${styles.history} animate__animated animate__bounceInUp`}>
                        <p className={styles.termsTitle}>6. Share Related Charges</p>
                        <table className={styles.container}>
                            <thead>
                                <tr className={styles.headerRowss}>
                                    <th>No</th>
                                    <th>Description</th>
                                    <th>Term & Tariff</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className={styles.headerRow}>
                                    <td>6</td>
                                    <td>Share Related Charges</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>6.1</td>
                                    <td>Pledging of shares as collateral (per contract)</td>
                                    <td>Birr 1000/request</td>
                                </tr>
                                <tr>
                                    <td>6.2</td>
                                    <td>Share transfer fees</td>
                                    <td>Birr 2500/request</td>
                                </tr>
                                <tr>
                                    <td>6.3</td>
                                    <td>Confirmation letter</td>
                                    <td>Birr 300.00</td>
                                </tr>
                                <tr>
                                    <td>6.4</td>
                                    <td>Certificate for share issue on an amalgamation of share certificate</td>
                                    <td>Birr 100/certificates amalgamated</td>
                                </tr>
                                <tr>
                                    <td>6.5</td>
                                    <td>Replacement of lost share certificate</td>
                                    <td>Birr 500/certificate (Any third party related costs to be covered by the customers)</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                    : ""} */}

            </div>

            <Footer />
        </>
    );
};

export default Branch_Terms_And_Tariffs;