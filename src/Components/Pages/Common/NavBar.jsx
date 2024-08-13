import React, { useState, useEffect } from "react";
import "./navbar.css";
// import { Navbar, Nav } from "rsuite/";
// import "rsuite/dist/rsuite.min.css";
import 'rsuite/dist/rsuite-no-reset.min.css';
import "animate.css";
import Aos from "aos";
import "aos/dist/aos.css";
import card1 from "../../../assets/Images/AGAR.svg";
import card2 from "../../../assets/Images/amana.svg";
import { Button, ButtonToolbar } from 'rsuite';
import { Navbar, Nav } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import CogIcon from '@rsuite/icons/legacy/Cog';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function NavBar({ path }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getColor = () => {
    return '#ff6b0b'
  }
  const getColor2 = () => {
    return '#565656'
  }

  const [showContent, setShowContent] = useState(1); 
  const [showContent2, setShowContent2] = useState(1);
  const [showContent3, setShowContent3] = useState(1);
  const [showContent4, setShowContent4] = useState(1);
  const [showContent5, setShowContent5] = useState(1);
  const [showContent6, setShowContent6] = useState(1);
  const myfunction = () => {
    setShowContent(2)
  }
  // const myfunction2 = () => {
  //   setShowContent2(true)
  // }

  return (
    <>
      <div className={`navigation ${scrolled ? "scrolled" : ""}`}>
        <center>
          <div>

            <div className="navigationContents">

              <Navbar>
                <Nav className={`navbarWhat ${scrolled ? "scrolled" : ""}`} >
                  <Nav.Item className="animate__animated animate__fadeInRight" icon={<HomeIcon style={path == "home" ? { color: getColor() } : { color: getColor2(), textDecoration: 'none', fontSize: '20px', }} />}> <Link to="/" style={path == "home" ? { color: getColor() } : { color: getColor2(), textDecoration: 'none' }} >Home</Link></Nav.Item>

                  <Nav.Menu appearance='subtle' title="Aboute Us" placement="bottomStart" className="animate__animated animate__zoomIn" style={path == "aboutUs" ? { color: getColor() } : { color: getColor2(), textDecoration: 'none' }} >

                    <div className="animate__animated animate__zoomIn" style={{ display: "grid", paddingTop: '10px', width: '70%', paddingBottom: '50px', }} >

                      <Nav.Item style={{ marginBottom: "-6px", }}><Link to="/aboutUs" style={{ textDecoration: 'none' }}>
                        <p onMouseOver={() => { setShowContent2(1) }} style={showContent2 == 1 ? { color: getColor() } : { color: "black" }} > Aboute Wegagen Bank</p>
                      </Link>
                      </Nav.Item>
                      <Nav.Item style={{ marginBottom: "-6px" }}><Link to='/CoprativeGovernance' style={{ textDecoration: 'none' }}>
                        <p onMouseOver={() => { setShowContent2(2) }} style={showContent2 == 2 ? { color: getColor() } : { color: "black" }}>Coprative Governance</p>
                      </Link></Nav.Item>
                      <Nav.Item style={{ marginBottom: "-6px" }}><Link to='/TimeLine' style={{ textDecoration: 'none' }}>
                        <p onMouseOver={() => { setShowContent2(3) }} style={showContent2 == 3 ? { color: getColor() } : { color: "black" }}>TimeLine</p>
                      </Link></Nav.Item>
                      <Nav.Item ><Link to='/CSR' style={{ textDecoration: 'none' }}>
                        <p onMouseOver={() => { setShowContent2(4) }} style={showContent2 == 4 ? { color: getColor() } : { color: "black" }}>Corporate Social Responsibility (CSR)</p>
                      </Link></Nav.Item>
                    </div>

                    <div style={{ display: "grid", paddingTop: '10px', paddingBottom: '100px', position: 'relative', }}  >

                      {showContent2 == 1 ?
                        <div style={{ height: '100px' }} className="animate__animated animate__zoomIn">
                          <Nav.Item style={{ marginBottom: "-6px", }}><Link to="#" style={{ textDecoration: 'none' }}>
                            <p style={{ fontSize: '21px', color: '#ff6b0b' }}>Aboute Wegagen Bank</p>
                            <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />Sed at alias quasi reprehenderit autem officiis<br /> voluptate cumque dignissimos saepe, incidunt sint mollitia esse, <br />molestias facere omnis laboriosam dolor ratione a! </p>
                          </Link>
                          </Nav.Item>
                        </div>
                        : ""}

                      {showContent2 == 2 ?
                        <div style={{ height: '100px' }} className="animate__animated animate__zoomIn">
                          <Nav.Item style={{ marginBottom: "-6px", }}><Link to="#" style={{ textDecoration: 'none' }}>
                            <p style={{ fontSize: '21px', color: '#ff6b0b' }}>Coprative Governance</p>
                            <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
                              Sed at alias quasi reprehenderit autem officiis<br />
                              voluptate cumque dignissimos saepe, incidunt sint mollitia esse, <br />
                              molestias facere omnis laboriosam dolor ratione a! </p>
                          </Link>
                          </Nav.Item>
                        </div>
                        : ""}

                      {showContent2 == 3 ?
                        <div style={{ height: '100px' }} className="animate__animated animate__zoomIn">
                          <Nav.Item style={{ marginBottom: "-6px", }}><Link to="#" style={{ textDecoration: 'none' }}>
                            <p style={{ fontSize: '21px', color: '#ff6b0b' }}>TimeLine</p>
                            <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
                              Sed at alias quasi reprehenderit autem officiis<br />
                              voluptate cumque dignissimos saepe, incidunt sint mollitia esse, <br />
                              molestias facere omnis laboriosam dolor ratione a! </p>
                          </Link>
                          </Nav.Item>
                        </div>
                        : ""}

                      {showContent2 == 4 ?
                        <div style={{ height: '100px' }} className="animate__animated animate__zoomIn">
                          <Nav.Item style={{ marginBottom: "-6px", }}><Link to="#" style={{ textDecoration: 'none' }}>
                            <p style={{ fontSize: '21px', color: '#ff6b0b' }}>Corporate Social Responsibility (CSR)</p>
                            <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
                              Sed at alias quasi reprehenderit autem officiis<br />
                              voluptate cumque dignissimos saepe, incidunt sint mollitia esse, <br />
                              molestias facere omnis laboriosam dolor ratione a! </p>
                          </Link>
                          </Nav.Item>
                        </div>
                        : ""}

                    </div>
                  </Nav.Menu>
                  <Nav.Menu appearance='subtle' title="Banking Services" placement="bottomStart" className="animate__animated animate__zoomIn" style={path == "bankingServices" ? { color: getColor() } : { color: getColor2(), textDecoration: 'none' }} >

                    <div className="animate__animated animate__zoomIn" style={{ display: "grid", paddingTop: '10px', width: '30%', paddingBottom: '50px', }} >

                      <Nav.Item className="xxxxxx" style={{ marginBottom: "-6px", }}><Link to="/aboutUs" style={{ textDecoration: 'none' }}>
                        <p onMouseOver={() => { setShowContent(1) }} style={showContent == 1 ? { color: getColor() } : { color: "black" }} >Personal Banking</p>
                      </Link>
                      </Nav.Item>
                      <Nav.Item style={{ marginBottom: "-6px" }}><Link to='/CoprativeGovernance' style={{ textDecoration: 'none' }}>
                        <p onMouseOver={() => { setShowContent(2) }} style={showContent == 2 ? { color: getColor() } : { color: "black" }} >Personal Loan</p>
                      </Link></Nav.Item>
                      <Nav.Item style={{ marginBottom: "-6px" }}><Link to='/TimeLine' style={{ textDecoration: 'none' }}>
                        <p onMouseOver={() => { setShowContent(3) }} style={showContent == 3 ? { color: getColor() } : { color: "black" }}>Special Banking</p>
                      </Link></Nav.Item>
                      <Nav.Item ><Link to='/CSR' style={{ textDecoration: 'none' }}>
                        <p onMouseOver={() => { setShowContent(4) }} style={showContent == 4 ? { color: getColor() } : { color: "black" }}>International Banking</p>
                      </Link></Nav.Item>
                    </div>


                    <div style={{ display: "grid", paddingTop: '10px', paddingBottom: '100px', width: '260px', position: 'relative', }}  >

                      {showContent == 1 ?
                        <div style={{ height: '100px' }} className="animate__animated animate__zoomIn">
                          <Nav.Item style={{ marginBottom: "-6px", }}><Link to="/AgarAccount" style={{ textDecoration: 'none' }}>
                            <p> Agar Account </p>
                          </Link>
                          </Nav.Item>
                          <Nav.Item style={{ marginBottom: "-6px" }}><Link to='/GohJunior' style={{ textDecoration: 'none' }}>
                            <p> Goh Junior </p>
                          </Link></Nav.Item>
                          <Nav.Item style={{ marginBottom: "-6px" }}><Link to='#' style={{ textDecoration: 'none' }}>
                            <p> Nigat Saving </p>
                          </Link></Nav.Item>
                          <Nav.Item style={{ marginBottom: "-6px" }}><Link to='#' style={{ textDecoration: 'none' }}>
                            <p> Diaspora Saving </p>
                          </Link></Nav.Item>
                        </div>

                        : ""}

                      {showContent == 2 ?
                        <div style={{ height: '100px' }} className="animate__animated animate__zoomIn">
                          <Nav.Item className="xxxxxx" style={{ marginBottom: "-6px", }}><Link to="#" style={{ textDecoration: 'none' }}>
                            <p> Personal Loan </p>
                          </Link>
                          </Nav.Item>
                          <Nav.Item style={{ marginBottom: "-6px" }}><Link to='#' style={{ textDecoration: 'none' }}>
                            <p> Consumer Loan </p>
                          </Link></Nav.Item>
                          <Nav.Item style={{ marginBottom: "-6px" }}><Link to='#' style={{ textDecoration: 'none' }}>
                            <p> Admas Loan </p>
                          </Link></Nav.Item>
                          <Nav.Item ><Link to='#' style={{ textDecoration: 'none' }}>
                            <p> Diaspora Loan </p>
                          </Link></Nav.Item>
                        </div>
                        : ""}

                      {showContent == 3 ?
                        <div style={{ height: '100px' }} className="animate__animated animate__zoomIn">
                          <Nav.Item className="xxxxxx" style={{ marginBottom: "-6px", }}><Link to="#" style={{ textDecoration: 'none' }}>
                            <p> Muday Saving </p>
                          </Link>
                          </Nav.Item>
                          <Nav.Item style={{ marginBottom: "-6px" }}><Link to='#' style={{ textDecoration: 'none' }}>
                            <p> Ekub Saving </p>
                          </Link></Nav.Item>
                        </div>
                        : ""}

                      {showContent == 4 ?
                        <div style={{ height: '100px' }} className="animate__animated animate__zoomIn">
                          <Nav.Item className="xxxxxx" style={{ marginBottom: "-6px", }}><Link to="#" style={{ textDecoration: 'none' }}>
                            <p> Remittance </p>
                          </Link>
                          </Nav.Item>
                          <Nav.Item style={{ marginBottom: "-6px" }}><Link to='#' style={{ textDecoration: 'none' }}>
                            <p> Trade Service </p>
                          </Link></Nav.Item>
                          <Nav.Item style={{ marginBottom: "-6px" }}><Link to='#' style={{ textDecoration: 'none' }}>
                            <p> Forex Service </p>
                          </Link></Nav.Item>
                          <Nav.Item ><Link to='#' style={{ textDecoration: 'none' }}>
                            <p> Money Transfer </p>
                          </Link></Nav.Item>
                        </div>
                        : ""}

                    </div>

                    <div style={{ display: "grid", paddingTop: '20px', paddingBottom: '100px', marginRight: '50px', marginLeft: '-40px' }} >
                      {showContent == 1 ?
                        <label className="animate__animated animate__zoomIn" style={{ width: '300px', height: '100px' }}><object style={{ width: '100%', margin: 'auto', paddingLeft: '35px', height: "150px" }} data={card1} alt="" /></label>
                        : ""}
                      {showContent == 2 ?
                        <label className="animate__animated animate__zoomIn" style={{ width: '300px', height: '100px' }}><object style={{ width: '100%', margin: 'auto', paddingLeft: '35px', height: "150px" }} data={card2} alt="" /></label>
                        : ""}
                      {showContent == 3 ?
                        <label className="animate__animated animate__zoomIn" style={{ width: '300px', height: '100px' }}><object style={{ width: '100%', margin: 'auto', paddingLeft: '35px', height: "150px" }} data={card1} alt="" /></label>
                        : ""}
                      {showContent == 4 ?
                        <label className="animate__animated animate__zoomIn" style={{ width: '300px', height: '100px' }}><object style={{ width: '100%', margin: 'auto', paddingLeft: '35px', height: "150px" }} data={card2} alt="" /></label>
                        : ""}
                    </div>
                  </Nav.Menu>

                  {/* <Nav.Menu title="Banking Services" className="animate__animated animate__fadeInRight">

                    <div style={{ display: "grid", }} >

                      <Nav.Menu title="Personal Banking" style={{ marginLeft: "-5px", marginTop: '-15px' }}>
                        <Nav.Item style={{ marginBottom: "-6px", }}>Agar Account</Nav.Item>
                        <Nav.Item style={{ marginBottom: "-6px" }}>Goh Junior </Nav.Item>
                        <Nav.Item style={{ marginBottom: "-6px" }}>Nigat Saving</Nav.Item>
                        <Nav.Item >Diaspora Saving</Nav.Item>
                      </Nav.Menu>

                      <Nav.Menu appearance="subtle" title="Personal Loan" style={{ marginLeft: "-5px", marginTop: '-60px' }}>
                        <Nav.Item style={{ marginBottom: "-6px" }}>Personal Loan</Nav.Item>
                        <Nav.Item style={{ marginBottom: "-6px" }}>Consumer Loan</Nav.Item>
                        <Nav.Item style={{ marginBottom: "-6px" }}>Admas Loan</Nav.Item>
                        <Nav.Item >Diaspora Loan</Nav.Item>
                      </Nav.Menu>
                      <Nav.Menu appearance="subtle" title="Special Banking" style={{ marginLeft: "-5px", marginTop: '-25px' }}>
                        <Nav.Item style={{ marginBottom: "-6px" }}>Muday Saving</Nav.Item>
                        <Nav.Item >Ekub Saving</Nav.Item>
                      </Nav.Menu>
                      <Nav.Menu appearance="subtle" title="International Banking" style={{ marginLeft: "-5px", marginTop: '-75px' }}>
                        <Nav.Item style={{ marginBottom: "-6px" }}>Remittance</Nav.Item>
                        <Nav.Item style={{ marginBottom: "-6px" }}>Trade Service</Nav.Item>
                        <Nav.Item style={{ marginBottom: "-6px" }}>Forex Service</Nav.Item>
                        <Nav.Item style={{ marginBottom: "-6px" }}>Money Transfer</Nav.Item>
                        <Nav.Item >Corporate Banking</Nav.Item>
                      </Nav.Menu>
                    </div>
                  </Nav.Menu>
                  */}

                  <Nav.Menu position='none' title="Digital Banking" className="animate__animated animate__zoomIn" >
                    <div className="animate__animated animate__zoomIn" style={{ display: "flex", flexDirection: "column", marginLeft: '10px' }}>
                      <Nav.Item style={{ marginBottom: "-6px" }}>
                        <p onMouseOver={() => { setShowContent3(1) }} style={showContent3 == 1 ? { color: getColor() } : { color: "black" }}>Card Banking</p>
                      </Nav.Item>
                      <Nav.Item style={{ marginBottom: "-6px" }}>
                        <p onMouseOver={() => { setShowContent3(2) }} style={showContent3 == 2 ? { color: getColor() } : { color: "black" }}>ATM Banking</p>
                      </Nav.Item>
                      <Nav.Item style={{ marginBottom: "-6px" }}>
                        <p onMouseOver={() => { setShowContent3(3) }} style={showContent3 == 3 ? { color: getColor() } : { color: "black" }}> Mobile Banking</p>
                      </Nav.Item>
                      <Nav.Item style={{ marginBottom: "-6px" }}>
                        <p onMouseOver={() => { setShowContent3(4) }} style={showContent3 == 4 ? { color: getColor() } : { color: "black" }}> Internet Banking</p>
                      </Nav.Item>
                      <Nav.Item >
                        <p onMouseOver={() => { setShowContent3(5) }} style={showContent3 == 5 ? { color: getColor() } : { color: "black" }}> Agent Banking</p>
                      </Nav.Item>
                    </div>

                    <div style={{ display: "grid", paddingTop: '10px', paddingBottom: '100px', position: 'relative', }}  >

                      {showContent3 == 1 ?
                        <div style={{ height: '100px' }} className="animate__animated animate__zoomIn">
                          <Nav.Item style={{ marginBottom: "-6px", }}><Link to="#" style={{ textDecoration: 'none' }}>
                            <p style={{ fontSize: '21px', color: '#ff6b0b' }}>Card Banking</p>
                            <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                              <br />Sed at alias quasi reprehenderit autem officiis<br />
                              voluptate cumque dignissimos saepe, incidunt sint mollitia, <br />
                              molestias facere omnis laboriosam dolor ratione a! </p>
                          </Link>
                          </Nav.Item>
                        </div>
                        : ""}

                      {showContent3 == 2 ?
                        <div style={{ height: '100px' }} className="animate__animated animate__zoomIn">
                          <Nav.Item style={{ marginBottom: "-6px", }}><Link to="#" style={{ textDecoration: 'none' }}>
                            <p style={{ fontSize: '21px', color: '#ff6b0b' }}>ATM Banking</p>
                            <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                              <br />Sed at alias quasi reprehenderit autem officiis<br />
                              voluptate cumque dignissimos saepe, incidunt sint mollitia, <br />
                              molestias facere omnis laboriosam dolor ratione a! </p>
                          </Link>
                          </Nav.Item>
                        </div>
                        : ""}

                      {showContent3 == 3 ?
                        <div style={{ height: '100px' }} className="animate__animated animate__zoomIn">
                          <Nav.Item style={{ marginBottom: "-6px", }}><Link to="#" style={{ textDecoration: 'none' }}>
                            <p style={{ fontSize: '21px', color: '#ff6b0b' }}>Mobile Banking</p>
                            <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
                              Sed at alias quasi reprehenderit autem officiis<br />
                              voluptate cumque dignissimos saepe, incidunt sint mollitia esse, <br />
                              molestias facere omnis laboriosam dolor ratione a! </p>
                          </Link>
                          </Nav.Item>
                        </div>
                        : ""}

                      {showContent3 == 4 ?
                        <div style={{ height: '100px' }} className="animate__animated animate__zoomIn">
                          <Nav.Item style={{ marginBottom: "-6px", }}><Link to="#" style={{ textDecoration: 'none' }}>
                            <p style={{ fontSize: '21px', color: '#ff6b0b' }}>Agent Banking</p>
                            <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
                              Sed at alias quasi reprehenderit autem officiis<br />
                              voluptate cumque dignissimos saepe, incidunt sint mollitia, <br />
                              molestias facere omnis laboriosam dolor ratione a! </p>
                          </Link>
                          </Nav.Item>
                        </div>
                        : ""}

                      {showContent3 == 5 ?
                        <div style={{ height: '100px' }} className="animate__animated animate__zoomIn">
                          <Nav.Item style={{ marginBottom: "-6px", }}><Link to="#" style={{ textDecoration: 'none' }}>
                            <p style={{ fontSize: '21px', color: '#ff6b0b' }}>Corporate Social Responsibility (CSR)</p>
                            <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
                              Sed at alias quasi reprehenderit autem officiis<br />
                              voluptate cumque dignissimos saepe, incidunt sint mollitia esse, <br />
                              molestias facere omnis laboriosam dolor ratione a! </p>
                          </Link>
                          </Nav.Item>
                        </div>
                        : ""}

                    </div>
                  </Nav.Menu>

                  {/* <Nav.Menu title="Market" className="animate__animated animate__fadeInRight">
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <Nav.Item style={{ marginBottom: "-6px" }}>Transaction Rate</Nav.Item>
                      <Nav.Item style={{ marginBottom: "-6px" }}>Cash Rate</Nav.Item>
                      <Nav.Item >Loan Calculator</Nav.Item>
                    </div>
                  </Nav.Menu> */}

                  <Nav.Menu title="Interest Free" className="animate__animated animate__zoomIn">
                    {/* <div style={{ display: "flex", flexDirection: "column" }}>
                      <Nav.Menu appearance="subtle" title="Saving Account" style={{ marginLeft: "-5px", marginTop: '-15px' }}>
                        <Nav.Item style={{ marginBottom: "-6px" }}>Wadya Aman Saving</Nav.Item>
                        <Nav.Item style={{ marginBottom: "-6px" }}>Wadya Child Saving </Nav.Item>
                        <Nav.Item style={{ marginBottom: "-6px" }}>Wadya Woman Saving</Nav.Item>
                        <Nav.Item style={{ marginBottom: "-6px" }}>Haj Mudaraba</Nav.Item>
                        <Nav.Item >Mudareba Investment</Nav.Item>
                      </Nav.Menu>
                      <Nav.Menu appearance="subtle" title="Financing" style={{ marginLeft: "-5px", marginTop: '-25px' }} >
                        <Nav.Item style={{ marginBottom: "-6px" }}>Mudaraba Financing</Nav.Item>
                        <Nav.Item >Kerd AL Hassan</Nav.Item>
                      </Nav.Menu>
                      <Nav.Menu appearance="subtle" title="Trust document (Kafala)" style={{ marginLeft: "-5px", marginTop: '-65px' }}>
                        <Nav.Item style={{ marginBottom: "-6px" }}>Bid Boand</Nav.Item>
                        <Nav.Item style={{ marginBottom: "-6px" }}>Advance Payment Guarantee</Nav.Item>
                        <Nav.Item style={{ marginBottom: "-6px" }}>Retention Payment Guarantee</Nav.Item>
                        <Nav.Item >Export and Import Trade</Nav.Item>
                      </Nav.Menu>
                    </div> */}

                    {/* <Nav.Menu appearance='subtle' title="Banking Services" placement="bottomStart" className="animate__animated animate__fadeInRight" style={path == "Banking_Services" ? { color: getColor() } : { color: getColor2(), textDecoration: 'none' }} > */}

                    <div className="animate__animated animate__zoomIn" style={{ display: "grid", paddingTop: '10px', width: '50%', height: '20px', paddingBottom: '10px', }} >

                      <Nav.Item className="xxxxxx" style={{ marginBottom: "-6px", }}><Link to="/aboutUs" style={{ textDecoration: 'none' }}>
                        <p onMouseOver={() => { setShowContent4(1) }} style={showContent4 == 1 ? { color: getColor() } : { color: "black" }} >Saving Account</p>
                      </Link>
                      </Nav.Item>
                      <Nav.Item style={{ marginBottom: "-6px" }}><Link to='/CoprativeGovernance' style={{ textDecoration: 'none' }}>
                        <p onMouseOver={() => { setShowContent4(2) }} style={showContent4 == 2 ? { color: getColor() } : { color: "black" }} >Financing</p>
                      </Link></Nav.Item>
                      <Nav.Item style={{ marginBottom: "-6px" }}><Link to='/CoprativeGovernance' style={{ textDecoration: 'none' }}>
                        <p onMouseOver={() => { setShowContent4(3) }} style={showContent4 == 3 ? { color: getColor() } : { color: "black" }} >Trust document (Kafala)</p>
                      </Link></Nav.Item>
                    </div>


                    <div style={{ display: "grid", paddingTop: '10px', paddingBottom: '10px', paddingLeft: '1px', height: '260px', width: '300px', position: 'relative', }}  >

                      {showContent4 == 1 ?
                        <div style={{ height: '100px' }} className="animate__animated animate__zoomIn">
                          <Nav.Item style={{ marginBottom: "-6px", }}><Link to="#" style={{ textDecoration: 'none' }}>
                            <p> Wadya Aman Saving </p>
                          </Link>
                          </Nav.Item>
                          <Nav.Item style={{ marginBottom: "-6px" }}><Link to='#' style={{ textDecoration: 'none' }}>
                            <p> Wadya Child Saving </p>
                          </Link></Nav.Item>
                          <Nav.Item style={{ marginBottom: "-6px" }}><Link to='#' style={{ textDecoration: 'none' }}>
                            <p> Wadya Woman Saving </p>
                          </Link></Nav.Item>
                          <Nav.Item style={{ marginBottom: "-6px" }}><Link to='#' style={{ textDecoration: 'none' }}>
                            <p> Haj Mudaraba </p>
                          </Link></Nav.Item>
                          <Nav.Item style={{ marginBottom: "-6px" }}><Link to='#' style={{ textDecoration: 'none' }}>
                            <p> Mudareba Investment </p>
                          </Link></Nav.Item>
                        </div>

                        : ""}

                      {showContent4 == 2 ?
                        <div style={{ height: '100px' }} className="animate__animated animate__zoomIn">
                          <Nav.Item className="xxxxxx" style={{ marginBottom: "-6px", }}><Link to="#" style={{ textDecoration: 'none' }}>
                            <p> Mudaraba Financing </p>
                          </Link>
                          </Nav.Item>
                          <Nav.Item style={{ marginBottom: "-6px" }}><Link to='#' style={{ textDecoration: 'none' }}>
                            <p> Kerd AL Hassan </p>
                          </Link></Nav.Item>
                        </div>
                        : ""}

                      {showContent4 == 3 ?
                        <div style={{ height: '100px' }} className="animate__animated animate__zoomIn">
                          <Nav.Item className="xxxxxx" style={{ marginBottom: "-6px", }}><Link to="#" style={{ textDecoration: 'none' }}>
                            <p> Bid Boand </p>
                          </Link>
                          </Nav.Item>
                          <Nav.Item style={{ marginBottom: "-6px" }}><Link to='#' style={{ textDecoration: 'none' }}>
                            <p> Advance Payment Guarantee </p>
                          </Link></Nav.Item>
                          <Nav.Item style={{ marginBottom: "-6px" }}><Link to='#' style={{ textDecoration: 'none' }}>
                            <p> Retention Payment Guarantee</p>
                          </Link></Nav.Item>
                          <Nav.Item style={{ marginBottom: "-6px" }}><Link to='#' style={{ textDecoration: 'none' }}>
                            <p> Export and Import Trade</p>
                          </Link></Nav.Item>
                        </div>
                        : ""}

                    </div>

                  </Nav.Menu>

                  <Nav.Menu title="News" placement="bottomStart" className="animate__animated animate__zoomIn" style={path == "news" ? { color: getColor() } : { color: getColor2(), textDecoration: 'none' }}>
                    <div className="animate__animated animate__zoomIn" style={{ display: "flex", flexDirection: "column", paddingRight: '20px' }}>
                      <Nav.Item style={{ marginBottom: "-6px" }}> <Link to='/News' style={path == "news" ? { color: getColor() } : { color: getColor2(), textDecoration: 'none' }}>Annual Report</Link></Nav.Item>
                      <Nav.Item style={{ marginBottom: "-6px" }}>Press Release</Nav.Item>
                      <Nav.Item >Shareholder Information</Nav.Item>
                    </div>
                  </Nav.Menu>
                </Nav>

              </Navbar>

            </div>
          </div>
        </center >
        <div>
          <p className="logo animate__animated animate__fadeInRight"></p>
        </div>
      </div >
    </>
  );
}

export default NavBar;
