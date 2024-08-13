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

const IFB_Terms_And_Tariffs = () => { 

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
                        <p onClick={() => { handleClick(1, showMenu) }} style={dispaly === 1 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>1. Amendment Related to Collateral per Collateral</p>
                        <p onClick={() => { handleClick(2, showMenu) }} style={dispaly === 2 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>2. Collateral Estimation</p>
                        <p onClick={() => { handleClick(3, showMenu) }} style={dispaly === 3 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>3. Movable collateral Management fee</p>
                        <p onClick={() => { handleClick(4, showMenu) }} style={dispaly === 4 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>4. Credit Processing fee</p>
                        <p onClick={() => { handleClick(5, showMenu) }} style={dispaly === 5 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>5. Renegotiated loans</p>
                        <p onClick={() => { handleClick(6, showMenu) }} style={dispaly === 6 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>6. Movable collateral Management fee</p>
                        <p onClick={() => { handleClick(7, showMenu) }} style={dispaly === 7 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>7. Other IFB Terms And Tariffs</p>
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
                        <p onClick={() => handleNavigationClick(1)} style={dispaly === 1 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 1. Amendment Related to Collateral per Collateral </p>
                        <p onClick={() => handleNavigationClick(2)} style={dispaly === 2 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 2. Collateral Estimation </p>
                        <p onClick={() => handleNavigationClick(3)} style={dispaly === 3 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 3. Movable collateral Management fee </p>
                        <p onClick={() => handleNavigationClick(4)} style={dispaly === 4 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 4. Credit Processing fee </p>
                        <p onClick={() => handleNavigationClick(5)} style={dispaly === 5 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 5. Renegotiated loans </p>
                        <p onClick={() => handleNavigationClick(6)} style={dispaly === 6 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 6. Movable collateral Management fee </p>
                        <p onClick={() => handleNavigationClick(7)} style={dispaly === 7 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 7. Other IFB Terms And Tariffs </p>
                    </div>
                </div>


                {dispaly == 1 ?

                    <div className={`${styles.history} animate__animated animate__bounceInUp`}>
                    <p className={styles.termsTitle}>1. Amendment Related to Collateral per Collateral</p>
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
                                    <td colSpan={2}>Amendment Related to Collateral per Collateral</td>
                                </tr>
                                <tr>
                                    <td>1.1</td>
                                    <td>Collateral substation fee</td>
                                    <td>2,500.00</td>
                                </tr>
                                <tr>
                                    <td>1.2</td>
                                    <td>Collateral Release fee</td>
                                    <td>2,500.00</td>
                                </tr>
                                <tr>
                                    <td>1.3</td>
                                    <td>Amendment related to collateral</td>
                                    <td>2,500.00</td>
                                </tr>
                                <tr>
                                    <td>1.4</td>
                                    <td>Allowing collateral to be registered as second party per each collateral</td>
                                    <td>5,000.00</td>
                                </tr>
                                <tr>
                                    <td>1.5</td>
                                    <td>Revaluation Of Collateral</td>
                                    <td>As per the new rate</td>
                                </tr>
                                <tr>
                                    <td>1.6</td>
                                    <td>Appeal on Collateral</td>
                                    <td>2,000.00</td>
                                </tr>
                                <tr>
                                    <td>1.7</td>
                                    <td>Registration of initial notice</td>
                                    <td>500</td>
                                </tr>
                                <tr>
                                    <td>1.8</td>
                                    <td>Extending the period of effectiveness of initial notice</td>
                                    <td>100</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    : ""}

                {dispaly == 2 ?

                    <div className={`${styles.history} animate__animated animate__bounceInUp`}>
                    <p className={styles.termsTitle}>2. Collateral Estimation</p>
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
                                    <td colSpan={2}>Collateral Estimation</td>
                                </tr>
                                <tr>
                                    <td>2.1</td>
                                    <td>Residential Building/apartment unit</td>
                                    <td>900+400 for each unit</td>
                                </tr>
                                <tr>
                                    <td>2.2</td>
                                    <td>Residential Building with more than one floor</td>
                                    <td>900+100/floor</td>
                                </tr>
                                <tr>
                                    <td>2.3</td>
                                    <td>Hotel, Guesthouse, commercial building and apartment</td>
                                    <td>1,500+150/floor</td>
                                </tr>
                                <tr>
                                    <td>2.4</td>
                                    <td>Store, warehouse and factories</td>
                                    <td>850+150/floor</td>
                                </tr>
                                <tr>
                                    <td>2.5</td>
                                    <td>Fuel station</td>
                                    <td>850/tanker for building as per the above rate</td>
                                </tr>
                                <tr>
                                    <td>2.6</td>
                                    <td>Flower Farm</td>
                                    <td>1,500/greenhouse+150/block for buildings</td>
                                </tr>
                                <tr>
                                    <td>2.7</td>
                                    <td>Coffee hulling and washing station</td>
                                    <td>2,300.00/site</td>
                                </tr>
                                <tr>
                                    <td>2.8</td>
                                    <td>Coffee and other plantation</td>
                                    <td>400/hectare but not more than 0.5% of the loan</td>
                                </tr>
                                <tr>
                                    <td>2.9</td>
                                    <td>Staff housing</td>
                                    <td>free</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    : ""}

                {dispaly == 3 ?

                    <div className={`${styles.history} animate__animated animate__bounceInUp`}>
                    <p className={styles.termsTitle}>3. Movable collateral Management fee</p>
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
                                    <td colSpan={2}>Movable collateral Management fee</td>
                                </tr>
                                <tr>
                                    <td>3.1</td>
                                    <td>Motor Vehicle</td>
                                    <td>500/Booklet</td>
                                </tr>
                                <tr>
                                    <td>3.2</td>
                                    <td>Factory Machinery</td>
                                    <td>1,000.00/machinery up to 6 Mill
                                        <br />3,000/plant up to 20 Mill
                                        <br />10,000/plant if its above 20 Mill</td>
                                </tr>
                                <tr>
                                    <td>3.3</td>
                                    <td>Construction Machinery and Equipment</td>
                                    <td>600 each</td>
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
                                    <th>No</th>
                                    <th>Description</th>
                                    <th>Term & Tariff</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className={styles.headerRow}>
                                    <td>4</td>
                                    <td colSpan={2}>Credit Processing fee</td>
                                </tr>
                                <tr>
                                    <td>4.1</td>
                                    <td>New credit facility</td>
                                    <td>For financing amount up to 10 million, 0.05%/minimum 5000<br />
                                        For financing amount of 10-100 million, 0.075%/minimum 7,500<br />
                                        For financing amount &gt; 100 million, 0.1%/minimum 100,000</td>
                                </tr>
                                <tr>
                                    <td>4.2</td>
                                    <td>Renewal of existing facility</td>
                                    <td>75% of the financing processing fee based on the facility limit</td>
                                </tr>
                                <tr>
                                    <td>4.3</td>
                                    <td>Renewal at increasing existing limit</td>
                                    <td>75% of the financing processing fee shall be charged on the existing limit and the incremental balance shall be charged as new facility mentioned above under 4.1</td>
                                </tr>
                                <tr>
                                    <td>4.4</td>
                                    <td>Renewal of expired facilities not more than a month</td>
                                    <td>0.05% of the limit (Minimum Birr 3000)</td>
                                </tr>
                                <tr>
                                    <td>4.5</td>
                                    <td>financing approval on CCR</td>
                                    <td>2,000.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    : ""}

                {dispaly == 5 ?

                    <div className={`${styles.history} animate__animated animate__bounceInUp`}>
                    <p className={styles.termsTitle}>5. Renegotiated loans </p>
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
                                    <td colSpan={2}>Renegotiated loans</td>
                                </tr>
                                <tr>
                                    <td>5.1</td>
                                    <td>Waiver of repayment</td>
                                    <td>75% of the loan processing fee based on the outstanding balance (minimum Birr 5,000)</td>
                                </tr>
                                <tr>
                                    <td>5.2</td>
                                    <td>Rescheduling</td>
                                    <td>75% of the loan processing fee based on the outstanding balance (minimum Birr 5,000)</td>
                                </tr>
                                <tr>
                                    <td>5.3</td>
                                    <td>Amendment of repayment</td>
                                    <td>75% of the loan processing fee based on the outstanding balance (minimum Birr 5,000)</td>
                                </tr>
                                <tr>
                                    <td>5.4</td>
                                    <td>Transfer of financing file (excluding staff)</td>
                                    <td>10,000.00</td>
                                </tr>
                                <tr>
                                    <td>5.5</td>
                                    <td>Guarantee extension/amendment fee</td>
                                    <td>3,000.00</td>
                                </tr>
                                <tr>
                                    <td>5.6</td>
                                    <td>Guarantee conversion to term financing</td>
                                    <td>10,000.00</td>
                                </tr>
                                <tr>
                                    <td>5.7</td>
                                    <td>Credit approval confirmation fee</td>
                                    <td>5,000.00</td>
                                </tr>
                                <tr>
                                    <td>5.8</td>
                                    <td>Any letter regarding credit facility to be issued at the request of the borrower/customer/supplier</td>
                                    <td>500</td>
                                </tr>
                                <tr>
                                    <td>5.9</td>
                                    <td>Special Mention follow up fee</td>
                                    <td>1.5/month on installment amount (minimum 1,000 birr)</td>
                                </tr>
                                <tr>
                                    <td>5.10</td>
                                    <td>NPL follow up fee</td>
                                    <td>an increase of 3% penalty on the existing rate</td>
                                </tr>
                                <tr>
                                    <td>5.11</td>
                                    <td>Additional Grace period for Project Loans</td>
                                    <td>2,500.00</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    : ""}

                {dispaly == 6 ?

                    <div className={`${styles.history} animate__animated animate__bounceInUp`}>
                    <p className={styles.termsTitle}>6. Movable collateral Management fee </p>
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
                                    <td colSpan={2}>Financing reapproval fee</td>
                                </tr>
                                <tr>
                                    <td>6.1</td>
                                    <td>Commitment fee for unutilized fund after re approval</td>
                                    <td>0.5% of the outstanding loan balance min 10,000.00</td>
                                </tr>
                                <tr>
                                    <td>6.2</td>
                                    <td>Arrangement fee</td>
                                    <td>0.5% of the outstanding loan balance to be renegotiated but not more than 200,000.00 birr</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    : ""}

                {dispaly == 7 ?

                    <div className={`${styles.history} animate__animated animate__bounceInUp`}>
                    <p className={styles.termsTitle}>7. Other IFB Terms And Tariffs </p>
                        <table className={styles.container}>
                            <thead>
                                <tr className={styles.headerRowss}>
                                    <th>No</th>
                                    <th>Description</th>
                                    <th>Term & Tariff</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>7</td>
                                    <td>Cancellation/Suspension of foreclosure decision</td>
                                    <td>up to 10 mill 5000/case 10 Million up to 50 million 10,000/case above 50 Million 25,000.00 on cash</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>Insurance Premium payment charge</td>
                                    <td>10.5% of the insurance premium (minimum birr 3,000)</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>financing re-approval by the reason of the customer</td>
                                    <td>5,000.00</td>
                                </tr>
                                <tr className={styles.headerRow}>
                                    <td>10</td>
                                    <td colSpan={2}>Merchandise Loan Handling charge</td>
                                </tr>

                                <tr>
                                    <td>10.1</td>
                                    <td>Each time a Merchandise is pledged/released</td>
                                    <td>5,000.00/2,000.00</td>
                                </tr>
                                <tr>
                                    <td>11</td>
                                    <td>Appeal</td>
                                    <td>2,500.00</td>
                                </tr>
                                <tr>
                                    <td>12</td>
                                    <td>Credit Early settlement</td>
                                    <td>1,000.00</td>
                                </tr>
                                <tr>
                                    <td>13</td>
                                    <td>Settlement of Pre-shipment loan in Birr</td>
                                    <td>5% on the amount which makes hard core and converted to term loan only</td>
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

export default IFB_Terms_And_Tariffs;