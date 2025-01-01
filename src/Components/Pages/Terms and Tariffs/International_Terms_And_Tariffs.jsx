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
                        <p onClick={() => { handleClick(2, showMenu) }} style={dispaly === 2 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>2. Documentary collection</p>
                        <p onClick={() => { handleClick(3, showMenu) }} style={dispaly === 3 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>3. Outgoing Transfer( Import and Invisible Payment)</p>
                        <p onClick={() => { handleClick(4, showMenu) }} style={dispaly === 4 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>4. Export Letter of Credit (L/C)</p>
                        <p onClick={() => { handleClick(5, showMenu) }} style={dispaly === 5 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>5. Cash Notes Sales</p>
                        <p onClick={() => { handleClick(5, showMenu) }} style={dispaly === 6 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>6. Inward IBC against suppliers credits</p>
                        <p onClick={() => { handleClick(7, showMenu) }} style={dispaly === 7 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>7. Other charges</p>
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
                        <p onClick={() => handleNavigationClick(2)} style={dispaly === 2 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 2. Documentary collection </p>
                        <p onClick={() => handleNavigationClick(3)} style={dispaly === 3 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 3. Outgoing Transfer( Import and Invisible Payment) </p>
                        <p onClick={() => handleNavigationClick(4)} style={dispaly === 4 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 4. Export Letter of Credit (L/C) </p>
                        <p onClick={() => handleNavigationClick(5)} style={dispaly === 5 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 5. Cash Notes Sales </p>
                        <p onClick={() => handleNavigationClick(6)} style={dispaly === 6 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 6. Inward IBC against suppliers credits </p>
                        <p onClick={() => handleNavigationClick(7)} style={dispaly === 7 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 7. Other charges </p>

                    </div>
                </div>

                {dispaly === 1 && (
                    <div className={`${styles.history} animate__animated animate__bounceInUp`}>
                        <p className={styles.termsTitle}>1. Import Letter of Credit (L/C)</p>
                        <table className={styles.container} style={{ width: '100%' }}>
                            <thead>
                                <tr className={styles.headerRowss}>
                                    <th>Description</th>
                                    <th>From Wegagen Bank</th>
                                    <th>From Retention & other FCY A/C</th>
                                    <th>From Diaspora A/C</th>
                                    <th>Rule for Application of period & Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className={styles.headerRow}>
                                    <td colSpan={5}>1 Import Letter of Credit</td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td colSpan={5}>1.1. Opening of L/C</td>
                                </tr>
                                <tr>
                                    <td>Opening Commission</td>
                                    <td>2% Or Minimum USD 250</td>
                                    <td>1.5% Or Minimum USD 250</td>
                                    <td></td>
                                    <td>Applicable once only up on issuance/opening of LC. It does not include extension</td>
                                </tr>
                                <tr>
                                    <td>Service Charge Foreign</td>
                                    <td>2% per quarter Or Minimum of USD 300</td>
                                    <td>2.5% per quarter Or Minimum of USD 250</td>
                                    <td></td>
                                    <td>Applicable every quarter(90 days)on LC outstanding Amount</td>
                                </tr>
                                <tr>
                                    <td>Confirmation Commission</td>
                                    <td>2% per quarter or Minimum of USD 300</td>
                                    <td>1.5% per quarter & Minimum of 200</td>
                                    <td></td>
                                    <td>Applicable every quarter(90 days)on LC outstanding Amount</td>
                                </tr>
                                <tr>
                                    <td>Exchange Payable</td>
                                    <td>2.5% for LCY  A/C at settlment</td>
                                    <td>Free</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Swift</td>
                                    <td>USD 200</td>
                                    <td>USD 200</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Additional Service Charge (If the LC is opened with Margin)</td>
                                    <td>For 30% margin Facility, 3.5% on the unpaid margin per quarter For 50% margin Facility, 2.1% on the unpaid margin per quarter</td>
                                    <td></td>
                                    <td></td>
                                    <td>Applicable every quarter(90 days) on LC outstanding unpaid Margin</td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td colSpan={5}>1.2 Extension Commission</td>
                                </tr>
                                <tr>
                                    <td>Extension Commission beyond the period (involving additional period) before expiry date Excluding Service charge</td>
                                    <td>2% or Minimum USD 150</td>
                                    <td>1.5% per quarter part thereof Minimum of USD 150</td>
                                    <td></td>
                                    <td>Applicable for extension of expiry date of LC for additional period beyond 90 days in each quarter and SWIFT charge as well as amendment charge will be collected additionally. The charge is applicable if extension is requested and approved before expiry of LC</td>
                                </tr>
                                <tr>
                                    <td>Extension Commission beyond the  period (involving additional period) after expiry date Excluding Service charge</td>
                                    <td>2% or Minimum USD 300</td>
                                    <td>1.5% per quarter part thereof Minimum of USD 200</td>
                                    <td></td>
                                    <td>Applicable for extension of expiry date of LC for additional period beyond
                                        90 days in each quarter and SWIFT charge as well as amendment charge will be
                                        collected additionally. The charge is applicable if extension is requested and approved before expiry of LC</td>
                                </tr>
                                <tr>
                                    <td>Extension within the period of LC Excluding Service charge</td>
                                    <td>3% or Minimum USD 300</td>
                                    <td>1.5% or Minimum USD 300</td>
                                    <td></td>
                                    <td>Applicable for either extension of latest shipment dateand/or expiry date of LC within the period for which charges
                                        are collected (same period). SWIFT per message & amendment charges will be
                                        collected additionally per request.</td>
                                </tr>
                                <tr>
                                    <td>Partial Shipment Charge</td>
                                    <td>2% or Minimum USD 300</td>
                                    <td>1.5% or Minimum USD 250</td>
                                    <td></td>
                                    <td>Applicable for all subsequent partial shipments</td>
                                </tr>
                                <tr>
                                    <td>SWIFT</td>
                                    <td>USD 100</td>
                                    <td>USD 100</td>
                                    <td></td>
                                    <td>Applicable for any outgoing SWIFT message except bank to bank communication</td>
                                </tr>
                                <tr>
                                    <td>Amendment commission</td>
                                    <td>USD 50</td>
                                    <td>USD 50</td>
                                    <td></td>
                                    <td>Applicable to all amendments including extension</td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td colSpan={5}>1.3 Increase and Decrease in LC amount</td>
                                </tr>
                                <tr>
                                    <td>Service Charge Foreign</td>
                                    <td>4% per quarter<br />Or Minimum USD 300</td>
                                    <td>4% or Minimum USD 250</td>
                                    <td></td>
                                    <td>Applicable every quarter(90 days) on increased LC Amount</td>
                                </tr>
                                <tr>
                                    <td>Confirmation Commission</td>
                                    <td>2% per quarter<br />Or Minimum USD 300</td>
                                    <td>1.5% per quarter<br />or Minimum of USD 200</td>
                                    <td></td>
                                    <td>Applicable every quarter(90 days) on LC increased Amount</td>
                                </tr>
                                <tr>
                                    <td>Decreased LC</td>
                                    <td>SWIFT - USD 100<br />Amendment Charges - USD 50</td>
                                    <td>SWIFT - USD 100<br />Amendment Charges - USD 50</td>
                                    <td></td>
                                    <td>Only SWIFT & Amendment charge is applicable as per the Shipment after expire of LC and prior LC issuance and Handling of Document arrived after expiry date of LC is out</td>
                                </tr>
                                <tr>
                                    <td>Shipment after expiry of LC and prior to LC issuance</td>
                                    <td>1) Within 10 days - 2% or Minimum USD 300<br />2) After 10 days - 3% or Minimum USD 500</td>
                                    <td>1) Within 10 days - 1% or Minimum USD 250<br />2) After 10 days - 2% or Minimum USD 400</td>
                                    <td></td>
                                    <td>This charge is applicable for shipment after expiry of LC or prior to issuance of LC.</td>
                                </tr>
                                <tr>
                                    <td>Handling charge of documents arrived after expiry date of LC</td>
                                    <td>1) Within 10 days - 2% or Minimum USD 300<br />2) After 10 days - 3% or Minimum USD 500</td>
                                    <td>1) Within 10 days - 1% or Minimum USD 250<br />2) After 10 days - 2.5% or Minimum USD 400</td>
                                    <td></td>
                                    <td>This charge is applicable on commercial invoice value for any documents received at our counter after the expiry of LC. However, it applies for LC shipped within LC validity</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}

                {dispaly === 2 && (
                    <div className={`${styles.history} animate__animated animate__bounceInUp`}>
                        <p className={styles.termsTitle}>2. Documentary collection</p>
                        <table className={styles.container} style={{ width: '100%' }}>
                            <thead>
                                <tr className={styles.headerRowss}>
                                    <th>Description</th>
                                    <th>From Wegagen Bank</th>
                                    <th>From Retention & other FCY A/C</th>
                                    <th>From Diaspora A/C</th>
                                    <th>Rule for Application of period & Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className={styles.headerRow}>
                                    <td colSpan={5}>2. Documentary collection</td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td colSpan={5}>2.1Upon Approval of CAD</td>
                                </tr>
                                <tr>
                                    <td>Purchase order approval commission</td>
                                    <td>4% or Minimum USD 300</td>
                                    <td>4% or Minimum USD 250</td>
                                    <td></td>
                                    <td>Applicable on approved purchased order proforma value</td>
                                </tr>
                                <tr>
                                    <td>Purchase order amendment Charge</td>
                                    <td>USD 150</td>
                                    <td>USD 100</td>
                                    <td></td>
                                    <td>Applied for amendment except for amendments which are not allowed by NBE(supplier, description of goods, etc)</td>
                                </tr>
                                <tr>
                                    <td>Purchase order extension commission before expiry</td>
                                    <td>4% per period on outstanding amount or Minimum USD 150</td>
                                    <td>4% per quarter on outstanding amount Or Minimum of USD 150</td>
                                    <td></td>
                                    <td>This charge applied if extension is requested and approved before expiry of the PO</td>
                                </tr>
                                <tr>
                                    <td>Purchase order extension commission after expiry</td>
                                    <td>4% per period on outstanding amount or Minimum USD 300</td>
                                    <td>4% per quarter on outstanding amount Or Minimum of USD 150</td>
                                    <td></td>
                                    <td>This charge applied if extension is requested after expiry of the PO</td>
                                </tr>
                                <tr>
                                    <td>Partial Shipment Charge</td>
                                    <td>2% or Minimum USD 300</td>
                                    <td>1.5% or Minimum USD 250</td>
                                    <td></td>
                                    <td>Applicable for all subsequent partial shipments</td>
                                </tr>
                                <tr>
                                    <td>Shipment after expiry of PO and prior to PO issuance</td>
                                    <td>1)Within 10 days - 2% or Minimum USD 300 2)After 10 days - 3% or Minimum USD 500</td>
                                    <td>1)Within 10 days - 1% or Minimum USD 250 2)After 10 days - 2% or Minimum USD 400</td>
                                    <td></td>
                                    <td>This charge is applicable for shipment after expiry of PO or prior to issuance of PO. However, only if prior approval from NBE or the CEO.</td>
                                </tr>
                                <tr>
                                    <td>Handling charge of documents arrived after expiry date of PO</td>
                                    <td>1)Within 10 days - 2% or Minimum USD 300 2)After 10 days - 3% or Minimum USD 500</td>
                                    <td>1)Within 10 days - 1% or Minimum USD 250 2)After 10 days - 2.5% or Minimum USD 400</td>
                                    <td></td>
                                    <td>This charge is applicable on commercial invoice value for any documents received at our counter 11 days after expiry of LC. However, it applies for LC shipped within LC validity</td>
                                </tr>
                                <tr>
                                    <td>SWIFT</td>
                                    <td>USD 200</td>
                                    <td>USD 150</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Issuance of Delivery Order</td>
                                    <td>ETB 5000</td>
                                    <td>ETB 5000</td>
                                    <td></td>
                                    <td>Applicable upon request </td>
                                </tr>
                                <tr>
                                    <td>Duplicate Advice</td>
                                    <td>Birr 50 per ticket if transaction made within one year, Birr 100 per ticket if transaction made more than one year</td>
                                    <td>Birr 50 per ticket if transaction made within one year, Birr 100 per ticket if transaction made more than one year</td>
                                    <td></td>
                                    <td>Applicable up on request after document handed over</td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td colSpan={5}>2.2 Unpaid items returned</td>
                                </tr>
                                <tr>
                                    <td>Service charge</td>
                                    <td>USD 100</td>
                                    <td>USD 100</td>
                                    <td></td>
                                    <td>Applicable for CAD document returned</td>
                                </tr>
                                <tr>
                                    <td>SWIFT</td>
                                    <td>USD 100</td>
                                    <td>USD 100</td>
                                    <td></td>
                                    <td>Per SWIFT communication</td>
                                </tr>
                                <tr>
                                    <td>Courier charge</td>
                                    <td>per cost</td>
                                    <td>per cost</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td colSpan={5}>2.3 Unpaid items held in trust</td>
                                </tr>
                                <tr>
                                    <td>Acceptance bills of 12 months</td>
                                    <td>USD 25 per period</td>
                                    <td>USD 25 per period</td>
                                    <td></td>
                                    <td>Applicable for CAD documents on acceptance and held on trust  per period on beneficiary's account</td>
                                </tr>
                                <tr>
                                    <td>Sight documents aged over 3 months</td>
                                    <td>USD 30 per period</td>
                                    <td>USD 30 per period</td>
                                    <td></td>
                                    <td>Applicable for CAD documents on sight and held on trust  per period on beneficiary's account</td>
                                </tr>
                                <tr>
                                    <td>Courier charge</td>
                                    <td>per cost</td>
                                    <td>per cost</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}

                {dispaly === 3 && (
                    <div className={`${styles.history} animate__animated animate__bounceInUp`}>
                        <p className={styles.termsTitle}>3. Outgoing Transfer( Import and Invisible Payment)</p>
                        <table className={styles.container} style={{ width: '100%' }}>
                            <thead>
                                <tr className={styles.headerRowss}>
                                    <th>Description</th>
                                    <th>From Wegagen Bank</th>
                                    <th>From Retention & other FCY A/C</th>
                                    <th>From Diaspora A/C</th>
                                    <th>Rule for Application of period & Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className={styles.headerRow}>
                                    <td colSpan={5}>3. Outgoing Transfer( Import and Invisible Payment)</td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td colSpan={5}>3.1 Outstanding TT</td>
                                </tr>
                                <tr>
                                    <td>Service Charge </td>
                                    <td>4% or Minimum USD 250</td>
                                    <td>4% or Minimum USD 100</td>
                                    <td>4% or Minimum USD 100</td>
                                    <td>Applicable on transfer value</td>
                                </tr>
                                <tr>
                                    <td>SWIFT</td>
                                    <td>USD 100</td>
                                    <td>USD 50</td>
                                    <td>USD 50</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Amendment on transfer</td>
                                    <td>USD 50</td>
                                    <td>USD 50</td>
                                    <td>USD 50</td>
                                    <td></td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td colSpan={5}>3.2 Retransfer of Incoming Transfer</td>
                                </tr>
                                <tr>
                                    <td>Service Charge </td>
                                    <td>1% of Returned amount</td>
                                    <td>1% of Returned amount</td>
                                    <td>1% of Returned amount</td>
                                    <td>Applicable on retransfer(Amount not credited to account i.e. Pending) above USD 100</td>
                                </tr>
                                <tr>
                                    <td>SWIFT</td>
                                    <td>USD 35</td>
                                    <td>USD 35</td>
                                    <td>USD 35</td>
                                    <td></td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td colSpan={5}>3.3 Issuance of Duplicate advise  on incoming transfer</td>
                                </tr>
                                <tr>
                                    <td>Duplicate Advice </td>
                                    <td>Birr 50 per ticket </td>
                                    <td>Birr 50 per ticket </td>
                                    <td>Birr 50 per ticket</td>
                                    <td>Applicable up on request after document handed over</td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td colSpan={5}>3.4 Import Freight Payment</td>
                                </tr>
                                <tr>
                                    <td>Service charge for sea freight </td>
                                    <td>4% or Minimum USD 150 </td>
                                    <td>4% or Minimum USD 150 </td>
                                    <td></td>
                                    <td>Only applied based on freight invoice value</td>
                                </tr>
                                <tr>
                                    <td>NBE exchange payable </td>
                                    <td>2.5% in LCY account </td>
                                    <td>free </td>
                                    <td></td>
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
                                    <th>Description</th>
                                    <th>From Wegagen Bank</th>
                                    <th>From Retention & other FCY A/C</th>
                                    <th>From Diaspora A/C</th>
                                    <th>Rule for Application of period & Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className={styles.headerRow}>
                                    <td colSpan={5}>4. Export Letter of Credit (L/C)</td>
                                </tr>
                                <tr>
                                    <td>Export Letter of Credit (L/C) Advising Fee to other banks</td>
                                    <td>1000 ETB</td>
                                    <td>1000 ETB</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Amendement Export LC Advised to other banks</td>
                                    <td>1000 ETB</td>
                                    <td>1000 ETB</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                {/* <tr>
                                    <td>Cancelation fee for Export LC to other banks</td>
                                    <td>1500ETB</td>
                                    <td>1500ETB</td>
                                    <td></td>
                                    <td></td>
                                </tr> */}
                                <tr>
                                    <td>Courier Charge</td>
                                    <td>PER CHARGE</td>
                                    <td>PER CHARGE</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}


                {dispaly === 5 && (
                    <div className={`${styles.history} animate__animated animate__bounceInUp`}>
                        <p className={styles.termsTitle}>5. Cash Notes Sales</p>
                        <table className={styles.container} style={{ width: '100%' }}>
                            <thead>
                                <tr className={styles.headerRowss}>
                                    <th>Description</th>
                                    <th>From Wegagen Bank</th>
                                    <th>From Retention & other FCY A/C</th>
                                    <th>From Diaspora A/C</th>
                                    <th>Rule for Application of period & Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className={styles.headerRow}>
                                    <td colSpan={5}>5. Cash Notes Sales</td>
                                </tr>
                                <tr>
                                    <td>Service charge from Birr A/C</td>
                                    <td>4% for customers having LCY account Or Minimum 1500 Birr Free for WB staff</td>
                                    <td>3.5%</td>
                                    <td>3.5%</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}


                {dispaly === 6 && (
                    <div className={`${styles.history} animate__animated animate__bounceInUp`}>
                        <p className={styles.termsTitle}>6. Inward IBC against suppliers credits</p>
                        <table className={styles.container} style={{ width: '100%' }}>
                            <thead>
                                <tr className={styles.headerRowss}>
                                    <th>Description</th>
                                    <th>From Wegagen Bank</th>
                                    <th>From Retention & other FCY A/C</th>
                                    <th>From Diaspora A/C</th>
                                    <th>Rule for Application of period & Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className={styles.headerRow}>
                                    <td colSpan={5}>6. Inward IBC against suppliers credits</td>
                                </tr>
                                <tr>
                                    <td>Service Charge </td>
                                    <td>4% Per Period or Minimum USD 250</td>
                                    <td>4% Per Period or Minimum USD 250</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Extension of Purchase order</td>
                                    <td>2.5% Per Period or Minimum USD 250</td>
                                    <td>1.5% Per Period or Minimum USD 250</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}

                {dispaly === 7 && (
                    <div className={`${styles.history} animate__animated animate__bounceInUp`}>
                        <p className={styles.termsTitle}>5. Other charges</p>
                        <table className={styles.container} style={{ width: '100%' }}>
                            <thead>
                                <tr className={styles.headerRowss}>
                                    <th>Description</th>
                                    <th>From Wegagen Bank</th>
                                    <th>From Retention & other FCY A/C</th>
                                    <th>From Diaspora A/C</th>
                                    <th>Rule for Application of period & Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className={styles.headerRow}>
                                    <td colSpan={5}>7. Other charges</td>
                                </tr>
                                <tr>
                                    <td>Balance confirmation</td>
                                    <td>50 ETB </td>
                                    <td>50 ETB </td>
                                    <td>50 ETB </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Photocopy charge</td>
                                    <td>30 FLAT FOR FULL DOC</td>
                                    <td>30 FLAT FOR FULL DOC</td>
                                    <td>30 per page</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Investigation charge (payment, etc)</td>
                                    <td>250 ETB</td>
                                    <td>250 ETB</td>
                                    <td>250 ETB</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Investigation charge by courier (payment, etc)</td>
                                    <td>PER COST</td>
                                    <td>PER COST</td>
                                    <td>PER COST</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Change of Mode of Pyt</td>
                                    <td>2000 ETB</td>
                                    <td>2000 ETB</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Change of mode of Freight</td>
                                    <td>5000 ETB</td>
                                    <td>5000 ETB</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Handling charge for Djibouti documents </td>
                                    <td>USD 3000</td>
                                    <td>2000 ETB</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Letter to whom it may concern </td>
                                    <td>500 ETB</td>
                                    <td>500 ETB</td>
                                    <td>500 ETB</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Permit Extention  </td>
                                    <td>2000 ETB per Period</td>
                                    <td>2000 ETB per Period</td>
                                    <td>2000 ETB per Period</td>
                                    <td></td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            {/* <div style={{ width: '80%', margin: 'auto', marginBottom: '50px' }}>
                <p style={{ textAlign: 'left', fontSize: '18px', color: 'black' }}>NB</p>
                <ul className="list-disc list-inside" style={{ textAlign: 'left', fontSize: '16px', color: 'black' }}>
                    <li>Outgoing transfer for tuition fee and other invisible payment for staff is free of charge</li>
                    <li>Supplier's credit payment is effected on 2 value date from settlement excluding non-working days</li>
                    <li>FCY account holders requesting freight payment, the associated service charge is collected in ETB as per the tariff</li>
                </ul>
            </div> */}

            <Footer />
        </>
    );
};

export default International_Terms_And_Tariffs;
