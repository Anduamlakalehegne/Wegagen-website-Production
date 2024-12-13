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

const Share_Terms_and_Tariffs = () => {

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
                        <p onClick={() => { handleClick(1, showMenu) }} style={dispaly === 1 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>1. Share Administration Charges</p>
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
                        <p onClick={() => handleNavigationClick(1)} style={dispaly === 1 ? { backgroundColor: '#ff6b0b', color: 'white' } : null}> 1. Share Administration Charges </p>
                    </div>
                </div>
                {dispaly == 1 ?
                    <div>
                        <p className={`${styles.history} animate__animated animate__bounceInUp`}>
                            <p className={styles.termsTitle}>1. Share Administration Charges </p>

                            <table className={styles.container}>
                                <thead>
                                    <tr className={styles.headerRowss}>
                                        <th>No</th>
                                        <th>Share Related Charges</th>
                                        <th>Rate</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1.1</td>
                                        <td>Pledging of shares as collateral (per contract)	Birr 1000/request</td>
                                        <td>Birr 1000/request</td>
                                    </tr>
                                    <tr>
                                        <td>1.2</td>
                                        <td>Share transfer fees</td>
                                        <td>Birr 2500/request</td>
                                    </tr>
                                    <tr>
                                        <td>1.3</td>
                                        <td>Confirmation letter</td> 
                                        <td>Birr 300.00</td> 
                                    </tr>
                                    <tr>
                                        <td>1.4</td>
                                        <td>Certificate for share issue an on amalgamation of share certificate</td>
                                        <td>Birr 100/certificates amalgamated</td>
                                    </tr>
                                    <tr>
                                        <td>1.5</td>
                                        <td>Replacement of lost share certificate</td>
                                        <td>Birr 500/Certificate (Any third party related costs to be covered by the customers)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </p>
                    </div> : ""}

            </div>

            <Footer />
        </>
    );
};

export default Share_Terms_and_Tariffs;