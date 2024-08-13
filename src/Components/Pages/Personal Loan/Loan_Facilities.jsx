import React, { useState, useEffect } from "react";
import Header from '../Common/Header'
import ExchangeRate from '../Common/ExchangeRate'
import Slider from '../Common/Slider'
import About_us from "../../../assets/Images/common.jpg";
import agar1 from "../../../assets/Images/agar1.png";
import styles from "./personalLoan.module.css";
import "animate.css";
import Aos from "aos";
import "aos/dist/aos.css";
// import { FaUserCheck } from "react-icons/fa";
import { IoIosDoneAll } from "react-icons/io";
import Mega_Menu from "../Common/Mega_Menu";
import Footer from "../Common/Footer";
import StikyNav from "../Common/StikyNav";

function Loan_Facilities() {

    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div>

            <StikyNav />

            <Mega_Menu path="bankingServices" />

            <div className={styles.agarImage}>
                <img src={About_us} ></img>
            </div>



            <div className="animate__animated animate__bounceInUp" style={{ marginBottom: '100px' }}>
                <p className={styles.title}>
                    <h5>General eligibility Criteria</h5>
                </p>
                <div className={styles.description}> 
                    <p >
                        All customers applying for any type of credit loans and advance must fulfil the following general eligibility criteria: -
                    </p>
                </div>

                <div className={styles.features}>
                    <div className={styles.featuresTitle}>
                        <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#004360', margin: '10px', marginLeft: '1px' }}></p>
                        <p>FEATURES:</p>
                    </div>
                    <ol style={{ marginLeft: '25px' }}>
                        <li>1. All persons (legal/physical) engaged in lawful activities and credit worthy business is/are eligible to borrow business loans;</li>
                        <li> 2.	All individuals who have defined and sustainable source of income are eligible to borrow consumer loans; </li>
                        <li>3.	The business borrower/applicant should present active trade license for a current fiscal year or investment license and principal registration certificate for new projects; </li>
                        <li>4.	Applicants/borrowers or guarantors or mortgagers must present a Tax identification number/TIN but, Ethiopians and foreigners living abroad
                            linked to loan applicant as guarantor, stakeholder or spouse of loan applicants or guarantors are exempted until further notification by NBE; </li>
                        <li>5.	If the pledged or to be financed collateral is imported on duty free basis, tax privilege certificate shall be presented;</li>
                        <li>6.	All applicants/borrowers or guarantors or mortgagers must present tax clearance certificate;</li>
                        <li>7.	The applicant/borrower and/or any of its major shareholders/subsidiaries/affiliates must not have any non-performing loans in any other bank;</li>
                        <li>8.	The borrower/applicant and/or any of its major shareholder subsidiaries shall fully settle any previous loss record to the Bank. To that effect, internal records shall be thoroughly checked;</li>
                        <li>9.	The borrower/applicant must not have any record of mal-operation of checking account in system until the rehabilitation period is expired;</li>
                        <li>10.	The borrower/applicant must have never been engaged in tax evasion, or in a breach of foreign exchange transaction regulation or in any other illegal/unlawful dealings if the information is available/circulated/ record is available;</li>
                        <li>11.	For project and asset financing loans the borrower/applicant shall fulfil at least the required minimum equity contribution; </li>
                        <li>12.	The applicant/borrower or his/her/ its guarantor(s), mortgagers, spouse shall give a written and signed consent for the access of his/her its credit information maintained with credit reference system and sharing of same among all other Banks; </li>
                        <li>13.	The applicant’s/borrower’s business must be legally acceptable, financially viable, technically feasible and social/environmentally friendly; </li>
                        <li>14.	The applicant/borrower shall open a deposit account (current, saving or any special account) at any branch of the bank; </li>
                        <li>15.	The total credit turnover of deposit account for the existing applicant/borrower at Wegagen Bank shall be taken into account for credit decision; </li>
                        <li>16.	The applicant/borrower has to present all the documents/information demanded by the Bank for the credit request processing purpose;</li>
                        <li>17.	In addition to the above general eligibility criteria, the applicant/borrower has to fulfil the specific eligibility criteria for each type of loan/credit facility as indicated in the credit processing procedure.</li>
                    </ol>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Loan_Facilities