import React, { useState, useEffect } from "react";
import Footer from '../Common/Footer'
import styles from "./news.module.css";
import "animate.css";
import "aos/dist/aos.css";
import { FaArrowRight } from "react-icons/fa";
import Mega_Menu from "../Common/Mega_Menu";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import news from "../../../assets/Images/defualt.bmp"
import About_us from "../../../assets/Images/common.jpg";
import gif from '../../../assets/gif.gif';
import { spiral } from 'ldrs';
import StikyNav from "../Common/StikyNav";
import { API_BASE_URL } from '../Common/Config/Config'; // Import the base URL

spiral.register();

export default function News() {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    AOS.init();
    const fetchData = async () => {
      try {
        let response = await fetch(`${API_BASE_URL}/api/news?publicationState=live&pagination[page]=1&pagination[pageSize]=1`);
        let data = await response.json();
        const total = data.meta.pagination.total;
        response = await fetch(`${API_BASE_URL}/api/news?publicationState=live&pagination[page]=1&pagination[pageSize]=${total}&populate=*`);
        data = await response.json();

        // Sort news items by createdAt in descending order
        const sortedData = data.data.sort((a, b) => new Date(b.attributes.createdAt) - new Date(a.attributes.createdAt));

        setNewsData(sortedData);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchData();
  }, []);

  const newsDetail = async (newsId) => {
    const apiUrl = `${API_BASE_URL}/api/news/${newsId}?populate=*`;
    try {
      const response = await fetch(apiUrl);
      const newsData = await response.json();

      const MySwal = withReactContent(Swal);
      MySwal.fire({
        html: (
          <div className={styles.popOuter} style={{ minHeight: '500px' }}>
            <strong>{newsData.data.attributes.title}</strong>

            {newsData.data.attributes.featured_image?.data ? (
              <img
                src={`${API_BASE_URL}${newsData.data.attributes.featured_image.data.attributes.url}`}
                alt="Featured"
                style={{ width: '100%', height: 'auto', marginTop: '10px', marginBottom: '30px' }}
              />
            ) : (
              <img
                src={news}
                alt="Default featured" 
                style={{ width: '100%', height: 'auto', marginTop: '10px', marginBottom: '30px' }}
              />
            )}

            {newsData.data.attributes.description.map((paragraph, index) => (
              <p style={{ padding: '0px' }} key={index}>{paragraph.children.map(child => child.text).join(' ')}</p>
            ))}

            {newsData.data.attributes.news_related_images?.data?.length > 0 ? (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '20px' }}>
                {newsData.data.attributes.news_related_images.data.map((image, index) => (
                  <img key={index} src={`${API_BASE_URL}${image.attributes.url}`} alt="" style={{ width: '100%', height: 'auto' }} />
                ))}
              </div>
            ) : (
              <p style={{ textAlign: 'center', marginBottom: '2px', color: '#ff6b0b' }}>Wegagen Bank SC.</p>
            )}
          </div>
        ),
        showConfirmButton: false,
        showDenyButton: true,
        showCloseButton: true,
        position: "top-end",
        width: "800px",
        denyButtonText: "Close",
        imageClass: "img-responsive",
        imageAlt: "Custom image",
        showClass: {
          popup: `animate__animated animate__slideInRight ${styles.customSwalShow}`, 
        },
        hideClass: {
          popup: `animate__animated animate__slideOutRight ${styles.customSwalHide}`,
        }
      }).then((result) => {
        if (result.isDenied) {
          // Handle close
        }
      });
    } catch (error) {
      console.error("Error fetching detailed news:", error);
      // Handle error (e.g., display an alert or a message indicating that the data couldn't be fetched)
    }
  };

  return (
    <>
      <Mega_Menu path="news" />
      <StikyNav />
      <div className={styles.serviceimage}>
        <img src={About_us}></img>
      </div>
      <p style={{ fontSize: '30px', padding: '30px', fontWeight: '600', color: '#004360' }}>News</p>
      <div className={styles.newsAndExchange}>
        {newsData.length > 0 ? (
          <div className={styles.news}>
            {newsData.map((newsItem) => {
              const firstParagraphText = newsItem.attributes.description[0]?.children.map(child => child.text).join(' ') || '';
              const displayedText = firstParagraphText.slice(0, 160) + (firstParagraphText.length > 160 ? '...' : '');
              return (
                <div key={newsItem.id} className={styles.newsContent} data-aos="zoom-in" data-aos-delay="400">
                  <img
                    src={newsItem.attributes.featured_image?.data ? `${API_BASE_URL}${newsItem.attributes.featured_image.data.attributes.url}` : news}
                    alt="Featured"
                    className={styles.newsImgs}
                    onClick={() => newsDetail(newsItem.id)}
                  />
                  <label>{newsItem.attributes.title}</label>
                  <p>{displayedText}</p>
                  <div className={styles.moreNews}>
                    <p onClick={() => newsDetail(newsItem.id)}>Read More <FaArrowRight style={{ paddingLeft: '10px' }} size="1.5vw"></FaArrowRight></p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className={styles.centeredContainer}>
            <l-spiral
              size="50"
              speed="0.9"
              color="#003460"
            ></l-spiral>
          </div>
        )}
      </div>
      <Footer />
    </>
  )
}
