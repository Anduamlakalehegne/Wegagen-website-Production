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


const Digital_Terms_And_Tariffs = () => { 

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
                <div className="leftNavBars" style={{ marginTop: '40px' }} >
                                        <div className={`animate__animated animate__fadeInLeft ${styles.popupshortInfo}`}>
                        <p onClick={() => { handleClick(1, showMenu) }} style={dispaly === 1 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>1. Card Banking</p>
                        <p onClick={() => { handleClick(2, showMenu) }} style={dispaly === 2 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>2. Mobile Banking</p>
                        <p onClick={() => { handleClick(3, showMenu) }} style={dispaly === 3 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>3. Internet Banking</p>
                        <p onClick={() => { handleClick(4, showMenu) }} style={dispaly === 4 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>4. Mobile & Agent Banking</p>
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
                    <div className={`animate__animated animate__fadeInLeft ${styles.shortInfo}`} style={{ height: '220px' }}>
                        <p onClick={() => handleNavigationClick(1)} style={dispaly === 1 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 1. Card Banking </p>
                        <p onClick={() => handleNavigationClick(2)} style={dispaly === 2 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 2. Mobile Banking </p>
                        <p onClick={() => handleNavigationClick(3)} style={dispaly === 3 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 3. Internet Banking </p>
                        <p onClick={() => handleNavigationClick(4)} style={dispaly === 4 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 4. Mobile & Agent Banking </p>
                    </div>
                </div>


                {dispaly == 1 ?

                    <div className={`${styles.history} animate__animated animate__bounceInUp`}>
                    <p className={styles.termsTitle}>1. Card Banking</p>
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
                                    <td>1</td>
                                    <td>Card Banking</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>1.1</td>
                                    <td>Joining fee</td>
                                    <td>Birr 50.00</td>
                                </tr>
                                <tr>
                                    <td>1.2</td>
                                    <td>Annual Subscription fee</td>
                                    <td>Free</td>
                                </tr>
                                <tr>
                                    <td>1.3</td>
                                    <td>Renewal fee</td>
                                    <td>Free</td>
                                </tr>
                                <tr>
                                    <td>1.4</td>
                                    <td>PIN replacement fee</td>
                                    <td>Birr 20.00</td>
                                </tr>
                                <tr>
                                    <td>1.5</td>
                                    <td>Card Replacement</td>
                                    <td>Birr 50.00</td>
                                </tr>
                                <tr>
                                    <td>1.6</td>
                                    <td>Additional Card link</td>
                                    <td>Birr 10.00</td>
                                </tr>
                                <tr>
                                    <td>1.7</td>
                                    <td>ATM on US BAL inquiry</td>
                                    <td>Birr 0.5</td>
                                </tr>
                                <tr>
                                    <td>1.8</td>
                                    <td>ATM On US statement</td>
                                    <td>Birr 0.5</td>
                                </tr>
                                <tr>
                                    <td>1.9</td>
                                    <td>ATM on US withdrawal</td>
                                    <td>0.4% amount withdrawn</td>
                                </tr>
                                <tr>
                                    <td>1.10</td>
                                    <td>Card to Card</td>
                                    <td>Birr 0.5</td>
                                </tr>
                                <tr>
                                    <td>1.11</td>
                                    <td>Card to account</td>
                                    <td>Birr 0.5</td>
                                </tr>
                                <tr>
                                    <td>1.12</td>
                                    <td>Remote on US balance Enquiry</td>
                                    <td>0.5 cents per request</td>
                                </tr>
                                <tr>
                                    <td>1.13</td>
                                    <td>Remote on US withdrawal</td>
                                    <td>0.25%</td>
                                </tr>
                                <tr>
                                    <td>1.14</td>
                                    <td>OFF US ETHSWITCH balance Enquiry</td>
                                    <td>0.25%</td>
                                </tr>
                                <tr>
                                    <td>1.15</td>
                                    <td>OFF US ETHSWITCH withdrawal</td>
                                    <td>0.25 %</td>
                                </tr>
                                <tr>
                                    <td>1.16</td>
                                    <td>Cash withdrawal on POS(Cash Advance)</td>
                                    <td>0.50%</td>
                                </tr>
                                <tr>
                                    <td>1.17</td>
                                    <td>ATM cash withdrawal (Off US ETHSWITCH)</td>
                                    <td>0.50%</td>
                                </tr>
                                <tr>
                                    <td>1.18</td>
                                    <td>E-commerce</td>
                                    <td>0.25% per transaction</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    : ""}

                {dispaly == 2 ?

                    <div className={`${styles.history} animate__animated animate__bounceInUp`}>
                    <p className={styles.termsTitle}>2. Mobile Banking</p>
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
                                    <td>Mobile Banking</td>
                                    <td></td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td>2.1</td>
                                    <td>Fund Transfer</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>2.1.1</td>
                                    <td>To own account</td>
                                    <td>Free</td>
                                </tr>
                                <tr>
                                    <td>2.1.2</td>
                                    <td>To other account of the same bank</td>
                                    <td>Free</td>
                                </tr>
                                <tr>
                                    <td>2.1.3</td>
                                    <td>To non-account holder</td>
                                    <td>NA</td>
                                </tr>
                                <tr>
                                    <td>2.1.4</td>
                                    <td>To wallet</td>
                                    <td>free</td>
                                </tr>
                                <tr>
                                    <td>2.1.5</td>
                                    <td>To other bank</td>
                                    <td>as per Ethswitch</td>
                                </tr>
                                <tr>
                                    <td>2.1.6</td>
                                    <td>Utility payment</td>
                                    <td>NA</td>
                                </tr>
                                <tr>
                                    <td>2.1.7</td>
                                    <td>Airticket payment</td>
                                    <td>Free</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    : ""}

                {dispaly == 3 ?

                    <div className={`${styles.history} animate__animated animate__bounceInUp`}>
                    <p className={styles.termsTitle}>3. Internet Banking</p>
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
                                    <td>3</td>
                                    <td>Internet Banking</td>
                                    <td></td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td>3.1</td>
                                    <td>Fund Transfer</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>3.1.1</td>
                                    <td>To own account</td>
                                    <td>Free</td>
                                </tr>
                                <tr>
                                    <td>3.1.2</td>
                                    <td>To other same bank</td>
                                    <td>Free</td>
                                </tr>
                                <tr>
                                    <td>3.1.3</td>
                                    <td>To non-account holder</td>
                                    <td>Not functional</td>
                                </tr>
                                <tr>
                                    <td>3.1.4</td>
                                    <td>To other bank</td>
                                    <td>NA</td>
                                </tr>
                                <tr>
                                    <td>3.1.5</td>
                                    <td>Utility payment</td>
                                    <td>NA</td>
                                </tr>
                                <tr>
                                    <td>3.1.6</td>
                                    <td>Airticket payment</td>
                                    <td>free</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    : ""}

                {dispaly == 4 ? 

                    <div className={`${styles.history} animate__animated animate__bounceInUp`}>
                    <p className={styles.termsTitle}>4. Mobile & Agent Banking</p>
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
                                    <td>Mobile & Agent Banking</td>
                                    <td></td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td>4.1</td>
                                    <td>Sending Money</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>4.1.1</td>
                                    <td>To other same bank wallet account (Wallet to Wallet)</td>
                                    <td>
                                        1-200 - Birr 3.00<br />
                                        201-500 - Birr 6.50<br />
                                        501-2000 - Birr 10<br />
                                        2001-5000 - Birr 14<br />
                                        5001-10000 - Birr 25<br />
                                        &gt; 10,001 - Birr 45
                                    </td>
                                </tr>
                                <tr>
                                    <td>4.1.2</td>
                                    <td>To other bank Wallet account</td>
                                    <td>Not Functional</td>
                                </tr>
                                <tr>
                                    <td>4.1.3</td>
                                    <td>Bill Payment</td>
                                    <td>1-200 - Birr 3.00<br />201-3000 - Birr 1.5%<br /> &gt; 3000 - Birr 45.00</td>
                                </tr>
                                <tr>
                                    <td>4.1.4</td>
                                    <td>Bulk Payment</td>
                                    <td>Birr 5.00/Transaction</td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td>4.2</td>
                                    <td>Cash Withdrawal</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>4.2.1</td>
                                    <td>At Agent location</td>
                                    <td>1-200 - Birr 5.00<br />201-500 - Birr 7.00<br />501-2000 - Birr 8.50<br />2001-5000 - Birr 12<br />5000-10,000 - Birr 15<br />10,000-20,000 - Birr 18<br /> &gt; 20,001 - Birr 22</td>
                                </tr>
                                <tr>
                                    <td>4.2.2</td>
                                    <td>At Branch premises</td>
                                    <td>Free</td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td>4.3</td>
                                    <td>Cash Deposit</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>4.3.1</td>
                                    <td>At Agent location</td>
                                    <td>Free</td>
                                </tr>
                                <tr>
                                    <td>4.3.2</td>
                                    <td>At Branch premises</td>
                                    <td>Free</td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td>4.4</td>
                                    <td>Agent Commission</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>4.4.1</td>
                                    <td>Cash Deposit</td>
                                    <td>1-500 - Birr 2.50<br />501-2000 - Birr 3.20<br />2001-5000 - Birr 4.00<br />5001-8000 - Birr 5.00<br />8001-10000 - Birr 6.50<br />10001-20000 - Birr 7.50<br /> &gt;20001 - Birr 10</td>
                                </tr>
                                <tr>
                                    <td>4.4.2</td>
                                    <td>Cash Withdrawal</td>
                                    <td>1-500 - Birr 3.00<br />501-2000 - Birr 4.00<br />2001-5000 - Birr 5.00<br />5001-10,000 - Birr 7.00<br />10,001-20,000 - Birr 8.00<br /> &gt;20,001 - Birr 10.25</td>
                                </tr>
                                <tr>
                                    <td>4.4.3</td>
                                    <td>Customer registration</td>
                                    <td>Birr 10.00/registration</td>
                                </tr>
                                <tr>
                                    <td>4.4.4</td>
                                    <td>Airtime recharge</td>
                                    <td>5%</td>
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

export default Digital_Terms_And_Tariffs;