import React, { useState, useEffect, useRef } from "react";
import "animate.css";
import './test.css'
import Header from "./Header";
import aboutUs from "../../../assets/Images/MenuFeature Image.png"
import aboutUs2 from "../../../assets/Images/MenuFeature Image2.png"
import { GrFormNext } from "react-icons/gr";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import WegagenLogo from "../../../assets/Images/logo.png";
import wadya from "../../../assets/Images/wadyaLogo.png";
import Header2 from "./Header2";
import { RiMenu2Line } from "react-icons/ri";
import { Sidenav, Nav } from 'rsuite';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import "rsuite/dist/rsuite.min.css";
import HomeIcon from '@rsuite/icons/legacy/Home';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { MdWork, MdContactPhone, MdLocationOn, MdPermMedia } from "react-icons/md";
import { RiFileForbidFill } from "react-icons/ri";
import { IoHome } from "react-icons/io5";
import { FaInfoCircle } from "react-icons/fa";
import { GiBanknote } from "react-icons/gi";
import { IoPhonePortrait } from "react-icons/io5";
import { BsCurrencyExchange } from "react-icons/bs";
import { BsMoonStarsFill } from "react-icons/bs";
import { BsFileEarmarkFontFill } from "react-icons/bs";
import ReactPlayer from 'react-player';
import { FaHandshakeAngle } from "react-icons/fa6";

import { FaFacebookF } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

import { BsFacebook } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FaPhone, FaEnvelope, FaHome, FaBuilding, FaSwift } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const MySwal = withReactContent(Swal);

