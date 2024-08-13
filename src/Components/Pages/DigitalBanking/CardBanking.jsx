import React, { useState, useEffect } from "react";
import Header from '../Common/Header'
import ExchangeRate from '../Common/ExchangeRate'
import Slider from '../Common/Slider'
import About_us from "../../../assets/Images/common.jpg";
import agar1 from "../../../assets/Images/agar1.png";
import styles from "./cardBanking.module.css";
import "animate.css";
import Aos from "aos";
import "aos/dist/aos.css";
// import { FaUserCheck } from "react-icons/fa";
import { IoIosDoneAll } from "react-icons/io";
import Mega_Menu from "../Common/Mega_Menu";
import Footer from "../Common/Footer";
import card1 from "../../../assets/Images/AGAR.svg";
import card2 from "../../../assets/Images/Nigat.svg";
import card3 from "../../../assets/Images/amana.svg";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import StikyNav from "../Common/StikyNav";

function CardBanking() {

  useEffect(() => {
    Aos.init();
  }, []);

  const cardstoggle = () => {
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      html: (
        <div className={styles.popOuter}>

          <div className={styles.popImg}>
            <img src={card1} alt="Ager Card" />
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
        popup: "animate__animated animate__jackInTheBox",
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

  const cardstoggle2 = () => {
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      html: (
        <div className={styles.popOuter}>

          <div className={styles.popImg}>
            <img src={card2} alt="Ager Card" />
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
        popup: "animate__animated animate__jackInTheBox",
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
        popup: "animate__animated animate__jackInTheBox",
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


  return (
    <div>

      <Mega_Menu path="digitalBanking" />

      <StikyNav />

      <div className={styles.agarImage}>
        <img src={About_us} ></img>
      </div>

      {/* <p className={styles.title}>
        <h5>Card Banking Service</h5>
      </p>
      <p className={styles.title}>
        Offers easy and convenient access to make withdrawals and payment through our ATM and POS network
      </p> */}

      <p className={styles.title}>
        <h5>Card Banking Service</h5>
        <h5 style={{ fontSize: '21px', color: '#004360' }}>Description</h5>
      </p>
      <div className={styles.description}>
        <p>
          Offers easy and convenient access to make withdrawals and payment through our ATM and POS network
        </p>
      </div>

      <div className={styles.features}>
        <div className={styles.featuresTitle}>
          <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginRight: '1px' }}></p>
          <p style={{ backgroundColor: '#004360', margin: '10px', marginLeft: '1px' }}></p>
          <p>FEATURES:</p>
        </div>
        <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
          <li >Linked with any personal account </li>
          <li >Maximum daily cash withdrawal limit Birr 10,000 </li>
        </ul>
      </div>

      <p className={styles.RequirementTitle}>Basic Requirement to get the Product</p>
      <div className={styles.moreFeatures}>
        <div className={styles.leftFeatures}>
          <IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll>
        </div>
        <div className={styles.rightFeatures}>
          <p>
            Legal person/s who can have valid ID /passport
          </p>
        </div>
      </div>
      <div className={styles.moreFeatures}>
        <div className={styles.leftFeatures}>
          <IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll>
        </div>
        <div className={styles.rightFeatures}>
          <p>
            Must have an account with Wegagen Bank
          </p>
        </div>
      </div>


      <>
        <div className={styles.cards}>

          <div data-aos="zoom-in" data-aos-delay="100" className={styles.card1} >
            <label><object data={card1} alt="" /></label>
            <h6>Agar <span>Card</span></h6>
            <p>This card is developed for individuals who have an account number with Wegagen Bank. The card is linked to customer’s account.</p>
            <button className={styles.readMore} onClick={() => { cardstoggle() }}>Read More</button>
          </div>

          <div className={styles.card1} data-aos="zoom-in" data-aos-delay="100">
            <label><object data={card2} alt="" /></label>
            <h6>Nigat <span>Card</span></h6>
            <p>This is a personalized card for women with Nigat account.</p>
            <button className={styles.readMore} onClick={() => { cardstoggle2() }}>Read More</button>
          </div>

          <div className={styles.card1} data-aos="zoom-in" data-aos-delay="100">
            <label><object data={card3} alt="" /></label>
            <h6>Amana <span>Card </span></h6>
            <p>Amana is a specialized card for our Interest Free Banking Customers. The card is linked to customer’s account.</p>
            <button className={styles.readMore} onClick={() => { cardstoggle3() }}>Read More</button>
          </div>

        </div>
      </>

      <Footer />

    </div>
  )
}

export default CardBanking