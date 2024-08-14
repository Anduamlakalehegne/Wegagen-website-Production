import React, { useState, useEffect } from "react";
import styles from "./home.module.css";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./home.css";
import card1 from "../../../assets/Images/AGAR.svg";
import card2 from "../../../assets/Images/Nigat.svg";
import card3 from "../../../assets/Images/amana.svg";
import appstore from "../../../assets/Images/appstore.png";
import playstore from "../../../assets/Images/playstore.jpg";
import news from "../../../assets/Images/defualt.bmp"
import bank1 from "../../../assets/Images/Home Page/Corespondent Banks/bank2.jpg"
import bank2 from "../../../assets/Images/Home Page/Corespondent Banks/bank3.png"
import bank3 from "../../../assets/Images/Home Page/Corespondent Banks/bank4.png"
import bank4 from "../../../assets/Images/Home Page/Corespondent Banks/bank5.jpg"
import bank5 from "../../../assets/Images/Home Page/Corespondent Banks/bank6.jpg"
import bank6 from "../../../assets/Images/Home Page/Corespondent Banks/bank7.jpg"
import bank7 from "../../../assets/Images/Home Page/Corespondent Banks/bank8.jpg"
import bank8 from "../../../assets/Images/Home Page/Corespondent Banks/bank9.png"
import bank9 from "../../../assets/Images/Home Page/Corespondent Banks/bank10.png"
import bank10 from "../../../assets/Images/Home Page/Corespondent Banks/bank11.png"

import service1 from "../../../assets/Images/Transfer Services/service1.webp"
import service2 from "../../../assets/Images/Transfer Services/service2.png"
import service3 from "../../../assets/Images/Transfer Services/service3.webp"
import service4 from "../../../assets/Images/Transfer Services/service4.webp"
import service5 from "../../../assets/Images/Transfer Services/service5.webp"
import service6 from "../../../assets/Images/Transfer Services/service6.png"
import service7 from "../../../assets/Images/Transfer Services/mastercard2.png"
import service8 from "../../../assets/Images/Transfer Services/service8.png"

import efoyita from '../../../assets/Images/Home Page/Efoyta.png'
import mobileBanking from '../../../assets/Images/Home Page/mobile banking.png'
import internetBanking from '../../../assets/Images/Home Page/internate banking.png'
import agentBanking from '../../../assets/Images/Hello-Cash.png'
import cardBanking from '../../../assets/Images/Home Page/card banking.png'
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
import Slider from "../Common/Slider";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import "rsuite/dist/rsuite.min.css";
import Map from "../mapp/Map";
import Mega_Menu from "../Common/Mega_Menu";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { FaUserTie } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { BsBank } from "react-icons/bs";
import { GrAtm } from "react-icons/gr";
import StikyNav from "../Common/StikyNav";
import NotificationPopup from "./NotificationPopup";
import { MdSupportAgent } from "react-icons/md";
import { TbHttpPost } from "react-icons/tb";
import { spiral } from 'ldrs'
import ThreeCXChat from "../Common/Chat/ThreeCXChat";
// import ReactPlayer from 'react-player';
import { format, parseISO } from 'date-fns';
import axios from "axios";
import { API_BASE_URL } from '../Common/Config/Config'; // Import the base URL
import LazyLoad from 'react-lazyload';

spiral.register()


