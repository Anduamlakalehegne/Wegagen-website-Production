import React, { useState, useEffect } from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import {
  Navigation,
  Pagination,
  Scrollbar,
  EffectCoverflow,
  A11y,
  Autoplay,
  FreeMode,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./aboutUs.module.css";
import "animate.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { BsFacebook } from "react-icons/bs";
import { FaUserCheck } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { HiLightBulb } from "react-icons/hi";
import About_us from "../../../assets/Images/common.jpg";
import defualt from "../../../assets/Images/149071.png";
import structure from "../../../assets/Images/New-Stracture-August-5.png";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Mega_Menu from "../Common/Mega_Menu";
import "./aboutUs.css";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { MdMenuOpen } from "react-icons/md";
import { FaInfoCircle } from "react-icons/fa";

import { useLocation } from "react-router-dom";
import StikyNav from "../Common/StikyNav";

export default function AboutUs() {
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
            {dispaly === 8 ? (
              <p
                onClick={() => {
                  handleClick(8, showMenu);
                }}
                style={
                  dispaly === 8
                    ? { backgroundColor: "#ff6b0b", color: "white" }
                    : { fontSize: "" }
                }
              >
                Corporate Social Responsibility
              </p>
            ) : (
              <>
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
                  About Wegagen Bank
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
                  Board of Directors
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
                  Core Management
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
                  Senior Management Team
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
                  Management Team
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
                  District Directors Team
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
                  Timeline
                </p>
              </>
            )}
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
    const percentage = 0.45; // 29.5%
    const targetScrollPosition = window.innerHeight * percentage;
    window.scrollTo(0, targetScrollPosition);
  };

  const [boardMembers, setBoardMembersData] = useState([]);
  const [boardMembers2, setBoardMembersData2] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://weg.back.strapi.wegagen.com/api/corporate-governances?filters[class][$eq]=Board%20of%20directors&populate=*"
        );
        const data = await response.json();
        const filteredData = data.data.filter((member) => member.id !== 1);
        setBoardMembersData(filteredData);

        const member = data.data.find((member) => member.id === 1);
        if (member) {
          setBoardMembersData2([member]);
        } else {
          setBoardMembersData2([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const showDetailPopup = (member) => {
    MySwal.fire({
      title: (
        <strong style={{ color: "#004360" }}>
          {member.attributes.full_name}
        </strong>
      ),
      html: (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
          }}
        >
          <img
            src={`https://weg.back.strapi.wegagen.com${member.attributes.image.data.attributes.url}`}
            alt={member.attributes.full_name}
            style={{ width: "40%", marginRight: "20px" }}
          />
          <div>
            <p style={{ textAlign: "left" }}>
              <strong style={{ color: "#004360" }}>Position:</strong>{" "}
              {member.attributes.position}
            </p>
            <p style={{ textAlign: "left" }}>
              <strong style={{ color: "#004360" }}>Qualification:</strong>{" "}
              {member.attributes.qualification ||
                "No qualification information available"}
            </p>
            <p style={{ textAlign: "left" }}>
              <strong style={{ color: "#004360" }}>Experience:</strong>{" "}
              {member.attributes.work_experience ||
                "No work experience information available"}
            </p>
          </div>
        </div>
      ),
      showCloseButton: true,
      showConfirmButton: false,
      focusConfirm: false,
      width: "900px", // Adjusting width to accommodate side by side layout
      customClass: {
        popup: "animate__animated animate__bounceIn",
      },
      hideClass: {
        popup: "animate__animated animate__bounceOut",
      },
    });
  };

  const [coreManagements, setcoreManagements] = useState([]);
  const [coreManagements2, setcoreManagements2] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://weg.back.strapi.wegagen.com/api/corporate-governances?filters[class][$eq]=Core%20Management&populate=*"
        );
        const data = await response.json();
        const filteredData = data.data.filter((member) => member.id !== 11); // Filter out data with id=11
        setcoreManagements(filteredData);
        const member = data.data.find((member) => member.id === 11);
        if (member) {
          setcoreManagements2([member]);
        } else {
          setcoreManagements2([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const [senoirManagements, setSenoirManagements] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://weg.back.strapi.wegagen.com/api/corporate-governances?filters[class][$eq]=Senior%20Management&populate=*"
        );
        const data = await response.json();
        const filteredData = data.data.filter((member) => member.id !== 11); // Filter out data with id=11
        setSenoirManagements(filteredData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const [Managements, setManagements] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch initial data to get total count
        let response = await fetch(
          "https://weg.back.strapi.wegagen.com/api/corporate-governances?filters[class][$eq]=Management%20Team&pagination[page]=1&pagination[pageSize]=1"
        );
        let data = await response.json();
        const total = data.meta.pagination.total;

        // Fetch all data based on the total count
        response = await fetch(
          `https://weg.back.strapi.wegagen.com/api/corporate-governances?filters[class][$eq]=Management%20Team&pagination[page]=1&pagination[pageSize]=${total}&populate=*`
        );
        data = await response.json();

        // Optionally, you could sort or process data here if needed
        setManagements(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const [DistrictManagementTeam, setDistrictManagementTeam] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch initial data to get total count
        let response = await fetch(
          "https://weg.back.strapi.wegagen.com/api/corporate-governances?filters[class][$eq]=District%20Directors%20Team&populate=*"
        );
        let data = await response.json();
        setDistrictManagementTeam(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {/* <ExchangeRate /> */}

      <StikyNav />

      {/* <Mega_Menu path="aboutUs" />

            <Mega_Menu {...dispaly === 8 ? path === "csr" : path = "aboutUs"} /> */}

      {dispaly === 8 ? <Mega_Menu path="csr" /> : <Mega_Menu path="aboutUs" />}

      <div>
        <div className={styles.serviceimage}>
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
            >
              {dispaly === 8 ? (
                <p
                  onClick={() => handleNavigationClick(8)}
                  style={
                    dispaly === 8
                      ? { backgroundColor: "#ff6b0b", color: "white" }
                      : null
                  }
                >
                  Corporate Social Responsibility
                </p>
              ) : (
                <>
                  <p
                    onClick={() => handleNavigationClick(1)}
                    style={
                      dispaly === 1
                        ? { backgroundColor: "#ff6b0b", color: "white" }
                        : null
                    }
                  >
                    About Wegagen Bank
                  </p>
                  <p
                    onClick={() => handleNavigationClick(2)}
                    style={
                      dispaly === 2
                        ? { backgroundColor: "#ff6b0b", color: "white" }
                        : null
                    }
                  >
                    Board of Directors
                  </p>
                  <p
                    onClick={() => handleNavigationClick(3)}
                    style={
                      dispaly === 3
                        ? { backgroundColor: "#ff6b0b", color: "white" }
                        : null
                    }
                  >
                    Core Management
                  </p>
                  <p
                    onClick={() => handleNavigationClick(4)}
                    style={
                      dispaly === 4
                        ? { backgroundColor: "#ff6b0b", color: "white" }
                        : null
                    }
                  >
                    {" "}
                    Senior Management Team
                  </p>
                  <p
                    onClick={() => handleNavigationClick(5)}
                    style={
                      dispaly === 5
                        ? { backgroundColor: "#ff6b0b", color: "white" }
                        : null
                    }
                  >
                    {" "}
                    Management Team
                  </p>
                  <p
                    onClick={() => handleNavigationClick(6)}
                    style={
                      dispaly === 6
                        ? { backgroundColor: "#ff6b0b", color: "white" }
                        : null
                    }
                  >
                    {" "}
                    District Directors Team
                  </p>
                  <p
                    onClick={() => handleNavigationClick(7)}
                    style={
                      dispaly === 7
                        ? { backgroundColor: "#ff6b0b", color: "white" }
                        : null
                    }
                  >
                    Timeline
                  </p>
                </>
              )}
            </div>
          </div>
          {dispaly === 1 ? (
            <div>
              <p
                className={`${styles.history} animate__animated animate__bounceInUp`}
              >
                <p style={{ color: "#ff6b0b", fontSize: "35px" }}>
                  Establishment
                </p>
                <b style={{ fontSize: "23px", marginBottom: "20px" }}>
                  • Wegagen Bank S.C was established on November 1996 and
                  started operation on June 11, 1997.
                </b>
                <p style={{ marginBottom: "15px", marginTop: "20px" }}>
                  Established on November 1996, Wegagen Bank S.C. emerged from
                  the visionary mindset of sixteen founding members who
                  recognized the pivotal role financial institutions would play
                  in fostering sustained economic development.
                </p>
                <p style={{ marginBottom: "15px" }}>
                  With an initial paid-in capital of Birr 30 million, the bank
                  commenced operations from its head office in Gofa Sefer, Addis
                  Ababa. In October 2017, Wegagen Bank relocated to its current
                  impressive 23-storey Headquarters Building, situated in front
                  of Addis Ababa Stadium on Ras Mekonnen Street.
                </p>
                <p style={{ marginBottom: "55px" }}>
                  Today, Wegagen Bank stands as one of Ethiopia's largest
                  private banks, distinguished by its unwavering commitment to
                  service quality, diverse product offerings, and cutting-edge
                  technologies.
                </p>
              </p>
              <div className={styles.visionMission}>
                <div
                  className={styles.vision}
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <h6>VISION</h6>
                  <p>
                    “Aspiring to be a champion of excellence in banking business
                    in Ethiopia”
                  </p>
                </div>

                <div
                  className={styles.mission}
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <h6>MISSION</h6>
                  <p>
                    "Maximize stakeholders’ value by providing diversified
                    banking services through competent and motivated employees
                    and up-to-date technology"
                  </p>
                </div>
              </div>

              <div className={styles.service}>
                <p className={styles.ourValues}>OUR VALUES</p>
                <div className={styles.allCards}>
                  <div
                    className={styles.box}
                    data-aos="zoom-in"
                    data-aos-delay="100"
                  >
                    <div className={styles.glass}> </div>
                    <div className={styles.content}>
                      <label>
                        <FaUserCheck
                          style={{ fontSize: "50px", marginLeft: "10px" }}
                        ></FaUserCheck>
                      </label>
                      <h2>INTEGRITY</h2>
                      <p>
                        We do the right thing, even when no one is watching, we
                        keep our word and honor our commitments, we maintain
                        confidentiality and privacy of all stakeholders.
                      </p>
                    </div>
                  </div>

                  <div
                    className={styles.box}
                    data-aos="zoom-in"
                    data-aos-delay="200"
                  >
                    <div className={styles.glass}> </div>
                    <div className={styles.content}>
                      <label>
                        <FaUsers style={{ fontSize: "50px" }}></FaUsers>
                      </label>
                      <h2>TEAMWORK</h2>
                      <p>
                        We collaborate and work collectively to meet our common
                        goals, we promote and support a diverse, yet unified
                        team
                      </p>
                    </div>
                  </div>

                  <div
                    className={styles.box}
                    data-aos="zoom-in"
                    data-aos-delay="300"
                  >
                    <div className={styles.glass}> </div>
                    <div className={styles.content}>
                      <label>
                        <FaUserCheck
                          style={{ fontSize: "50px", marginLeft: "10px" }}
                        ></FaUserCheck>
                      </label>
                      <h2>RESPONSIVENESS</h2>
                      <p>
                        We adapt and respond rapidly to changes, we encourage
                        creativity and new ideas
                      </p>
                    </div>
                  </div>

                  <div
                    className={styles.box}
                    data-aos="zoom-in"
                    data-aos-delay="400"
                  >
                    <div className={styles.glass}> </div>
                    <div className={styles.content}>
                      <label>
                        <HiLightBulb style={{ fontSize: "50px" }}></HiLightBulb>
                      </label>
                      <h2>INNOVATION</h2>
                      <p>
                        We adapt and respond rapidly to changes, we encourage
                        creativity and new ideas
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className={styles.CorporateGovernance}
                  data-aos="zoom-in"
                  data-aos-delay="400"
                >
                  <h2>Corporate Governance</h2>
                  <p>
                    Wegagen Bank operates under the vigilant guidance of a
                    distinguished Board of Directors, consisting of a sage
                    chairperson, a well-regarded vice chairperson and a dynamic
                    team of nine accomplished directors. The Board of Directors
                    has Risk, Loan Review & Compliance Management; Audit; and HR
                    Affairs Sub-Board Committees which are keen to further
                    strengthen the corporate governance layer of the bank.
                    <br />
                    Assumed with the layer of overall management responsibility,
                    the Chief Executive Officer (CEO) leads the way,
                    orchestrating the harmonious synergy of three Deputy CEOs
                    alongside 11 Chief Officers. Upholding the principles of
                    wise governance, the bank's governance structure is further
                    fortified by 38 appointed directors, all entrusted to steer
                    the bank's strategic direction and ensure seamless
                    operations. Within this finely tuned joint, the skillful
                    management team, under the inspiring leadership of the CEO,
                    holds the key to charting the bank's course towards a
                    prosperous future with moto of excelling together.
                  </p>
                </div>

                <div
                  className={styles.OrganizationalStructure}
                  data-aos="zoom-in"
                  data-aos-delay="400"
                >
                  <h2>Organizational Structure</h2>
                  <img
                    style={{ width: "100%", margin: "auto" }}
                    src={structure}
                    alt=""
                  />
                </div>
              </div>

              <div></div>
            </div>
          ) : (
            ""
          )}

          {dispaly === 2 ? (
            <div>
              <div
                className={`${styles.Boardofdirectors} animate__animated animate__bounceInUp`}
              >
                <h2>Board of Directors</h2>
                <p>
                  At the helm of our Bank’s corporate governance, there are ten
                  Board of Directors, who have a wide-ranging educational
                  background and experience in managing and leading different
                  business companies both governmental and non-governmental
                  offices.
                </p>
              </div>
              <div>
                <div
                  className={styles.boardcontainer}
                  style={{ marginTop: "20px" }}
                >
                  {boardMembers2.map((member) => (
                    <div
                      key={member.id}
                      data-aos="zoom-in"
                      data-aos-delay="300"
                      className={`${styles.membercard2} animate__animated animate__bounceInUp`}
                    >
                      <img
                        src={`https://weg.back.strapi.wegagen.com${member.attributes.image.data.attributes.url}`}
                        alt={member.attributes.full_name}
                        className={styles.memberphoto}
                      />
                      <div className={styles.memberinfo}>
                        <h6>{member.attributes.full_name}</h6>
                        <p>{member.attributes.position}</p>
                      </div>
                      <FaInfoCircle
                        className={styles.infoIcon}
                        onClick={() => showDetailPopup(member)}
                      />
                    </div>
                  ))}
                </div>

                <div className={styles.boardcontainer}>
                  {boardMembers.map((member) => (
                    <div
                      key={member.id}
                      data-aos="zoom-in"
                      data-aos-delay="300"
                      className={`${styles.membercard2} animate__animated animate__bounceInUp`}
                      onClick={() => showDetailPopup(member)}
                    >
                      <img
                        src={`https://weg.back.strapi.wegagen.com${member.attributes.image.data.attributes.url}`}
                        alt={member.attributes.full_name}
                        className={styles.memberphoto}
                      />
                      <div className={styles.memberinfo}>
                        <h6>{member.attributes.full_name}</h6>
                        <p>{member.attributes.position}</p>
                      </div>
                      <FaInfoCircle
                        className={styles.infoIcon}
                        onClick={() => showDetailPopup(member)}
                      />
                    </div>
                  ))}
                </div>

                <div className={styles.Sub_Board_Committees}>
                  <h1 data-aos="zoom-in" data-aos-delay="100">
                    Sub-Board Committees
                  </h1>
                  <ol style={{ textAlign: "left" }}>
                    <li
                      style={{ marginBottom: "15px" }}
                      data-aos="zoom-in"
                      data-aos-delay="10"
                    >
                      <label>
                        I. Risk & Compliance Management and Loan Review
                        Sub-Committee
                      </label>
                      {/* <p>Members,</p> */}
                      <ul style={{ marginLeft: "25px" }}>
                        {/* 1.	Ato Alemseged Assefa */}
                        <li data-aos="zoom-in" data-aos-delay="100">
                          1. Ato Alemseged Assefa - Chairperson
                        </li>
                        <li data-aos="zoom-in" data-aos-delay="400">
                          2. Ato Fikru Jiregna - Member
                        </li>
                        <li data-aos="zoom-in" data-aos-delay="700">
                          3. Ato Tesfatsyon Desta - Member
                        </li>
                        <li data-aos="zoom-in" data-aos-delay="700">
                          4. Ato Zenfu Asfaw - Member
                        </li>
                      </ul>
                    </li>

                    <li
                      style={{ marginBottom: "15px" }}
                      data-aos="zoom-in"
                      data-aos-delay="10"
                    >
                      <label>II. Audit Sub-Committee </label>
                      {/* <p>Members,</p> */}
                      <ul style={{ marginLeft: "25px" }}>
                        <li data-aos="zoom-in" data-aos-delay="100">
                          1. Ato Hassen Yesuf - Chairperson
                        </li>
                        <li data-aos="zoom-in" data-aos-delay="400">
                          2. Ato Fithanegest Gebru - Member
                        </li>
                        <li data-aos="zoom-in" data-aos-delay="700">
                          3. Ato Abdishu Hussein - Member
                        </li>
                      </ul>
                    </li>

                    <li
                      style={{ marginBottom: "15px" }}
                      data-aos="zoom-in"
                      data-aos-delay="10"
                    >
                      <label>III. HR and IT Sub-Committee</label>
                      {/* <p>Members,</p> */}
                      <ul style={{ marginLeft: "25px" }}>
                        <li data-aos="zoom-in" data-aos-delay="100">
                          1. Ato Woldegabriel Naizghi - Chairperson
                        </li>
                        <li data-aos="zoom-in" data-aos-delay="400">
                          2. Ato Gebregziabher Haddush - Member
                        </li>
                        <li data-aos="zoom-in" data-aos-delay="700">
                          3. Ato Surafeal Berhe - Member
                        </li>
                      </ul>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}

          {dispaly === 3 ? (
            <div>
              <div className={styles.Boardofdirectors}>
                <h2>Core Management</h2>
              </div>
              {/* <div className={styles.boardcontainer} style={{ marginTop: '20px' }}>
                                {CoreManagement.map((member) => (
                                    <div
                                        data-aos="zoom-in"
                                        data-aos-delay="100"
                                        className={`${styles.membercard} animate__animated animate__bounceInUp`}
                                    >
                                        <img src={member.image} alt={member.name} className={styles.memberphoto} />

                                        <div className={styles.memberinfo}>
                                            <h6>{member.name}</h6>
                                            <p>{member.role}</p> 
                                        </div>
                                    </div>
                                ))}
                            </div> */}

              <div className={styles.boardcontainer}>
                {coreManagements2.map((member) => (
                  <div
                    key={member.id}
                    data-aos="zoom-in"
                    data-aos-delay="300"
                    className={`${styles.membercard} animate__animated animate__bounceInUp`}
                  >
                    <img
                      src={`https://weg.back.strapi.wegagen.com${member.attributes.image.data.attributes.url}`}
                      alt={member.attributes.full_name}
                      className={styles.memberphoto}
                    />
                    <div className={styles.memberinfo}>
                      <h6>{member.attributes.full_name}</h6>
                      <p>{member.attributes.position}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.boardcontainer}>
                {coreManagements.map((member) => (
                  <div
                    key={member.id}
                    data-aos="zoom-in"
                    data-aos-delay="300"
                    className={`${styles.membercard} animate__animated animate__bounceInUp`}
                  >
                    <img
                      src={`https://weg.back.strapi.wegagen.com${member.attributes.image.data.attributes.url}`}
                      alt={member.attributes.full_name}
                      className={styles.memberphoto}
                    />
                    <div className={styles.memberinfo}>
                      <h6>{member.attributes.full_name}</h6>
                      <p>{member.attributes.position}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            ""
          )}

          {dispaly === 4 ? (
            <div style={{ marginBottom: "20px" }}>
              <div className={styles.Boardofdirectors}>
                <h2>Senior Management Team</h2>
              </div>

              <div className={styles.boardcontainer}>
                {senoirManagements.map((member) => (
                  <div
                    key={member.id}
                    data-aos="zoom-in"
                    data-aos-delay="300"
                    className={`${styles.membercard} animate__animated animate__bounceInUp`}
                  >
                    <img
                      src={`https://weg.back.strapi.wegagen.com${member.attributes.image.data.attributes.url}`}
                      alt={member.attributes.full_name}
                      className={styles.memberphoto}
                    />
                    <div className={styles.memberinfo}>
                      <h6>{member.attributes.full_name}</h6>
                      <p>{member.attributes.position}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            ""
          )}

          {dispaly === 5 ? (
            <div style={{ marginBottom: "20px" }}>
              <div className={styles.Boardofdirectors}>
                <h2>Management Team</h2>
              </div>

              <div className={styles.boardcontainer}>
                {Managements.map((member) => (
                  <div
                    key={member.id}
                    data-aos="zoom-in"
                    data-aos-delay="300"
                    className={`${styles.membercard} animate__animated animate__bounceInUp`}
                  >
                    <img
                      src={`https://weg.back.strapi.wegagen.com${
                        member.attributes.image?.data?.attributes.url || defualt
                      }`} // Fallback to a default image if none is provided
                      alt={member.attributes.full_name}
                      className={styles.memberPhoto}
                      style={{ width: "90%", margin: "auto" }}
                    />
                    <div className={styles.memberinfo}>
                      <h6>{member.attributes.full_name}</h6>
                      <p>{member.attributes.position}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            ""
          )}

          {dispaly === 6 ? (
            <div className="animate__animated">
              <div className={styles.Boardofdirectors}>
                <h2>District Directors Team</h2>
              </div>

              <div className={styles.boardcontainer}>
                {DistrictManagementTeam.map((member) => (
                  <div
                    key={member.id}
                    data-aos="zoom-in"
                    data-aos-delay="300"
                    className={`${styles.membercard} animate__animated animate__bounceInUp`}
                  >
                    <img
                      src={`https://weg.back.strapi.wegagen.com${
                        member.attributes.image?.data?.attributes.url || defualt
                      }`} // Fallback to a default image if none is provided
                      alt={member.attributes.full_name}
                      className={styles.memberPhoto}
                      style={{ width: "90%", margin: "auto" }}
                    />
                    <div className={styles.memberinfo}>
                      <h6>{member.attributes.full_name}</h6>
                      <p>{member.attributes.position}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            ""
          )}

          {dispaly === 7 ? (
            <div className="animate__animated animate__bounceInUp">
              <div className={styles.Timeline}>
                <h2>Timeline</h2>

                <VerticalTimeline lineColor="#004360">
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work root"
                    date="1996"
                    dateClassName="dateClassName"
                    contentArrowStyle={{ borderRight: "10px solid  #e3e3e3" }}
                    contentStyle={{
                      background: "#e3e3e3",
                      color: "#5d5d5d",
                      paddingRight: "30px",
                    }}
                    iconStyle={{
                      background: "#ff8f12",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    icon={<span style={{ fontSize: "1.8vh" }}>Nov 13</span>}
                  >
                    <h6
                      style={{
                        fontSize: "18px",
                        color: "#ff8f12",
                        textAlign: "right",
                        marginBottom: "-10px",
                      }}
                      className="vertical-timeline-element-title"
                    >
                      Establishment
                    </h6>
                    <p style={{ fontSize: "13px", textAlign: "right" }}>
                      November 1996,established with a subscribed capital of
                      Birr 60 million and a paid up capital of Birr 30 million
                      with 16 shareholders
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "#e3e3e3", color: "#5d5d5d" }}
                    date="1997"
                    contentArrowStyle={{ borderRight: "7px solid  #e3e3e3" }}
                    dateClassName="dateClassName2"
                    iconStyle={{
                      background: "#ff8f12",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    icon={<span style={{ fontSize: "1.8vh" }}>Jun 16</span>}
                  >
                    <h6
                      style={{
                        fontSize: "18px",
                        color: "#ff6b0b",
                        textAlign: "left",
                        marginBottom: "-10px",
                      }}
                      className="vertical-timeline-element-title"
                    >
                      Started Operations
                    </h6>
                    <p style={{ fontSize: "13px" }}>
                      June,1997 started operations on with two Branches namely:
                      Goffa and Meskel
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2000"
                    dateClassName="dateClassName"
                    contentArrowStyle={{ borderRight: "7px solid  #e3e3e3" }}
                    contentStyle={{
                      background: "#e3e3e3",
                      color: "#5d5d5d",
                      paddingRight: "50px",
                    }}
                    iconStyle={{
                      background: "#ff8f12",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    icon={<span style={{ fontSize: "1.8vh" }}>Aug 16</span>}
                  >
                    <h6
                      style={{
                        fontSize: "17px",
                        color: "#ff8f12",
                        textAlign: "right",
                        marginBottom: "-10px",
                      }}
                      className="vertical-timeline-element-title"
                    >
                      Connecting Its Branches with Wide Area Network
                    </h6>
                    <p style={{ fontSize: "13px", textAlign: "right" }}>
                      August 2000, pioneered connecting its branches with wide
                      area network, enabling customers to access and manage
                      their account at any branch.
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "#e3e3e3", color: "#5d5d5d" }}
                    date="2007"
                    contentArrowStyle={{ borderRight: "7px solid  #e3e3e3" }}
                    dateClassName="dateClassName2"
                    iconStyle={{
                      background: "#ff8f12",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    icon={<span style={{ fontSize: "1.8vh" }}>Jun 16</span>}
                  >
                    <h6
                      style={{
                        fontSize: "17px",
                        color: "#ff6b0b",
                        textAlign: "left",
                        marginBottom: "-10px",
                      }}
                      className="vertical-timeline-element-title"
                    >
                      10th Anniversary
                    </h6>
                    <p style={{ fontSize: "13px" }}>
                      June 2007,Celebrated 10th Anniversary
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2010"
                    dateClassName="dateClassName"
                    contentArrowStyle={{ borderRight: "7px solid  #e3e3e3" }}
                    contentStyle={{
                      background: "#e3e3e3",
                      color: "#5d5d5d",
                      paddingRight: "50px",
                    }}
                    iconStyle={{
                      background: "#ff8f12",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    icon={<span style={{ fontSize: "1.8vh" }}>Jun 16</span>}
                  >
                    <h6
                      style={{
                        fontSize: "17px",
                        color: "#ff8f12",
                        textAlign: "right",
                        marginBottom: "-10px",
                      }}
                      className="vertical-timeline-element-title"
                    >
                      Introduced Card Banking
                    </h6>
                    <p style={{ fontSize: "13px", textAlign: "right" }}>
                      June 2010, introduced card banking with its brand Agar
                      Visa debit card, commenced service in City branches with
                      11 ATMs .It also started to accept Visa International card
                      service at its ATMs.
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "#e3e3e3", color: "#5d5d5d" }}
                    date="2011"
                    contentArrowStyle={{ borderRight: "7px solid  #e3e3e3" }}
                    dateClassName="dateClassName2"
                    iconStyle={{
                      background: "#ff8f12",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    icon={<span style={{ fontSize: "1.8vh" }}>Aug 16</span>}
                  >
                    <h6
                      style={{
                        fontSize: "16px",
                        color: "#ff6b0b",
                        textAlign: "left",
                        marginBottom: "-10px",
                      }}
                      className="vertical-timeline-element-title"
                    >
                      Omni Enterprise Core Banking System
                    </h6>
                    <p style={{ fontSize: "13px" }}>
                      August 2011,upgraded its banking technology to Omni
                      Enterprise Core Banking System
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2014"
                    dateClassName="dateClassName"
                    contentArrowStyle={{ borderRight: "7px solid  #e3e3e3" }}
                    contentStyle={{
                      background: "#e3e3e3",
                      color: "#5d5d5d",
                      paddingRight: "50px",
                    }}
                    iconStyle={{
                      background: "#ff8f12",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    icon={<span style={{ fontSize: "1.8vh" }}>Jan 16</span>}
                  >
                    <h6
                      style={{
                        fontSize: "17px",
                        color: "#ff8f12",
                        textAlign: "right",
                        marginBottom: "-10px",
                      }}
                      className="vertical-timeline-element-title"
                    >
                      Introduced Mobile Banking
                    </h6>
                    <p style={{ fontSize: "13px", textAlign: "right" }}>
                      January 2014,introduced Mobile Banking
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "#e3e3e3", color: "#5d5d5d" }}
                    date="2014"
                    contentArrowStyle={{ borderRight: "7px solid  #e3e3e3" }}
                    dateClassName="dateClassName2"
                    iconStyle={{
                      background: "#ff8f12",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    icon={<span style={{ fontSize: "1.8vh" }}>Dec 16</span>}
                  >
                    <h6
                      style={{
                        fontSize: "16px",
                        color: "#ff6b0b",
                        textAlign: "left",
                        marginBottom: "-10px",
                      }}
                      className="vertical-timeline-element-title"
                    >
                      Opens Its 100th Branch
                    </h6>
                    <p style={{ fontSize: "13px" }}>
                      December 2014,opens its 100th branch
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2016"
                    dateClassName="dateClassName"
                    contentArrowStyle={{ borderRight: "7px solid  #e3e3e3" }}
                    contentStyle={{
                      background: "#e3e3e3",
                      color: "#5d5d5d",
                      paddingRight: "50px",
                    }}
                    iconStyle={{
                      background: "#ff8f12",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    icon={<span style={{ fontSize: "1.8vh" }}>Jan 16</span>}
                  >
                    <h6
                      style={{
                        fontSize: "17px",
                        color: "#ff8f12",
                        textAlign: "right",
                        marginBottom: "-10px",
                      }}
                      className="vertical-timeline-element-title"
                    >
                      Master Card Payment Service
                    </h6>
                    <p style={{ fontSize: "13px", textAlign: "right" }}>
                      January 2016, started to deliver Master Card payment
                      service
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "#e3e3e3", color: "#5d5d5d" }}
                    date="2016"
                    contentArrowStyle={{ borderRight: "7px solid  #e3e3e3" }}
                    dateClassName="dateClassName2"
                    iconStyle={{
                      background: "#ff8f12",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    icon={<span style={{ fontSize: "1.8vh" }}>Jul 16</span>}
                  >
                    <h6
                      style={{
                        fontSize: "16px",
                        color: "#ff6b0b",
                        textAlign: "left",
                        marginBottom: "-10px",
                      }}
                      className="vertical-timeline-element-title"
                    >
                      Introduced Agency Banking
                    </h6>
                    <p style={{ fontSize: "13px" }}>
                      July 2016,introduced Agency Banking
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2017"
                    dateClassName="dateClassName"
                    contentArrowStyle={{ borderRight: "7px solid  #e3e3e3" }}
                    contentStyle={{
                      background: "#e3e3e3",
                      color: "#5d5d5d",
                      paddingRight: "50px",
                    }}
                    iconStyle={{
                      background: "#ff8f12",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    icon={<span style={{ fontSize: "1.8vh" }}>Jan 16</span>}
                  >
                    <h6
                      style={{
                        fontSize: "17px",
                        color: "#ff8f12",
                        textAlign: "right",
                        marginBottom: "-10px",
                      }}
                      className="vertical-timeline-element-title"
                    >
                      ATMs Reach 200
                    </h6>
                    <p style={{ fontSize: "13px", textAlign: "right" }}>
                      January 2017, number of ATMs reach 200
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "#e3e3e3", color: "#5d5d5d" }}
                    date="2017"
                    contentArrowStyle={{ borderRight: "7px solid  #e3e3e3" }}
                    dateClassName="dateClassName2"
                    iconStyle={{
                      background: "#ff8f12",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    icon={<span style={{ fontSize: "1.8vh" }}>Feb 16</span>}
                  >
                    <h6
                      style={{
                        fontSize: "16px",
                        color: "#ff6b0b",
                        textAlign: "left",
                        marginBottom: "-10px",
                      }}
                      className="vertical-timeline-element-title"
                    >
                      Opens Its 200th Branch
                    </h6>
                    <p style={{ fontSize: "13px" }}>
                      February 2017,opens its 200th branch
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "#e3e3e3", color: "#5d5d5d" }}
                    date="2017"
                    contentArrowStyle={{ borderRight: "7px solid  #e3e3e3" }}
                    dateClassName="dateClassName2"
                    iconStyle={{
                      background: "#ff8f12",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    icon={<span style={{ fontSize: "1.8vh" }}>Jun 16</span>}
                  >
                    <h6
                      style={{
                        fontSize: "16px",
                        color: "#ff8f12",
                        textAlign: "left",
                        marginBottom: "-10px",
                      }}
                      className="vertical-timeline-element-title"
                    >
                      500 Million Birr Profit
                    </h6>
                    <p style={{ fontSize: "13px" }}>
                      June , 2017 registers over 500 million Birr profit
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2017"
                    dateClassName="dateClassName"
                    contentArrowStyle={{ borderRight: "7px solid  #e3e3e3" }}
                    contentStyle={{
                      background: "#e3e3e3",
                      color: "#5d5d5d",
                      paddingRight: "50px",
                    }}
                    iconStyle={{
                      background: "#ff8f12",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    icon={<span style={{ fontSize: "1.8vh" }}>Jun 16</span>}
                  >
                    <h6
                      style={{
                        fontSize: "17px",
                        color: "#ff6b0b",
                        textAlign: "right",
                        marginBottom: "-10px",
                      }}
                      className="vertical-timeline-element-title"
                    >
                      Marked Its 20th Anniversary
                    </h6>
                    <p style={{ fontSize: "13px", textAlign: "right" }}>
                      June 2017 ,marked its 20th anniversary at Goffa Branch,
                      one of the first operational branches
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "#e3e3e3", color: "#5d5d5d" }}
                    date="2017"
                    contentArrowStyle={{ borderRight: "7px solid  #e3e3e3" }}
                    dateClassName="dateClassName2"
                    iconStyle={{
                      background: "#ff8f12",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    icon={<span style={{ fontSize: "1.8vh" }}>Jun 21</span>}
                  >
                    <h6
                      style={{
                        fontSize: "16px",
                        color: "#ff8f12",
                        textAlign: "left",
                        marginBottom: "-10px",
                      }}
                      className="vertical-timeline-element-title"
                    >
                      Paid Up Capital
                    </h6>
                    <p style={{ fontSize: "13px" }}>
                      June 2017,paid up capital reaches over 2 billion birr
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2017"
                    dateClassName="dateClassName"
                    contentArrowStyle={{ borderRight: "7px solid  #e3e3e3" }}
                    contentStyle={{
                      background: "#e3e3e3",
                      color: "#5d5d5d",
                      paddingRight: "50px",
                    }}
                    iconStyle={{
                      background: "#ff8f12",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    icon={<span style={{ fontSize: "1.8vh" }}>Ju1 17</span>}
                  >
                    <h6
                      style={{
                        fontSize: "17px",
                        color: "#ff6b0b",
                        textAlign: "right",
                        marginBottom: "-10px",
                      }}
                      className="vertical-timeline-element-title"
                    >
                      Re-Branded Corporate Brand Identity
                    </h6>
                    <p style={{ fontSize: "13px", textAlign: "right" }}>
                      July 2017, launched its re-branded corporate brand
                      identity
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "#e3e3e3", color: "#5d5d5d" }}
                    date="2017"
                    contentArrowStyle={{ borderRight: "7px solid  #e3e3e3" }}
                    dateClassName="dateClassName2"
                    iconStyle={{
                      background: "#ff8f12",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    icon={<span style={{ fontSize: "1.8vh" }}>Sep 16</span>}
                  >
                    <h6
                      style={{
                        fontSize: "16px",
                        color: "#ff8f12",
                        textAlign: "left",
                        marginBottom: "-10px",
                      }}
                      className="vertical-timeline-element-title"
                    >
                      Inaugurated Its 33 Storied Headquarters Building
                    </h6>
                    <p style={{ fontSize: "13px" }}>
                      September 2017,inaugurated its 33 storied Headquarters
                      Building in the presence of His Excellency , Dr. Mulatu
                      Teshome President of Federal Democratic Republic of
                      Ethiopia and Addis Ababa City Mayor, Ato Diriba Kuma
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2017"
                    dateClassName="dateClassName"
                    contentArrowStyle={{ borderRight: "7px solid  #e3e3e3" }}
                    contentStyle={{
                      background: "#e3e3e3",
                      color: "#5d5d5d",
                      paddingRight: "50px",
                    }}
                    iconStyle={{
                      background: "#ff8f12",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    icon={<span style={{ fontSize: "1.8vh" }}>Oct 16</span>}
                  >
                    <h6
                      style={{
                        fontSize: "17px",
                        color: "#ff6b0b",
                        textAlign: "right",
                        marginBottom: "-10px",
                      }}
                      className="vertical-timeline-element-title"
                    >
                      Moved To Its New Headquarters Building
                    </h6>
                    <p style={{ fontSize: "13px", textAlign: "right" }}>
                      October 2017,moved to its new Headquarters Building
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "#e3e3e3", color: "#5d5d5d" }}
                    date="2018"
                    contentArrowStyle={{ borderRight: "7px solid  #e3e3e3" }}
                    dateClassName="dateClassName2"
                    iconStyle={{
                      background: "#ff8f12",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    icon={<span style={{ fontSize: "1.8vh" }}>Jan 16</span>}
                  >
                    <h6
                      style={{
                        fontSize: "16px",
                        color: "#ff8f12",
                        textAlign: "left",
                        marginBottom: "-10px",
                      }}
                      className="vertical-timeline-element-title"
                    >
                      Flex Cube Core Banking System
                    </h6>
                    <p style={{ fontSize: "13px" }}>
                      January 2018, implemented Flex Cube Core Banking System
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2018"
                    dateClassName="dateClassName"
                    contentArrowStyle={{ borderRight: "7px solid  #e3e3e3" }}
                    contentStyle={{
                      background: "#e3e3e3",
                      color: "#5d5d5d",
                      paddingRight: "50px",
                    }}
                    iconStyle={{
                      background: "#ff8f12",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    icon={<span style={{ fontSize: "1.8vh" }}>Jan 16</span>}
                  >
                    <h6
                      style={{
                        fontSize: "17px",
                        color: "#ff6b0b",
                        textAlign: "right",
                        marginBottom: "-10px",
                      }}
                      className="vertical-timeline-element-title"
                    >
                      Launched Internet Banking
                    </h6>
                    <p style={{ fontSize: "13px", textAlign: "right" }}>
                      January 2018, launched internet Banking
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "#e3e3e3", color: "#5d5d5d" }}
                    date="2018"
                    contentArrowStyle={{ borderRight: "7px solid  #e3e3e3" }}
                    dateClassName="dateClassName2"
                    iconStyle={{
                      background: "#ff8f12",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    icon={<span style={{ fontSize: "1.8vh" }}>Apr 16</span>}
                  >
                    <h6
                      style={{
                        fontSize: "16px",
                        color: "#ff8f12",
                        textAlign: "left",
                        marginBottom: "-10px",
                      }}
                      className="vertical-timeline-element-title"
                    >
                      Employees Reach Over 4,000
                    </h6>
                    <p style={{ fontSize: "13px" }}>
                      April 2018,number of employees reach over 4,000
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2021"
                    dateClassName="dateClassName"
                    contentArrowStyle={{ borderRight: "7px solid  #e3e3e3" }}
                    contentStyle={{
                      background: "#e3e3e3",
                      color: "#5d5d5d",
                      paddingRight: "50px",
                    }}
                    iconStyle={{
                      background: "#ff8f12",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    icon={<span style={{ fontSize: "1.8vh" }}>Jun 30</span>}
                  >
                    <h6
                      style={{
                        fontSize: "17px",
                        color: "#ff6b0b",
                        textAlign: "right",
                        marginBottom: "-10px",
                      }}
                      className="vertical-timeline-element-title"
                    >
                      Employees Reach Over 5,000
                    </h6>
                    <p style={{ fontSize: "13px", textAlign: "right" }}>
                      june 2021,number of employees reach over 5,000
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "#e3e3e3", color: "#5d5d5d" }}
                    date="2021"
                    contentArrowStyle={{ borderRight: "7px solid  #e3e3e3" }}
                    dateClassName="dateClassName2"
                    iconStyle={{
                      background: "#ff8f12",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    icon={<span style={{ fontSize: "1.8vh" }}>Oct 28</span>}
                  >
                    <h6
                      style={{
                        fontSize: "16px",
                        color: "#ff8f12",
                        textAlign: "left",
                        marginBottom: "-10px",
                      }}
                      className="vertical-timeline-element-title"
                    >
                      25th Anniversary
                    </h6>
                    <p style={{ fontSize: "13px" }}>
                      October 2022, Celebrated 25th Anniversary
                      {/* <img src={anniversary} style={{ width: '100%', backgroundSize: '100%' }}></img> */}
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2022"
                    dateClassName="dateClassName"
                    contentArrowStyle={{ borderRight: "7px solid  #e3e3e3" }}
                    contentStyle={{
                      background: "#e3e3e3",
                      color: "#5d5d5d",
                      paddingRight: "50px",
                    }}
                    iconStyle={{
                      background: "#ff8f12",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    icon={<span style={{ fontSize: "1.8vh" }}>Apr 12</span>}
                  >
                    <h6
                      style={{
                        fontSize: "17px",
                        color: "#ff6b0b",
                        textAlign: "right",
                        marginBottom: "-10px",
                      }}
                      className="vertical-timeline-element-title"
                    >
                      Shareholder Reach Over 5000
                    </h6>
                    <p style={{ fontSize: "13px", textAlign: "right" }}>
                      April 2022, numbers of shareholders reached over 5,000
                    </p>
                  </VerticalTimelineElement>

                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2023"
                    dateClassName="dateClassName"
                    contentArrowStyle={{ borderRight: "7px solid  #e3e3e3" }}
                    contentStyle={{
                      background: "#e3e3e3",
                      color: "#5d5d5d",
                      paddingRight: "50px",
                    }}
                    iconStyle={{
                      background: "#ff8f12",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    icon={<span style={{ fontSize: "1.8vh" }}>June 30</span>}
                  >
                    <h6
                      style={{
                        fontSize: "17px",
                        color: "#ff6b0b",
                        textAlign: "right",
                        marginBottom: "-10px",
                      }}
                      className="vertical-timeline-element-title"
                    >
                      Generated the Highest Ever Recorded Income & Profit
                    </h6>
                    <p style={{ fontSize: "13px", textAlign: "right" }}>
                      June 2023, Registered Birr 7 Billion Income and Birr 1.2
                      Billion Profit
                    </p>
                  </VerticalTimelineElement>

                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2024"
                    dateClassName="dateClassName"
                    contentArrowStyle={{ borderRight: "7px solid  #e3e3e3" }}
                    contentStyle={{
                      background: "#e3e3e3",
                      color: "#5d5d5d",
                      paddingRight: "50px",
                    }}
                    iconStyle={{
                      background: "#ff8f12",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    icon={<span style={{ fontSize: "1.8vh" }}>Feb 22</span>}
                  >
                    <h6
                      style={{
                        fontSize: "17px",
                        color: "#ff6b0b",
                        textAlign: "right",
                        marginBottom: "-10px",
                      }}
                      className="vertical-timeline-element-title"
                    >
                      Introduced Wegagen Mobile Application
                    </h6>
                    <p style={{ fontSize: "13px", textAlign: "right" }}>
                      Feb 2024, Launched Wegagen Mobile Application
                    </p>
                  </VerticalTimelineElement>

                  {/* <VerticalTimelineElement
                                        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }} 
                                        icon={<FaUsers />}
                                    /> */}
                </VerticalTimeline>
              </div>
            </div>
          ) : (
            ""
          )}

          {dispaly === 8 ? (
            <div className="animate__animated animate__bounceInUp">
              <div className={styles.Boardofdirectors}>
                <h2>Touch Lives, Build Futures.</h2>
                <p>
                  Parallel to undertaking its banking business, Wegagen Bank
                  gives due emphasis to corporate social responsibility as an
                  important aspect of its business. We strongly believe in
                  giving back to the society where we are operating. In line
                  with this, we engage in a range of different corporate social
                  responsibility initiatives that contribute to the wellbeing of
                  our society.
                </p>
                <p style={{ marginTop: "20px" }}>
                  Over the years, Wegagen Bank has donated millions of Birr to
                  several local development activities carried out in the areas
                  of education, philanthropy, health and clean water provision,
                  among others.
                </p>
              </div>

              <div className={styles.Boardofdirectors}>
                <h2>Environmental, Social and Governance Policy.</h2>
                <p>
                  At Wegagen Bank, we are unwavering in our dedication to
                  advancing social well-being and fostering sustainable economic
                  growth in Ethiopia. Guided by our robust Environmental,
                  Social, and Governance (ESG) policy, we proactively champion
                  impactful investment activities that drive positive change.
                </p>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
