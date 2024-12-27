import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "./termsAndTarrifs.module.css";
import Mega_Menu from "../Common/Mega_Menu";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { MdMenuOpen } from "react-icons/md";
import "animate.css";
import Aos from "aos";
import "aos/dist/aos.css";
import StikyNav from "../Common/StikyNav";
import Footer from "../Common/Footer";
import About_us from "../../../assets/Images/common.jpg";

const Efoyta_Terms_And_Tariffs = () => {
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
        <div className="leftNavBars" style={{ marginTop: "40px" }}>
          <div className={`animate__animated animate__fadeInLeft shortInfo`}>
            <p
              onClick={() => {
                handleClick(1, showMenu);
              }}
              style={
                dispaly === 1
                  ? { backgroundColor: "#ff6b0b", color: "white" }
                  : { fontSize: "" }
              }
            >
              1. Amendment Related to Collateral per Collateral
            </p>
            <p
              onClick={() => {
                handleClick(2, showMenu);
              }}
              style={
                dispaly === 2
                  ? { backgroundColor: "#ff6b0b", color: "white" }
                  : { fontSize: "" }
              }
            >
              2. Collateral Estimation
            </p>
            <p
              onClick={() => {
                handleClick(3, showMenu);
              }}
              style={
                dispaly === 3
                  ? { backgroundColor: "#ff6b0b", color: "white" }
                  : { fontSize: "" }
              }
            >
              3. Movable collateral Management fee
            </p>
            <p
              onClick={() => {
                handleClick(4, showMenu);
              }}
              style={
                dispaly === 4
                  ? { backgroundColor: "#ff6b0b", color: "white" }
                  : { fontSize: "" }
              }
            >
              4. Credit Processing fee
            </p>
            <p
              onClick={() => {
                handleClick(5, showMenu);
              }}
              style={
                dispaly === 5
                  ? { backgroundColor: "#ff6b0b", color: "white" }
                  : { fontSize: "" }
              }
            >
              5. Renegotiated loans
            </p>
            <p
              onClick={() => {
                handleClick(6, showMenu);
              }}
              style={
                dispaly === 6
                  ? { backgroundColor: "#ff6b0b", color: "white" }
                  : { fontSize: "" }
              }
            >
              6. Movable collateral Management fee
            </p>
            <p
              onClick={() => {
                handleClick(7, showMenu);
              }}
              style={
                dispaly === 7
                  ? { backgroundColor: "#ff6b0b", color: "white" }
                  : { fontSize: "" }
              }
            >
              7. Other IFB Terms And Tariffs
            </p>
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
      },
    }).then((result) => {
      if (result.isDenied) {
        //
      }
    });
  };
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
        <img src={About_us}></img>
      </div>

      <div className={styles.establishment}>
        <p
          className={styles.aboutUsMenu}
          onClick={() => {
            menutoggle();
          }}
        >
          <MdMenuOpen style={{ fontSize: "30px" }} />
        </p>

        <div className={styles.leftNavBars}>
          <div
            className={`animate__animated animate__fadeInLeft ${styles.shortInfo}`}
            style={{ height: "400px" }}
          >
            <p
              onClick={() => handleNavigationClick(1)}
              style={
                dispaly === 1
                  ? { backgroundColor: "#ff6b0b", color: "white" }
                  : null
              }
            >
              {" "}
              1. Efoyta Terms And Tariffs{" "}
            </p>
          </div>
        </div>

        {dispaly == 1 ? (
          <div
            className={`${styles.history} animate__animated animate__bounceInUp`}
          >
            <p className={styles.termsTitle}>Efoyta Terms And Tariffs</p>
            <table className={styles.container}>
              <thead>
                <tr className={styles.headerRowss}>
                  <th>No</th>
                  <th>Product</th>
                  <th>Interest</th>
                  <th>Facilitation Fee</th>
                  <th>Penalty Fee</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Efoyta Wase</td>
                  <td>0.6% per day</td>
                  <td>2%</td>
                  <td>0.15% per day</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Efoyta Mekoya</td>
                  <td>8% per month</td>
                  <td>2%</td>
                  <td>5% per month</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Efoyta Melegna</td>
                  <td>3.75% per 2 weeks</td>
                  <td>nill</td>
                  <td>0.5% per two weeks</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Efoyta Edget</td>
                  <td>3.75% per Month</td>
                  <td>nill</td>
                  <td>0.5% per month</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Efoyta Lanchi</td>
                  <td>10% per year</td>
                  <td>nill</td>
                  <td>5% per year</td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          ""
        )}
      </div>

      <Footer />
    </>
  );
};

export default Efoyta_Terms_And_Tariffs;