function Mega_Menu({ path, headerSelect }) {

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
    const [popup, setPop] = useState(false);
    const [show, setShow] = useState(false);
    useEffect(() => {
        document.addEventListener('mouseover', handleClickOutside, true)
    }, [])
    const refOne = useRef(null)
    const handleClickOutside = (e) => {
        if (!refOne.current.contains(e.target)) {
            setPop(false);
        }
        else {
            setPop(true);

        }
    }

    const [showContent, setShowContent] = useState(1);
    const getColor = () => {
        return '#ff6b0b'
    }
    const getColor2 = () => {
        return '#1b1b1b'
    }


    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/aboutUs', { state: { display: 7 } });
    };
    const handleClick8 = () => {
        navigate('/aboutUs', { state: { display: 1 } });
    };
    const handleClick1 = () => {
        navigate('/aboutUs', { state: { display: 2 } });
    };
    const handleClick2 = () => {
        navigate('/aboutUs', { state: { display: 3 } });
    };
    const handleClick3 = () => {
        navigate('/aboutUs', { state: { display: 4 } });
    };
    const handleClick4 = () => {
        navigate('/aboutUs', { state: { display: 5 } });
    };
    const handleClick5 = () => {
        navigate('/aboutUs', { state: { display: 6 } });
    };
    const handleClick6 = () => {
        navigate('/aboutUs', { state: { display: 7 } });
    };
    const handleClick7 = () => {
        navigate('/aboutUs', { state: { display: 8 } });
    };
    const bankingService = () => {
        navigate('/Personal_Banking', { state: { display: 1 } });
    };
    const bankingService2 = () => {
        navigate('/Personal_Banking', { state: { display: 2 } });
    };
    const bankingService3 = () => {
        navigate('/Personal_Banking', { state: { display: 3 } });
    };
    const bankingService4 = () => {
        navigate('/Personal_Banking', { state: { display: 4 } });
    };
    const bankingService5 = () => {
        navigate('/Personal_Banking', { state: { display: 5 } });
    };
    const international_Banking = () => {
        navigate('/International_Banking', { state: { display: 1 } });
    };
    const international_Banking2 = () => {
        navigate('/International_Banking', { state: { display: 2 } });
    };
    const international_Banking3 = () => {
        navigate('/International_Banking', { state: { display: 3 } });
    };
    const international_Banking4 = () => {
        navigate('/International_Banking', { state: { display: 4 } });
    };
    const international_Banking5 = () => {
        navigate('/International_Banking', { state: { display: 5 } });
    };
    const international_Banking6 = () => {
        navigate('/International_Banking', { state: { display: 6 } });
    };
    const interest_free = () => {
        navigate('/Wadya_Aman_Saving', { state: { display: 1 } });
    };
    const interest_free2 = () => {
        navigate('/Wadya_Aman_Saving', { state: { display: 2 } });
    };
    const interest_free3 = () => {
        navigate('/Wadya_Aman_Saving', { state: { display: 3 } });
    };
    const interest_free4 = () => {
        navigate('/Wadya_Aman_Saving', { state: { display: 4 } });
    };
    const interest_free5 = () => {
        navigate('/Wadya_Aman_Saving', { state: { display: 5 } });
    };

    const financing1 = () => {
        navigate('/Financing_Products', { state: { display: 1 } });
    };
    const financing2 = () => {
        navigate('/Financing_Products', { state: { display: 2 } });
    };
    const financing3 = () => {
        navigate('/Financing_Products', { state: { display: 3 } });
    };
    

    const [isOpen, setIsOpen] = useState(false);
    const [animation, setAnimation] = useState('animate__slideInRight');

    const toggleSidebar = () => {
        if (isOpen) {
            // Set animation to slide out
            setAnimation('animate__slideOutRight');
            // Wait for the animation to finish before closing the sidebar
            setTimeout(() => {
                setIsOpen(false);
            }, 900); // Adjust the timeout to match the animation duration
        } else {
            // Open the sidebar with slide in animation
            setIsOpen(true);
            setAnimation('animate__slideInRight');
        }
    };

    const [activeMenu, setActiveMenu] = useState({});

    const toggleMenu = (key) => {
        setActiveMenu(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };
    const [animationClass, setAnimationClass] = useState('animate__fadeInUp');

    const cardstoggle1 = () => {
        const MySwal = withReactContent(Swal);
        MySwal.fire({
            html: (
                <div className='contactLists'>
                    <h6 style={{ fontSize: '30px', color: '#ff6b0b', fontWeight: '700', margin: '30px', marginBottom: '20px' }}>Contact Us</h6>
                    <div className='icons'>
                        <h6><FaPhoneVolume /></h6>
                        <p>866</p>
                    </div>
                    <div className='icons'>
                        <h6><FaLocationDot /></h6>
                        <p>Wegagen Tower, Ras Mekonen St, Addis Ababa</p>
                    </div>
                    <div className='icons'>
                        <h6><FaPhone /></h6>
                        <p>+251 115 52 3800</p>
                    </div>
                    <div className='icons'>
                        <h6><FaPhone /></h6>
                        <p>+251 115 17 7500</p>
                    </div>
                    <div className='icons'>
                        <h6><FaEnvelope /></h6>
                        <p>info@wegagen.com</p>
                    </div>
                    <div className='icons'>
                        <h6><FaSwift /></h6>
                        <p>WEGAETAA</p>
                    </div>
                    <h5 className='popupMedias'>
                        <ul>
                            <li><a href='https://www.facebook.com/bankwegagen'><BsFacebook /></a></li>
                            <li><a href='https://t.me/WegagenBanksc'><BsTelegram /></a></li>
                            <li><a href='https://linkedin.com/company/66893778/admin/'><BsLinkedin /></a></li>
                            <li><a href='https://twitter.com/WegagenBanksc'><BsTwitter /></a></li>
                            <li><a href='https://www.instagram.com/wegagenbankofficial/'><BsInstagram /></a></li>
                            <li><a href='https://https://youtube.com/channel/UCksW-3Q5a3TKos-jTQp-LCA?view_as=subscriber'><BsYoutube /></a></li>
                        </ul>
                    </h5>
                    <h6 style={{ fontSize: '12px', marginTop: '10px', color: '#004360' }}>Copyright © 2024 Wegagen Bank. Terms of Use | Privacy Policy</h6>

                </div>
            ),
            showConfirmButton: false,
            showDenyButton: false,
            showCloseButton: true,
            width: "420px",
            denyButtonText: "Close",
            showClass: { popup: "animate__animated animate__bounceIn", },
            hideClass: { popup: "animate__animated animate__zoomOut", }
        }).then((result) => { if (result.isDenied) { } });
    };

    // const navigate = useNavigate();
    const MySwal = withReactContent(Swal);

    const navigateToATMLocator = () => {
        MySwal.close();
        navigate('/ATM_Location');
    };

    const navigateToBranchLocator = () => {
        MySwal.close();
        navigate('/Branch_Location');
    };

    const cardstoggle2 = () => {

        MySwal.fire({
            html: (
                <div className='contactLists2'>
                    <label style={{ fontSize: '30px', color: '#ff6b0b', fontWeight: '700', margin: '50px' }}>Location</label>
                    <>
                        <p style={{ textAlign: 'center', cursor: 'pointer' }} onClick={navigateToATMLocator}>ATM Locator</p>
                        <p style={{ textAlign: 'center', cursor: 'pointer' }} onClick={navigateToBranchLocator}> Branch Locator </p>
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
            }
        }).then((result) => {
            if (result.isDenied) {
                // 
            }
        });
    };



    return (
        <>

            {isOpen && (
                <div className="sidebar-overlay" onClick={toggleSidebar}>
                    <div className={`custom-sidebar animate__animated ${animation}`} onClick={e => e.stopPropagation()}>
                        <button className="close-sidebar-button" onClick={toggleSidebar}>
                            <IoClose />
                        </button>
                        <h2 className="sideHeader"><img src={WegagenLogo}></img></h2>

                        <div className="sidebar-item">
                            {/* <div className="sidebar-link"><span className="link-icon">{getIcon('home')}</span> Home</div> */}
                            <Link to="/Vacancy" style={{ textDecoration: 'none' }}><div className="sidebar-link"><span className="link-icon"><MdWork /></span>Career</div></Link>
                            <Link to="/Bid" style={{ textDecoration: 'none' }}><div className="sidebar-link"><span className="link-icon"><RiFileForbidFill /></span>Bid</div></Link>
                            <div className="sidebar-link" onClick={() => { cardstoggle1() }}><span className="link-icon"><MdContactPhone /></span>Contact Us</div>
                            <div className="sidebar-link" onClick={() => { cardstoggle2() }}><span className="link-icon"><MdLocationOn /></span>Location</div>
                            <Link to="/" style={{ textDecoration: 'none' }}><div className="sidebar-link"><span className="link-icon"><IoHome /></span>Home</div></Link>
                        </div>

                        <div className="sidebar-item">
                            <div className="sidebar-link2" onClick={() => toggleMenu('aboutUs')}>
                                <span className="link-icon"><FaInfoCircle className="react-icon" /><p>About Us</p></span>

                                <span className={`dropdown-icon ${activeMenu['aboutUs'] ? 'rotated' : ''}`}>
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        width="24px"
                                        height="24px"
                                    ><path d="M7 10l5 5 5-5z"></path>
                                    </svg>
                                </span>
                            </div>
                            <div className={`submenu ${activeMenu['aboutUs'] ? 'expanded' : 'collapsed'}`}>
                                <a href="/aboutUs" style={{ color: '#004360' }}>About Wegagen Bank</a>
                                {/* <a onClick={handleClick2}>Coprative Governance</a> */}
                                <div className={`submenu ${activeMenu['aboutUs'] ? 'expanded' : 'collapsed'}`} style={{ borderLeft: "0px solid black" }}>
                                    <div className="sidebar-link2" onClick={() => toggleMenu('Governance')} style={{ marginLeft: '5px', fontSize: '15px', color: '#004360', }}>
                                        <span className="link-icon"><p>Corporate Governance</p></span>
                                        <span className={`dropdown-icon ${activeMenu['Governance'] ? 'rotated' : ''}`}>
                                            <svg
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                width="18px"
                                                height="18px"
                                            ><path d="M7 10l5 5 5-5z"></path>
                                            </svg>
                                        </span>
                                    </div>
                                    <div className={`submenu2 ${activeMenu['Governance'] ? 'expanded' : 'collapsed'}`} style={{ marginLeft: '5px', fontSize: '13px' }}>
                                        <a onClick={handleClick1}>Board of Directors</a>
                                        <a onClick={handleClick2}>Core Management</a>
                                        <a onClick={handleClick3}>Senior Management Team</a>
                                        <a onClick={handleClick4}>Management Team</a>
                                        <a onClick={handleClick5}>District Directors Team</a>
                                    </div>
                                </div>
                                <a onClick={handleClick} style={{ color: '#004360' }}>Timeline</a>
                                {/* <a onClick={handleClick7} style={{ color: '#004360' }}>Corporate Social Responsibility</a> */}
                            </div>
                        </div>

                        <div className="sidebar-item">
                            <div className="sidebar-link2" onClick={() => toggleMenu('BankingServices')}>
                                <span className="link-icon"><GiBanknote className="react-icon" /><p>Banking Services</p></span>
                                <span className={`dropdown-icon ${activeMenu['BankingServices'] ? 'rotated' : ''}`}>
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        width="24px"
                                        height="24px"
                                    ><path d="M7 10l5 5 5-5z"></path>
                                    </svg>
                                </span>
                            </div>
                            <div className={`submenu ${activeMenu['BankingServices'] ? 'expanded' : 'collapsed'}`}>
                                <div className="sidebar-link2" onClick={() => toggleMenu('PersonalBanking')} style={{ marginLeft: '10px', fontSize: '15px' }}>
                                    <span className="link-icon"><p>Personal Banking</p></span>
                                    <span className={`dropdown-icon ${activeMenu['PersonalBanking'] ? 'rotated' : ''}`}>
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            width="18px"
                                            height="18px"
                                        ><path d="M7 10l5 5 5-5z"></path>
                                        </svg>
                                    </span>
                                </div>
                                <div className={`submenu2 ${activeMenu['PersonalBanking'] ? 'expanded' : 'collapsed'}`} style={{ marginLeft: '5px', fontSize: '13px' }}>
                                    <a onClick={bankingService}>Local currency saving accounts</a>
                                    <a onClick={bankingService2}>Special Saving Account</a>
                                    <a onClick={bankingService3}>Goh Child Trust Account</a>
                                    <a onClick={bankingService4}>Nigat (Women) Saving Account</a>
                                    <a onClick={bankingService5}>Elders/Warka Saving Account</a>
                                </div>
                            </div>
                            <div className={`submenu ${activeMenu['BankingServices'] ? 'expanded' : 'collapsed'}`}>
                                <div className="sidebar-link2" onClick={() => toggleMenu('LoanFacilities')} style={{ marginLeft: '10px', fontSize: '15px' }}>
                                    <span className="link-icon"><p>Loan Facilities</p></span>
                                    <span className={`dropdown-icon ${activeMenu['LoanFacilities'] ? 'rotated' : ''}`}>
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            width="18px"
                                            height="18px"
                                        ><path d="M7 10l5 5 5-5z"></path>
                                        </svg>
                                    </span>
                                </div>
                                <div className={`submenu2 ${activeMenu['LoanFacilities'] ? 'expanded' : 'collapsed'}`} style={{ marginLeft: '5px', fontSize: '13px' }}>
                                    <a href="/loanFacilities">General eligibility Criteria</a>
                                    <a href="/Working_Capital_Loan">Working Capital Loan</a>
                                    <a href="/Asset_Financing_Loans">Asset Financing Loans</a>
                                    <a href="/Letter_of_Bank_Guarantee_Facilities">Letter of Bank Guarantee Facilities</a>
                                    <a href="/Rental_Loan">Retail Loans</a>
                                    <a href="/Diaspora_Loans">Diaspora Loans</a>
                                    <a href="/Personal_Loans_for_Salaried_Persons">Personal Loans for Salaried Persons</a>
                                </div>
                            </div>

                            <div className={`submenu ${activeMenu['BankingServices'] ? 'expanded' : 'collapsed'}`}>
                                <div className="sidebar-link2" onClick={() => toggleMenu('InternationalBanking')} style={{ marginLeft: '10px', fontSize: '15px' }}>
                                    <span className="link-icon"><p>International Banking</p></span>
                                    <span className={`dropdown-icon ${activeMenu['InternationalBanking'] ? 'rotated' : ''}`}>
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            width="18px"
                                            height="18px"
                                        ><path d="M7 10l5 5 5-5z"></path>
                                        </svg>
                                    </span>
                                </div>
                                <div className={`submenu2 ${activeMenu['InternationalBanking'] ? 'expanded' : 'collapsed'}`} style={{ marginLeft: '5px', fontSize: '13px' }}>
                                    <a onClick={international_Banking}>Letter of Credit</a>
                                    <a onClick={international_Banking2}>Cash Against Documents</a>
                                    <a onClick={international_Banking3}>Advance Payment</a>
                                    <a onClick={international_Banking4}>Consignment Basis Payment</a>
                                    <a onClick={international_Banking5}>Small Export Items</a>
                                    <a onClick={international_Banking6}>Guarantee</a>
                                </div>
                            </div>
                        </div>

                        <div className="sidebar-item">
                            <div className="sidebar-link2" onClick={() => toggleMenu('DigitalBanking')}>
                                <span className="link-icon"><IoPhonePortrait className="react-icon" /><p>Digital Banking</p></span>
                                <span className={`dropdown-icon ${activeMenu['DigitalBanking'] ? 'rotated' : ''}`}>
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        width="24px"
                                        height="24px"
                                    ><path d="M7 10l5 5 5-5z"></path>
                                    </svg>
                                </span>
                            </div>
                            <div className={`submenu ${activeMenu['DigitalBanking'] ? 'expanded' : 'collapsed'}`}>
                                <a href="/CardBanking">Card Banking</a>
                                <a href="/MobileBanking">Mobile Banking</a>
                                <a href="/InternetBanking">Internet Banking</a>
                                <a href="/School_management">School Management Solution</a>
                                <a href="/AgentBanking">Agent Banking</a>
                            </div>
                        </div>

                        <div className="sidebar-item">
                            <div className="sidebar-link2" onClick={() => toggleMenu('InterestFree')}>
                                <span className="link-icon"><BsMoonStarsFill className="react-icon" /><p>Interest Free</p></span>
                                <span className={`dropdown-icon ${activeMenu['InterestFree'] ? 'rotated' : ''}`}>
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        width="24px"
                                        height="24px"
                                    ><path d="M7 10l5 5 5-5z"></path>
                                    </svg>
                                </span>
                            </div>
                            <div className={`submenu ${activeMenu['InterestFree'] ? 'expanded' : 'collapsed'}`}>
                                <div className="sidebar-link2" onClick={() => toggleMenu('SavingAccount')} style={{ marginLeft: '10px', fontSize: '15px' }}>
                                    <span className="link-icon"><p>Saving Account</p></span>
                                    <span className={`dropdown-icon ${activeMenu['SavingAccount'] ? 'rotated' : ''}`}>
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            width="18px"
                                            height="18px"
                                        ><path d="M7 10l5 5 5-5z"></path>
                                        </svg>
                                    </span>
                                </div>
                                <div className={`submenu2 ${activeMenu['SavingAccount'] ? 'expanded' : 'collapsed'}`} style={{ marginLeft: '12px', fontSize: '13px' }}>
                                    <a onClick={interest_free}>Wadia Amana Account</a>
                                    <a onClick={interest_free2}>Muday wadia amana</a>
                                    <a onClick={interest_free3}>Equb wadia amana</a>
                                    <a onClick={interest_free4}>Zakat wadia amana</a>
                                    <a onClick={interest_free5}>School wadia amana</a>
                                </div>
                            </div>
                            <div className={`submenu ${activeMenu['InterestFree'] ? 'expanded' : 'collapsed'}`}>
                                <div className="sidebar-link2" onClick={() => toggleMenu('Financing')} style={{ marginLeft: '10px', fontSize: '15px' }}>
                                    <span className="link-icon"><p>Financing</p></span>
                                    <span className={`dropdown-icon ${activeMenu['Financing'] ? 'rotated' : ''}`}>
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            width="18px"
                                            height="18px"
                                        ><path d="M7 10l5 5 5-5z"></path>
                                        </svg>
                                    </span>
                                </div>
                                <div className={`submenu2 ${activeMenu['Financing'] ? 'expanded' : 'collapsed'}`} style={{ marginLeft: '12px', fontSize: '13px' }}>
                                    <a onClick={financing1}>Murabaha</a>
                                    <a onClick={financing2}>Qard Financing</a>
                                    <a onClick={financing3}>Qard Benevolent</a>
                                </div>
                            </div>
                            <div className={`submenu ${activeMenu['InterestFree'] ? 'expanded' : 'collapsed'}`}>
                                <div className="sidebar-link2" onClick={() => toggleMenu('Kaffala')} style={{ marginLeft: '10px', fontSize: '15px' }}>
                                    <span className="link-icon"><p>Kafalah (Guarantee)</p></span>
                                    <span className={`dropdown-icon ${activeMenu['Kaffala'] ? 'rotated' : ''}`}>
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            width="18px"
                                            height="18px"
                                        ><path d="M7 10l5 5 5-5z"></path>
                                        </svg>
                                    </span>
                                </div>
                                <div className={`submenu2 ${activeMenu['Kaffala'] ? 'expanded' : 'collapsed'}`} style={{ marginLeft: '12px', fontSize: '13px' }}>
                                    <a href="/Guarantee_Kafalah">Bid Bond</a>
                                    <a href="/Guarantee_Kafalah">Advance Payment Guarantee</a>
                                    <a href="/Guarantee_Kafalah">Retention Payment Guarantee</a>
                                    <a href="/Guarantee_Kafalah">Export and Import Trade</a>
                                </div>
                            </div>
                        </div>

                        <div className="sidebar-item">
                            <div className="sidebar-link2" onClick={() => toggleMenu('Medias')}>
                                <span className="link-icon"><MdPermMedia className="react-icon" /><p>Medias</p></span>

                                <span className={`dropdown-icon ${activeMenu['Medias'] ? 'rotated' : ''}`}>
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        width="24px"
                                        height="24px"
                                    ><path d="M7 10l5 5 5-5z"></path>
                                    </svg>
                                </span>
                            </div>
                            <div className={`submenu ${activeMenu['Medias'] ? 'expanded' : 'collapsed'}`}>
                                <a href="/News">News</a>
                                {/* <a href="/aboutUs">Publications</a> */}
                                <div className="sidebar-link2" onClick={() => toggleMenu('Publications')} style={{ marginLeft: '10px', fontSize: '15px' }}>
                                    <span className="link-icon"><p>Publications</p></span>
                                    <span className={`dropdown-icon ${activeMenu['Publications'] ? 'rotated' : ''}`}>
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            width="18px"
                                            height="18px"
                                        ><path d="M7 10l5 5 5-5z"></path>
                                        </svg>
                                    </span>
                                </div>
                                <div className={`submenu2 ${activeMenu['Publications'] ? 'expanded' : 'collapsed'}`} style={{ marginLeft: '12px', fontSize: '13px' }}>
                                    <a href="/annualReport">Annual Report</a>
                                    <a href="/NewsLetter">News Letter</a>
                                </div>
                                <a href="/Gallery">Gallery</a>
                            </div>
                        </div>

                        <div className="sidebar-item">
                            <div className="sidebar-link2" onClick={() => toggleMenu('Tarrifs')}>
                                <span className="link-icon"><BsFileEarmarkFontFill className="react-icon" /><p>Tarrifs</p></span>

                                <span className={`dropdown-icon ${activeMenu['Tarrifs'] ? 'rotated' : ''}`}>
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        width="24px"
                                        height="24px"
                                    ><path d="M7 10l5 5 5-5z"></path>
                                    </svg>
                                </span>
                            </div>
                            <div className={`submenu ${activeMenu['Tarrifs'] ? 'expanded' : 'collapsed'}`}>
                                <a href="/Branch_Terms_And_Tariffs">Branch Banking Terms and Tarrifs</a>
                                <a href="/Digital_Terms_And_Tariffs">Digital Banking Terms and Tarrifs</a>
                                <a href="/Credit_Terms_And_Tariffs">Credit Terms and Tarrifs</a>
                                <a href="/International_Terms_And_Tariffs">IBD Terms and Tarrifs</a>
                                <a href="/IFB_Terms_And_Tariffs">IFB Tarrifs</a>
                                {/* <a href="/Interest_Rate">Interest Rates of Credit Products</a> */}
                            </div>
                        </div>

                        <div className="sidebar-item">  
                            <div className="sidebar-link" onClick={handleClick7}><span className="link-icon"><FaHandshakeAngle /></span>CSR</div>
                        </div>

                        <div className='popupMedias2'>
                            <ul>
                                <li><a href='https://www.facebook.com/bankwegagen'><BsFacebook /></a></li>
                                <li><a href='https://t.me/WegagenBanksc'><BsTelegram /></a></li>
                                <li><a href='https://linkedin.com/company/66893778/admin/'><BsLinkedin /></a></li>
                                <li><a href='https://twitter.com/WegagenBanksc'><BsTwitter /></a></li>
                                <li><a href='https://www.instagram.com/wegagenbankofficial/'><BsInstagram /></a></li>
                                <li><a href='https://https://youtube.com/channel/UCksW-3Q5a3TKos-jTQp-LCA?view_as=subscriber'><BsYoutube /></a></li>
                            </ul>
                        </div>
                        <h6 style={{ margin: 'auto', fontSize: '12px', marginTop: '10px', color: '#004360', width: '90%', marginBottom: '20px' }}>Copyright © 2024 Wegagen Bank. Terms of Use | Privacy Policy</h6>

                    </div>
                </div>
            )}

            {headerSelect == "interestFree" ? <Header2 /> : <Header />}
            <div className={headerSelect === "interestFree" ? `navigation2 ${scrolled ? "scrolled" : ""}` : `navigation1 ${scrolled ? "scrolled" : ""}`} ref={refOne}>
                <div className="headerContent" >
                    <div className="navItems" onMouseOver={() => { setPop(false) }}>

                        <div className="indivdualItem" onMouseOver={(e) => {
                            e.stopPropagation(); // Stops the event from bubbling up to the parent
                            setPop(false);
                        }}>
                            <h6>
                                <Link to="/" style={path === "home" ? { color: getColor(), textDecoration: 'none' } : { textDecoration: 'none' }}>
                                    Home
                                </Link>
                            </h6>
                        </div>

                        <div className="indivdualItem" onMouseOver={(e) => {
                            e.stopPropagation();
                            setPop(true);
                            setShow('Home');
                        }} style={path === "aboutUs" ? { color: getColor() } : { textDecoration: 'none' }}>
                            <h6 onClick={() => { setPop(true) }}>About Us</h6>
                            <p style={{ display: 'flex', alignItems: 'center' }}><MdKeyboardArrowDown size='17px'></MdKeyboardArrowDown></p>
                        </div>

                        <div className="indivdualItem" onMouseOver={(e) => {
                            e.stopPropagation();
                            setPop(true);
                            setShow('Home2');
                        }} style={path === "bankingServices" ? { color: getColor() } : { textDecoration: 'none' }}>
                            <h6 onClick={() => { setPop(true) }}>Banking Services</h6>
                            <p style={{ display: 'flex', alignItems: 'center' }}><MdKeyboardArrowDown size='17px'></MdKeyboardArrowDown></p>
                        </div>

                        <div className="indivdualItem" onMouseOver={(e) => {
                            e.stopPropagation();
                            setPop(true);
                            setShow('Home3');
                        }} style={path === "digitalBanking" ? { color: getColor() } : { textDecoration: 'none' }}>
                            <h6 onClick={() => { setPop(true) }}>Digital Banking</h6>
                            <p style={{ display: 'flex', alignItems: 'center' }}><MdKeyboardArrowDown size='17px'></MdKeyboardArrowDown></p>
                        </div>

                        <div className="indivdualItem" onMouseOver={(e) => {
                            e.stopPropagation();
                            setPop(true);
                            setShow('Home5');
                        }} style={path === "interestFree" ? { color: "#00a3a3" } : { textDecoration: 'none' }}>
                            <h6 onClick={() => { setPop(true) }}>Interest Free Banking</h6>
                            <p style={{ display: 'flex', alignItems: 'center' }}><MdKeyboardArrowDown size='17px'></MdKeyboardArrowDown></p>
                        </div>

                        <div className="indivdualItem" onMouseOver={(e) => {
                            e.stopPropagation();
                            setPop(true);
                            setShow('Home6');
                        }} style={path === "news" ? { color: getColor() } : { textDecoration: 'none' }}>
                            <h6 onClick={() => { setPop(true) }}>Medias</h6>
                            <p style={{ display: 'flex', alignItems: 'center' }}><MdKeyboardArrowDown size='17px'></MdKeyboardArrowDown></p>
                        </div>
                        <div className="indivdualItem" onMouseOver={(e) => {
                            e.stopPropagation(); // Stops the event from bubbling up to the parent
                            setPop(false);
                        }} style={path === "csr" ? { color: getColor() } : { textDecoration: 'none' }}>
                            <h6>
                                <p onClick={handleClick7} >
                                    CSR
                                </p>
                            </h6>
                        </div>

                        {/* <div className="indivdualItem" onMouseOver={(e) => {
                            e.stopPropagation();
                            setPop(true);
                            setShow('Home7');
                        }}>
                            <h6 onClick={() => { setPop(true) }}>Tarrifs</h6>
                            <p style={{ display: 'flex', alignItems: 'center' }}><MdKeyboardArrowDown size='17px'></MdKeyboardArrowDown></p>
                        </div> */}

                    </div>

                    {headerSelect == "interestFree" ?
                        <div className="WegegenLogo" onMouseOver={() => { setPop(false), setShow('Home1') }}>
                            <img src={wadya}></img>
                            <p><RiMenu2Line style={{ fontSize: '30px', cursor: 'pointer' }}
                                onClick={toggleSidebar}></RiMenu2Line></p>
                        </div>
                        :
                        <div className="WegegenLogo" onMouseOver={() => { setPop(false), setShow('Home1') }} >
                            <Link to="/" style={path == "home" ? { color: getColor(), textDecoration: 'none' } : { textDecoration: 'none' }} >  <img src={WegagenLogo}></img></Link>
                            <p><RiMenu2Line style={{ fontSize: '30px' }}
                                onClick={toggleSidebar}></RiMenu2Line></p>
                        </div>
                    }
                </div>
                <div>
                    {popup === true ?
                        <>
                            <div className="popup">
                                <div className='popupInner animate__animated animate__fadeInUp custom-animation-duration' ref={refOne}>
                                    {show === "Home" ?
                                        <>
                                            <div className={`popTitle ${scrolled ? "scrolled" : ""}`}>
                                                <p className='animate__animated animate__zoomIn'>About us</p>
                                            </div>
                                            <div className="aboutusNav animate__animated animate__fadeInUp custom-animation-duration">
                                                <div className="aboutusNavItems animate__animated animate__zoomIn">
                                                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }} onClick={handleClick8}>
                                                        <Link to="/aboutUs" style={{ textDecoration: 'none' }}><p onMouseOver={() => { setShowContent(1) }} style={showContent == 1 ? { color: getColor() } : { color: getColor2(), display: 'flex' }}>About Wegagen Bank </p></Link>
                                                        <h6 style={{ display: 'flex', alignItems: 'center' }}><GrFormNext></GrFormNext></h6>
                                                    </div>

                                                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }} onClick={handleClick1}>
                                                        <p onMouseOver={() => { setShowContent(2) }} style={showContent == 2 ? { color: getColor() } : { color: getColor2(), display: 'flex' }}> Corporate Governance </p>
                                                        <h6 style={{ display: 'flex', alignItems: 'center' }}><GrFormNext></GrFormNext></h6>
                                                    </div>

                                                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }} onClick={handleClick}>
                                                        <p onMouseOver={() => { setShowContent(3) }} style={showContent == 3 ? { color: getColor() } : { color: getColor2(), display: 'flex' }}>Timeline </p>
                                                        <h6 style={{ display: 'flex', alignItems: 'center' }}><GrFormNext></GrFormNext></h6>
                                                    </div>

                                                    {/* <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }} onClick={handleClick7}>
                                                        <p onMouseOver={() => { setShowContent(4) }} style={showContent == 4 ? { color: getColor() } : { color: getColor2(), display: 'flex' }}>Corporate Social Responsibilty </p>
                                                        <h6 style={{ display: 'flex', alignItems: 'center' }}><GrFormNext></GrFormNext></h6>
                                                    </div> */}
                                                </div>

                                                <div>
                                                    {showContent === 1 ?
                                                        <div className='popupContent animate__animated animate__zoomIn'>
                                                            <label>About Wegagen Bank</label>
                                                            <p style={{ paddingTop: '7px', margin: '0px', textAlign: 'justify', fontSize: "15px" }}>
                                                                Established on June 11, 1996, Wegagen Bank S.C. emerged from the visionary mindset of sixteen
                                                                founding members who recognized the pivotal role financial institutions would play in fostering
                                                                sustained economic development.
                                                            </p>
                                                        </div>
                                                        : ""}
                                                    {showContent === 2 ?
                                                        <div className='popupContent animate__animated animate__zoomIn'>
                                                            <div className="aboutusNavItems">
                                                                <div style={{ display: 'flex', justifyContent: 'space-between', padding: "10px" }} onClick={handleClick1}>
                                                                    <Link style={{ textDecoration: 'none' }} to='/Personal_Banking'><p> Board of Directors </p></Link>
                                                                    <h6 style={{ display: 'flex', alignItems: 'center' }}><GrFormNext></GrFormNext></h6>
                                                                </div>
                                                                <div style={{ display: 'flex', justifyContent: 'space-between', padding: "10px" }} onClick={handleClick2}>
                                                                    <p> Core Management </p>
                                                                    <h6 style={{ display: 'flex', alignItems: 'center' }}><GrFormNext></GrFormNext></h6>
                                                                </div>
                                                                <div style={{ display: 'flex', justifyContent: 'space-between', padding: "10px" }} onClick={handleClick3}>
                                                                    <p>Senior Management Team </p>
                                                                    <h6 style={{ display: 'flex', alignItems: 'center' }}><GrFormNext></GrFormNext></h6>
                                                                </div>
                                                                <div style={{ display: 'flex', justifyContent: 'space-between', padding: "10px" }} onClick={handleClick4}>
                                                                    <p> Management Team </p>
                                                                    <h6 style={{ display: 'flex', alignItems: 'center' }}><GrFormNext></GrFormNext></h6>
                                                                </div>
                                                                <div style={{ display: 'flex', justifyContent: 'space-between', padding: "10px" }} onClick={handleClick5}>
                                                                    <p> District Directors Team </p>
                                                                    <h6 style={{ display: 'flex', alignItems: 'center' }}><GrFormNext></GrFormNext></h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        : ""}

                                                    {showContent === 3 ?
                                                        <div className='popupContent animate__animated animate__zoomIn'>
                                                            <label>TimeLine</label>
                                                            <p style={{ paddingTop: '7px', margin: '0px', textAlign: 'justify', fontSize: "15px" }}>
                                                                Established on November 1996, Wegagen Bank S.C. emerged from the visionary mindset of sixteen founding members who recognized the pivotal role financial institutions would play in fostering sustained economic development.
                                                            </p>
                                                        </div>
                                                        : ""}


                                                    {/* {showContent === 4 ?
                                                        <div className='popupContent animate__animated animate__zoomIn'>
                                                            <label>Corporate Social Responsibilty</label>
                                                            <p style={{ paddingTop: '7px', margin: '0px', textAlign: 'justify', fontSize: "15px" }}>
                                                                Parallel to undertaking its banking business Wegagen Bank gives due emphasis
                                                                to corporate social responsibility as an important aspect of its business. 
                                                            </p>
                                                        </div>
                                                        : ""} */}

                                                </div>

                                                {/* images */}
                                                {showContent === 1 ?
                                                    <div style={{ paddingLeft: '15px', transition: '.7s' }}>
                                                        <p><img style={{ width: '100%', height: '327px' }} src={aboutUs} alt="" /></p>
                                                    </div>
                                                    : ""}
                                                {showContent === 2 ?
                                                    <div style={{ paddingLeft: '15px' }} >
                                                        <p><img style={{ width: '100%', height: '327px' }} src={aboutUs2} alt="" /></p>
                                                    </div>
                                                    : ""}
                                                {showContent === 3 ?
                                                    <div style={{ paddingLeft: '15px' }} >
                                                        <p><img style={{ width: '100%', height: '327px' }} src={aboutUs} alt="" /></p>
                                                    </div>
                                                    : ""}
                                                {showContent === 4 ?
                                                    <div style={{ paddingLeft: '15px' }} >
                                                        <p><img style={{ width: '100%', height: '327px' }} src={aboutUs2} alt="" /></p>
                                                    </div>
                                                    : ""}

                                            </div>
                                        </>
                                        : ""}

                                    {show === "Home2" ?
                                        <>
                                            <div className={`popTitle ${scrolled ? "scrolled" : ""}`}>
                                                <p className='animate__animated animate__zoomIn'>Banking Services</p>
                                            </div>

                                            <div className="aboutusNav">
                                                <div className="aboutusNavItems animate__animated animate__zoomIn">
                                                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                                                        <p onMouseOver={() => { setShowContent(1) }} style={showContent == 1 ? { color: getColor() } : { color: getColor2(), display: 'flex' }}> Personal Banking </p>
                                                        <h6 style={{ display: 'flex', alignItems: 'center' }}><GrFormNext></GrFormNext></h6>
                                                    </div>

                                                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                                                        <p onMouseOver={() => { setShowContent(2) }} style={showContent == 2 ? { color: getColor() } : { color: getColor2(), display: 'flex' }}> Loan Facilities </p>
                                                        <h6 style={{ display: 'flex', alignItems: 'center' }}><GrFormNext></GrFormNext></h6>
                                                    </div>

                                                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                                                        <p onMouseOver={() => { setShowContent(4) }} style={showContent == 4 ? { color: getColor() } : { color: getColor2(), display: 'flex' }}> International Banking </p>
                                                        <h6 style={{ display: 'flex', alignItems: 'center' }}><GrFormNext></GrFormNext></h6>
                                                    </div>
                                                </div>
                                                <div>
                                                    {showContent === 1 ?
                                                        <div className='popupContent animate__animated animate__zoomIn'>
                                                            <div className="aboutusNavItems">
                                                                <div style={{ display: 'flex', justifyContent: 'space-between', padding: "10px" }} onClick={bankingService}>
                                                                    <Link style={{ textDecoration: 'none' }} to='/Personal_Banking'><p> Local currency saving accounts </p></Link>
                                                                    <h6 style={{ display: 'flex', alignItems: 'center' }}><GrFormNext></GrFormNext></h6>
                                                                </div>
                                                                <div style={{ display: 'flex', justifyContent: 'space-between', padding: "10px" }} onClick={bankingService2}>
                                                                    <Link to='/Personal_Banking' style={{ textDecoration: 'none' }}><p> Special Saving Account </p></Link>
                                                                    <h6 style={{ display: 'flex', alignItems: 'center' }}><GrFormNext></GrFormNext></h6>
                                                                </div>
                                                                <div style={{ display: 'flex', justifyContent: 'space-between', padding: "10px" }} onClick={bankingService3}>
                                                                    <Link to='/Personal_Banking' style={{ textDecoration: 'none' }}><p>Goh Child Trust Account </p></Link>
                                                                    <h6 style={{ display: 'flex', alignItems: 'center' }}><GrFormNext></GrFormNext></h6>
                                                                </div>
                                                                <div style={{ display: 'flex', justifyContent: 'space-between', padding: "10px" }} onClick={bankingService4}>
                                                                    <Link to='/Personal_Banking' style={{ textDecoration: 'none' }}><p> Nigat (Women) Saving Account </p></Link>
                                                                    <h6 style={{ display: 'flex', alignItems: 'center' }}><GrFormNext></GrFormNext></h6>
                                                                </div>
                                                                <div style={{ display: 'flex', justifyContent: 'space-between', padding: "10px" }} onClick={bankingService5}>
                                                                    <Link to='/Personal_Banking' style={{ textDecoration: 'none' }}><p> Elders/Warka Saving Account </p></Link>
                                                                    <h6 style={{ display: 'flex', alignItems: 'center' }}><GrFormNext></GrFormNext></h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        : ""}
                                                    {showContent === 2 ?
                                                        <div className='popupContent animate__animated animate__zoomIn'>
                                                            <div className="aboutusNavItems">
                                                                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 10px' }}>
                                                                    <Link to='/loanFacilities' style={{ textDecoration: 'none' }}><p style={{ fontSize: '15px' }}>General eligibility Criteria</p></Link>
                                                                    <h6 style={{ display: 'flex', alignItems: 'center' }}><GrFormNext></GrFormNext></h6>
                                                                </div>
                                                                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 10px' }}>
                                                                    <Link to='/Working_Capital_Loan' style={{ textDecoration: 'none' }}><p style={{ fontSize: '15px' }}>Working Capital Loan </p></Link>
                                                                    <h6 style={{ display: 'flex', alignItems: 'center' }}><GrFormNext></GrFormNext></h6>
                                                                </div>
                                                                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 10px' }}>
                                                                    <Link to='/Asset_Financing_Loans' style={{ textDecoration: 'none' }}><p style={{ fontSize: '14px' }}>Asset Financing Loans </p></Link>
                                                                    <h6 style={{ display: 'flex', alignItems: 'center' }}><GrFormNext></GrFormNext></h6>
                                                                </div>
                                                                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 10px' }}>
                                                                    <Link to='/Letter_of_Bank_Guarantee_Facilities' style={{ textDecoration: 'none' }}><p style={{ fontSize: '15px' }}>Letter of Bank Guarantee Facilities </p></Link>
                                                                    <h6 style={{ display: 'flex', alignItems: 'center' }}><GrFormNext></GrFormNext></h6>
                                                                </div>
                                                                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '3px 10px' }}>
                                                                    <Link to='/Rental_Loan' style={{ textDecoration: 'none' }}><p style={{ fontSize: '14px' }}>Retail Loans </p></Link>
                                                                    <h6 style={{ display: 'flex', alignItems: 'center' }}><GrFormNext></GrFormNext></h6>
                                                                </div>
                                                                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 10px' }}>
                                                                    <Link to='/Diaspora_Loans' style={{ textDecoration: 'none' }}><p style={{ fontSize: '15px' }}>Diaspora Loans </p></Link>
                                                                    <h6 style={{ display: 'flex', alignItems: 'center' }}><GrFormNext></GrFormNext></h6>
                                                                </div>
                                                                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 10px' }}>
                                                                    <Link to='/Personal_Loans_for_Salaried_Persons' style={{ textDecoration: 'none' }}><p style={{ fontSize: '15px' }}>Personal Loans for Salaried Persons </p></Link>
                                                                    <h6 style={{ display: 'flex', alignItems: 'center' }}><GrFormNext></GrFormNext></h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        : ""}

                                                    {showContent === 4 ?
                                                        <div className='popupContent animate__animated animate__zoomIn'>
                                                            <div className="aboutusNavItems">
                                                                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 10px' }} onClick={international_Banking}>
                                                                    <Link to='/International_Banking' style={{ textDecoration: 'none' }}><p> Letter of Credit</p></Link>
                                                                    <h6 style={{ display: 'flex', alignItems: 'center' }}><GrFormNext></GrFormNext></h6>
                                                                </div>
                                                                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 10px' }} onClick={international_Banking2}>
                                                                    <Link to='/International_Banking' style={{ textDecoration: 'none' }}><p> Cash Against Documents </p></Link>
                                                                    <h6 style={{ display: 'flex', alignItems: 'center' }}><GrFormNext></GrFormNext></h6>
                                                                </div>
                                                                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 10px' }} onClick={international_Banking3}>
                                                                    <Link to='/International_Banking' style={{ textDecoration: 'none' }}><p> Advance Payment </p></Link>
                                                                    <h6 style={{ display: 'flex', alignItems: 'center' }}><GrFormNext></GrFormNext></h6>
                                                                </div>
                                                                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 10px' }} onClick={international_Banking4}>
                                                                    <Link to='/International_Banking' style={{ textDecoration: 'none' }}><p> Consignment Basis Payment </p></Link>
                                                                    <h6 style={{ display: 'flex', alignItems: 'center' }}><GrFormNext></GrFormNext></h6>
                                                                </div>
                                                                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 10px' }} onClick={international_Banking5}>
                                                                    <Link to='/International_Banking' style={{ textDecoration: 'none' }}><p> Small Export Items </p></Link>
                                                                    <h6 style={{ display: 'flex', alignItems: 'center' }}><GrFormNext></GrFormNext></h6>
                                                                </div>
                                                                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 10px' }} onClick={international_Banking6}>
                                                                    <Link to='/International_Banking' style={{ textDecoration: 'none' }}><p>Guarantee </p></Link>
                                                                    <h6 style={{ display: 'flex', alignItems: 'center' }}><GrFormNext></GrFormNext></h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        : ""}

                                                </div>
                                                {showContent === 1 ?
                                                    <div style={{ paddingLeft: '15px' }} class='animate__animated animate__zoomIn'>
                                                        <p><img style={{ width: '100%', height: '327px' }} src={aboutUs} alt="" /></p>
                                                    </div>
                                                    : ""}
                                                {showContent === 2 ?
                                                    <div style={{ paddingLeft: '15px' }} class='animate__animated animate__zoomIn'>
                                                        <p><img style={{ width: '100%', height: '327px' }} src={aboutUs} alt="" /></p>
                                                    </div>
                                                    : ""}
                                                {showContent === 3 ?
                                                    <div style={{ paddingLeft: '15px' }} class='animate__animated animate__zoomIn'>
                                                        <p><img style={{ width: '100%', height: '327px' }} src={aboutUs} alt="" /></p>
                                                    </div>
                                                    : ""}
                                                {showContent === 4 ?
                                                    <div style={{ paddingLeft: '15px' }} class='animate__animated animate__zoomIn'>
                                                        <p><img style={{ width: '100%', height: '327px' }} src={aboutUs} alt="" /></p>
                                                    </div>
                                                    : ""}

                                            </div>
                                        </>
                                        : ""}

                                    {show === "Home3" ?
                                        <>
                                            <div className={`popTitle ${scrolled ? "scrolled" : ""}`}>
                                                <p className='animate__animated animate__zoomIn'>Digital Banking</p>
                                            </div>
                                            <div className="aboutusNav">
                                                <div className="aboutusNavItems  animate__animated animate__zoomIn">
                                                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                                                        <Link to='/CardBanking' style={{ textDecoration: 'none' }}><p onMouseOver={() => { setShowContent(1) }} style={showContent == 1 ? { color: getColor() } : { color: getColor2(), display: 'flex' }}> Card Banking </p></Link>
                                                        <h6 style={{ display: 'flex', alignItems: 'center' }}><GrFormNext></GrFormNext></h6>
                                                    </div>

                                                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                                                        <Link to='/MobileBanking' style={{ textDecoration: 'none' }}><p onMouseOver={() => { setShowContent(3) }} style={showContent == 3 ? { color: getColor() } : { color: getColor2(), display: 'flex' }}> Mobile Banking </p></Link>
                                                        <h6 style={{ display: 'flex', alignItems: 'center' }}><GrFormNext></GrFormNext></h6>
                                                    </div>

                                                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                                                        <Link to='/InternetBanking' style={{ textDecoration: 'none' }}><p onMouseOver={() => { setShowContent(4) }} style={showContent == 4 ? { color: getColor() } : { color: getColor2(), display: 'flex' }}> Internet Banking </p></Link>
                                                        <h6 style={{ display: 'flex', alignItems: 'center' }}><GrFormNext></GrFormNext></h6>
                                                    </div>
                                                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                                                        <Link to='/School_management' style={{ textDecoration: 'none' }}><p onMouseOver={() => { setShowContent(2) }} style={showContent == 2 ? { color: getColor() } : { color: getColor2(), display: 'flex' }}> School Management Solution  </p></Link>
                                                        <h6 style={{ display: 'flex', alignItems: 'center' }}><GrFormNext></GrFormNext></h6>
                                                    </div>
                                                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                                                        <Link to='/AgentBanking' style={{ textDecoration: 'none' }}> <p onMouseOver={() => { setShowContent(5) }} style={showContent == 5 ? { color: getColor() } : { color: getColor2(), display: 'flex' }}> Agent Banking </p></Link>
                                                        <h6 style={{ display: 'flex', alignItems: 'center' }}><GrFormNext></GrFormNext></h6>
                                                    </div>
                                                </div>

                                                <div>
                                                    {showContent === 1 ?
                                                        <div className='popupContent animate__animated animate__zoomIn'>
                                                            <label>Card Banking</label>
                                                            <p style={{ paddingTop: '7px', margin: '0px', textAlign: 'justify', fontSize: "1rem" }}>
                                                                Offers easy and convenient access to make withdrawals and payment through our ATM and POS network
                                                            </p>
                                                        </div>
                                                        : ""}
                                                    {showContent === 2 ?
                                                        <div className='popupContent animate__animated animate__zoomIn'>
                                                            <label>School Management Solution </label>
                                                            <p style={{ paddingTop: '7px', margin: '0px', textAlign: 'justify', fontSize: "1rem" }}>
                                                                Enables schools and learning institutions to collect fees and offers a comprehensive school management system
                                                            </p>
                                                        </div>
                                                        : ""}

                                                    {showContent === 3 ?
                                                        <div className='popupContent animate__animated animate__zoomIn'>
                                                            <label>Mobile Banking service </label>
                                                            <p style={{ paddingTop: '7px', margin: '0px', textAlign: 'justify', fontSize: "1rem" }}>
                                                                This is a mobile banking service which provides convenient and secure means
                                                                of making payments at the fingertips of your hands.
                                                            </p>
                                                        </div>
                                                        : ""}


                                                    {showContent === 4 ?
                                                        <div className='popupContent animate__animated animate__zoomIn'>
                                                            <label>Internet Banking</label>
                                                            <p style={{ paddingTop: '7px', margin: '0px', textAlign: 'justify', fontSize: "1rem" }}>
                                                                This digital channel provides browser-based access to customers to
                                                                review transactions and make payments.
                                                            </p>
                                                        </div>
                                                        : ""}

                                                    {showContent === 5 ?
                                                        <div className='popupContent animate__animated animate__zoomIn'>
                                                            <label>Agent Banking</label>
                                                            <p style={{ paddingTop: '7px', margin: '0px', textAlign: 'justify', fontSize: "1rem" }}>
                                                                Aiming to expand reach and pursue financial inclusion, offers network of
                                                                capable agents to provide banking service on behalf of Wegagen Bank
                                                            </p>
                                                        </div>
                                                        : ""}
                                                </div>
                                                {showContent === 1 ?
                                                    <div style={{ paddingLeft: '15px' }} class='animate__animated animate__zoomIn'>
                                                        <p><img style={{ width: '100%', height: '327px' }} src={aboutUs} alt="" /></p>
                                                    </div>
                                                    : ""}
                                                {showContent === 2 ?
                                                    <div style={{ paddingLeft: '15px' }} class='animate__animated animate__zoomIn'>
                                                        <p><img style={{ width: '100%', height: '327px' }} src={aboutUs} alt="" /></p>
                                                    </div>
                                                    : ""}
                                                {showContent === 3 ?
                                                    <div style={{ paddingLeft: '15px' }} class='animate__animated animate__zoomIn'>
                                                        <p><img style={{ width: '100%', height: '327px' }} src={aboutUs} alt="" /></p>
                                                    </div>
                                                    : ""}
                                                {showContent === 4 ?
                                                    <div style={{ paddingLeft: '15px' }} class='animate__animated animate__zoomIn'>
                                                        <p><img style={{ width: '100%', height: '327px' }} src={aboutUs} alt="" /></p>
                                                    </div>
                                                    : ""}
                                                {showContent === 5 ?
                                                    <div style={{ paddingLeft: '15px' }} class='animate__animated animate__zoomIn'>
                                                        <p><img style={{ width: '100%', height: '327px' }} src={aboutUs} alt="" /></p>
                                                    </div>
                                                    : ""}
                                            </div>
                                        </>
                                        : ""}

                                    {show === "Home5" ?
                                        <>
                                            <div className={`popTitle ${scrolled ? "scrolled" : ""}`}>
                                                <p className='animate__animated animate__zoomIn'>Interest Free</p>
                                            </div>
                                            <div className="aboutusNav">
                                                <div className="aboutusNavItems animate__animated animate__zoomIn">
                                                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                                                        <p onMouseOver={() => { setShowContent(1) }} style={showContent == 1 ? { color: getColor() } : { color: getColor2(), display: 'flex' }}> Saving Account </p>
                                                        <h6 style={{ display: 'flex', alignItems: 'center' }}><GrFormNext></GrFormNext></h6>
                                                    </div>

                                                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                                                        <p onMouseOver={() => { setShowContent(2) }} style={showContent == 2 ? { color: getColor() } : { color: getColor2(), display: 'flex' }}> Financing </p>
                                                        <h6 style={{ display: 'flex', alignItems: 'center' }}><GrFormNext></GrFormNext></h6>
                                                    </div>

                                                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                                                        <p onMouseOver={() => { setShowContent(3) }} style={showContent == 3 ? { color: getColor() } : { color: getColor2(), display: 'flex' }}> Kafalah (Guarantee) </p>
                                                        <h6 style={{ display: 'flex', alignItems: 'center' }}><GrFormNext></GrFormNext></h6>
                                                    </div>
                                                </div>
                                                <div>
                                                    {showContent === 1 ?
                                                        // <div className='animate__animated animate__bounceIn'>
                                                        <div className="aboutusNavItems animate__animated animate__zoomIn">
                                                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '7px' }} onClick={interest_free}>
                                                                <Link to='/Wadya_Aman_Saving' style={{ textDecoration: 'none' }}><p> Wadia Amana Account </p></Link>
                                                                <h6 style={{ display: 'flex', alignItems: 'center' }}><GrFormNext></GrFormNext></h6>
                                                            </div>
                                                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '7px' }} onClick={interest_free2}>
                                                                <Link to='/Wadya_Aman_Saving' style={{ textDecoration: 'none' }}><p> Muday wadia amana </p></Link>
                                                                <h6 style={{ display: 'flex', alignItems: 'center' }}><GrFormNext></GrFormNext></h6>
                                                            </div>
                                                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '7px' }} onClick={interest_free3}>
                                                                <Link to='/Wadya_Aman_Saving' style={{ textDecoration: 'none' }}><p> Equb wadia amana  </p></Link>
                                                                <h6 style={{ display: 'flex', alignItems: 'center' }}><GrFormNext></GrFormNext></h6>
                                                            </div>
                                                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '7px' }} onClick={interest_free4}>
                                                                <Link to='/Wadya_Aman_Saving' style={{ textDecoration: 'none' }}><p> Zakat wadia amana  </p></Link>
                                                                <h6 style={{ display: 'flex', alignItems: 'center' }}><GrFormNext></GrFormNext></h6>
                                                            </div>
                                                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '7px' }} onClick={interest_free5}>
                                                                <Link to='/Wadya_Aman_Saving' style={{ textDecoration: 'none' }}><p> School wadia amana  </p></Link>
                                                                <h6 style={{ display: 'flex', alignItems: 'center' }}><GrFormNext></GrFormNext></h6>
                                                            </div>

                                                        </div>
                                                        // </div>
                                                        : ""}
                                                    {showContent === 2 ?
                                                        <div className='popupContent animate__animated animate__zoomIn'>
                                                            <div className="aboutusNavItems">
                                                                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                                                                    <a onClick={financing1} style={{ textDecoration: 'none' }}><p> Murabaha  </p></a>
                                                                    <h6 style={{ display: 'flex', alignItems: 'center' }}><GrFormNext></GrFormNext></h6>
                                                                </div>
                                                                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                                                                    <a onClick={financing2} style={{ textDecoration: 'none' }}><p> Qard Financing  </p></a>
                                                                    <h6 style={{ display: 'flex', alignItems: 'center' }}><GrFormNext></GrFormNext></h6>
                                                                </div>
                                                                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                                                                    <a onClick={financing3} style={{ textDecoration: 'none' }}><p> Qard Benevolent </p></a>
                                                                    <h6 style={{ display: 'flex', alignItems: 'center' }}><GrFormNext></GrFormNext></h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        : ""}
                                                    {showContent === 3 ?
                                                        <div className='popupContent animate__animated animate__zoomIn'>
                                                            <div className="aboutusNavItems">
                                                                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                                                                    {/* <p> Bid boand </p> */}
                                                                    <Link to='/Guarantee_Kafalah' style={{ textDecoration: 'none' }}><p> Bid Bond  </p></Link>
                                                                    <h6 style={{ display: 'flex', alignItems: 'center' }}><GrFormNext></GrFormNext></h6>
                                                                </div>
                                                                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                                                                    <Link to='/Guarantee_Kafalah' style={{ textDecoration: 'none' }}><p> Advance Payment Guarantee </p></Link>
                                                                    <h6 style={{ display: 'flex', alignItems: 'center' }}><GrFormNext></GrFormNext></h6>
                                                                </div>
                                                                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                                                                    <Link to='/Guarantee_Kafalah' style={{ textDecoration: 'none' }}><p> Retention Payment Guarantee </p></Link>
                                                                    <h6 style={{ display: 'flex', alignItems: 'center' }}><GrFormNext></GrFormNext></h6>
                                                                </div>
                                                                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                                                                    <p> Export and Import Trade </p>
                                                                    <h6 style={{ display: 'flex', alignItems: 'center' }}><GrFormNext></GrFormNext></h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        : ""}

                                                </div>
                                                {showContent === 1 ?
                                                    <div style={{ paddingLeft: '15px' }} class='animate__animated animate__zoomIn'>
                                                        <p><img style={{ width: '100%', height: '327px' }} src={aboutUs} alt="" /></p>
                                                    </div>
                                                    : ""}
                                                {showContent === 2 ?
                                                    <div style={{ paddingLeft: '15px' }} class='animate__animated animate__zoomIn'>
                                                        <p><img style={{ width: '100%', height: '327px' }} src={aboutUs} alt="" /></p>
                                                    </div>
                                                    : ""}
                                                {showContent === 3 ?
                                                    <div style={{ paddingLeft: '15px' }} class='animate__animated animate__zoomIn'>
                                                        <p><img style={{ width: '100%', height: '327px' }} src={aboutUs} alt="" /></p>
                                                    </div>
                                                    : ""}
                                            </div>
                                        </>
                                        : ""}
                                    {show === "Home6" ?
                                        <>
                                            <div className={`popTitle ${scrolled ? "scrolled" : ""}`}>
                                                <p className='animate__animated animate__zoomIn'>Medias</p>
                                            </div>
                                            <div className="aboutusNav">
                                                <div className="aboutusNavItems animate__animated animate__zoomIn">
                                                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                                                        <Link to="/News" style={{ textDecoration: 'none' }}><p onMouseOver={() => { setShowContent(1) }} style={showContent == 1 ? { color: getColor() } : { color: getColor2(), display: 'flex' }}> News</p></Link>
                                                        <h6 style={{ display: 'flex', alignItems: 'center' }}><GrFormNext></GrFormNext></h6>
                                                    </div>
                                                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                                                        <p onMouseOver={() => { setShowContent(2) }} style={showContent == 2 ? { color: getColor() } : { color: getColor2(), display: 'flex' }}> Publications </p>
                                                        <h6 style={{ display: 'flex', alignItems: 'center' }}><GrFormNext></GrFormNext></h6>
                                                    </div>
                                                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                                                        <Link to="/BankFormat" style={{ textDecoration: 'none' }}><p onMouseOver={() => { setShowContent(3) }} style={showContent == 3 ? { color: getColor() } : { color: getColor2(), display: 'flex' }}> Bank Format </p></Link>
                                                        <h6 style={{ display: 'flex', alignItems: 'center' }}><GrFormNext></GrFormNext></h6>
                                                    </div>
                                                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                                                        <Link to="/Gallery" style={{ textDecoration: 'none' }}><p onMouseOver={() => { setShowContent(4) }} style={showContent == 4 ? { color: getColor() } : { color: getColor2(), display: 'flex' }}> Gallery </p></Link>
                                                        <h6 style={{ display: 'flex', alignItems: 'center' }}><GrFormNext></GrFormNext></h6>
                                                    </div>
                                                </div>

                                                <div>
                                                    {showContent === 2 ?
                                                        <div className="aboutusNavItems animate__animated animate__zoomIn">
                                                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                                                                <Link to='/annualReport' style={{ textDecoration: 'none' }}><p> Annual Report </p></Link>
                                                                <h6 style={{ display: 'flex', alignItems: 'center' }}><GrFormNext></GrFormNext></h6>
                                                            </div>
                                                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                                                                <Link to='/NewsLetter' style={{ textDecoration: 'none' }}><p> News Letter </p></Link>
                                                                <h6 style={{ display: 'flex', alignItems: 'center' }}><GrFormNext></GrFormNext></h6>
                                                            </div>
                                                        </div>
                                                        : ""}
                                                </div>
                                                <div style={{ paddingLeft: '15px' }} class='animate__animated animate__zoomIn'>
                                                    <p><img style={{ width: '100%', height: '327px' }} src={aboutUs} alt="" /></p>
                                                </div>

                                            </div>

                                        </>
                                        : ""}
                                    <div className="popupFooter">
                                        <p>Wegagen Bank SC</p>
                                    </div>
                                </div>
                            </div>
                        </>
                        : ""}

                </div>
            </div>
            <div>
            </div>
        </>
    )
}
export default Mega_Menu 