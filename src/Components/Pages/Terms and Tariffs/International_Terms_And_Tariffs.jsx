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

const International_Terms_And_Tariffs = () => {

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
                    <div className={`animate__animated animate__fadeInLeft shortInfo`} >
                        <p onClick={() => { handleClick(1, showMenu) }} style={dispaly === 1 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>1. Import Letter of Credit (L/C)</p>
                        <p onClick={() => { handleClick(2, showMenu) }} style={dispaly === 2 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>2. Cash Against Document (CAD)</p>
                        <p onClick={() => { handleClick(3, showMenu) }} style={dispaly === 3 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>3. Outgoing and incoming transfer</p>
                        <p onClick={() => { handleClick(4, showMenu) }} style={dispaly === 4 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>4. Export Letter of Credit (L/C)</p>
                        <p onClick={() => { handleClick(5, showMenu) }} style={dispaly === 5 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>5. Other charges</p>
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
                <img src={About_us} alt="About us" />
            </div>

            <div className={styles.establishment}>

                <p className={styles.aboutUsMenu} onClick={() => { menutoggle() }} ><MdMenuOpen style={{ fontSize: '30px' }} /></p>

                <div className={styles.leftNavBars}>
                    <div className={`animate__animated animate__fadeInLeft ${styles.shortInfo}`} style={{ height: '400px' }}>
                        <p onClick={() => handleNavigationClick(1)} style={dispaly === 1 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 1. Import Letter of Credit (L/C) </p>
                        <p onClick={() => handleNavigationClick(2)} style={dispaly === 2 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 2. Cash Against Document (CAD) </p>
                        <p onClick={() => handleNavigationClick(3)} style={dispaly === 3 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 3. Outgoing and incoming transfer </p>
                        <p onClick={() => handleNavigationClick(4)} style={dispaly === 4 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 4. Export Letter of Credit (L/C) </p>
                        <p onClick={() => handleNavigationClick(5)} style={dispaly === 5 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 5. Other charges </p>
                    </div>
                </div>

                {dispaly === 1 && (
                    <div className={`${styles.history} animate__animated animate__bounceInUp`}>
                        <p className={styles.termsTitle}>1. Import Letter of Credit (L/C)</p>
                        <table className={styles.container} style={{ width: '100%' }}>
                            <thead>
                                <tr className={styles.headerRowss}>
                                    <th>No</th>
                                    <th>Description</th>
                                    <th>From Wegagen Bank</th>
                                    <th>From Retention & other FCY A/C</th>
                                    <th>From Diaspora A/C</th>
                                    <th>Rule for Application of period & Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className={styles.headerRow}>
                                    <td>1</td>
                                    <td colSpan={5}>Import Letter of Credit (L/C)</td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td>1.1</td>
                                    <td colSpan={5}>Opening of Letter of Credit (L/C)</td>
                                </tr>
                                <tr>
                                    <td>1.1.1</td>
                                    <td>Swift</td>
                                    <td>USD 200</td>
                                    <td>USD 200</td>
                                    <td>USD 200</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>1.1.2</td>
                                    <td>Exchange Payable</td>
                                    <td>2.5%</td>
                                    <td>Free</td>
                                    <td>Free</td>
                                    <td></td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td>1.2</td>
                                    <td colSpan={5}>Extension of Letter of Credit (L/C)</td>
                                </tr>
                                <tr>
                                    <td>1.2.1</td>
                                    <td colSpan={4}>Extension commission</td>
                                    
                                </tr>
                                <tr>
                                    <td>1.2.1.1</td>
                                    <td>SWIFT</td>
                                    <td>USD 50</td>
                                    <td>USD 25</td>
                                    <td>USD 25</td>
                                    <td>Applicable for any outgoing SWIFT message except bank to bank communication</td>
                                </tr>
                                <tr>
                                    <td>1.2.1.2</td>
                                    <td>Amendment commission</td>
                                    <td>USD 50</td>
                                    <td>USD 25</td>
                                    <td>USD 25</td>
                                    <td>Applicable to all amendments including extension</td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td>1.3</td>
                                    <td colSpan={5}>Increased L/C</td>
                                </tr>
                                <tr>
                                    <td>1.3.1</td>
                                    <td>Exchange commission to NBE</td>
                                    <td>2.5% for increased amount</td>
                                    <td>Free</td>
                                    <td>Free</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>1.3.2</td>
                                    <td>SWIFT</td>
                                    <td>USD 50</td>
                                    <td>USD 25</td>
                                    <td>USD 25</td>
                                    <td></td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td>1.4</td>
                                    <td colSpan={5}>Decreased L/C</td>
                                </tr>
                                <tr>
                                    <td>1.4.1</td>
                                    <td>SWIFT</td>
                                    <td>USD 50</td>
                                    <td>USD 25</td>
                                    <td>USD 25</td>
                                    <td>Applicable for any outgoing SWIFT message except bank to bank communication</td>
                                </tr>
                                <tr>
                                    <td>1.4.2</td>
                                    <td>Amendment commission</td>
                                    <td>USD 50</td>
                                    <td>USD 25</td>
                                    <td>USD 25</td>
                                    <td>Applicable to all amendments including extension</td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td>1.5</td>
                                    <td colSpan={5}>L/C Settlement</td>
                                </tr>
                                <tr>
                                    <td>1.5.1</td>
                                    <td colSpan={4}>L/C settled with opened value</td>
                                    
                                </tr>
                                <tr>
                                    <td>1.5.1.1</td>
                                    <td>SWIFT for settlement</td>
                                    <td>USD 100</td>
                                    <td>USD 50</td>
                                    <td>USD 50</td>
                                    <td>Applicable for outgoing L/C settlement swift Messages 799 & 999</td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td>1.5.2</td>
                                    <td colSpan={5}>L/C settled with excess drawing upon receipt of shipping documents</td>
                                </tr>
                                <tr>
                                    <td>1.5.2.1</td>
                                    <td>Exchange commission to NBE</td>
                                    <td>2.5% for excess amount for L/CY A/C</td>
                                    <td>Free</td>
                                    <td>Free</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>1.5.2.2</td>
                                    <td>Swift for settlement</td>
                                    <td>USD 100</td>
                                    <td>USD 50</td>
                                    <td>USD 50</td>
                                    <td>Applicable for outgoing L/C settlement swift Messages 799 & 999</td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td>1.6</td>
                                    <td colSpan={5}>Other L/C Charges</td>
                                </tr>
                                <tr>
                                    <td>1.6.1</td>
                                    <td>Custody Charge (Per Month)</td>
                                    <td>USD 125</td>
                                    <td>USD 100 per month</td>
                                    <td>USD 100 per month</td>
                                    <td>This charge is applied for documents held at our custody beyond 30 days</td>
                                </tr>
                                <tr>
                                    <td>1.6.2</td>
                                    <td>Discrepancy Charge (per document presentation on beneficiary account</td>
                                    <td>USD 100 or equivalent in other currency per document presentation on beneficiary account</td>
                                    <td>USD 100 or equivalent in other currency per document presentation on beneficiary account</td>
                                    <td>USD 100 or equivalent in other currency per document presentation on beneficiary account</td>
                                    <td>This charge is applied per covering letter of the presenting bank</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}

                {dispaly === 2 && (
                    <div className={`${styles.history} animate__animated animate__bounceInUp`}>
                        <p className={styles.termsTitle}>2. Cash Against Document (CAD)</p>
                        <table className={styles.container} style={{ width: '100%' }}>
                            <thead>
                                <tr className={styles.headerRowss}>
                                    <th>No</th>
                                    <th>Description</th>
                                    <th>From Wegagen Bank</th>
                                    <th>From Retention & other FCY A/C</th>
                                    <th>From Diaspora A/C</th>
                                    <th>Rule for Application of period & Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className={styles.headerRow}>
                                    <td>2</td>
                                    <td colSpan={5}>Cash Against Document (CAD)</td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td>2.1</td>
                                    <td colSpan={5}>Upon purchase order approval</td>
                                </tr>
                                <tr>
                                    <td>2.1.1</td>
                                    <td>Purchase order amendment charge</td>
                                    <td>USD 150</td>
                                    <td>USD 100</td>
                                    <td>USD 100</td>
                                    <td>Applied for amendment except for amendments which are not allowed by NBE (supplier description of goods etc.)</td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td>2.2</td>
                                    <td colSpan={5}>Upon collection of Documents (IBC)</td>
                                </tr>
                                <tr>
                                    <td>2.2.1</td>
                                    <td>Exchange Payable</td>
                                    <td>2.5% for LCY account</td>
                                    <td>Free</td>
                                    <td>Free</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>2.2.2</td>
                                    <td>SWIFT</td>
                                    <td>USD 200</td>
                                    <td>USD 200</td>
                                    <td>USD 200</td>
                                    <td>Applicable for any outgoing SWIFT message except bank to bank communication</td>
                                </tr>
                                <tr>
                                    <td>2.2.3</td>
                                    <td>Custody Charge</td>
                                    <td>USD 125 per month</td>
                                    <td>USD 100 per month</td>
                                    <td>USD 100 per month</td>
                                    <td>This charge is applied for documents held at our custody beyond 30 days</td>
                                </tr>
                                <tr>
                                    <td>2.2.4</td>
                                    <td>Inward Bills for collections document examination fee</td>
                                    <td>ETB 500 flat</td>
                                    <td>ETB 100 flat</td>
                                    <td>ETB 100 flat</td>
                                    <td></td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td>2.3</td>
                                    <td colSpan={5}>Other CAD Charges</td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td>2.3.1</td>
                                    <td colSpan={5}>Unpaid Items Returned</td>
                                </tr>
                                <tr>
                                    <td>2.3.1.1</td>
                                    <td>Service charge</td>
                                    <td>USD 100</td>
                                    <td>USD 100</td>
                                    <td>USD 100</td>
                                    <td>Applicable for CAD document returned</td>
                                </tr>
                                <tr>
                                    <td>2.3.1.2</td>
                                    <td>SWIFT</td>
                                    <td>USD 50</td>
                                    <td>USD 50</td>
                                    <td>USD 50</td>
                                    <td>Per SWIFT communication</td>
                                </tr>
                                <tr>
                                    <td>2.3.1.3</td>
                                    <td>Protest charge</td>
                                    <td>USD 20</td>
                                    <td>USD 20</td>
                                    <td>USD 20</td>
                                    <td>Applicable for only CAD documents returned by rejection</td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td>2.3.2</td>
                                    <td colSpan={5}>Unpaid items held in trust</td>
                                </tr>
                                <tr>
                                    <td>2.3.2.1</td>
                                    <td>Acceptance bills of 12 months</td>
                                    <td>USD 25</td>
                                    <td>USD 25</td>
                                    <td>USD 25</td>
                                    <td>Applicable for CAD documents on acceptance and held on trust per period on beneficiary's account</td>
                                </tr>
                                <tr>
                                    <td>2.3.2.2</td>
                                    <td>Sight documents aged over 3 months</td>
                                    <td>USD 30 per period & part thereof</td>
                                    <td>USD 30 per period & part thereof</td>
                                    <td>USD 30 per period & part thereof</td>
                                    <td>Applicable for CAD documents on sight and held on trust per period on beneficiary's account</td>
                                </tr>
                                <tr>
                                    <td>2.3.2.3</td>
                                    <td>Protest charge</td>
                                    <td>USD 100</td>
                                    <td>USD 100</td>
                                    <td>USD 100</td>
                                    <td>Applicable for only CAD documents held on trust on beneficiaries account</td>
                                </tr>
                                <tr>
                                    <td>2.3.2.4</td>
                                    <td>Courier charge</td>
                                    <td>per cost</td>
                                    <td>per cost</td>
                                    <td>per cost</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}

                {dispaly === 3 && (
                    <div className={`${styles.history} animate__animated animate__bounceInUp`}>
                        <p className={styles.termsTitle}>3. Outgoing and incoming transfer</p>
                        <table className={styles.container} style={{ width: '100%' }}>
                            <thead>
                                <tr className={styles.headerRowss}>
                                    <th>No</th>
                                    <th>Description</th>
                                    <th>From Wegagen Bank</th>
                                    <th>From Retention & other FCY A/C</th>
                                    <th>From Diaspora A/C</th>
                                    <th>Rule for Application of period & Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className={styles.headerRow}>
                                    <td>3</td>
                                    <td colSpan={5}>Outgoing and incoming transfer</td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td>3.1</td>
                                    <td colSpan={5}>Outstanding (TT)</td>
                                </tr>
                                <tr>
                                    <td>3.1.1</td>
                                    <td>Exchange commission to NBE</td>
                                    <td>2.5% on L/CY account</td>
                                    <td>Free</td>
                                    <td>Free</td> 
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>3.1.2</td>
                                    <td>SWIFT</td> 
                                    <td>USD 50</td>
                                    <td>USD 50</td>
                                    <td>USD 50</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>3.1.3</td>
                                    <td>Amendment on transfer</td>
                                    <td>USD 80</td>
                                    <td>USD 80</td>
                                    <td>USD 80</td>
                                    <td></td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td>3.2</td>
                                    <td colSpan={5}>Import Freight Payment</td>
                                </tr>
                                <tr>
                                    <td>3.2.1</td>
                                    <td>NBE exchange payable</td>
                                    <td>2.5% in L/CY account</td>
                                    <td>Free</td>
                                    <td>Free</td>
                                    <td></td> 
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}

                {dispaly === 4 && (
                    <div className={`${styles.history} animate__animated animate__bounceInUp`}>
                        <p className={styles.termsTitle}>4. Export Letter of Credit (L/C)</p>
                        <table className={styles.container} style={{ width: '100%' }}>
                            <thead>
                                <tr className={styles.headerRowss}>
                                    <th>No</th>
                                    <th>Description</th>
                                    <th>From Wegagen Bank</th>
                                    <th>From Retention & other FCY A/C</th>
                                    <th>From Diaspora A/C</th>
                                    <th>Rule for Application of period & Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className={styles.headerRow}>
                                    <td>4</td>
                                    <td colSpan={5}>Export Letter of Credit (L/C)</td>
                                </tr>
                                <tr>
                                    <td>4.1</td>
                                    <td>Export Letter of Credit (L/C) Advising Fee to other banks</td>
                                    <td>1000 ETB</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>4.2</td>
                                    <td>Courier Charge</td>
                                    <td>1000 ETB</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}

                {dispaly === 5 && (
                    <div className={`${styles.history} animate__animated animate__bounceInUp`}>
                        <p className={styles.termsTitle}>5. Other charges</p>
                        <table className={styles.container} style={{ width: '100%' }}>
                            <thead>
                                <tr className={styles.headerRowss}>
                                    <th>No</th>
                                    <th>Description</th>
                                    <th>From Wegagen Bank</th>
                                    <th>From Retention & other FCY A/C</th>
                                    <th>From Diaspora A/C</th>
                                    <th>Rule for Application of period & Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className={styles.headerRow}>
                                    <td>5</td>
                                    <td colSpan={5}>Other charges</td>
                                </tr>
                                <tr>
                                    <td>5.1</td>
                                    <td>IBC document collected from client/supplier directly</td>
                                    <td>USD 100</td>
                                    <td>USD 100</td>
                                    <td>USD 100</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>5.2</td>
                                    <td>Small item Export permit issuance</td>
                                    <td>USD 50</td>
                                    <td>USD 50</td>
                                    <td>USD 50</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>5.3</td>
                                    <td>Swift Authentication fee</td>
                                    <td>Birr 30/ Full Document</td>
                                    <td>Birr 30/ Full Document</td>
                                    <td>Birr 30/ Full Document</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            <div style={{ width: '80%', margin: 'auto', marginBottom: '50px' }}>
                <p style={{ textAlign: 'left', fontSize: '18px', color: 'black' }}>NB</p>
                <ul className="list-disc list-inside" style={{ textAlign: 'left', fontSize: '16px', color: 'black' }}>
                    <li>Outgoing transfer for tuition fee and other invisible payment for staff is free of charge</li>
                    <li>Supplier's credit payment is effected on 2 value date from settlement excluding non-working days</li>
                    <li>FCY account holders requesting freight payment, the associated service charge is collected in ETB as per the tariff</li>
                </ul>
            </div>

            <Footer />
        </>
    );
};

export default International_Terms_And_Tariffs;
