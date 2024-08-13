import React, { useState, useEffect } from "react";
import styles from "./bid.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";
import "swiper/css/free-mode";
import Footer from "../Common/Footer";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "rsuite/dist/rsuite.min.css";
import StikyNav from "../Common/StikyNav";
import axios from "axios";
import Mega_Menu from "../Common/Mega_Menu";
import Newss from "../../../assets/Images/News.svg";
import { FaArrowRight } from "react-icons/fa";
import About_us from "../../../assets/Images/common.jpg";

function Bid() {
    const apiUrl = "https://weg.back.strapi.wegagen.com/api/bids?populate=*";
    const [bidsData, setBidsData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        AOS.init();
        const fetchData = async () => {
            try {
                const response = await fetch(apiUrl);
                const json = await response.json();
                setBidsData(json.data);
            } catch (error) {
                console.error("Error fetching bids:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const bidDetail = async (bidId) => {
        const apiUrl = `https://weg.back.strapi.wegagen.com/api/bids/${bidId}?populate=*`;
        try {
            const response = await fetch(apiUrl);
            const bidData = await response.json(); 

            const MySwal = withReactContent(Swal); 
            MySwal.fire({
                html: (
                    <div className={styles.popOuter} style={{ minHeight: "500px" }}>
                        <label className={styles.popTitle}>{bidData.data.attributes.title}</label>
                        {bidData.data.attributes.featured_image?.data ? (
                            <img
                                src={`https://weg.back.strapi.wegagen.com${bidData.data.attributes.featured_image.data.attributes.url}`}
                                alt="Featured"
                                style={{ width: "100%", height: "auto", marginTop: "10px", marginBottom: "30px" }}
                            />
                        ) : (
                            <img
                                src={Newss}
                                alt="Default featured"
                                style={{ width: "100%", height: "auto", marginTop: "10px", marginBottom: "30px" }}
                            />
                        )}
                        {bidData.data.attributes.description.map((paragraph, index) => (
                            <p key={index}>{paragraph.children.map((child) => child.text).join(" ")}</p>
                        ))}
                        {bidData.data.attributes.related_files?.data?.length > 0 && (
                            <div style={{ textAlign: "center", marginTop: "20px" }}>
                                {bidData.data.attributes.related_files.data.map((file, index) => (
                                    <a
                                        key={index}
                                        href={`https://weg.back.strapi.wegagen.com${file.attributes.url}`}
                                        download
                                        className={styles.downloadButton}
                                    >
                                        Download Related File
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                ),
                showConfirmButton: false,
                showDenyButton: true,
                showCloseButton: true,
                width: "800px",
                denyButtonText: "Close",
                imageClass: "img-responsive",
                imageAlt: "Custom image",
                customClass: {
                    popup: "animate__animated animate__bounceIn",
                },
                hideClass: {
                    popup: "animate__animated animate__bounceOut",
                },
            }).then((result) => {
                if (result.isDenied) {
                    // Handle close
                }
            });
        } catch (error) {
            console.error("Error fetching detailed bid:", error);
        }
    };

    return (
        <>
            <StikyNav />
            <Mega_Menu />
            <div className={styles.agarImage}>
                <img src={About_us} alt="About Us" />
            </div>
            <div className={styles.newsAndExchange}>
                <div className={styles.news1}>
                    <h6 className={styles.newsHeader}>List of Bids</h6>
                    <div className={styles.news}>
                        {loading ? (
                            <p>Loading bids...</p>
                        ) : bidsData.length > 0 ? (
                            bidsData.map((bidItem) => {
                                const firstParagraphText =
                                    bidItem.attributes.description[0]?.children
                                        .map((child) => child.text)
                                        .join(" ") || "";
                                const displayedText =
                                    firstParagraphText.slice(0, 160) +
                                    (firstParagraphText.length > 160 ? "..." : "");

                                return (
                                    <div
                                        key={bidItem.id}
                                        className={styles.newsContent}
                                        data-aos="zoom-in"
                                        data-aos-delay="400"
                                    >
                                        <img
                                            src={
                                                bidItem.attributes.featured_image?.data
                                                    ? `https://weg.back.strapi.wegagen.com${bidItem.attributes.featured_image.data.attributes.url}`
                                                    : Newss
                                            }
                                            alt="Featured"
                                            className={styles.newsImgs}
                                            onClick={() => bidDetail(bidItem.id)}
                                        />
                                        <label>{bidItem.attributes.title}</label>
                                        <p>{displayedText}</p>
                                        <div className={styles.moreNews}>
                                            <p onClick={() => bidDetail(bidItem.id)}>
                                                Bid Details{" "}
                                                <FaArrowRight
                                                    style={{ paddingLeft: "10px" }}
                                                    size="1.5vw"
                                                ></FaArrowRight>
                                            </p>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <div className={styles.centerMessage}>
                                <p>No bids available</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Bid;
