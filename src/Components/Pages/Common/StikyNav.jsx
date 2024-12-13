import React, { useState, useEffect } from "react";
import { FaHome, FaBell, FaUpload, FaArrowAltCircleUp } from 'react-icons/fa';
import { IoIosMail } from "react-icons/io";
import { MdCalculate } from "react-icons/md";
import { MdBookOnline } from "react-icons/md";
import { BsCurrencyExchange } from "react-icons/bs";
import { GiCardExchange } from "react-icons/gi";
import { IoIosNotifications } from "react-icons/io";
import styles from './stikyNav.module.css';
import axios from "axios"; 

import { BiPlus } from "react-icons/bi";
import "animate.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import './stikyNav.css';
import { Link } from "react-router-dom";
import LoanCalculator from "./Loan Calculator/LoanCalculator";
import ScrollToTop from "../ScrollToTop";
import ThreeCXChat from "./Chat/ThreeCXChat";
import { format, parseISO } from 'date-fns';

export default function StikyNav() {
    
    const [showPopup, setShowPopup] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 1; // Show only one row per page

    useEffect(() => {
        if (showPopup) {
            document.body.classList.add('body-no-scroll');
        } else {
            document.body.classList.remove('body-no-scroll');
        }
    }, [showPopup]);

    const current = new Date();
    // const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    const [rates, setRates] = useState([]);
    const [formattedDate, setFormattedDate] = useState('');

    useEffect(() => {
        axios.get('https://weg.back.strapi.wegagen.com/api/exchange-rates?populate=*')
            .then(response => { 
                const data = response.data.data; 
                setRates(data); 

                if (data.length > 0) { 
                    const date = parseISO(data[0].attributes.date);
                    setFormattedDate(format(date, 'MMM dd, yyyy'));
                    // console.log(formattedDate, "nandu")
                }
            })
            .catch(error => {
                console.error("There was an error fetching the exchange rates!", error); 
            });
    }, []);

    const exchangeRate = () => {
        const MySwal = withReactContent(Swal);
        MySwal.fire({
            position: 'center',
            html: (
                <div className={styles.popOuter}>
                    <div className={styles.popexchange} style={{ marginBottom: '10px' }}>

                        <p className={styles.popexchangeHeader} style={{ fontSize: '25px', fontWeight: "600" }}>Exchange Rate</p>
                        <table>
                            <thead>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th colSpan={2} style={{ paddingLeft: '5%' }} >Cash & Remittance</th>
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
            ),
            showConfirmButton: false,
            showCloseButton: true,
            width: "700px",
            denyButtonText: "Close",
            imageClass: "img-responsive",
            imageAlt: "Custom image",
            showClass: {
                popup: "animate__animated animate__swing",
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

    const [loanAmount, setLoanAmount] = useState('');
    const [months, setMonths] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('end-of-period');
    const [monthlyPayment, setMonthlyPayment] = useState('');
    const [totalInterest, setTotalInterest] = useState('');
    const [totalPayment, setTotalPayment] = useState('');

    const calculateLoan = () => {
        const principal = parseFloat(loanAmount);
        const calculatedMonths = parseInt(months, 10);
        const annualInterestRate = parseFloat(interestRate) / 100;
        const monthlyInterestRate = annualInterestRate / 12;

        let calculatedPayment;
        if (paymentMethod === 'end-of-period') {
            calculatedPayment =
                principal *
                (monthlyInterestRate /
                    (1 - Math.pow(1 + monthlyInterestRate, -calculatedMonths)));
        } else {
            // Payment at the beginning of period
            calculatedPayment =
                principal *
                (monthlyInterestRate /
                    (1 - Math.pow(1 + monthlyInterestRate, -calculatedMonths))) /
                (1 + monthlyInterestRate);
        }

        setMonthlyPayment(calculatedPayment.toFixed(2));

        const totalInterestPaid = calculatedPayment * calculatedMonths - principal;
        setTotalInterest(totalInterestPaid.toFixed(2));

        setTotalPayment((principal + totalInterestPaid).toFixed(2));
        displayResults();
    };

    const clearFields = () => {
        setLoanAmount('');
        setMonths('');
        setInterestRate('');
        setMonthlyPayment('');
        setTotalInterest('');
        setTotalPayment('');
    };



    // const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };


    return (
        <>
            <ScrollToTop />

            <div style={{ zIndex: '2000' }}>
                <ThreeCXChat />
            </div>
            <div className={styles.sidebar}>
                <nav className={styles.sidebarnav}>
                    <a onClick={exchangeRate} className={styles.iconlink} data-text="Exchange Rate">
                        <BsCurrencyExchange className={`${styles.icon} ${styles.animatedIcon}`} />
                    </a>
                    <p onClick={togglePopup}>
                        <span className={styles.iconlink} data-text="Loan Calculator">
                            <MdCalculate className={styles.icon} />
                        </span>
                    </p>
                    <Link to="/Notification"><a className={styles.iconlink} data-text="Notification">
                        <IoIosNotifications className={styles.icon} />
                    </a>
                    </Link>
                    <a href="https://www.wegagenbanksc.com.et:4443/pages/home.html?module=login" className={styles.iconlink} data-text="Online Banking">
                        <GiCardExchange className={styles.icon} />
                    </a>

                </nav>

                <LoanCalculator isOpen={showPopup} onClose={togglePopup} />
            </div>
        </>
    );
}
