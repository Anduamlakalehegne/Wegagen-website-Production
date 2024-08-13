import React, { useState, useEffect } from "react";
import styles from "./notification.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";
import "swiper/css/free-mode";
import Footer from "../Common/Footer";
import "animate.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "rsuite/dist/rsuite.min.css";
import StikyNav from "../Common/StikyNav"; 
import Mega_Menu from "../Common/Mega_Menu";
import Newss from "../../../assets/Images/News.svg"; // Default image if needed
import { FaArrowRight } from "react-icons/fa";
import About_us from "../../../assets/Images/common.jpg";


function Notification() {
    const apiUrl = 'https://weg.back.strapi.wegagen.com/api/notifications?populate=*';
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        Aos.init({ duration: 1000 });

        const fetchNotifications = async () => {
            try {
                const response = await fetch(apiUrl);
                const json = await response.json();
                setNotifications(json.data);
            } catch (error) {
                console.error("Error fetching notifications:", error);
            }
        };

        fetchNotifications();
    }, []);

    const displayNotificationDetails = async (notificationId) => {
        const apiUrl = `https://weg.back.strapi.wegagen.com/api/notifications/${notificationId}?populate=*`;
        try {
            const response = await fetch(apiUrl);
            const json = await response.json();
            const notificationData = json.data;

            const MySwal = withReactContent(Swal);
            MySwal.fire({
                html: (
                    <div className={styles.popOuter} style={{ minHeight: '500px' }}>
                        <h1 className={styles.popTitle}>{notificationData.attributes.name}</h1>
                        {notificationData.attributes.featured_image?.data ? (
                            <img
                                src={`https://weg.back.strapi.wegagen.com${notificationData.attributes.featured_image.data.attributes.url}`}
                                alt="Featured"
                                style={{ width: '100%', height: 'auto', marginTop: '10px', marginBottom: '30px' }}
                            />
                        ) : (
                            <img
                                src={Newss} // Default image if featured image is not available
                                alt="Default featured"
                                style={{ width: '100%', height: 'auto', marginTop: '10px', marginBottom: '30px' }}
                            />
                        )}
                        {notificationData.attributes.description.map((paragraph, index) => (
                            <p key={index}>{paragraph.children.map(child => child.text).join(' ')}</p>
                        ))}
                    </div>
                ),
                showConfirmButton: false,
                showDenyButton: true,
                showCloseButton: true,
                width: "800px",
                denyButtonText: "Close",
                customClass: {
                    popup: "animate__animated animate__bounceIn",
                },
                hideClass: {
                    popup: "animate__animated animate__bounceOut",
                }
            });
        } catch (error) {
            console.error("Error fetching notification details:", error);
        }
    };

    return (
        <>
            <StikyNav />
            <Mega_Menu />
            <div className={styles.agarImage}>
                <img src={About_us} alt="Notification"></img> 
            </div>
            <div className={styles.newsAndExchange}> 
                <div className={styles.news1}> 
                    <h6 className={styles.newsHeader}>Notifications</h6> 
                    <div className={styles.news}> 
                        {notifications.length > 0 ? notifications.map((notification) => {
                            const firstParagraphText = notification.attributes.description[0]?.children.map(child => child.text).join(' ') || '';
                            const displayedText = firstParagraphText.slice(0, 160) + (firstParagraphText.length > 160 ? '...' : '');

                            return (
                                <div key={notification.id} className={styles.newsContent} data-aos="zoom-in" data-aos-delay="400">
                                    <img
                                        src={notification.attributes.featured_image?.data ? `https://weg.back.strapi.wegagen.com${notification.attributes.featured_image.data.attributes.url}` : Newss}
                                        alt="Featured"
                                        className={styles.newsImgs}
                                        onClick={() => displayNotificationDetails(notification.id)}
                                    />
                                    <label>{notification.attributes.name}</label>
                                    <p>{displayedText}</p>
                                    <div className={styles.moreNews}>
                                        <p onClick={() => displayNotificationDetails(notification.id)}>Read More <FaArrowRight style={{ paddingLeft: '10px' }} size="1.5vw"></FaArrowRight></p>
                                    </div>
                                </div> 
                            );
                        }) : (
                            <p>No new notification available</p>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Notification;
