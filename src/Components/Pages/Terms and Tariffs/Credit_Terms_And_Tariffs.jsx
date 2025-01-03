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

const Credit_Terms_And_Tariffs = () => {

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
                        <p onClick={() => { handleClick(1, showMenu) }} style={dispaly === 1 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>1. Amendment Related to Collateral per Collateral</p>
                        <p onClick={() => { handleClick(2, showMenu) }} style={dispaly === 2 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>2. Collateral Estimation</p>
                        <p onClick={() => { handleClick(3, showMenu) }} style={dispaly === 3 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>3. Movable collateral Management fee</p>
                        <p onClick={() => { handleClick(4, showMenu) }} style={dispaly === 4 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>4. New credit facility</p>
                        <p onClick={() => { handleClick(5, showMenu) }} style={dispaly === 5 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>5. Renegotiated loans</p>
                        <p onClick={() => { handleClick(6, showMenu) }} style={dispaly === 6 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>6. Loan reapproval fee</p>
                        <p onClick={() => { handleClick(7, showMenu) }} style={dispaly === 7 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>7. Other Credit Terms And Tariffs</p>
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
                        <p onClick={() => handleNavigationClick(4)} style={dispaly === 4 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 4. New credit facility </p>
                        <p onClick={() => handleNavigationClick(5)} style={dispaly === 5 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 5. Renegotiated loans </p>
                        <p onClick={() => handleNavigationClick(6)} style={dispaly === 6 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 6. Loan reapproval fee </p>
                        <p onClick={() => handleNavigationClick(7)} style={dispaly === 7 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 7. Other Credit Terms And Tariffs </p>
                    </div>
                </div>
                {dispaly == 1 ?
                    <div>
                        <p className={`${styles.history} animate__animated animate__bounceInUp`}>
                            <p className={styles.termsTitle}>1. Amendment Related to Collateral per Collateral </p>

                            <table className={styles.container}>
                                <thead>
                                    <tr className={styles.headerRowss}>
                                        <th>No</th>
                                        <th>Description</th>
                                        <th>Revised Rate</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className={styles.headerRow} >
                                        <td>1</td>
                                        <td>Amendment Related to Collateral per Collateral</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>1.1</td>
                                        <td>Collateral substitution fee</td>
                                        <td>Birr 5,000 per each requested collateral release (per Book-let, per LHC and etc.)</td>
                                    </tr>
                                    <tr>
                                        <td>1.2</td>
                                        <td>Collateral Release fee</td>
                                        <td>Birr 5,000 per each requested collateral release (per Book-let, per LHC and etc.)</td>
                                    </tr>
                                    <tr>
                                        <td>1.3</td>
                                        <td>Amendment related to collateral</td>
                                        <td>Birr 5,000 per each requested collateral release (per Book-let, per LHC and etc.)</td>
                                    </tr>
                                    <tr>
                                        <td>1.4</td>
                                        <td>Allowing collateral to be registered as second party per Each collateral</td>
                                        <td>5,000</td>
                                    </tr>
                                    <tr>
                                        <td>1.5</td>
                                        <td>Appeal on Collateral estimation</td>
                                        <td>50% of the original estimation fee</td>
                                    </tr>
                                    <tr>
                                        <td>1.6</td>
                                        <td>Registration of initial notice</td>
                                        <td>500</td>
                                    </tr>
                                </tbody>
                            </table>
                        </p>
                    </div> : ""}


                {dispaly == 2 ?

                    <div className={`${styles.history} animate__animated animate__bounceInUp`}>
                        <p className={styles.termsTitle}>2. Collateral Estimation</p>
                        <table className={styles.container}>
                            <thead>
                                <tr className={styles.headerRowss}>
                                    <th>No</th>
                                    <th>Description</th>
                                    <th>Revised Rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className={styles.headerRow} >
                                    <td>2</td>
                                    <td>Collateral Estimation</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>2.1</td>
                                    <td>Residential Building up to one floor</td>
                                    <td>2,000 per building and +500 for each</td>
                                </tr>
                                <tr>
                                    <td>2.2</td>
                                    <td>Residential Building/ apartment (with single LHC)with more than one floor</td>
                                    <td>2,500/ building and 500 /floor</td>
                                </tr>
                                <tr>
                                    <td>2.3</td>
                                    <td>Apartment, Hotel & Guest house</td>
                                    <td>5,000+500/ floor</td>
                                </tr>
                                <tr>
                                    <td>2.4</td>
                                    <td>Commercial and mixed building</td>
                                    <td>3,500+ 500 /floor</td>
                                </tr>
                                <tr>
                                    <td>2.5</td>
                                    <td>Store, warehouse and factories</td>
                                    <td>Birr 5,000 in group in one factory </td>
                                </tr>
                                <tr>
                                    <td>2.6</td>
                                    <td>Fuel station</td>
                                    <td>ETB 3,000 per/tanker and related buildings are treated as the same to commercial buildings</td>
                                </tr>
                                <tr>
                                    <td>2.7</td>
                                    <td>Flower Farm</td>
                                    <td>minimum 3,000 for one greenhouse +1000/ additional green house and building as per commercial rate </td>
                                </tr>
                                <tr>
                                    <td>2.8</td>
                                    <td>Coffee hauling and washing station</td>
                                    <td>Birr 5,000 per site </td>
                                </tr>
                                <tr>
                                    <td>2.9</td>
                                    <td>Coffee and other plantation</td>
                                    <td>Birr 1,500 per hectare but not more than 0.5% of the loan request</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    : ""}

                {dispaly == 3 ?

                    <div className={`${styles.history} animate__animated animate__bounceInUp`}>
                        <p className={styles.termsTitle}>3. Movable collateral Management fee </p>
                        <table className={styles.container}>
                            <thead>
                                <tr className={styles.headerRowss}>
                                    <th>No</th>
                                    <th>Description</th>
                                    <th>Revised Rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className={styles.headerRow} >
                                    <td>3</td>
                                    <td>Movable collateral Management fee</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>3.1</td>
                                    <td>Automobile</td>
                                    <td>1,000/Booklet</td>
                                </tr>
                                <tr>
                                    <td>3.2</td>
                                    <td>Passenger vehicles & trucks</td>
                                    <td>3,000/ booklet( for trailers birr 500 is added)</td>
                                </tr>
                                <tr>
                                    <td>3.3</td>
                                    <td>Factory Machinery</td>
                                    <td>1,000.00/machinery up to 6 Million <br />3,000/plant up to 20 Million<br />10,000/plant if its above 20 Million</td>
                                </tr>
                                <tr>
                                    <td>3.4</td>
                                    <td>Construction Machinery and Equipment</td>
                                    <td>3,000 / booklet each</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    : ""}

                {dispaly == 4 ?

                    <div className={`${styles.history} animate__animated animate__bounceInUp`}>
                        <p className={styles.termsTitle}>4. New credit facility</p>
                        <table className={styles.container}>
                            <thead>
                                <tr className={styles.headerRowss}>
                                    <th>No</th>
                                    <th>Description</th>
                                    <th>Revised Rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className={styles.headerRow} >
                                    <td>4</td>
                                    <td>Credit Processing fee</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>4.1</td>
                                    <td>New credit facility</td>
                                    <td>For loan amount up to 10 million, 0.05%/minimum 5000<br />For loan amount of 10-100 million, 0.075%/minimum 7,500<br />For loan amount &gt;100 million, 0.1%/minimum 100,000</td>
                                </tr>
                                <tr>
                                    <td>4.2</td>
                                    <td>Renewal of existing facility</td>
                                    <td>75% of the loan processing fee based on the facility limit</td>
                                </tr>
                                <tr>
                                    <td>4.3</td>
                                    <td>Renewal at increasing existing limit</td>
                                    <td>75% of the loan processing fee shall be charged on the existing limit and the incremental balance shall be charged as new facility mentioned above under 4.1</td>
                                </tr>
                                <tr>
                                    <td>4.4</td>
                                    <td>Renewal of expired facilities not more than a month</td>
                                    <td>0.05% of the limit (Minimum Birr 3000)</td>
                                </tr>
                                <tr>
                                    <td>4.5</td>
                                    <td>Loan approval on CCR</td>
                                    <td>3,000</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    : ""}
                {dispaly == 5 ?

                    <div className={`${styles.history} animate__animated animate__bounceInUp`}>
                        <p className={styles.termsTitle}>5. Renegotiated loans</p>
                        <table className={styles.container}>
                            <thead>
                                <tr className={styles.headerRowss}>
                                    <th>No</th>
                                    <th>Description</th>
                                    <th>Revised Rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className={styles.headerRow} >
                                    <td>5</td>
                                    <td>Renegotiated loans</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>5.1</td>
                                    <td>Waiver of repayment(for each loan account)</td>
                                    <td>75% of the loan processing fee based on the outstanding balance (minimum Birr 5,000)</td>
                                </tr>
                                <tr>
                                    <td>5.2</td>
                                    <td>Rescheduling (for each loan account) </td>
                                    <td>75% of the loan processing fee based on the outstanding balance (minimum Birr 5,000)</td>
                                </tr>
                                <tr>
                                    <td>5.3</td>
                                    <td>Amendment of repayment (for each loan account)</td>
                                    <td>75% of the loan processing fee based on the outstanding balance (minimum Birr 5,000)</td>
                                </tr>
                                <tr>
                                    <td>5.4</td>
                                    <td>Transfer of Loan file (excluding staff)</td>
                                    <td>10,000.00</td>
                                </tr>
                                <tr>
                                    <td>5.5</td>
                                    <td>Pre-shipment extension fee</td>
                                    <td>5,000/ contract </td>
                                </tr>
                                <tr>
                                    <td>5.6</td>
                                    <td>Guarantee extension/amendment fee</td>
                                    <td>5,000.00</td>
                                </tr>
                                <tr>
                                    <td>5.7</td>
                                    <td>Guarantee conversion to term loan</td>
                                    <td>10,000.00</td>
                                </tr>
                                <tr>
                                    <td>5.8</td>
                                    <td>Credit approval confirmation fee</td>
                                    <td>5,000.00</td>
                                </tr>
                                <tr>
                                    <td>5.9</td>
                                    <td>Any letter regarding credit facility To be issued at the request of the borrower/customer/supplier</td>
                                    <td>500.00</td>
                                </tr>
                                <tr>
                                    <td>5.10</td>
                                    <td>NPL follow up fee</td>
                                    <td>an increase of 3% interest on the existing rate</td>
                                </tr>
                                <tr>
                                    <td>5.11</td>
                                    <td>Additional Grace period for Project Loans</td>
                                    <td>Birr 10,000.00 for the 1st time and Birr 20,000.00 for more than one time request</td>
                                </tr>
                                <tr>
                                    <td>5.12</td>
                                    <td>Waiver of interest payment on Grace period</td>
                                    <td>2.5% of accumulated interest every quarter until repayment is Started</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    : ""}

                {dispaly == 6 ?

                    <div className={`${styles.history} animate__animated animate__bounceInUp`}>
                        <p className={styles.termsTitle}>6. Loan reapproval fee </p>
                        <table className={styles.container}>
                            <thead>
                                <tr className={styles.headerRowss}>
                                    <th>No</th>
                                    <th>Description</th>
                                    <th>Revised Rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className={styles.headerRow} >
                                    <td>6</td>
                                    <td>Loan reapproval fee</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>6.1</td>
                                    <td>Commitment fee for unutilized fund after re approval</td>
                                    <td>0.5% of the outstanding loan balance min 10,000.00</td>
                                </tr>
                                {/* <tr>
                                    <td>6.2</td>
                                    <td>Arrangement fee</td>
                                    <td>0.5% of the outstanding loan balance to be renegotiated but not more than 200,000.00 birr</td>
                                </tr> */}
                            </tbody>
                        </table>
                    </div>
                    : ""}

                {dispaly == 7 ?

                    <div className={`${styles.history} animate__animated animate__bounceInUp`}>
                        <p className={styles.termsTitle}>7. Other Credit Terms And Tariffs</p>
                        <table className={styles.container}>
                            <thead>
                                <tr className={styles.headerRowss}>
                                    <th>No</th>
                                    <th>Description</th>
                                    <th>Revised Rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>7</td>
                                    <td colSpan={2}>Foreclosure</td>
                                </tr>
                                <tr>
                                    <td>7.1</td>
                                    <td>Cancellation  Suspension of foreclosure decision</td>
                                    <td>up to 10 mill 5000/ case 10 Million up to 50 million 10,000/case above 50 Million 25,000.00 on cash</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td colSpan={2}>Insurance Charge</td>
                                </tr>
                                <tr>
                                    <td>8.1</td>
                                    <td>Insurance Premium payment charge</td>
                                    <td>15% of the insurance premium (Minimum Birr 5,000.00 per each insurance premium)</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td colSpan={2}>Loan re -approval by the reason of the customer</td>
                                </tr>
                                <tr>
                                    <td>9.1</td>
                                    <td>Loan re-approval by the reason of the customer</td>
                                    <td>5,000.00</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td colSpan={2}>Merchandise Loan Handling charge</td>
                                </tr>
                                <tr>
                                    <td>10.1</td>
                                    <td>Each time a Merchandise is pledged/released </td>
                                    <td>5,000.00/2,000.00</td>
                                </tr>
                                <tr>
                                    <td>11</td>
                                    <td colSpan={2}>Appeal</td>
                                </tr>
                                <tr>
                                    <td>11.1</td>
                                    <td>Appeal</td>
                                    <td>25% of the loan processing fee</td>
                                </tr>
                                <tr>
                                    <td>12</td>
                                    <td colSpan={2}>Early Settlement</td>
                                </tr>
                                <tr>
                                    <td>12.1</td>
                                    <td>Credit Early settlement ( if initiated by the applicant)</td>
                                    <td>5% of the outstanding loan balance</td>
                                </tr>
                                <tr>
                                    <td>13</td>
                                    <td colSpan={2}>Settlement of Pre-shipment</td>
                                </tr>
                                <tr>
                                    <td>13.1</td>
                                    <td>Settlement of Pre-shipment loan in Birr</td>
                                    <td>5% on the amount which makes Hardcore and converted to term loan only</td>
                                </tr>
                                <tr>
                                    <td>14</td>
                                    <td colSpan={2}>Staff</td>
                                </tr>
                                <tr>
                                    <td>14.1</td>
                                    <td>Staff estimation</td>
                                    <td>100</td>
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

export default Credit_Terms_And_Tariffs;