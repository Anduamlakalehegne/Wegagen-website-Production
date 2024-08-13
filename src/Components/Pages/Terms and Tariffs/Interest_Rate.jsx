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

const Interest_Rate = () => {

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
                        <p onClick={() => { handleClick(1, showMenu) }} style={dispaly === 1 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>1. Agriculture</p>
                        <p onClick={() => { handleClick(2, showMenu) }} style={dispaly === 2 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>2. Manufacturing</p>
                        <p onClick={() => { handleClick(3, showMenu) }} style={dispaly === 3 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>3. Construction Bridge</p>
                        <p onClick={() => { handleClick(4, showMenu) }} style={dispaly === 4 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>4. Building Construction</p>
                        <p onClick={() => { handleClick(5, showMenu) }} style={dispaly === 5 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>5. Miscellaneous DTS</p>
                        <p onClick={() => { handleClick(6, showMenu) }} style={dispaly === 6 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>6. Hotel & Tourism</p>
                        <p onClick={() => { handleClick(7, showMenu) }} style={dispaly === 7 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>7. Wholesale & Retail Trade</p>
                        <p onClick={() => { handleClick(8, showMenu) }} style={dispaly === 8 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>8. Health Service</p>
                        <p onClick={() => { handleClick(9, showMenu) }} style={dispaly === 9 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>9. Transport Service </p>
                        <p onClick={() => { handleClick(10, showMenu) }} style={dispaly === 10 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>10. Transport Vehicle</p>
                        <p onClick={() => { handleClick(11, showMenu) }} style={dispaly === 11 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>11. Loan Type/Period/Bank</p>
                        <p onClick={() => { handleClick(12, showMenu) }} style={dispaly === 12 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>12. Automobile</p>
                        <p onClick={() => { handleClick(13, showMenu) }} style={dispaly === 13 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>13. Consumer Loans </p>
                        <p onClick={() => { handleClick(14, showMenu) }} style={dispaly === 14 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>14. Mortgage</p>
                        <p onClick={() => { handleClick(15, showMenu) }} style={dispaly === 15 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>15. Import </p>
                        <p onClick={() => { handleClick(16, showMenu) }} style={dispaly === 16 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>16. Export T/L</p>
                        <p onClick={() => { handleClick(16, showMenu) }} style={dispaly === 17 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>17. Advance Against Import Bills</p>
                        <p onClick={() => { handleClick(16, showMenu) }} style={dispaly === 18 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>18. Advance Against Export Bills</p>
                        {/* <p onClick={() => { handleClick(16, showMenu) }} style={dispaly === 19 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>19. Interest Rates for Loans</p>
                        <p onClick={() => { handleClick(16, showMenu) }} style={dispaly === 20 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>20. Interest Rates for Loans</p> */}
                        <p onClick={() => { handleClick(16, showMenu) }} style={dispaly === 21 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>21. Pre-shipment (ECG)</p>
                        <p onClick={() => { handleClick(16, showMenu) }} style={dispaly === 22 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>22. Warehouse Receipt Financing</p>
                        <p onClick={() => { handleClick(16, showMenu) }} style={dispaly === 23 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>23. Micro Finance Institutions</p>
                        <p onClick={() => { handleClick(16, showMenu) }} style={dispaly === 24 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>24. Overdrawal</p>
                        <p onClick={() => { handleClick(16, showMenu) }} style={dispaly === 25 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>25. Over Draft</p>
                        <p onClick={() => { handleClick(16, showMenu) }} style={dispaly === 26 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>26. Loans Against Cash and Cash Substitutes</p>
                        <p onClick={() => { handleClick(16, showMenu) }} style={dispaly === 27 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>27. Loans on Clean Basis</p>
                        <p onClick={() => { handleClick(16, showMenu) }} style={dispaly === 28 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>28. Revised Lending rate for Diaspora Loan</p>
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

            <div className={styles.establishment}>

                <p className={styles.aboutUsMenu} onClick={() => { menutoggle() }} ><MdMenuOpen style={{ fontSize: '30px' }} /></p>

                <div className={styles.leftNavBars}>
                    <div className={`animate__animated animate__fadeInLeft ${styles.shortInfo}`} style={{ height: '1100px' }}>
                        <p onClick={() => handleNavigationClick(1)} style={dispaly === 1 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 1. Agriculture </p>
                        <p onClick={() => handleNavigationClick(2)} style={dispaly === 2 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 2. Manufacturing </p>
                        <p onClick={() => handleNavigationClick(3)} style={dispaly === 3 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 3. Construction Bridge </p>
                        <p onClick={() => handleNavigationClick(4)} style={dispaly === 4 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 4. Building Construction </p>
                        <p onClick={() => handleNavigationClick(5)} style={dispaly === 5 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 5. Miscellaneous DTS </p>
                        <p onClick={() => handleNavigationClick(6)} style={dispaly === 6 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 6. Hotel & Tourism </p>
                        <p onClick={() => handleNavigationClick(7)} style={dispaly === 7 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 7. Wholesale & Retail Trade </p>
                        <p onClick={() => handleNavigationClick(8)} style={dispaly === 8 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 8. Health Service </p>
                        <p onClick={() => handleNavigationClick(9)} style={dispaly === 9 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 9. Transport Service </p>
                        <p onClick={() => handleNavigationClick(10)} style={dispaly === 10 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 10. Transport Vehicle </p>
                        <p onClick={() => handleNavigationClick(11)} style={dispaly === 11 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 11. Loan Type/Period/Bank </p>
                        <p onClick={() => handleNavigationClick(12)} style={dispaly === 12 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 12. Automobile </p>
                        <p onClick={() => handleNavigationClick(13)} style={dispaly === 13 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 13. Consumer Loans </p>
                        <p onClick={() => handleNavigationClick(14)} style={dispaly === 14 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 14. Mortgage </p>
                        <p onClick={() => handleNavigationClick(15)} style={dispaly === 15 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 15. Import </p>
                        <p onClick={() => handleNavigationClick(16)} style={dispaly === 16 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 16. Export T/L </p>
                        <p onClick={() => handleNavigationClick(17)} style={dispaly === 17 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 17. Advance Against Import Bills</p>
                        <p onClick={() => handleNavigationClick(18)} style={dispaly === 18 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 18. Advance Against Export Bills </p>
                        {/* <p onClick={() => handleNavigationClick(19)} style={dispaly === 19 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 19. Interest Rates for Loans </p>
                        <p onClick={() => handleNavigationClick(20)} style={dispaly === 20 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 20. Interest Rates for Loans </p> */}
                        <p onClick={() => handleNavigationClick(21)} style={dispaly === 21 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 21. Pre-shipment (ECG) </p>
                        <p onClick={() => handleNavigationClick(22)} style={dispaly === 22 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 22. Warehouse Receipt Financing </p>
                        <p onClick={() => handleNavigationClick(23)} style={dispaly === 23 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 23. Micro Finance Institutions </p>
                        <p onClick={() => handleNavigationClick(24)} style={dispaly === 24 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 24. Overdrawal </p>
                        <p onClick={() => handleNavigationClick(25)} style={dispaly === 25 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 25. Over Draft </p>
                        <p onClick={() => handleNavigationClick(26)} style={dispaly === 26 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 26. Loans Against Cash and Cash Substitutes </p>
                        <p onClick={() => handleNavigationClick(27)} style={dispaly === 27 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 27. Loans on Clean Basis </p>
                        <p onClick={() => handleNavigationClick(28)} style={dispaly === 28 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 28. Revised Lending rate for Diaspora Loan </p>
                    </div>
                </div>


                {dispaly == 1 ?

                    <div className={`${styles.history} animate__animated animate__bounceInUp`}>
                    <p className={styles.termsTitle}>1. Agriculture</p>
                        <table className={styles.container}> 
                            <thead>
                                <tr className={styles.headerRowss}>
                                    <th>No.</th>
                                    <th>Loan Type/Period/Bank</th>
                                    <th>Proposed/Revised/rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className={styles.subHeaderRow}>
                                    <td>1</td>
                                    <td>Agriculture</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>1-12 months</td>
                                    <td>15.50%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>13-24 months</td>
                                    <td>16.05%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>25-36 months</td>
                                    <td>16.50%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>37-48 months</td>
                                    <td>16.75%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>49-60 months</td>
                                    <td>16.85%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>61-84 months</td>
                                    <td>17.10%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>above 85 months</td>
                                    <td>17.30%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    : ""}

                {dispaly == 2 ?

                    <div className={`${styles.history} animate__animated animate__bounceInUp`}>
                    <p className={styles.termsTitle}>2. Manufacturing</p>
                        <table className={styles.container}>
                            <thead>
                                <tr className={styles.headerRowss}>
                                    <th>No</th>
                                    <th>Description</th>
                                    <th>Term & Tariff</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className={styles.subHeaderRow}>
                                    <td>2</td>
                                    <td>Manufacturing</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>1-12 months</td>
                                    <td>16.25%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>13-24 months</td>
                                    <td>16.75%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>25-36 months</td>
                                    <td>17.25%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>37-48 months</td>
                                    <td>17.60%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>49-60 months</td>
                                    <td>17.65%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>above 60 months</td>
                                    <td>17.95%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    : ""}

                {dispaly == 3 ?

                    <div className={`${styles.history} animate__animated animate__bounceInUp`}>
                    <p className={styles.termsTitle}>4. Building Construction</p>
                        <table className={styles.container}>
                            <thead>
                                <tr className={styles.headerRowss}>
                                    <th>No.</th>
                                    <th>Loan Type/Period/Bank</th>
                                    <th>Proposed/Revised/rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className={styles.subHeaderRow}>
                                    <td>4</td>
                                    <td>Building Construction</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>1-12 months</td>
                                    <td>17.05%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>13-24 months</td>
                                    <td>17.50%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>25-36 months</td>
                                    <td>17.90%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>37-48 months</td>
                                    <td>18.10%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>49-60 months</td>
                                    <td>18.20%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>61-84 months</td>
                                    <td>18.45%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>above 85 months</td>
                                    <td>18.50%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    : ""}

                {dispaly == 4 ?

                    <div className={`${styles.history} animate__animated animate__bounceInUp`}>
                    <p className={styles.termsTitle}>4. Credit Processing fee</p>
                        <table className={styles.container}>
                            <thead>
                                <tr className={styles.headerRowss}>
                                    <th>No.</th>
                                    <th>Loan Type/Period/Bank</th>
                                    <th>Proposed/Revised/rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className={styles.subHeaderRow}>
                                    <td>3</td>
                                    <td>Construction Bridge</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>1-12 months</td>
                                    <td>16.70%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>13-24 months</td>
                                    <td>17.30%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>25-36 months</td>
                                    <td>17.80%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>37-48 months</td>
                                    <td>18%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>49-60 months</td>
                                    <td>18.05%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>61-84 months</td>
                                    <td>18.35%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>above 85 months</td>
                                    <td>18.50%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    : ""}

                {dispaly == 5 ?

                    <div className={`${styles.history} animate__animated animate__bounceInUp`}>
                    <p className={styles.termsTitle}>5. Miscellaneous DTS </p>
                        <table className={styles.container}>
                            <thead>
                                <tr className={styles.headerRowss}>
                                    <th>No.</th>
                                    <th>Loan Type/Period/Bank</th>
                                    <th>Proposed/Revised/rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className={styles.subHeaderRow}>
                                    <td>5</td>
                                    <td>Miscellaneous DTS</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>1-12 months</td>
                                    <td>16.65%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>13-24 months</td>
                                    <td>17.10%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>25-36 months</td>
                                    <td>17.65%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>37-48 months</td>
                                    <td>17.90%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>49-60 months</td>
                                    <td>18.00%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>61-84 months</td>
                                    <td>18.30%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>above 85 months</td>
                                    <td>18.50%</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    : ""}

                {dispaly == 6 ?

                    <div className={`${styles.history} animate__animated animate__bounceInUp`}>
                    <p className={styles.termsTitle}>6. Hotel & Tourism </p>
                        <table className={styles.container}>
                            <thead>
                                <tr className={styles.headerRowss}>
                                    <th>No.</th>
                                    <th>Loan Type/Period/Bank</th>
                                    <th>Proposed/Revised/rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className={styles.subHeaderRow}>
                                    <td>6</td>
                                    <td>Hotel & Tourism</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>1-12 months</td>
                                    <td>15.55%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>13-24 months</td>
                                    <td>16%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>25-36 months</td>
                                    <td>16.75%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>37-48 months</td>
                                    <td>16.75%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>49-60 months</td>
                                    <td>16.75%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>61-84 months</td>
                                    <td>17%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>above 85 months</td>
                                    <td>17%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    : ""}

                {dispaly == 7 ?

                    <div className={`${styles.history} animate__animated animate__bounceInUp`}>
                    <p className={styles.termsTitle}>7. Wholesale & Retail Trade </p>
                        <table className={styles.container}>
                            <thead>
                                <tr className={styles.headerRowss}>
                                    <th>No.</th>
                                    <th>Loan Type/Period/Bank</th>
                                    <th>Proposed/Revised/rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className={styles.subHeaderRow}>
                                    <td>6</td>
                                    <td>Wholesale & Retail Trade</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>1-12 months</td>
                                    <td>16.25%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>13-24 months</td>
                                    <td>16.70%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>25-36 months</td>
                                    <td>17.50%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>37-48 months</td>
                                    <td>17.50%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>49-60 months</td>
                                    <td>17.70%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>61-84 months</td>
                                    <td>18.05%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>above 85 months</td>
                                    <td>18.10%</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    : ""}

                {dispaly == 8 ?

                    <div className={`${styles.history} animate__animated animate__bounceInUp`}>
                    <p className={styles.termsTitle}>8. Health Service </p>
                        <table className={styles.container}>
                            <thead>
                                <tr className={styles.headerRowss}>
                                    <th>No.</th>
                                    <th>Loan Type/Period/Bank</th>
                                    <th>Proposed/Revised/rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>8</td>
                                    <td>Health Service</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>1-12 months</td>
                                    <td>15.85%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>13-24 months</td>
                                    <td>16.35%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>25-36 months</td>
                                    <td>16.70%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>37-48 months</td>
                                    <td>16.95%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>49-60 months</td>
                                    <td>17.10%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>61-84 months</td>
                                    <td>17.40%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>above 85 months</td>
                                    <td>17.40%</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    : ""}

                {dispaly == 9 ?

                    <div className={`${styles.history} animate__animated animate__bounceInUp`}>
                    <p className={styles.termsTitle}>9. Transport Service </p>
                        <table className={styles.container}>
                            <thead>
                                <tr className={styles.headerRowss}>
                                    <th>No.</th>
                                    <th>Loan Type/Period/Bank</th>
                                    <th>Proposed/Revised/rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>9</td>
                                    <td>Transport Service</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>1-12 months</td>
                                    <td>16.80%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>13-24 months</td>
                                    <td>17.30%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>25-36 months</td>
                                    <td>17.75%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>37-48 months</td>
                                    <td>18.05%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>49-60 months</td>
                                    <td>18.15%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>61-84 months</td>
                                    <td>18.50%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>above 85 months</td>
                                    <td>18.50%</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    : ""}

                {dispaly == 10 ?

                    <div className={`${styles.history} animate__animated animate__bounceInUp`}>
                    <p className={styles.termsTitle}>10. Transport Vehicle </p>
                        <table className={styles.container}>
                            <thead>
                                <tr className={styles.headerRowss}>
                                    <th>No.</th>
                                    <th>Loan Type/Period/Bank</th>
                                    <th>Proposed/Revised/rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>10</td>
                                    <td>Transport Vehicle</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>1-12 months</td>
                                    <td>17.30%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>13-24 months</td>
                                    <td>17.55%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>25-36 months</td>
                                    <td>18.00%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>37-48 months</td>
                                    <td>18.20%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>49-60 months</td>
                                    <td>18.30%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>61-84 months</td>
                                    <td>18.50%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>above 85 months</td>
                                    <td>18.60%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    : ""}

                {dispaly == 11 ?

                    <div className={`${styles.history} animate__animated animate__bounceInUp`}>
                    <p className={styles.termsTitle}>11. Loan Type/Period/Bank </p>
                        <table className={styles.container}>
                            <thead>
                                <tr className={styles.headerRowss}>
                                    <th>No.</th>
                                    <th>Loan Type/Period/Bank</th>
                                    <th>Proposed/Revised/rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>11</td>
                                    <td>Construction Machinery</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>1-12 months</td>
                                    <td>17.60%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>13-24 months</td>
                                    <td>17.80%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>25-36 months</td>
                                    <td>18.20%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>37-48 months</td>
                                    <td>18.30%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>49-60 months</td>
                                    <td>18.35%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>61-84 months</td>
                                    <td>18.55%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>above 85 months</td>
                                    <td>19%</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    : ""}

                {dispaly == 12 ?

                    <div className={`${styles.history} animate__animated animate__bounceInUp`}>
                    <p className={styles.termsTitle}>12. Automobile </p>
                        <table className={styles.container}>
                            <thead>
                                <tr className={styles.headerRowss}>
                                    <th>No.</th>
                                    <th>Loan Type/Period/Bank</th>
                                    <th>Proposed/Revised/rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>12</td>
                                    <td>Automobile</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>1-12 months</td>
                                    <td>16.15%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>13-24 months</td>
                                    <td>16.40%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>25-36 months</td>
                                    <td>16.70%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>37-48 months</td>
                                    <td>16.80%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>49-60 months</td>
                                    <td>16.85%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>61-84 months</td>
                                    <td>16.85%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>above 85 months</td>
                                    <td>16.85%</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    : ""}

                {dispaly == 13 ?

                    <div className={`${styles.history} animate__animated animate__bounceInUp`}>
                    <p className={styles.termsTitle}>13. Consumer Loans </p>
                        <table className={styles.container}>
                            <thead>
                                <tr className={styles.headerRowss}>
                                    <th>No.</th>
                                    <th>Loan Type/Period/Bank</th>
                                    <th>Proposed/Revised/rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>13</td>
                                    <td>Consumer Loans</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>1-12 months</td>
                                    <td>16.85%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>13-24 months</td>
                                    <td>17.05%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>25-36 months</td>
                                    <td>17.25%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>37-48 months</td>
                                    <td>17.50%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>49-60 months</td>
                                    <td>17.55%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>61-84 months</td>
                                    <td>17.75%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>above 85 months</td>
                                    <td>17.75%</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    : ""}

                {dispaly == 14 ?

                    <div className={`${styles.history} animate__animated animate__bounceInUp`}>
                    <p className={styles.termsTitle}>14. Mortgage </p>
                        <table className={styles.container}>
                            <thead>
                                <tr className={styles.headerRowss}>
                                    <th>No.</th>
                                    <th>Loan Type/Period/Bank</th>
                                    <th>Proposed/Revised/rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>14</td>
                                    <td>Mortgage</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>1-12 months</td>
                                    <td>16.60%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>13-24 months</td>
                                    <td>16.85%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>25-36 months</td>
                                    <td>17.05%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>37-48 months</td>
                                    <td>17.25%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>49-60 months</td>
                                    <td>17.35%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>61-84 months</td>
                                    <td>17.55%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>above 85 months</td>
                                    <td>17.55%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    : ""}

                {dispaly == 15 ?

                    <div className={`${styles.history} animate__animated animate__bounceInUp`}>
                    <p className={styles.termsTitle}>15. Import </p>
                        <table className={styles.container}>
                            <thead>
                                <tr className={styles.headerRowss}>
                                    <th>No.</th>
                                    <th>Loan Type/Period/Bank</th>
                                    <th>Proposed/Revised/rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>15</th>
                                    <th>Import</th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>1-12 months</td>
                                    <td>16.75%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>13-24 months</td>
                                    <td>17.30%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>25-36 months</td>
                                    <td>17.75%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>37-48 months</td>
                                    <td>18%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>49-60 months</td>
                                    <td>18.15%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>61-84 months</td>
                                    <td>18.35%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>above 85 months</td>
                                    <td>18.45%</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    : ""}

                {dispaly == 16 ?

                    <div className={`${styles.history} animate__animated animate__bounceInUp`}>
                    <p className={styles.termsTitle}>16. Export T/L </p>
                        <table className={styles.container}>
                            <thead>
                                <tr className={styles.headerRowss}>
                                    <th>No.</th>
                                    <th>Loan Type/Period/Bank</th>
                                    <th>Proposed/Revised/rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>16</th>
                                    <th>Export T/L</th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>1-12 months</td>
                                    <td>12%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>13-24 months</td>
                                    <td>13.00%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>25-36 months</td>
                                    <td>13.50%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>37-48 months</td>
                                    <td>13.75%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>49-60 months</td>
                                    <td>14%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>61-84 months</td>
                                    <td>14.50%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>above 85 months</td>
                                    <td>14.50%</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    : ""}

                {dispaly == 17 ?

                    <div className={`${styles.history} animate__animated animate__bounceInUp`}>
                    <p className={styles.termsTitle}>17. Advance Against Import Bills </p>
                        <table className={styles.container}>
                            <thead>
                                <tr className={styles.headerRowss}>
                                    <th>No.</th>
                                    <th>Loan Type/Period/Bank</th>
                                    <th>Proposed/Revised/rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>17</th>
                                    <th>Advance Against Import Bills</th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Up to 30 days</td>
                                    <td>18.25%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Up to 60 days</td>
                                    <td>18.35%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Up to 90 days</td>
                                    <td>18.35%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Over 90 days</td>
                                    <td>19.45%</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    : ""}

                {dispaly == 18 ?

                    <div className={`${styles.history} animate__animated animate__bounceInUp`}>
                    <p className={styles.termsTitle}>18. Advance Against Export Bills </p>
                        <table className={styles.container}>
                            <thead>
                                <tr className={styles.headerRowss}>
                                    <th>No.</th>
                                    <th>Loan Type/Period/Bank</th>
                                    <th>Proposed/Revised/rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>18</th>
                                    <th>Advance Against Export Bills</th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Up to 30 days</td>
                                    <td>13.25%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>30-60 days</td>
                                    <td>13.25%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>60-90 days</td>
                                    <td>13.25%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Over 90 days</td>
                                    <td>14.05%</td>
                                </tr>

                                <tr>
                                    <td>19</td>
                                    <td>Interest Rates for Loans</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>{'<'}90 days</td>
                                    <td>17.90%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>{'>'}90-180 days</td>
                                    <td>18.10%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>{'>180'} days</td>
                                    <td>18.20%</td>
                                </tr>

                                <tr>
                                    <th>20</th>
                                    <th>Interest Rates for Loans</th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>{'<'}90 days</td>
                                    <td>14.05%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>{'>'}90-180 days</td>
                                    <td>14.30%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>{'>180'} days</td>
                                    <td>14.55%</td>
                                </tr>


                            </tbody>
                        </table>
                    </div>
                    : ""}

                {dispaly == 21 ?

                    <div className={`${styles.history} animate__animated animate__bounceInUp`}>
                    <p className={styles.termsTitle}>21. Pre-shipment (ECG) </p>
                        <table className={styles.container}>
                            <thead>
                                <tr className={styles.headerRowss}>
                                    <th>No.</th>
                                    <th>Loan Type/Period/Bank</th>
                                    <th>Proposed/Revised/rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>21</th>
                                    <th>Pre-shipment (ECG)</th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Pre-shipment (ECG)</td>
                                    <td>9.85%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Pre-shipment (against contract or L/C collateral up to 90 days)</td>
                                    <td>10.95%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Pre-shipment (against contract or L/C, collateral 90-180 days)</td>
                                    <td>11.05%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Pre-shipment (against contract or L/C, collateral 180-365 days)</td>
                                    <td>14.85%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Pre-shipment(against contract or L/C, collateral above 365) days</td>
                                    <td>14.95%</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    : ""}

                {dispaly == 22 ?

                    <div className={`${styles.history} animate__animated animate__bounceInUp`}>
                    <p className={styles.termsTitle}>22. Warehouse Receipt Financing </p>
                        <table className={styles.container}>
                            <thead>
                                <tr className={styles.headerRowss}>
                                    <th>No.</th>
                                    <th>Loan Type/Period/Bank</th>
                                    <th>Proposed/Revised/rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>22</th>
                                    <th>Warehouse Receipt Financing</th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>1-12 months</td>
                                    <td>14.30%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>13-24 months</td>
                                    <td>14.65%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>25-36 months</td>
                                    <td>14.65%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>37-60 months</td>
                                    <td>14.65%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>61-84 months</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>above 85 months</td>
                                    <td></td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    : ""}

                {dispaly == 23 ?

                    <div className={`${styles.history} animate__animated animate__bounceInUp`}>
                    <p className={styles.termsTitle}>23. Micro Finance Institutions </p>
                        <table className={styles.container}>
                            <thead>
                                <tr className={styles.headerRowss}>
                                    <th>No.</th>
                                    <th>Loan Type/Period/Bank</th>
                                    <th>Proposed/Revised/rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>23</th>
                                    <th>Micro Finance Institutions</th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>1-12 months</td>
                                    <td>14.35%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>13-24 months</td>
                                    <td>14.90%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>25-36 months</td>
                                    <td>15.20%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>37-48 months</td>
                                    <td>15.55%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>49-60 months</td>
                                    <td>15.65%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>above 60 months</td>
                                    <td>15.95%</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    : ""}

                {dispaly == 24 ?

                    <div className={`${styles.history} animate__animated animate__bounceInUp`}>
                    <p className={styles.termsTitle}>24. Overdrawal </p>
                        <table className={styles.container}>
                            <thead>
                                <tr className={styles.headerRowss}>
                                    <th>No.</th>
                                    <th>Loan Type/Period/Bank</th>
                                    <th>Proposed/Revised/rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>24</th>
                                    <th>Overdrawal</th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Current Account Overdrawal</td>
                                    <td>19.25%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Overdraft Account Overdrawal</td>
                                    <td>19.25%</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    : ""}

                {dispaly == 25 ?

                    <div className={`${styles.history} animate__animated animate__bounceInUp`}>
                    <p className={styles.termsTitle}>25. Over Draft </p>
                        <table className={styles.container}>
                            <thead>
                                <tr className={styles.headerRowss}>
                                    <th>No.</th>
                                    <th>Loan Type/Period/Bank</th>
                                    <th>Proposed/Revised/rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>25</th>
                                    <th>Over Draft</th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Export</td>
                                    <td>13.85%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Manufacturing</td>
                                    <td rowSpan={8}>17.45%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Domestic Trade & Services</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Import</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Transport Service</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Building Construction & Real estate</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Construction Machinery Rental</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Hotel Tourism & Tour Travel </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Agriculture</td>
                                </tr>



                            </tbody>
                        </table>
                    </div>
                    : ""}

                {dispaly == 26 ?

                    <div className={`${styles.history} animate__animated animate__bounceInUp`}>
                    <p className={styles.termsTitle}>26. Loans Against Cash and Cash Substitutes </p>
                        <table className={styles.container}>
                            <thead>
                                <tr className={styles.headerRowss}>
                                    <th>No.</th>
                                    <th>Loan Type/Period/Bank</th>
                                    <th>Proposed/Revised/rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>26</th>
                                    <th>Loans Against Cash and Cash Substitutes</th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>1-12 months</td>
                                    <td rowSpan={4}>minus 3% on the respective Interest rate of each product</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>13.-24 months</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>25-36 months</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>37-48 months</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>37-60 months</td>
                                    <td rowSpan={3}></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>61-84 months</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>85-120 months</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    : ""}

                {dispaly == 27 ?

                    <div className={`${styles.history} animate__animated animate__bounceInUp`}>
                    <p className={styles.termsTitle}>27. Loans on Clean Basis </p>
                        <table className={styles.container}>
                            <thead>
                                <tr className={styles.headerRowss}>
                                    <th>No.</th>
                                    <th>Loan Type/Period/Bank</th>
                                    <th>Proposed/Revised/rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>27</th>
                                    <th>Loans on Clean Basis</th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>1-12 months</td>
                                    <td rowSpan={5}>plus 2% on the respective interest rate of each product</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>13-24 months</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>25-36 months</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>37-60 months</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>61-84 months</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    : ""}

                {dispaly == 28 ?

                    <div className={`${styles.history} animate__animated animate__bounceInUp`}>
                    <p className={styles.termsTitle}>1. Revised Lending rate for Diaspora Loan </p>
                        <table className={styles.container}>
                            <thead>
                                <tr className={styles.headerRowss}>
                                    <th>Type of Loan</th>
                                    <th>Equity contribution</th>
                                    <th>Tenure</th>
                                    <th>FCY/FCY (interest rate)</th>
                                    <th>FCY/LCY (interest rate)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td rowSpan={3}>Mortgage Loan</td>
                                    <td>20% - 30%</td>
                                    <td>20 Years</td>
                                    <td>10.50%</td>
                                    <td>15.50%</td>
                                </tr>
                                <tr>
                                    {/* <td></td> */}
                                    <td>31% - 50%</td>
                                    <td>20 Years</td>
                                    <td>10%</td>
                                    <td>13.50%</td>
                                </tr>
                                <tr>
                                    {/* <td></td> */}
                                    <td>{'> 51%'}</td>
                                    <td>20 Years</td>
                                    <td>9.75%</td>
                                    <td>12.50%</td>
                                </tr>
                                <tr>
                                    <td rowSpan={3}>Vehicle Loan – New Car ( Code 02 & 03)</td>
                                    <td>20%-35%</td>
                                    <td>10 Years</td>
                                    <td>11.50%</td>
                                    <td>15%</td>
                                </tr>
                                <tr>
                                    {/* <td></td> */}
                                    <td>36%-50%</td>
                                    <td>10 Years</td>
                                    <td>11%</td>
                                    <td>14.50%</td>
                                </tr>
                                <tr>
                                    {/* <td></td> */}
                                    <td>{'> 51%'}</td>
                                    <td>10 Years</td>
                                    <td>10.50%</td>
                                    <td>14%</td>
                                </tr>
                                <tr>
                                    <td rowSpan={2}>Vehicle Loan – Used car (Code 02)</td>
                                    <td>30%-50%</td>
                                    <td>7 Years</td>
                                    <td>11.50%</td>
                                    <td>15.50%</td>
                                </tr>
                                <tr>
                                    {/* <td></td> */}
                                    <td>{'> 51%'}</td>
                                    <td>7 Years</td>
                                    <td>11%</td>
                                    <td>14%</td>
                                </tr>
                                <tr>
                                    <td rowSpan={2}>Vehicle Loan – New Car ( Code 02 & 03)</td>
                                    <td>30%-50%</td>
                                    <td>7 Years</td>
                                    <td>12%</td>
                                    <td>15.50%</td>
                                </tr>
                                <tr> 
                                    {/* <td></td> */}
                                    <td>{'> 51%'}</td>
                                    <td>7 Years</td>
                                    <td>11.50%</td>
                                    <td>14%.50%</td>
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

export default Interest_Rate;