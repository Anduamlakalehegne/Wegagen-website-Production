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
                        <p onClick={() => { handleClick(1, showMenu) }} style={dispaly === 1 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>1. Checking Account Related</p>
                        <p onClick={() => { handleClick(2, showMenu) }} style={dispaly === 2 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>2. Saving Account Related</p>
                        <p onClick={() => { handleClick(3, showMenu) }} style={dispaly === 3 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>3. Local fund transfer</p>
                        <p onClick={() => { handleClick(4, showMenu) }} style={dispaly === 4 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>4. CPO Related</p>
                        <p onClick={() => { handleClick(5, showMenu) }} style={dispaly === 5 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>5. Incidental and other charges (local)</p>
                        <p onClick={() => { handleClick(6, showMenu) }} style={dispaly === 6 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>6. Share Related Charges</p>
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
                        <p onClick={() => handleNavigationClick(1)} style={dispaly === 1 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 1. Checking Account Related</p>
                        <p onClick={() => handleNavigationClick(2)} style={dispaly === 2 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 2. Saving Account Related</p>
                        <p onClick={() => handleNavigationClick(3)} style={dispaly === 3 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 3. Local fund transfer</p>
                        <p onClick={() => handleNavigationClick(4)} style={dispaly === 4 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 4. CPO Related</p>
                        <p onClick={() => handleNavigationClick(5)} style={dispaly === 5 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 5. Incidental and other charges (local)</p>
                        <p onClick={() => handleNavigationClick(6)} style={dispaly === 6 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 6. Share Related Charges</p>

                    </div>
                </div>
                {dispaly == 1 ?
                    <div>
                        <p className={`${styles.history} animate__animated animate__bounceInUp`}>
                        <p className={styles.termsTitle}>1. Checking Account Related</p>

                            <table className={styles.container}>
                                <thead>
                                    <tr className={styles.headerRowss}> 
                                        <th className={styles.th}>No</th> 
                                        <th className={styles.th}>Description</th> 
                                        <th className={styles.th}>Term & Tariff</th> 
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className={styles.headerRow}> 
                                        <td style={{ padding: '8px' }}>1</td> 
                                        <td>Checking Account Related</td> 
                                        <td></td>
                                    </tr>
                                    <tr className={styles.subHeaderRow}>
                                        <td>1.1</td> 
                                        <td>Cost of Cheques</td> 
                                        <td></td> 
                                    </tr>
                                    <tr className={styles.oddRow}> 
                                        <td className={styles.td}>1.1.1</td> 
                                        <td className={styles.td}>Cost of cheque 25 leaves</td> 
                                        <td className={styles.td}>Birr 75</td> 
                                    </tr> 
                                    <tr className={styles.evenRow}> 
                                        <td className={styles.td}>1.1.2</td> 
                                        <td className={styles.td}>Cost of cheque 50 leaves</td> 
                                        <td className={styles.td}>Birr 120</td> 
                                    </tr>
                                    <tr className={styles.oddRow}> 
                                        <td className={styles.td}>1.1.3</td> 
                                        <td className={styles.td}>Cost of cheque 100 leaves</td> 
                                        <td className={styles.td}>Birr 200</td> 
                                    </tr>
                                    <tr className={styles.subHeaderRow}>
                                        <td>1.2</td> 
                                        <td>Insufficient funds cheque returned </td> 
                                        <td></td> 
                                    </tr>
                                    <tr className={styles.oddRow}> 
                                        <td>1.2.1</td> 
                                        <td>if check returned at the counter/through other bank clearance for the first time </td> 
                                        <td>Birr 200</td> 
                                    </tr>
                                    <tr className={styles.oddRow}> 
                                        <td>1.2.2</td> 
                                        <td>Check returned (second time) as per NBE directive</td> 
                                        <td>3%, Not exceeding Birr 25,000.00</td> 
                                    </tr>
                                    <tr className={styles.oddRow}> 
                                        <td>1.2.3</td> 
                                        <td>check returned (Third time) as per NBE directive </td> 
                                        <td>5%, not exceeding Birr 50,000.00</td> 
                                    </tr>
                                    <tr className={styles.subHeaderRow}> 
                                        <td>1.3</td> 
                                        <td>Inactive/ Dormant Checking accounts </td> 
                                        <td></td> 
                                    </tr>
                                    <tr className={styles.oddRow}> 
                                        <td>1.3.1</td> 
                                        <td>Service Charge</td> 
                                        <td rowspan="2">NO CHARGE and ACCOUNT CLOSURE as per NBE Circular FIS/BSD/117/2024</td> 
                                    </tr> 
                                    <tr className={styles.oddRow}> 
                                        <td>1.3.2</td> 
                                        <td>Account closure</td> 
                                    </tr> 

                                    <tr className={styles.subHeaderRow}> 
                                        <td>1.4</td> 
                                        <td>Stop payment request(per applications)</td> 
                                        <td></td> 
                                    </tr> 
                                    <tr> 
                                        <td>1.4.1</td> 
                                        <td>Stop payment request (per applications) per single cheque</td> 
                                        <td>Birr 200</td> 
                                    </tr> 
                                    <tr> 
                                        <td>1.4.2</td> 
                                        <td>Bundle of checks per leaf (Unissued but stolen)</td> 
                                        <td>Birr 5</td> 
                                    </tr>
                                </tbody>
                            </table>
                        </p>
                    </div> : ""}


                {dispaly == 2 ?

                    <div className={`${styles.history} animate__animated animate__bounceInUp`}>
                    <p className={styles.termsTitle}>2. Saving Account Related</p>
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
                                    <td>2</td>
                                    <td>Saving Account Related</td>
                                    <td></td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td>2.1</td>
                                    <td>Passbook Charges</td>
                                    <td></td>
                                </tr>
                                <tr className={styles.evenRow}>
                                    <td>2.1.1</td>
                                    <td>Replacing lost/Damaged passbook</td>
                                    <td>Birr 100</td>
                                </tr>
                                <tr className={styles.oddRow}>
                                    <td>2.1.2</td>
                                    <td>Passbook Replacement (when fully utilized)</td>
                                    <td>Free</td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td>2.2</td>
                                    <td>Inactive/Dormant Saving account</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>2.2.1</td>
                                    <td>Service Charge</td>
                                    <td rowspan="2">NO CHARGE and ACCOUNT CLOSURE as per NBE Circular FIS/BSD/117/2024</td>
                                </tr>
                                <tr>
                                    <td>2.2.2</td>
                                    <td>Account closure</td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td>2.3</td>
                                    <td>Closure of Saving account before Six (6) months of opening</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>2.3.1</td>
                                    <td>Service charge per passbook</td>
                                    <td>Birr 50</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                    : ""}

                {dispaly == 3 ?
                    <div className={`${styles.history} animate__animated animate__bounceInUp`}>
                    <p className={styles.termsTitle}>3. Local fund transfer </p>
                        <table className={styles.container}>
                            <thead>
                                <tr className={styles.headerRowss}>
                                    <th className={styles.th}>No</th>
                                    <th className={styles.th}>Description</th>
                                    <th className={styles.th}>Term & Tariff</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className={styles.headerRow}>
                                    <td>3</td>
                                    <td>Local fund transfer</td>
                                    <td></td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td>3.1</td>
                                    <td>Accounts to non-account holder</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>3.1.1</td>
                                    <td>Commission fee</td>
                                    <td></td>                 
                                </tr>
                                <tr>
                                    <td>3.1.1.1</td>
                                    <td>up to Birr 2,500.00</td>
                                    <td>Birr 5</td>
                                </tr>
                                <tr>
                                    <td>3.1.1.2</td>
                                    <td>from Birr 2,501.00-50,000.00</td>
                                    <td>Birr 5 plus 1.25/thousand on the incremental amount &gt; Birr 5000.00</td>
                                </tr>
                                <tr>
                                    <td>3.1.1.3</td>
                                    <td>Above Birr 50,000.00</td>
                                    <td>Birr 64.375 plus 1/thousand on the incremental amount &gt; 50,000.00</td>
                                </tr>
                                <tr>
                                    <td>3.1.2</td>
                                    <td>Communication fee/broadband fee</td>
                                    <td>Birr 20</td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td>3.2</td>
                                    <td>Accounts to non-account holder - for Staff</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>3.2.1</td>
                                    <td>Commission rate</td>
                                    <td>Free for amount up to Birr 10,000.00 per month but transfer above Birr 10,000.00 is treated at the rate indicated on 6.1.1.</td>
                                </tr>
                                <tr>
                                    <td>3.2.2</td>
                                    <td>Communication fee/broadband fee</td>
                                    <td>Birr 20</td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td>3.3</td>
                                    <td>Retransfer by remitter & payment to beneficiary for expired TT</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>3.3.1</td>
                                    <td>Commission rate</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>3.3.1.1</td>
                                    <td>up to Birr 2,500.00</td>
                                    <td>Birr 25</td>
                                </tr>
                                <tr>
                                    <td>3.3.1.2</td>
                                    <td>From Birr 2,500.00 up to 50,000.00</td>
                                    <td>Birr 25</td>
                                </tr>
                                <tr>
                                    <td>3.3.1.3</td>
                                    <td>Above Birr 50,000.00</td>
                                    <td>Birr 25 plus 0.5/thousand on incremental amount greater than Birr 50,000.00</td>
                                </tr>
                                <tr>
                                    <td>3.3.2</td>
                                    <td>Communication fee/telephone fee</td>
                                    <td>Birr 10</td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td>3.4</td>
                                    <td>Fund Transfer A/C to A/C</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>3.4.1</td>
                                    <td>Commission rate</td>
                                    <td>Free</td>
                                </tr>
                                <tr>
                                    <td>3.4.2</td>
                                    <td>Service charge</td>
                                    <td>Free</td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td>3.5</td>
                                    <td>Inter Bank transfer</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>3.5.1</td>
                                    <td>Transfer from customer A/C to other bank through RTGS</td>
                                    <td>Birr 100 plus NBE charge</td>
                                </tr>
                                <tr>
                                    <td>3.5.2</td>
                                    <td>Transfer from customer A/C to other bank through RTGS who remit FCY (Money transfer centers, NGOs)</td>
                                    <td>only NBE Charge</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                    : ""}

                {dispaly == 4 ?

                    <div className={`${styles.history} animate__animated animate__bounceInUp`}>
                    <p className={styles.termsTitle}>4. CPO Related</p>
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
                                    <td>4</td>
                                    <td>CPO Related</td>
                                    <td></td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td>4.1</td>
                                    <td>CPO Issuance Commission</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>4.1.1</td>
                                    <td>From account</td>
                                    <td>Birr 50</td>
                                </tr>
                                <tr>
                                    <td>4.1.2</td>
                                    <td>For Cash</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>4.1.2.1</td>
                                    <td>up to Birr 5,000.00</td>
                                    <td rowspan="5">
                                        Up to Birr 100,000 - Birr 150 <br /> Birr 100,001 - 500,000 - Birr 250 <br />
                                        Birr 500,001 - 1 million - Birr 500<br />
                                        Birr above 1 million - 1.25/thousand
                                    </td>
                                </tr>
                                <tr>
                                    <td>4.1.2.2</td>
                                    <td>From 5,001.00 up to 25,000.00</td>
                                </tr>
                                <tr>
                                    <td>4.1.2.3</td>
                                    <td>From 25,001.00 up to 50,000.00</td>
                                </tr>
                                <tr>
                                    <td>4.1.2.4</td>
                                    <td>From 50,001.00 up to 75,000.00</td>
                                </tr>
                                <tr>
                                    <td>4.1.2.5</td>
                                    <td>From 75,000.00 birr and above</td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td>4.2</td>
                                    <td>Cancellation/ Amendment of CPO</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>4.2.1</td>
                                    <td>From Account holder</td>
                                    <td>Birr 200</td>
                                </tr>
                                <tr>
                                    <td>4.2.2</td>
                                    <td>From non-account holder</td>
                                    <td>Birr 300</td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td>4.3</td>
                                    <td>Refund of lost CPO</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>4.3.1</td>
                                    <td>From account holder</td>
                                    <td>Birr 300</td>
                                </tr>
                                <tr>
                                    <td>4.3.2</td>
                                    <td>From non-account holder</td>
                                    <td>Birr 300</td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td>4.4</td>
                                    <td>Replacement of lost CPO</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>4.4.1</td>
                                    <td>From Account holder</td>
                                    <td>Birr 200</td>
                                </tr>
                                <tr>
                                    <td>4.4.2</td>
                                    <td>From non-account holder</td>
                                    <td>Birr 300</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                    : ""}

                {dispaly == 5 ?

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
                    : ""}

            </div> 

            <Footer />
        </>
    );
};

export default Branch_Terms_And_Tariffs;