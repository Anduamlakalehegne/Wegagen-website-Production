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
                        <p onClick={() => { handleClick(1, showMenu) }} style={dispaly === 1 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>1. Card Banking </p>
                        <p onClick={() => { handleClick(2, showMenu) }} style={dispaly === 2 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>2. International VISA Card Banking </p>
                        <p onClick={() => { handleClick(3, showMenu) }} style={dispaly === 3 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>3. Mobile Banking  </p>
                        <p onClick={() => { handleClick(4, showMenu) }} style={dispaly === 4 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>4. Internet Banking </p>
                        <p onClick={() => { handleClick(5, showMenu) }} style={dispaly === 5 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>5. Agent Banking </p>
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
                        <p onClick={() => handleNavigationClick(2)} style={dispaly === 2 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 2. International VISA Card Banking </p>
                        <p onClick={() => handleNavigationClick(3)} style={dispaly === 3 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 3. Mobile Banking  </p>
                        <p onClick={() => handleNavigationClick(4)} style={dispaly === 4 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 4. Internet Banking </p>
                        <p onClick={() => handleNavigationClick(5)} style={dispaly === 5 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 5. Agent Banking </p>
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
                                    <td>Birr 75.00</td>
                                </tr>
                                <tr>
                                    <td>1.2</td>
                                    <td>Annual Subscription fee</td>
                                    <td>Free</td>
                                </tr>
                                <tr>
                                    <td>1.3</td>
                                    <td>Renewal fee</td>
                                    <td>Birr 75 </td>
                                </tr>
                                <tr>
                                    <td>1.4</td>
                                    <td>PIN replacement fee</td>
                                    <td>Birr 20.00</td>
                                </tr>
                                <tr>
                                    <td>1.5</td>
                                    <td>Card Replacement</td>
                                    <td>Birr 75.00</td>
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
                                    <td>0.5% /amount withdrawn</td>
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
                                    <td>0.5% /amount withdrawn</td>
                                </tr>
                                <tr>
                                    <td>1.14</td>
                                    <td>OFF US ETHSWITCH balance Enquiry</td>
                                    <td>as per Ethswitch</td>
                                </tr>
                                <tr>
                                    <td>1.15</td>
                                    <td>OFF US ETHSWITCH withdrawal</td>
                                    <td>as per Ethswitch</td>
                                </tr>
                                <tr>
                                    <td>1.16</td>
                                    <td>Cash withdrawal on POS(Cash Advance)</td>
                                    <td>0.50%</td>
                                </tr>
                                <tr>
                                    <td>1.17</td>
                                    <td>ATM cash withdrawal (Off US ETHSWITCH)</td>
                                    <td>0.5% /amount purchase</td>
                                </tr>
                                <tr>
                                    <td>1.18</td>
                                    <td>Balance Inquiry on POS</td>
                                    <td>0.5</td>
                                </tr>
                                <tr>
                                    <td>1.19</td>
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
                                    <td colspan="2" >
                                        <p><strong>International VISA Card Banking</strong></p>
                                    </td>
                                </tr>
                                <tr>
                                    <td><p><strong>2.1</strong></p></td>
                                    <td><p>Card Joining Fee</p></td>
                                    <td><p>ETB 1,000 &ndash; Platinum cards</p><p>ETB 800 &ndash; Gold Cards</p><p>ETB 500 &ndash; Silver and Bronze Cards</p></td>
                                </tr>
                                <tr>
                                    <td><p><strong>2.1.1</strong></p></td>
                                    <td><p>Card Renewal Fee</p></td>
                                    <td><p>ETB 350</p></td>
                                </tr>
                                <tr>
                                    <td><p><strong>2.1.2</strong></p>
                                    </td>
                                    <td><p>ATM Cash Withdrawal fee</p></td>
                                    <td><p>USD 0.75 per transaction</p></td>
                                </tr>
                                <tr>
                                    <td><p><strong>2.1.3</strong></p></td>
                                    <td><p>POS Purchase fee</p></td>
                                    <td><p>USD 0.03 per transaction</p></td>
                                </tr>
                                <tr>
                                    <td><p><strong>2.1.4</strong></p></td>
                                    <td><p>POS Cash Advance</p></td>
                                    <td><p>USD 0.75 per transaction</p></td>
                                </tr>
                                <tr>
                                    <td><p><strong>2.1.5</strong></p></td>
                                    <td><p>Card Replacement fee</p></td>
                                    <td><p>ETB 350</p> </td>
                                </tr>
                                <tr>
                                    <td> <p><strong>2.1.6</strong></p></td>
                                    <td><p>Account Setup fee (per Card)</p></td>
                                    <td><p>USD 0.25</p> </td>
                                </tr>
                                <tr>
                                    <td> <p><strong>2.1.7</strong></p></td>
                                    <td> <p>Annual Subscription Fee</p></td>
                                    <td> <p>USD 6.00</p> </td>
                                </tr>
                                <tr>
                                    <td><p><strong>2.1.8</strong></p></td>
                                    <td><p>Refund</p></td>
                                    <td><p>USD 0.03</p> </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    : ""}


                {dispaly == 3 ?

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
                                    <td>3</td>
                                    <td>Mobile Banking</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>
                                        <p><strong>3.1</strong></p>
                                    </td>
                                    <td colspan="2">
                                        <p><strong>Fund Transfer</strong>&nbsp;</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p><strong>3.1.1</strong></p>
                                    </td>
                                    <td>
                                        <p>To own account</p>
                                    </td>
                                    <td>
                                        <p>0.25%/transaction amount</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td >
                                        <p><strong>3.1.2</strong></p>
                                    </td>
                                    <td>
                                        <p>To other account of the same bank</p>
                                    </td>
                                    <td>
                                        <p>Up to 10,000- free <br /> 10,000-50,000- birr 3<br /> 50,001 - 100,000 birr 5<br /> 100,001 - 200,000 birr 10.00 <br /> 200,001-300,000 birr 15 <br /> &gt;300,001-Fixed 20</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td >
                                        <p><strong>3.1.3</strong></p>
                                    </td>
                                    <td>
                                        <p>To non-account holder</p>
                                    </td>
                                    <td>
                                        <p>0.50% /transaction amount</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td >
                                        <p><strong>3.1.4</strong></p>
                                    </td>
                                    <td>
                                        <p>To wallet</p>
                                    </td>
                                    <td>
                                        <p>up to 5000 birr 3.50<br /> 5001 - 10,000 birr 4.50<br /> 10,001 - 50,000 birr 8.00<br /> 50,001 - 100,000 birr 10.00<br /> more than 50,000 birr 20.0</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td >
                                        <p><strong>3.1.5</strong></p>
                                    </td>
                                    <td>
                                        <p>To Telebirr/M-Pesa</p>
                                    </td>
                                    <td>
                                        <p>Up to 5000 birr 3.50<br /> 5001 - 10,000 birr 4.50<br /> 10,001 - 50,000 birr 8.00<br /> 50,001 - 100,000 birr 10.00<br /> more than 50,000 birr 20.</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td >
                                        <p><strong>3.1.6</strong></p>
                                    </td>
                                    <td>
                                        <p>To other bank</p>
                                    </td>
                                    <td>
                                        <p>as per Ethswitch</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td >
                                        <p><strong>3.1.7</strong></p>
                                    </td>
                                    <td>
                                        <p>Utility payment</p>
                                    </td>
                                    <td>
                                        <p>as per Ethswitch</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td >
                                        <p><strong>3.1.8</strong></p>
                                    </td>
                                    <td>
                                        <p>Air ticket payment</p>
                                    </td>
                                    <td>
                                        <p>0.5% per transaction amount</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td >
                                        <p><strong>3.1.9</strong></p>
                                    </td>
                                    <td>
                                        <p>Airtime top up</p>
                                    </td>
                                    <td>
                                        <p>0.5% per transaction amount</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    : ""}

                {dispaly == 4 ?

                    <div className={`${styles.history} animate__animated animate__bounceInUp`}>
                        <p className={styles.termsTitle}>4.Internet Banking</p>
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
                                    <td>Internet Banking</td>
                                    <td></td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td>4.1</td>
                                    <td>Fund Transfer</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>4.1.1</td>
                                    <td>To own account</td>
                                    <td>0.25%/transaction amount</td>
                                </tr>
                                <tr>
                                    <td>4.1.2</td>
                                    <td>To other same bank</td>
                                    <td>Up to 10,000- free <br /> 10,000-50,000- birr 3 <br /> 50,001 - 100,000 birr 5 <br /> 100,001 - 200,000 birr 10.00  <br /> 200,001-300,000 birr 15 <br />  &gt;300,001-Fixed 20</td>
                                </tr>
                                <tr>
                                    <td>4.1.3</td>
                                    <td>To non-account holder</td>
                                    <td>Not functional</td>
                                </tr>
                                <tr>
                                    <td>4.1.4</td>
                                    <td>To other bank</td>
                                    <td>As per Eth-Switch</td>
                                </tr>
                                <tr>
                                    <td>4.1.5</td>
                                    <td>Utility payment</td>
                                    <td>0.5%/ transaction</td>
                                </tr>
                                <tr>
                                    <td>4.1.6</td>
                                    <td>Airticket payment</td>
                                    <td>0.5%/ transaction</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    : ""}

                {dispaly == 5 ?

                    <div className={`${styles.history} animate__animated animate__bounceInUp`}>
                        <p className={styles.termsTitle}>5. Agent Banking</p>
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
                                    <td>Agent Banking</td>
                                    <td></td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td>5.1</td>
                                    <td>Sending Money</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>5.1.1</td>
                                    <td>To other same bank wallet account (Wallet to Wallet)</td>
                                    <td>
                                        25-200 - Birr 3.00<br />
                                        201-500 - Birr 6.50<br />
                                        501-2000   - Birr 9.00<br />
                                        2001-5000  - Birr 14<br />
                                    </td>
                                </tr>
                                <tr>
                                    <td>5.1.2</td>
                                    <td>To other bank Wallet account</td>
                                    <td>Not Functional</td>
                                </tr>
                                <tr>
                                    <td>5.1.3</td>
                                    <td>Bill Payment</td>
                                    <td>1-200 - Birr 3.00<br />201-3000 - Birr 1.5%<br /> &gt; 3000 - Birr 45.00<br />5.00/Transaction</td>
                                </tr>
                                <tr>
                                    <td>5.1.4</td>
                                    <td>Bulk Payment</td>
                                    <td>Birr 5.00/Transaction</td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td>5.2</td>
                                    <td>Cash Withdrawal</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>5.2.1</td>
                                    <td>At Agent location</td>
                                    <td>1-200 - Birr 5.00<br />201-500 - Birr 7.00<br />501-2000 - Birr 8.50<br />2001-5000 - Birr 12<br />5000-10,000 - Birr 15<br />10,000-20,000 - Birr 18<br /> &gt; 20,001 - Birr 22</td>
                                </tr>
                                <tr>
                                    <td>5.2.2</td>
                                    <td>At Branch premises</td>
                                    <td>Free</td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td>5.3</td>
                                    <td>Cash Deposit</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>5.3.1</td>
                                    <td>At Agent location</td>
                                    <td>Free</td>
                                </tr>
                                <tr>
                                    <td>5.3.2</td>
                                    <td>At Branch premises</td>
                                    <td>Free</td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td>5.4</td>
                                    <td>Agent Commission</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>5.4.1</td>
                                    <td>Cash Deposit</td>
                                    <td>25-500 - Birr 1.50<br />501 - 2000 - Birr 4.00<br />2001-3000 - Birr 4.50<br />3001-4000 - Birr 5.50<br />4001-5000 - Birr 6.50<br />5001-8000 - Birr 7.50<br /> &gt;8001-Birr 0.11%</td>
                                </tr>
                                <tr>
                                    <td>5.4.2</td>
                                    <td>Cash Withdrawal</td>
                                    <td>25-500 - Birr 3.45<br />501 - 2,000 - Birr 4.60<br />2,001-5,000 - Birr 6.50<br />5,000-10,000 - Birr 8.5<br />10,000-20,000 - Birr 10<br /> &gt;20,001 - Birr 12</td>
                                </tr>
                                <tr>
                                    <td>5.4.3</td>
                                    <td>Customer registration</td>
                                    <td>Birr 11.50/registration</td>
                                </tr>
                                <tr>
                                    <td>5.4.4</td>
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