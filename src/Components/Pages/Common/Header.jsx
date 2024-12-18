import React from "react";
import "./header.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { RiMenu2Line } from "react-icons/ri";
import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Link } from "react-router-dom";
import "rsuite/dist/rsuite.min.css";
import { useNavigate } from "react-router-dom";

import { BsFacebook } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import {
  FaPhone,
  FaEnvelope,
  FaHome,
  FaBuilding,
  FaSwift,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

function Header({ path }) {
  const cardstoggle1 = () => {
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      html: (
        <div className="contactLists">
          <h6
            style={{
              fontSize: "30px",
              color: "#ff6b0b",
              fontWeight: "700",
              margin: "30px",
              marginBottom: "20px",
            }}
          >
            Contact Us
          </h6>
          <div className="icons">
            <h6>
              <FaPhoneVolume />
            </h6>
            <p>866</p>
          </div>
          <div className="icons">
            <h6>
              <FaLocationDot />
            </h6>
            <p>Wegagen Tower, Ras Mekonen St, Addis Ababa</p>
          </div>
          <div className="icons">
            <h6>
              <FaPhone />
            </h6>
            <p>+251 115 52 3800</p>
          </div>
          <div className="icons">
            <h6>
              <FaPhone />
            </h6>
            <p>+251 115 17 7500</p>
          </div>
          <div className="icons">
            <h6>
              <FaEnvelope />
            </h6>
            <p>info@wegagen.com</p>
          </div>
          <div className="icons">
            <h6>
              <FaSwift />
            </h6>
            <p>WEGAETAA</p>
          </div>
          <h5 className="popupMedias">
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/bankwegagen"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsFacebook />
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/WegagenBanksc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsTelegram />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/66893778/admin/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsLinkedin />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/WegagenBanksc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/wegagenbankofficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsInstagram />
                </a>
              </li>
              <li>
                <a
                  href="https://https://youtube.com/channel/UCksW-3Q5a3TKos-jTQp-LCA?view_as=subscriber"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsYoutube />
                </a>
              </li>
            </ul>
          </h5>
          <h6 style={{ fontSize: "12px", marginTop: "10px", color: "#004360" }}>
            Copyright © 2024 Wegagen Bank. Terms of Use | Privacy Policy
          </h6>
        </div>
      ),
      showConfirmButton: false,
      showDenyButton: false,
      showCloseButton: true,
      width: "420px",
      denyButtonText: "Close",
      showClass: { popup: "animate__animated animate__bounceIn" },
      hideClass: { popup: "animate__animated animate__zoomOut" },
    }).then((result) => {
      if (result.isDenied) {
      }
    });
  };

  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);

  const navigateToATMLocator = () => {
    MySwal.close();
    navigate("/ATM_Location");
  };

  const navigateToBranchLocator = () => {
    MySwal.close();
    navigate("/Branch_Location");
  };

  const cardstoggle2 = () => {
    MySwal.fire({
      html: (
        <div className="contactLists2">
          <label
            style={{
              fontSize: "30px",
              color: "#ff6b0b",
              fontWeight: "700",
              margin: "50px",
            }}
          >
            Location
          </label>
          <>
            <p
              style={{ textAlign: "center", cursor: "pointer" }}
              onClick={navigateToATMLocator}
            >
              ATM Locator
            </p>
            <p
              style={{ textAlign: "center", cursor: "pointer" }}
              onClick={navigateToBranchLocator}
            >
              {" "}
              Branch Locator{" "}
            </p>
          </>
        </div>
      ),
      showConfirmButton: false,
      showDenyButton: false,
      showCloseButton: true,
      width: "400px",
      denyButtonText: "Close",
      imageClass: "img-responsive",
      imageAlt: "Custom image",
      showClass: {
        popup: "animate__animated animate__bounceIn",
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

  const navigateToVacancy = () => {
    navigate("/Vacancy");
  };
  const navigateToBid = () => {
    navigate("/Bid");
  };

  const navigateToRateHistory = () => {
    navigate("/Rate_History");
  };

  const navigateToCyber = () => {
    navigate("/cyber-privacy-Policy");
  };


  return (
    <>
      <div className="header1">
        <div className="vacancy animate__animated animate__fadeInRight">
          <label
            onClick={() => {
              navigateToVacancy();
            }}
          >
            Career
          </label>
          <label
            onClick={() => {
              navigateToBid();
            }}
          >
            Bid
          </label>
          <label
            onClick={() => {
              cardstoggle1();
            }}
          >
            Contact Us
          </label>
          <label
            onClick={() => {
              cardstoggle2();
            }}
          >
            Location
          </label>
          {/* <label
            onClick={() => {
              navigateToRateHistory();
            }}
          >
            Rate History
          </label> */}
          {/* <label><span>Call 6782</span></label> */}
          <label><span><a href="https://edif.gov.et">EDIF</a></span></label>
          <label
            onClick={() => {
              navigateToCyber();
            }}
          >
            Cybersecurity Info
          </label>
        </div>
        <div className="socialMediasLinks animate__animated animate__fadeInRight">
          <label>
            <a
              href="https://www.facebook.com/bankwegagen"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
          </label>
          <label>
            <a
              href="https://twitter.com/WegagenBanksc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter />
            </a>
          </label>
          <label>
            <a
              href="https://t.me/WegagenBanksc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegramPlane />
            </a>
          </label>
          <label>
            <a
              href="https://linkedin.com/company/66893778/admin/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </label>
          <label>
            <a
              href="https://youtube.com/channel/UCksW-3Q5a3TKos-jTQp-LCA?view_as=subscriber"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsYoutube />
            </a>
          </label>
          <label>
            <a
              href="https://www.instagram.com/wegagenbankofficial/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsInstagram />
            </a>
          </label>
        </div>
        <div className="toggle">
          <p
            onClick={() => {
              setpopup(true);
            }}
          >
            <RiMenu2Line></RiMenu2Line>
          </p>
        </div>
      </div>
    </>
  );
}

export default Header;