export default function Home() {

  // useEffect(() => {
  //   AOS.init();
  // }, []);

  const [dispaly, setDisplay] = useState(1);
  const [counterOn, setCounterON] = useState(false);


  const cardstoggle = () => {
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      html: (
        <div className={styles.popOuter}>

          <div className={styles.popImg}>
            <LazyLoad height={200} offset={100}>
              <img src={card1} alt="Ager Card" />
            </LazyLoad>
          </div>
          <label className={styles.popTitle}>Agar Card</label>
          <p>
            Our Agar Card enables customers to access their money at any time, 24/7,
            without being restricted by bank operating hours, make withdrawals up to Birr 10,000,
            make payments and check account balance.
          </p>
        </div>
      ),
      showConfirmButton: false,
      showDenyButton: true,
      showCloseButton: true,
      width: "700px",
      denyButtonText: "Close",
      imageClass: "img-responsive",
      imageAlt: "Custom image",
      showClass: {
        popup: `animate__animated animate__zoomIn ${styles.customSwalShow}`,
      },
      hideClass: {
        popup: `animate__animated animate__zoomOut ${styles.customSwalHide}`,
      }
    }).then((result) => {
      if (result.isDenied) {
        // 
      }
    });
  };

  const cardstoggle2 = () => {
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      html: (
        <div className={styles.popOuter}>

          <div className={styles.popImg}>
            <LazyLoad height={200} offset={100}>
              <img src={card2} alt="Ager Card" />
            </LazyLoad>
          </div>
          <label className={styles.popTitle}>Nigat Card</label>
          <p>
            Nigat Card enables our women customer with Nigat Saving Account to access
            their money at any time, 24/7, without being restricted by bank operating hours, make
            withdrawals up to Birr 10,000, make payments and check account balance.
          </p>
        </div>
      ),
      showConfirmButton: false,
      showDenyButton: true,
      showCloseButton: true,
      width: "700px",
      denyButtonText: "Close",
      imageClass: "img-responsive",
      imageAlt: "Custom image",
      showClass: {
        popup: `animate__animated animate__zoomIn ${styles.customSwalShow}`,
      },
      hideClass: {
        popup: `animate__animated animate__zoomOut ${styles.customSwalHide}`,
      }
    }).then((result) => {
      if (result.isDenied) {
        // 
      }
    });
  };


  const cardstoggle3 = () => {
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      html: (
        <div className={styles.popOuter}>

          <div className={styles.popImg}>
            <img src={card3} alt="Ager Card" />
          </div>
          <label className={styles.popTitle}>Amana Card</label>
          <p>
            Amana Card enables our Interest Free Banking (IFB) customers to access their money at any time
            24/7 without being restricted by bank operating hours, make withdrawals up to Birr 10,000, make
            payments and check account balance.
          </p>
        </div>
      ),
      showConfirmButton: false,
      showDenyButton: true,
      showCloseButton: true,
      width: "700px",
      denyButtonText: "Close",
      imageClass: "img-responsive",
      imageAlt: "Custom image",
      showClass: {
        popup: `animate__animated animate__zoomIn ${styles.customSwalShow}`,
      },
      hideClass: {
        popup: `animate__animated animate__zoomOut ${styles.customSwalHide}`,
      }
    }).then((result) => {
      if (result.isDenied) {
        // 
      }
    });
  };

  const [notificationPopup, setNotificationPopup] = useState(true);

  useEffect(() => {
    if (notificationPopup) {
      setNotificationPopup(false);
    }
  }, [notificationPopup]);

  const navigate = useNavigate();

  const bankingService = () => {
    navigate('/Personal_Banking', { state: { display: 4 } });
  };

  const bankingService2 = () => {
    navigate('/Personal_Banking', { state: { display: 3 } });
  };
  const bankingService3 = () => {
    navigate('/Personal_Banking', { state: { display: 5 } });
  };
  const bankingService4 = () => {
    navigate('/Personal_Banking', { state: { display: 9 } });
  };
  const bankingService5 = () => {
    navigate('/Personal_Banking', { state: { display: 18 } });
  };
  const bankingService6 = () => {
    navigate('/Personal_Banking', { state: { display: 6 } });
  };
  const bankingService7 = () => {
    navigate('/Personal_Banking', { state: { display: 13 } });
  };

  const Warka = () => {
    navigate('/Wadya_Aman_Saving', { state: { display: 1 } });
  };


  const [newsData, setNewsData] = useState([]);
  const apiUrl = 'https://weg.back.strapi.wegagen.com/api/news?populate=*&sort=createdAt:desc&pagination[page]=1&pagination[pageSize]=3';

  useEffect(() => {
    AOS.init();
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const json = await response.json();
        setNewsData(json.data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchData();
  }, []);

  const newsDetail = async (newsId) => {
    const apiUrl = `https://weg.back.strapi.wegagen.com/api/news/${newsId}?populate=*`;
    try {
      const response = await fetch(apiUrl);
      const newsData = await response.json();

      const MySwal = withReactContent(Swal);
      MySwal.fire({
        html: (
          <div className={styles.popOuter} style={{ minHeight: '500px' }}>
            <label className={styles.popTitle}>{newsData.data.attributes.title}</label>

            {newsData.data.attributes.featured_image?.data ? (
              <img
                src={`https://weg.back.strapi.wegagen.com${newsData.data.attributes.featured_image.data.attributes.url}`}
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
              <p key={index}>{paragraph.children.map(child => child.text).join(' ')}</p>
            ))}

            {newsData.data.attributes.news_related_images?.data?.length > 0 ? (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '20px' }}>
                {newsData.data.attributes.news_related_images.data.map((image, index) => (
                  <img key={index} src={`https://weg.back.strapi.wegagen.com${image.attributes.url}`} alt="" style={{ width: '100%', height: 'auto' }} />
                ))}
              </div>
            ) : (
              <p style={{ textAlign: 'center', marginBottom: '2px', color: '#ff6b0b' }}>Wegagen Bank SC.</p> // Or render a default image or simply hide this section
            )}
          </div>
        ),
        showConfirmButton: false,
        showDenyButton: true,
        showCloseButton: true,
        position: "top-end",
        width: "800px",
        denyButtonText: "Close",
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


  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };


  const [rates, setRates] = useState([]);
  const [formattedDate, setFormattedDate] = useState('');
  const [formattedDate2, setFormattedDate2] = useState('');

  useEffect(() => {
    axios.get('https://weg.back.strapi.wegagen.com/api/exchange-rates?populate=*')
      .then(response => {
        const data = response.data.data;
        setRates(data);

        if (data.length > 0) {
          const date = parseISO(data[0].attributes.date);
          setFormattedDate(format(date, 'MMM dd, yyyy'));
          setFormattedDate2(format(date, 'EEEE MMM dd, yyyy'));
        }
      })
      .catch(error => {
        console.error("There was an error fetching the exchange rates!", error);
      });
  }, []);


  return (

    <div>
      <NotificationPopup />
      <StikyNav />
      <Mega_Menu path="home" headerSelect="xxx" />

      <div className={styles.photoSlider}>

        <LazyLoad height={200} offset={100}>
          <Slider />
        </LazyLoad>
      </div>

      <>


        <div className={styles.cards}>
          <div data-aos="zoom-in" data-aos-delay="100" className={styles.card1} >
            <label><object data={card1} alt="" /></label>
            <h6>Agarrrr <span>Card</span></h6>
            <p>With our Agar debit card, you have the access to the money in your account
              wherever you are and whenever you want. Using your Agar card is quicker than making
              a trip to the bank and safer than carrying money.</p>
            <button className={styles.readMore} onClick={() => { cardstoggle() }}>Read More</button>
          </div>

          <div className={styles.card1} data-aos="zoom-in" data-aos-delay="100">
            <label><object data={card2} alt="" /></label>
            <h6>Nigat <span>Card</span></h6>
            <p>Step into a world of financial empowerment designed exclusively for women with our Nigat Debit Card.  Unleash
              the power of your finances with Nigat card that mirrors your style and is linked to Nigat Account,
              a savings account with attractive interest rate.
              Enjoy a plethora of exclusive benefits tailored for the modern woman. </p>
            <button className={styles.readMore} onClick={() => { cardstoggle2() }}>Read More</button>
          </div>

          <div className={styles.card1} data-aos="zoom-in" data-aos-delay="100">
            <label><object data={card3} alt="" /></label>
            <h6>Amana <span>Card </span></h6>
            <p>Amana is a specialized card for our Interest Free Banking Customers. The card is linked to customer’s
              account and you can induldge with the convenience of accessing your account anytime anywhere.</p>
            <button className={styles.readMore} onClick={() => { cardstoggle3() }}>Read More</button>
          </div>
        </div>
      </>


      <div style={{ marginBottom: "100px" }}>

        <div className={styles.exchangeRate}>
          <div className={styles.exchangeRateInfo}>
            <div className={styles.rightSide}>
              <p className={styles.headerTitle3}>Exchange Rate</p>
              <p className={styles.headerTitle2}>የዕለቱ የዉጭ ምንዛሬ ተመን</p>
              <p style={{ color: "#ff6b0b", fontSize: '17px' }}>Foreign Exchange Rate Applicable</p>
              <p style={{ color: "#ff6b0b", fontSize: '17px' }}>On {formattedDate2}</p>
            </div>
          </div>
          <div className={styles.ecxhangerightImg}>

            <div className={styles.popOuter}>
              <div className={styles.popexchange} style={{ marginBottom: '10px' }}>

                {/* <p className={styles.popexchangeHeader} style={{ fontSize: '25px', fontWeight: "600" }}>Exchange Rate</p> */}
                <table>
                  <thead>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th colSpan={2} style={{ paddingLeft: '5%' }} >Cash Notes</th>
                    <th colSpan={2} style={{ paddingLeft: '5%' }}>Transactions</th>
                  </thead>
                  <thead>
                    <tr>
                      <th>{formattedDate}</th>
                      <th>Currency Code</th>
                      <th>Unit</th>
                      <th>Buying</th>
                      <th>Selling</th>
                      <th>Buying</th>
                      <th>Selling</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rates.map((rate, index) => (
                      <tr key={rate.id} className={index % 2 === 1 ? styles.active : ''}>
                        <td><img src={`https://weg.back.strapi.wegagen.com${rate.attributes.flag.data[0].attributes.url}`} alt={rate.attributes.code} /></td>
                        <td>{rate.attributes.code}</td>
                        <td>{rate.attributes.unit}</td>
                        <td>{rate.attributes.buying}</td>
                        <td>{rate.attributes.selling}</td>
                        <td>{rate.attributes.tra_buying}</td>
                        <td>{rate.attributes.tra_selling}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            {/* <img src={mobileBanking}></img> */}
          </div>
        </div>

      </div>

      <div className={styles.stayConnected} >
        <div className={styles.leftImgMobile} data-aos="zoom-in" data-aos-delay="400">
          <img src={mobileBanking} />
        </div>
        <div className={styles.rightSide} data-aos="zoom-in" data-aos-delay="400">
          <p className={styles.headerTitle}>Wegagen Mobile Bank Application</p>
          <p className={styles.headerTitle2}>Your phone Your Bank</p>
          <p className={styles.paragraph}>
            Elevate your banking experience with our radical mobile banking app and innovative digital platform “Wegagen Mobile”.
            Our bank is dedicated to providing unparalleled, convenient and secured mobile banking service which ensures seamless access
            to your accounts and transactions anytime, anywhere. You can download our Wegagen Mobile app on Google Play Store or Apple Store.
          </p>
          <div className={styles.playStore}>
            <a href="https://play.google.com/store/apps/details?id=com.act.wegagen&hl" target="_blank" rel="noopener noreferrer"><img src={playstore}></img></a>
            <a href="https://apps.apple.com/in/app/wegagen-mobile/id6472656143" target="_blank" rel="noopener noreferrer"><img src={appstore}></img></a>
          </div>
        </div>
      </div>




      <div>
        <p className={styles.correspondentBanks}>Money Transfer <span>Agents</span></p>
        <hr className="hr" />
        <div className={styles.serviceSlider}>
          <Swiper
            modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
            effect="fade"
            spaceBetween={0}
            slidesPerView={4}
            loop={true}
            autoplay={{ delay: 3000 }}
            navigation={{ clickable: true }}
            pagination={{ clickable: true }}
          >
            <SwiperSlide> <img src={service1}  ></img> </SwiperSlide>
            <SwiperSlide> <img src={service2} ></img> </SwiperSlide>
            <SwiperSlide> <img src={service3} ></img> </SwiperSlide>
            <SwiperSlide> <img src={service4} ></img> </SwiperSlide>
            <SwiperSlide> <img src={service5} ></img> </SwiperSlide>
            <SwiperSlide> <img src={service6} ></img> </SwiperSlide>
            <SwiperSlide> <img src={service7} ></img> </SwiperSlide>
            <SwiperSlide> <img src={service8} ></img> </SwiperSlide>
          </Swiper>
        </div>
      </div>


      <div className={styles.Ebanking}>
        <ul>
          <li className={dispaly === 1 ? styles.active : styles.notActive} onMouseOver={() => setDisplay(1)} >
            <span>Efoyta</span> Digital Lending
          </li>
          <li className={dispaly === 2 ? styles.active : styles.notActive} onMouseOver={() => setDisplay(2)} >
            <span>Mobile</span> Banking
          </li>
          <li className={dispaly === 3 ? styles.active : styles.notActive} onMouseOver={() => setDisplay(3)} >
            <span>Internet</span> Banking
          </li>
          <li className={dispaly === 4 ? styles.active : styles.notActive} onMouseOver={() => setDisplay(4)} >
            <span>Card</span> Banking
          </li>
          {/* <li className={dispaly === 5 ? styles.active : styles.notActive} onMouseOver={() => setDisplay(5)} >
            <span>Agent</span> Banking
          </li> */}
        </ul>

        {dispaly == 1 ? (
          <div className="animate__animated animate__bounceInUp customAnimationDuration">
            <div className={styles.business}>
              <div className={styles.rightSide}>
                <p className={styles.headerTitle}>Efoyta Digital Lending</p>
                <p className={styles.paragraph}>
                  We understand the unique financing needs of SMEs and MSMEs. That's why we offer competitive interest rates to timely meet your financing needs.
                  Our intuitive Efoyta application makes it easy to apply for a business loan in just a few minutes. Simply provide some basic information about
                  your business, and our advanced algorithms will assess your eligibility and provide a decision quickly. Our team of experienced lending
                  specialists is here to guide you through the process every step of the way.
                </p>
              </div>
              <div className={styles.rightImg}>
                <img src={efoyita}></img>
              </div>
            </div>
          </div>
        ) : ("")}

        {dispaly == 2 ? (
          <div className="animate__animated animate__bounceInUp customAnimationDuration">
            <div className={styles.business}>
              <div className={styles.rightSide}>
                <p className={styles.headerTitle}>Mobile Banking</p>
                <p className={styles.headerTitle2}>Your Phone Your Bank</p>
                <p className={styles.paragraph}>
                  With our highly convenient Wegagen Mobile app, you can embark on a seamless and digital mobile banking experience like never before.
                  Wegagen Mobile app supports five languages - Amharic, English, Afaan Oromo, Tigrigna, and Somali, ensuring accessibility for all.
                  Additionally, customers can dial *866# to get mobile banking services without the need for a smart phone or access to the internet.
                </p>
              </div>
              <div className={styles.rightImg}>
                <img src={mobileBanking}></img>
              </div>
            </div>
          </div>
        ) : ("")}


        {dispaly == 3 ? (
          <div className="animate__animated animate__bounceInUp">
            <div className={styles.business} >
              <div className={styles.rightSide}>
                <p className={styles.headerTitle}>Internet Banking</p>
                <p className={styles.headerTitle2}>CLICK WEGAGEN</p>
                <p className={styles.paragraph} style={{ paddingBottom: '1px' }}>
                  With our efficient and dependable "CLICK WEGAGEN" Internet Banking solution, customers can access and manage their accounts anytime, anywhere through an Internet connection using the Bank’s own website. <br />
                </p>
                <p><a href="https://www.wegagenbanksc.com.et:4443/" target="_blank" rel="noopener noreferrer">https://www.wegagenbanksc.com.et:4443/</a></p>
              </div>
              <div className={styles.rightImg}>
                <img src={internetBanking}></img>
              </div>
            </div>
          </div>
        ) : ("")}

        {dispaly == 4 ? (
          <div className="animate__animated animate__bounceInUp">
            <div className={styles.business} >
              <div className={styles.rightSide}>
                <h1 className={styles.headerTitle}>Card Banking</h1>
                {/* <h1 className={styles.headerTitle2}>Now you can own anything, anytime anywhere</h1> */}
                <p className={styles.paragraph}>
                  With Wegagen Bank's Agar, Nigat, and Amana cards; you can access a wide range of financial services anytime,
                  anywhere. Whether you need to make payments, transfer funds, or manage your accounts, our cards offer flexibility and assurance.
                  Embrace the simplicity of banking with Wegagen Bank's card offerings today!
                </p>
              </div>
              <div className={styles.rightImg}>
                <img src={cardBanking}></img>
              </div>
            </div>
          </div>

        ) : ("")}

        {/* {dispaly == 5 ? (
          <div className="animate__animated animate__bounceInUp">
            <div className={styles.business} >
              <div className={styles.rightSide}>
                <p className={styles.headerTitle}>Agent Banking</p>
                <p className={styles.headerTitle2}>WEGAGEN HELLOCASH</p>
                <p className={styles.paragraph}>
                  Our Agent Banking service aims to cultivate financial inclusion by expanding its reach beyond traditional
                  branches through a network of authorized & capable agents. Our HelloCash Mobile and Agent Banking services aims to
                  facilitate local money transfer, payment, cash deposit and cash withdrawal. Please visit our agents and Bank branches or call at *8919#.
                </p>
              </div>
              <div className={styles.rightImg}>
                <img src={agentBanking}></img>
              </div>
            </div>
          </div>
        ) : ("")} */}
      </div>


      <div className={styles.newsAndExchange}>
        <div className={styles.news1}>
          <h6 className={styles.newsHeader}>Latest News</h6>
          {newsData.length > 0 ? (
            <div className={styles.news}>

              {newsData.map((newsItem) => {
                const firstParagraphText = newsItem.attributes.description[0]?.children.map(child => child.text).join(' ') || '';
                const displayedText = firstParagraphText.slice(0, 140) + (firstParagraphText.length > 140 ? '...' : '');

                return (
                  <div key={newsItem.id} className={styles.newsContent} data-aos="zoom-in" data-aos-delay="400">
                    <img
                      src={newsItem.attributes.featured_image?.data ? `https://weg.back.strapi.wegagen.com${newsItem.attributes.featured_image.data.attributes.url}` : news}
                      alt="Featured"
                      className={styles.newsImgs}
                      onClick={() => newsDetail(newsItem.id)}
                    />
                    <label>{newsItem.attributes.title}</label>
                    <p>{displayedText}</p>
                    <div className={styles.moreNews}>
                      <p onClick={() => newsDetail(newsItem.id)}>Read More <FaArrowRight style={{ paddingLeft: '8px' }} size="1.5vw"></FaArrowRight></p>
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


          <Link to="/News"><button className={styles.seeAllNews}>Read More News</button></Link>
        </div>

      </div>


      <div>
        <p className={styles.correspondentBanks}>Correspondent <span>Banks</span></p>
        <hr className="hr" />
        <div className={styles.bankSlider}>
          <Swiper
            modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
            effect="fade"
            spaceBetween={0}
            slidesPerView={5}
            loop={true}
            autoplay={{ delay: 2000 }}
            navigation={{ clickable: true }}
            pagination={{ clickable: true }}
          >
            <SwiperSlide> <img src={bank1}  ></img> </SwiperSlide>
            <SwiperSlide> <img src={bank2} ></img> </SwiperSlide>
            <SwiperSlide> <img src={bank3} ></img> </SwiperSlide>
            <SwiperSlide> <img src={bank4} ></img> </SwiperSlide>
            <SwiperSlide> <img src={bank5} ></img> </SwiperSlide>
            <SwiperSlide> <img src={bank6} ></img> </SwiperSlide>
            <SwiperSlide> <img src={bank7} ></img> </SwiperSlide>
            <SwiperSlide> <img src={bank8} ></img> </SwiperSlide>
            <SwiperSlide> <img src={bank9} ></img> </SwiperSlide>
            <SwiperSlide> <img src={bank10} ></img> </SwiperSlide>
          </Swiper>
        </div>
      </div>


      <div>
        <div className={styles.productService}>
          <h4 className={styles.productServicesTitle}>Our Product and Services</h4>
          <div className={styles.allServices}>
            <div className={styles.services} data-aos="zoom-in" data-aos-delay="400">
              <div>
                <label>Nigat <span>Women Account</span></label>
                <p>Gender-oriented banking solutions which is designed to help women improve their saving habits by offering attractive features for women at all levels of the economic pyramid.</p>
                <div className={styles.readMore2}>
                  <button style={{ display: 'flex', justifyContent: 'left' }} onClick={bankingService}>Read More</button>
                </div>
              </div>
            </div>
            <div className={styles.services} data-aos="zoom-in" data-aos-delay="400">
              <div>
                <label>Goh <span>Junior Account</span></label>
                <p>This is a high interest yielding saving account opened by parents/guardians on behalf of their children for their future use when they turn 18 or older</p>
                <div className={styles.readMore2}>
                  <button style={{ display: 'flex', justifyContent: 'left' }} onClick={bankingService2} >Read More</button>
                </div>
              </div>
            </div>
            <div className={styles.services} data-aos="zoom-in" data-aos-delay="400">

              <div className={styles.arrowIcon}>
              </div>
              <div><label>Warka <span>Saving Account</span></label>
                <p>This is a saving account prepared for elders at age of 50 and above yielding a high interest to enhance their saving habits and facilitates hassle free banking experience.</p>
                <div className={styles.readMore2}>
                  <button style={{ display: 'flex', justifyContent: 'left' }} onClick={bankingService3} >Read More</button>
                </div>
              </div>
            </div>
            <div className={styles.services} data-aos="zoom-in" data-aos-delay="400">
              <div className={styles.arrowIcon}>
              </div>
              <div>
                <label>Biruh <span>Youth Account</span></label>
                <p>This is a saving account designed for young people in the age range of 18 to 24 years old in which they receive attractive interest based on the amount they deposited.</p>
                <div className={styles.readMore2}>
                  <button style={{ display: 'flex', justifyContent: 'left' }} onClick={bankingService4} >Read More</button>
                </div>
              </div>
            </div>
            <div className={styles.services} data-aos="zoom-in" data-aos-delay="400">
              <div className={styles.arrowIcon}>
              </div>
              <div>
                <label>Wegagen Amana <span>IFB</span></label>
                <p>It is a tailored Interest-Free banking service in accordance with Sharia laws, offered through dedicated windows and branches exclusively for our customers.</p>
                <div className={styles.readMore2}>
                  <button style={{ display: 'flex', justifyContent: 'left' }} onClick={Warka} >Read More</button>
                </div>
              </div>
            </div>
            <div className={styles.services} data-aos="zoom-in" data-aos-delay="400">
              <div className={styles.arrowIcon}>
              </div>
              <div>
                <label>Foreign Currency<span> Account</span></label>
                <p>A saving account is available for individuals residing in Ethiopia, as well as non-resident Ethiopians and individuals of non-resident Ethiopian origin, in accordance with the issuance of Directive No. FXD/68/2020.</p>
                <div className={styles.readMore2}>
                  <button style={{ display: 'flex', justifyContent: 'left' }} onClick={bankingService5} >Read More</button>
                </div>
              </div>
            </div>
            <div className={styles.services} data-aos="zoom-in" data-aos-delay="400">
              <div>
                <label>Edir/Equb   <span>Saving Account</span></label>
                <p>A saving account tailored for Equib and Edir unions that offer an interest rate higher than the standard industry market rate.</p>
                <div className={styles.readMore2}>
                  <button style={{ display: 'flex', justifyContent: 'left' }} onClick={bankingService6} >Read More</button>
                </div>
              </div>
            </div>
            <div className={styles.services} data-aos="zoom-in" data-aos-delay="400" >
              <div className={styles.arrowIcon}>
              </div>
              <div>
                <label>NOW <span>Account</span></label>
                <p>This is an account offered to institutions and business persons as well as large individual depositors who have less frequent withdrawals.</p>
                <div className={styles.readMore2}>
                  <button style={{ display: 'flex', justifyContent: 'left' }} onClick={bankingService7}  >Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className={styles.wrapper}>

          <div className={styles.container}>
            <i><FaUserTie /></i>
            <span className={styles.num} data-val="340">
              <ScrollTrigger onEnter={() => setCounterON(true)} onExit={() => setCounterON(false)}>
                {counterOn && <CountUp
                  start={0}
                  end={3638749}
                  duration={3}
                />} +
              </ScrollTrigger>
            </span>
            <span className={styles.text}>Customers</span>
          </div>

          <div className={styles.container}>
            <i><FaUsers /></i>
            <span className={styles.num} data-val="340">
              <ScrollTrigger onEnter={() => setCounterON(true)} onExit={() => setCounterON(false)}>
                {/* <div style={{ fontSize: "15px" }}> */}
                {counterOn && <CountUp
                  start={0}
                  end={5426}
                  duration={4}
                />} +
                {/* </div> */}
              </ScrollTrigger>
            </span>
            <span className={styles.text}>Employees</span>
          </div>

          <div className={styles.container}>
            <i><BsBank /></i>
            <span className={styles.num} data-val="340">
              <ScrollTrigger onEnter={() => setCounterON(true)} onExit={() => setCounterON(false)}>
                {/* <div style={{ fontSize: "15px" }}> */}
                {counterOn && <CountUp
                  start={0}
                  end={438}
                  duration={5}
                />} +
                {/* </div> */}
              </ScrollTrigger>
            </span>
            <span className={styles.text}>Branches</span>
          </div>

          <div className={styles.container}>
            <i style={{ color: '#ff6b0b' }}><GrAtm color="#ff6b0b" /></i>
            <span className={styles.num} data-val="340">
              <ScrollTrigger onEnter={() => setCounterON(true)} onExit={() => setCounterON(false)}>
                {/* <div style={{ fontSize: "15px" }}> */}
                {counterOn && <CountUp
                  start={0}
                  end={385}
                  duration={6}
                />}+
                {/* </div> */}
              </ScrollTrigger>
            </span>
            <span className={styles.text}>ATMs</span>
          </div>

          <div className={styles.container}>
            <i style={{ color: '#ff6b0b' }}><MdSupportAgent color="#ff6b0b" /></i>
            <span className={styles.num} data-val="340">
              <ScrollTrigger onEnter={() => setCounterON(true)} onExit={() => setCounterON(false)}>
                {counterOn && <CountUp
                  start={0}
                  end={4800} 
                  duration={7} 
                />}+
              </ScrollTrigger>
            </span>
            <span className={styles.text}>Agents</span>
          </div>

          <div className={styles.container}>
            <i style={{ color: '#ff6b0b', fontSize: '35px' }}><TbHttpPost color="#ff6b0b" /></i>
            <span className={styles.num} data-val="340">
              <ScrollTrigger onEnter={() => setCounterON(true)} onExit={() => setCounterON(false)}>
                {counterOn && <CountUp
                  start={0}
                  end={430}
                  duration={8}
                />}+
              </ScrollTrigger>
            </span>
            <span className={styles.text}>POS</span>
          </div>

        </div>




        {/* <div className={styles.map} >
          <p>Location</p>
          <Map />
        <iframe width="100%" height="100%" id="gmap_canvas" src="httpss://maps.google.com/maps?q=wegagen bank head&t=&z=10&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        </div> */}

        <Footer />
      </div>
    </div>
  );
}
