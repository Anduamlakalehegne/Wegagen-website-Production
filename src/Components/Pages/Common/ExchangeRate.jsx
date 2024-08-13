import React, { useState, useEffect } from "react";
import styles from "./exchangeRate.module.css";
import { BsFillFileArrowUpFill } from "react-icons/bs";
import { GrFormClose } from "react-icons/gr";
import { Navigation, Pagination, Scrollbar, EffectCoverflow, A11y, Autoplay, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import usa from "../../../assets/Images/usa.png";
import gbp from "../../../assets/Images/gbp.png";
import euro from "../../../assets/Images/euro.png";
import cad from "../../../assets/Images/cad.png";
import aut from "../../../assets/Images/aut.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";
import "swiper/css/free-mode";
import Footer from "../Common/Footer";
import { BsCheckCircleFill } from "react-icons/bs";
import { BiPlus } from "react-icons/bi";
import "animate.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
export default function ExchangeRate() {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop; 
        if (scrolled > 300) { 
            setVisible(true) 
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

    const exchageRate = () => {
        const MySwal = withReactContent(Swal);
        MySwal.fire({
            position: 'center',
            html: (
                <div className={styles.popOuter}>
                    <div className={styles.popexchange} style={{ marginBottom: '10px' }}>

                        <p style={{ fontSize: '21px' }} className={styles.popexchangeHeader}>Exchange Rate For Cash Notes</p>
                        <table>
                            <thead>
                                <th>{date}</th>
                                <th>Code</th>
                                <th>Unit</th>
                                <th>Buying</th>
                                <th>Selling</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <img src={usa} alt=""></img>
                                    </td>
                                    <td>USD</td>
                                    <td>1</td>
                                    <td>00.0000</td>
                                    <td>00.0000</td>
                                </tr>
                                <tr className={styles.active}>
                                    <td style={{ width: '150px' }}>
                                        <img src={gbp} alt=""></img>
                                    </td>
                                    <td>GBP</td>
                                    <td>1</td>
                                    <td>00.0000</td>
                                    <td>00.0000</td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={euro} alt=""></img>
                                    </td>
                                    <td>EURO</td>
                                    <td>1</td>
                                    <td>00.0000</td>
                                    <td>00.0000</td>
                                </tr>
                                <tr className={styles.active}>
                                    <td>
                                        <img src={cad} alt=""></img>
                                    </td>

<td>CAD</td>
                                    <td>1</td>
                                    <td>00.0000</td>
                                    <td>00.0000</td>
                                </tr>
                                <tr >
                                    <td>
                                        <img src={aut} alt=""></img>
                                    </td>
                                    <td>AUT</td>
                                    <td>1</td>
                                    <td>00.0000</td>
                                    <td>00.0000</td>
                                </tr>
                            </tbody>
                        </table> 
                        {/* <button style={{ marginTop: "20px" }} className={styles.readMore}>
                  Read More
                </button> */}
                    </div>
                </div>
            ),
            showConfirmButton: false,
            showCloseButton: true,
            width: "480px",
            denyButtonText: "Close",
            imageClass: "img-responsive",
            imageAlt: "Custom image",
            showClass: {
                popup: "animate__animated animate__swing",
            },
            hideClass: {
                popup: "animate__animated animate__zoomOut",
            }
        }).then((result) => {
            if (result.isDenied) {
                // 
            }
        }); 
    }; 

    useEffect(() => {
        Aos.init();
    }, []);

    const [visible2, setVisible2] = useState(false)
    const [visible3, setVisible3] = useState(false)
    const [visible4, setVisible4] = useState(false)

    return (
        <>
            <div className={`animate__animated animate__fadeInRight ${styles.exchangseRate}`} onClick={() => { exchageRate() }} >
                <div className={styles.infoDetailwza}>
                    <label>ssss</label>
                    <label>ssss</label>
                </div>
                
                <div className={styles.infoDetail}>
                    <p onMouseOver={() => { setVisible2(true) }} onMouseOut={() => { setVisible2(false) }}><BiPlus style={{ color: 'white' }}></BiPlus></p>
                </div>
                <div className={styles.infoDetail}>
                    <p onMouseOver={() => { setVisible2(true) }} onMouseOut={() => { setVisible2(false) }}><BiPlus style={{ color: 'white' }}></BiPlus></p>
                </div>
                <div className={styles.infoDetail}>
                    <p onMouseOver={() => { setVisible2(true) }} onMouseOut={() => { setVisible2(false) }}><BiPlus style={{ color: 'white' }}></BiPlus></p>
                </div>
                <div className={styles.infoDetail}>
                    <p onMouseOver={() => { setVisible2(true) }} onMouseOut={() => { setVisible2(false) }}><BiPlus style={{ color: 'white' }}></BiPlus></p>
                </div>

            </div>

            <div className={`animate__animated animate__backInDown ${styles.exchangeRate2}`} onClick={() => { exchageRate() }} >
                {visible2 ? <div className={`animate__animated animate__fadeInLeft ${styles.infoDetail1}`}>
                    <p>Exchange Rate</p> 
                </div>
                    : ''}
            </div>

            <div className={`animate__animated animate__backInDown ${styles.exchangeRate3}`} onClick={() => { exchageRate() }} >
                {visible3 ? <div className={`animate__animated animate__fadeInLeft ${styles.infoDetail1}`}>
                    <p>Loan Calculator</p>
                </div>
                    : ''}  
            </div>
            <div className={`animate__animated animate__backInDown ${styles.exchangeRate4}`} onClick={() => { exchageRate() }} >
                {visible4 ? <div className={`animate__animated animate__fadeInLeft ${styles.infoDetail1}`}>
                    <p>Contact Us</p>
                </div>
                    : ''}
            </div>

{visible == true ? <div className={styles.scrollUp}><BsFillFileArrowUpFill onClick={scrollToTop} size={"3vw"}></BsFillFileArrowUpFill></div> : ""}
        </>
    )
}