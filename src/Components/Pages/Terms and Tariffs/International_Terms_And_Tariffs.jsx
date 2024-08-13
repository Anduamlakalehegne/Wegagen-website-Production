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
                        <p onClick={() => { handleClick(5, showMenu) }} style={dispaly === 5 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>5. Cash Notes Sales</p>
                        <p onClick={() => { handleClick(6, showMenu) }} style={dispaly === 6 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>6. Other charges</p>
                        <p onClick={() => { handleClick(7, showMenu) }} style={dispaly === 7 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>Corporate Social Responsibility</p>
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
                    <div className={`animate__animated animate__fadeInLeft ${styles.shortInfo}`} style={{ height: '400px' }}>
                        <p onClick={() => handleNavigationClick(1)} style={dispaly === 1 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 1. Import Letter of Credit (L/C) </p>
                        <p onClick={() => handleNavigationClick(2)} style={dispaly === 2 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 2. Cash Against Document (CAD) </p>
                        <p onClick={() => handleNavigationClick(3)} style={dispaly === 3 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 3. Outgoing and incoming transfer </p>
                        <p onClick={() => handleNavigationClick(4)} style={dispaly === 4 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 4. Export Letter of Credit (L/C) </p>
                        <p onClick={() => handleNavigationClick(5)} style={dispaly === 5 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 5. Cash Notes Sales </p>
                        <p onClick={() => handleNavigationClick(6)} style={dispaly === 6 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 6. Other charges </p>
                    </div>
                </div>


                {dispaly == 1 ?

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
                                    <td>Opening Commission</td>
                                    <td>4.5% USD 250 Minimum</td>
                                    <td>2.5% Minimum USD 250</td>
                                    <td>2.5% Minimum USD 250</td>
                                    <td>Applicable once only up on issuance/opening of L/C. It does not include extension </td>
                                </tr>
                                <tr>
                                    <td>1.1.2</td>
                                    <td>Service Charge Foreign </td>
                                    <td>5.0% per quarter & minimum of USD 300</td>
                                    <td>3.5% Minimum USD 250</td>
                                    <td>3.5% Minimum USD 250</td>
                                    <td>Applicable every quarter(90 days)On L/C outstanding Amount</td>
                                </tr>
                                <tr>
                                    <td>1.1.3</td>
                                    <td>Confirmation Commission (if any) </td>
                                    <td>3.5% per quarter & minimum of USD 300</td>
                                    <td>Confirmation Commission (if any)</td>
                                    <td>2% per quarter & minimum of USD 300 </td>
                                    <td>Applicable every quarter(90 days)on L/C outstanding Amount</td>
                                </tr>
                                <tr>
                                    <td>1.1.4</td>
                                    <td>Swift</td>
                                    <td>USD 200</td>
                                    <td>USD 200</td>
                                    <td>USD 200</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>1.1.5</td>
                                    <td>Exchange Payable</td>
                                    <td>2.5% for L/CY A/C</td>
                                    <td>Free</td>
                                    <td>Free</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>1.1.6</td>
                                    <td>Additional Service Charge (If the L/C is opened with Margin)</td>
                                    <td>For 30% Margin - 4% per quarter For 50% Margin- 3.5% per quarter</td>
                                    <td></td>
                                    <td></td>
                                    <td>Applicable every quarter(90 days) on L/C outstanding unpaid Margin</td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td>1.2</td>
                                    <td colSpan={5}>Extension of Letter of Credit (L/C)</td>

                                </tr>
                                <tr>
                                    <td>1.2.1</td>
                                    <td>Extension commission</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>

                                </tr>
                                <tr>
                                    <td>1.2.1.1</td>
                                    <td>Extension Commission beyond the period(involving additional period) before expiry date  including Service Chargen</td>
                                    <td>9% per quarter part thereof minimum of USD 150</td>
                                    <td>5.5% per quarter part thereof minimum of USD 150</td>
                                    <td>6.25% per quarter part thereof minimum of USD 150</td>
                                    <td>Applicable for extension of expiry date of L/C for additional period beyond 90 days in each quarter </td>
                                </tr>
                                <tr>
                                    <td>1.2.1.2</td>
                                    <td>Extension Commission beyond the period(involving additional period) after expiry date including Service Charge </td>
                                    <td>9.5% per quarter part thereof minimum of USD 200</td>
                                    <td>6% per quarter part thereof minimum of USD 200</td>
                                    <td>7.25% per quarter part thereof minimum of USD 200</td>
                                    <td>Applicable for extension of expiry date of L/C for additional period beyond 90 days in each quarter</td>
                                </tr>
                                <tr>
                                    <td>1.2.1.3</td>
                                    <td>Extension within the period of L/C including Service Charge</td>
                                    <td>8.5% min USD 300</td>
                                    <td>7% min USD 300</td>
                                    <td>7% min USD 300</td>
                                    <td>Applicable for either extension of latest shipment dateand/or expiry date of L/C within the period for which chargesare collected (same period). </td>
                                </tr>
                                <tr>
                                    <td>1.2.2</td>
                                    <td>Confirmation Commission</td>
                                    <td>3.5% per quarter & minimum of USD 300</td>
                                    <td>2% per quarter & minimum of 200</td>
                                    <td>2% per quarter & minimum of USD 300 </td>
                                    <td>Applicable every quarter(90 days)on L/C outstanding Amount</td>
                                </tr>
                                <tr>
                                    <td>1.2.3</td>
                                    <td>SWIFT</td>
                                    <td>USD 50</td>
                                    <td>USD 25</td>
                                    <td>USD 25</td>
                                    <td>Applicable for any outgoing SWIFT message except bank to bank communication</td>
                                </tr>
                                <tr>
                                    <td>1.2.4</td>
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
                                    <td>free</td>
                                    <td>free</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>1.3.2</td>
                                    <td>Service Charge Foreign</td>
                                    <td>10% per quarter & minimum of USD 450</td>
                                    <td>6% Minimum USD 250</td>
                                    <td>6% Minimum USD 250</td>
                                    <td>Applicable every quarter(90 days) on increased L/C Amount</td>
                                </tr>
                                <tr>
                                    <td>1.3.3</td>
                                    <td>Swift</td>
                                    <td>USD 50</td>
                                    <td>USD 25</td>
                                    <td>USD 25</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>1.3.4</td>
                                    <td>Confirmation Commission</td>
                                    <td>3.5% per quarter & minimum of USD 300</td>
                                    <td>2% per quarter & minimum of 200</td>
                                    <td>2% per quarter & minimum of 200</td>
                                    <td>Applicable every quarter(90 days)On L/C Increased Amount</td>
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
                                <tr className={styles.subHeaderRow}>
                                    <td >1.5.1</td>
                                    <td colSpan={5}>L/C settled with Opened Value</td>
                                </tr>
                                <tr>
                                    <td>1.5.1.1</td>
                                    <td>Swift for settlement</td>
                                    <td>USD 100</td>
                                    <td>USD 50</td>
                                    <td>USD 50</td>
                                    <td>Applicable for outgoing L/C settlement swift Messages 799 & 999</td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td>1.5.2</td>
                                    <td colSpan={5}>L/C settled with Excess Drawing up on receipt of Shipping documents</td>
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
                                    <td>Service Charge Foreign</td>
                                    <td>10% per quarter & minimum of USD 600</td>
                                    <td>5% Minimum USD 250</td>
                                    <td>5% Minimum USD 250</td>
                                    <td>Applicable only on excess overdrawn amount. However, if excess amount is less than USD 600 or equivalent in other currency, minimum charge is waived</td>
                                </tr>
                                <tr>
                                    <td>1.5.2.3</td>
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
                                    <td rowSpan={4}>1.6.1</td>
                                    <td rowSpan={4}>Partial Shipment Charge</td>
                                    <td>For the 1st partial shipment - Free</td>
                                    <td>for the 1st partial shipment - Free</td>
                                    <td>for the 1st partial shipment - Free</td>
                                    <td rowSpan={4}>This partial shipment charge is waived only for the first partial shipment and applicable for all subsequent partial shipments</td>
                                </tr>
                                <tr>
                                    <td>For 2nd partial Shipment - 1% of commercial invoice value or minimum of USD 150</td>
                                    <td>For 2nd partial Shipment - 1% of commercial invoice value or minimum of USD 150</td>
                                    <td>For 2nd partial Shipment - 1% of commercial invoice value or minimum of USD 150</td>
                                </tr>
                                <tr>

                                    <td>For 3rd & 4th partial shipment - 2.5% of commercial invoice value or minimum of USD 200</td>
                                    <td>For 3rd & 4th partial shipment - 2.5% of commercial invoice value or minimum of USD 200</td>
                                    <td>For 3rd & 4th partial shipment - 2.5% of commercial invoice value or minimum of USD 200</td>
                                </tr>
                                <tr>

                                    <td>For 5th & Beyond - 4% of commercial invoice value or minimum of USD 250</td>
                                    <td>For 5th & Beyond - 4% of commercial invoice value or minimum of USD 250</td>
                                    <td>For 5th & Beyond - 4% of commercial invoice value or minimum of USD 250</td>
                                </tr>
                                <tr>
                                    <td rowSpan={2}>1.6.2</td>
                                    <td rowSpan={2}>Shipment after expiry of L/C & prior to L/C issuance </td>
                                    <td>Within 10 days  - 2.5%</td>
                                    <td>Within 10 days  - 2.5%</td>
                                    <td>Within 10 days  - 2.5%</td>
                                    <td rowSpan={2}>This charge is applicable for shipment after expiry of L/C or prior to issuance of L/C. However, prior approval from NBE or the CEO is required.</td>
                                </tr>
                                <tr>
                                    <td>For &gt; 10 days  - 6.5% min of USD 500</td>
                                    <td>For &gt; 10 days  - 5.5% min of USD 500</td>
                                    <td>For &gt; 10 days  - 6.5% min of USD 500</td>
                                </tr>
                                <tr>
                                    <td rowSpan={3}>1.6.3</td>
                                    <td rowSpan={3}>Handling Charges of documents  arrived after expiry date of L/C </td>
                                    <td>Within 10 days - Free</td>
                                    <td>Within 10 days - Free</td>
                                    <td>Within 10 days - Free</td>
                                    <td rowSpan={3}>This charge is applicable on commercial invoice value for any documents received at our counter 11 days after expiry of L/C. However,it applies for L/C shipped within L/C validity.</td>
                                </tr>
                                <tr>
                                    <td>From 11 - 30 days  - 3.5% min USD 150</td>
                                    <td>From 11 - 30 days  - 3% min USD 150</td>
                                    <td>From 11 - 30 days  - 3.5% min USD 150</td>
                                </tr>
                                <tr>
                                    <td>For &gt; 30 days - 4.5% min USD 250</td>
                                    <td>For &gt; 30 days - 4% min USD 250</td>
                                    <td>For &gt; 30 days - 4.5% min USD 250</td>
                                </tr>
                                <tr>
                                    <td>1.6.4</td>
                                    <td>Custody Charge</td>
                                    <td>USD 125 per month </td>
                                    <td>USD 100 per month  </td>
                                    <td>USD 100 per month  </td>
                                    <td>This charge is applied for documents held at our custody beyond 30 days</td>
                                </tr>
                                <tr>
                                    <td>1.6.5</td>
                                    <td>Discrepancy Charge</td>
                                    <td>USD 100 or equivalent in other currency per document presentation on beneficiary account</td>
                                    <td>USD 100 or equivalent in other currency per document presentation on beneficiary account</td>
                                    <td>USD 100 or equivalent in other currency per document presentation on beneficiary account</td>
                                    <td>This charge is applied per covering letter of the presenting bank</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    : ""}

                {dispaly == 2 ?

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
                                    <td colSpan={5}>Cash Against Document (CAD) </td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td>2.1</td>
                                    <td colSpan={5}>Upon purchase order approval </td>
                                </tr>
                                <tr>
                                    <td>2.1.1</td>
                                    <td>Purchase order approval commission</td>
                                    <td>8.9% min USD 250</td>
                                    <td>6% min USD 250</td>
                                    <td>6% min USD 250</td>
                                    <td>Applicable on approved purchased order proforma value</td>
                                </tr>
                                <tr>
                                    <td>2.1.2</td>
                                    <td>Purchase order amendment Charge</td>
                                    <td>USD 150</td>
                                    <td>USD 100</td>
                                    <td>USD 100</td>
                                    <td>Applied for amendment except for amendments which are not allowed by NBE(supplier, description of goods, etc)</td>
                                </tr>
                                <tr>
                                    <td>2.1.3</td>
                                    <td>Purchase order extension commission before expiry</td>
                                    <td>9.5% per quarter & part thereof on outstanding purchase order min of USD150</td>
                                    <td>6% per quarter & part thereof on outstanding purchase order min of USD150</td>
                                    <td>6% per quarter & part thereof on outstanding purchase order min of USD150</td>
                                    <td>This charge applied if extension is requested and approved before expiry of the PO</td>
                                </tr>
                                <tr>
                                    <td>2.1.4</td>
                                    <td>Purchase order extension commission after expiry</td>
                                    <td>10% per quarter & part thereof on outstanding purchase order min of USD 150</td>
                                    <td>6.5% per quarter & part thereof on outstanding purchase order min of USD150</td>
                                    <td>6.5% per quarter & part thereof on outstanding purchase order min of USD150</td>
                                    <td>This charge applied if extension is requested after expiry of the PO</td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td>2.2</td>
                                    <td colSpan={5}>Upon Settlement of the documentary collection (IBC) </td>
                                </tr>
                                <tr>
                                    <td>2.2.1</td>
                                    <td>Exchange Payable </td>
                                    <td>2.5% for L/CY account</td>
                                    <td>free</td>
                                    <td>free</td>
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
                                    <td>Excess drawing (on invoice excess amount) if any</td>
                                    <td>11% per quarter & minimum of USD 600</td>
                                    <td>7% Minimum USD 250</td>
                                    <td>7% Minimum USD 250</td>
                                    <td>Applicable only on excess overdrawn amount. However, if excess amount is less than USD 600 or equivalent in other currency, minimum charge is waived</td>
                                </tr>
                                <tr>
                                    <td>2.2.5</td>
                                    <td>Inward Bills for collectionsdocument examination fee </td>
                                    <td>ETB 500 flat</td>
                                    <td>ETB 100 flat</td>
                                    <td>ETB 100 flat</td>
                                    <td></td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td>2.3</td>
                                    <td colSpan={5}>Settlement of IBC against suppliers credits </td>
                                </tr>
                                <tr>
                                    <td>2.3.1</td>
                                    <td>Service Charge</td>
                                    <td>9.5% min USD 250</td>
                                    <td>6% min USD 250</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>2.3.2</td>
                                    <td>Extension of Purchase Order</td>
                                    <td>8% min USD 250</td>
                                    <td>1.5%</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td>2.4</td>
                                    <td colSpan={5}> Other CAD Charges </td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td>2.4.1</td>
                                    <td colSpan={5}> Unpaid items returned </td>
                                </tr>
                                <tr>
                                    <td>2.4.1.1</td>
                                    <td>Service charge</td>
                                    <td>USD 100</td>
                                    <td>USD 100</td>
                                    <td>USD 100</td>
                                    <td>Applicable for CAD document returned</td>
                                </tr>
                                <tr>
                                    <td>2.4.1.2</td>
                                    <td>SWIFT</td>
                                    <td>USD 50</td>
                                    <td>USD 50</td>
                                    <td>USD 50</td>
                                    <td>Per SWIFT communication</td>
                                </tr>
                                <tr>
                                    <td>2.4.1.3</td>
                                    <td>Protest charge</td>
                                    <td>USD 20</td>
                                    <td>USD 20</td>
                                    <td>USD 20</td>
                                    <td>Applicable for only CAD documents returned by rejection</td>
                                </tr>
                                <tr>
                                    <td>2.4.1.4</td>
                                    <td>Courier charge</td>
                                    <td>per cost</td>
                                    <td>per cost</td>
                                    <td>per cost</td>
                                    <td></td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td>2.4.2</td>
                                    <td colSpan={5}> Unpaid items held in trust  </td>
                                </tr>
                                <tr>
                                    <td>2.4.2.1</td>
                                    <td>Acceptance bills of 12 months</td>
                                    <td>USD 25</td>
                                    <td>USD 25</td>
                                    <td>USD 25</td>
                                    <td>Applicable for CAD documents on acceptance and held on trust per period on beneficiary's account</td>
                                </tr>
                                <tr>
                                    <td>2.4.2.2</td>
                                    <td>Sight documents aged over 3 months</td>
                                    <td>USD 30 per period & part thereof</td>
                                    <td>USD 30 per period & part thereof</td>
                                    <td>USD 30 per period & part thereof</td>
                                    <td>Applicable for CAD documents on sight and held on trust per period on beneficiary's account</td>
                                </tr>
                                <tr>
                                    <td>2.4.2.3</td>
                                    <td>Protest charge</td>
                                    <td>USD 100</td>
                                    <td>USD 100</td>
                                    <td>USD 100</td>
                                    <td>Applicable for only CAD documents held on trust on beneficiaries account</td>
                                </tr>
                                <tr>
                                    <td>2.4.2.4</td>
                                    <td>Courier charge</td>
                                    <td>per cost</td>
                                    <td>per cost</td>
                                    <td>per cost</td>
                                    <td></td>
                                </tr>

                                <tr className={styles.subHeaderRow}>
                                    <td>2.4.3</td>
                                    <td colSpan={5}> Other charges  </td>
                                </tr>
                                <tr>
                                    <td rowSpan={4}>2.4.3.1</td>
                                    <td rowSpan={4}>Partial Shipment Charge</td>
                                    <td>For the 1st partial shipment - Free</td>
                                    <td>for the 1st partial shipment - Free</td>
                                    <td>for the 1st partial shipment - Free</td>
                                    <td rowSpan={4}>This partial shipment charge is waived only for the first partial and applicable for all subsequent partial shipments</td>
                                </tr>
                                <tr>
                                    <td>For 2nd partial Shipment - 1% of commercial invoice value or minimum of USD 150</td>
                                    <td>For 2nd partial Shipment - 1% of commercial invoice value or minimum of USD 150</td>
                                    <td>For 2nd partial Shipment - 1% of commercial invoice value or minimum of USD 150</td>
                                </tr>
                                <tr>

                                    <td>For 3rd & 4th partial shipment - 2.5% of commercial invoice value or minimum of USD 200</td>
                                    <td>For 3rd & 4th partial shipment - 2.5% of commercial invoice value or minimum of USD 200</td>
                                    <td>For 3rd & 4th partial shipment - 2.5% of commercial invoice value or minimum of USD 200</td>
                                </tr>
                                <tr>

                                    <td>For 5th & Beyond - 4% of commercial invoice value or minimum of USD 250</td>
                                    <td>For 5th & Beyond - 4% of commercial invoice value or minimum of USD 250</td>
                                    <td>For 5th & Beyond - 4% of commercial invoice value or minimum of USD 250</td>
                                </tr>
                                <tr>
                                    <td rowSpan={2}>2.4.3.2</td>
                                    <td rowSpan={2}>Shipment after expiry of PO & prior to PO issuance </td>
                                    <td>Within 10 days  - 2.5%</td>
                                    <td>Within 10 days  - 2.5%</td>
                                    <td>Within 10 days  - 2.5%</td>
                                    <td rowSpan={2}>This charge is applicable for shipment after expiry of PO or prior to issuance of PO. However, only if prior approval from NBE or the CEO.</td>
                                </tr>
                                <tr>
                                    <td>For &gt;10 days  - 6.5% min of USD 500</td>
                                    <td>For &gt;10 days  - 5.5% min of USD 500</td>
                                    <td>For &gt; 10 days  - 6.5% min of USD 500</td>
                                </tr>
                                <tr>
                                    <td rowSpan={3}>2.4.3.3</td>
                                    <td rowSpan={3}>Handling charge of documents arrived after expiry date of PO </td>
                                    <td>Within 10 days - Free</td>
                                    <td>Within 10 days - Free</td>
                                    <td>Within 10 days - Free</td>
                                    <td rowSpan={3}>This charge is applicable on commercial invoice value for any documents received at our counter 11 days after expiry of L/C. However,it applies for L/C shipped within L/C validity</td>
                                </tr>
                                <tr>
                                    <td>From 11 - 30 days  - 3.5% min USD 150</td>
                                    <td>From 11 - 30 days  - 3% min USD 150</td>
                                    <td>From 11 - 30 days  - 3.5% min USD 150</td>
                                </tr>
                                <tr>
                                    <td>For &gt; 30 days - 4.5% min USD 250</td>
                                    <td>For &gt; 30 days - 4% min USD 250</td>
                                    <td>For &gt; 30 days - 4.5% min USD 250</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    : ""}

                {dispaly == 3 ?

                    <div className={`${styles.history} animate__animated animate__bounceInUp`}>
                    <p className={styles.termsTitle}>3. Outgoing and incoming transfer </p>
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
                                    <td colSpan={5}> Outgoing and incoming transfer  </td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td>3.1</td>
                                    <td colSpan={5}> Outstanding (TT)  </td>
                                </tr>
                                <tr>
                                    <td>3.1.1</td>
                                    <td>Service Charge</td>
                                    <td>13% of transfer value min USD 150</td>
                                    <td>6% Minimum USD 250</td>
                                    <td>6% Minimum USD 250</td>
                                    <td rowSpan={2}>Applicable on transfer value</td>
                                </tr>
                                <tr>
                                    <td>3.1.2</td>
                                    <td>Exchange commission to NBE</td>
                                    <td>2.5% on L/CY account</td>
                                    <td>free</td>
                                    <td>free</td>
                                    {/* <td></td> */}
                                </tr>
                                <tr>
                                    <td>3.1.3</td>
                                    <td>SWIFT</td>
                                    <td>USD 50</td>
                                    <td>USD 50</td>
                                    <td>USD 50</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>3.1.4</td>
                                    <td>Amendment on transfer</td>
                                    <td>USD 80</td>
                                    <td>USD 80</td>
                                    <td>USD 80</td>
                                    <td></td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td>3.2</td>
                                    <td colSpan={5}>  Retransfer of incoming transfer   </td>
                                </tr>
                                <tr>
                                    <td>3.2.1</td>
                                    <td>Service charge</td>
                                    <td>
                                        <ul>
                                            <li>- Free - for &lt; 100 USD or equivalent</li>
                                            <li>- 2% - from 200 to USD 10,000</li>
                                            <li>- 2.5% above 10,000 USD or equivalent</li>
                                        </ul>
                                    </td>
                                    <td>
                                        <ul>
                                            <li>- Free - for &lt;100 USD or equivalent</li>
                                            <li>- 1.5% - from 200 to USD 10,000</li>
                                            <li>- 2% above 10,000 USD or equivalent</li>
                                        </ul>
                                    </td>
                                    <td>
                                        <ul>
                                            <li>- Free - for &lt;100 USD or equivalent</li>
                                            <li>- 1.5% - from 200 to USD 10,000</li>
                                            <li>- 2% above 10,000 USD or equivalent</li>
                                        </ul>
                                    </td>
                                    <td>Applicable on retransfer above USD 100</td>
                                </tr>
                                <tr>
                                    <td>3.2.2</td>
                                    <td>SWIFT</td>
                                    <td>USD 35</td>
                                    <td>USD 35</td>
                                    <td>USD 35</td>
                                    <td></td>
                                </tr>
                                <tr className={styles.subHeaderRow}>
                                    <td>3.3</td>
                                    <td colSpan={5}> Import Freight Payment </td>
                                </tr>
                                <tr>
                                    <td>3.3.1</td>
                                    <td>Service charge for sea freight</td>
                                    <td>9.5% min of USD 150</td>
                                    <td>4% min of USD 150</td>
                                    <td>4% min of USD 150</td>
                                    <td>Only applied based on freight invoice value</td>
                                </tr>
                                <tr>
                                    <td>3.3.2</td>
                                    <td>NBE exchange payable</td>
                                    <td>2.5% in L/CY account</td>
                                    <td>free</td>
                                    <td>free</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>3.3.3</td>
                                    <td>Service charge for land freight</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    : ""}

                {dispaly == 4 ?

                    <div className={`${styles.history} animate__animated animate__bounceInUp`}>
                    <p className={styles.termsTitle}>4. Export Letter of Credit (L/C) </p>
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
                                    <td colSpan={5}> Export Letter of Credit (L/C) </td>
                                </tr>
                                <tr>
                                    <td>4.1</td>
                                    <td>Export Letter of Credit (L/C) Advising Fee to other banks</td>
                                    <td>1,000 ETB</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>4.2</td>
                                    <td>Amendment Export L/C Advised to other banks</td>
                                    <td>1,000 ETB</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>4.3</td>
                                    <td>Courier Charge</td>
                                    <td>PER CHARGE</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    : ""}

                {dispaly == 5 ?

                    <div className={`${styles.history} animate__animated animate__bounceInUp`}>
                    <p className={styles.termsTitle}>5. Cash Notes Sales </p>
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
                                    <td colspan={5}>Cash Notes Sales</td>
                                </tr>
                                <tr>
                                    <td>5.1</td>
                                    <td>Service charge from Birr A/C</td>
                                    <td>10.5% for customers having L/CY account min 1500 Birr <br /> Free for WB staff</td>
                                    <td>3.50%</td>
                                    <td>3.50%</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    : ""}

                {dispaly == 6 ?

                    <div className={`${styles.history} animate__animated animate__bounceInUp`}>
                    <p className={styles.termsTitle}>6. Other charges </p>
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
                                    <td>6</td>
                                    <td colspan={5}>Other charges</td>
                                </tr>
                                <tr>
                                    <td>6.1</td>
                                    <td>Balance confirmation</td>
                                    <td>50 ETB</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>6.2</td>
                                    <td>Photocopy charge</td>
                                    <td>Birr 10/page</td>
                                    <td>Birr 10/page</td>
                                    <td>Birr 10/page</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>6.3</td>
                                    <td>Investigation (payment, etc.)</td>
                                    <td>250 ETB</td>
                                    <td>250 ETB</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>6.4</td>
                                    <td>Investigation payment by courier (payment, etc.)</td>
                                    <td>PER COST</td>
                                    <td>PER COST</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>6.5</td>
                                    <td>Change of Mode of Payment</td>
                                    <td>2000 ETB</td>
                                    <td>2000 ETB</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>6.6</td>
                                    <td>Change of mode of Freight</td>
                                    <td>5000 ETB</td>
                                    <td>5000 ETB</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>6.7</td>
                                    <td>Permit extension</td>
                                    <td>ETB 2,000</td>
                                    <td>ETB 2,000</td>
                                    <td>ETB 2,000</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>6.8</td>
                                    <td>Permit split for TT</td>
                                    <td>ETB 2,000</td>
                                    <td>ETB 2,000</td>
                                    <td>ETB 2,000</td>
                                    <td>Applicable for request after document handed over</td>
                                </tr>
                                <tr>
                                    <td>6.9</td>
                                    <td>Issuance of Delivery Order</td>
                                    <td>ETB 5,000</td>
                                    <td>ETB 5,000</td>
                                    <td>ETB 5,000</td>
                                    <td>Applicable upon request</td>
                                </tr>
                                <tr>
                                    <td>6.10</td>
                                    <td>Duplicate Advice</td>
                                    <td>Birr 50 per ticket if transaction made within one year, Birr 500 per ticket if transaction made more than one year</td>
                                    <td>Birr 50 per ticket if transaction made within one year, Birr 500 per ticket if transaction made more than one year</td>
                                    <td>Birr 50 per ticket if transaction made within one year, Birr 500 per ticket if transaction made more than one year</td>
                                    <td>Applicable up on request after document handed over</td>
                                </tr>
                                <tr>
                                    <td>6.11</td>
                                    <td>IBC document collected from client/supplier directly</td>
                                    <td>USD 100</td>
                                    <td>USD 100</td>
                                    <td>USD 100</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>6.12</td>
                                    <td>Small item Export permit issuance</td>
                                    <td>USD 50</td>
                                    <td>USD 50</td>
                                    <td>USD 50</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>6.13</td>
                                    <td>Swift Authentication fee</td>
                                    <td>Birr 30/ Full Document</td>
                                    <td>Birr 30/ Full Document</td>
                                    <td>Birr 30/ Full Document</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    : ""}

            </div>

            <div style={{ width: '80%', margin: 'auto', marginBottom: '50px' }}>
                <p style={{ textAlign: 'left', fontSize: '18px', color: 'black' }}>NB</p>
                <ul class="list-disc list-inside" style={{ textAlign: 'left', fontSize: '16px', color: 'black' }}>
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