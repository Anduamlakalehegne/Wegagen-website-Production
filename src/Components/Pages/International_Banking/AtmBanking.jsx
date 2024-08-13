// import React, { useState, useEffect } from "react";
// import Header from '../Common/Header'
// import ExchangeRate from '../Common/ExchangeRate'
// import Slider from '../Common/Slider'
// import About_us from "../../../assets/Images/Agar.png";
// import agar1 from "../../../assets/Images/agar1.png";
// import styles from "./cardBanking.module.css";
// import "animate.css";
// import Aos from "aos";
// import "aos/dist/aos.css";
// // import { FaUserCheck } from "react-icons/fa";
// import { IoIosDoneAll } from "react-icons/io";
// import Test from "../Common/Test";
// import Footer from "../Common/Footer";

// function AtmBanking() {
 
//     useEffect(() => {
//         Aos.init();
//     }, []);

//     return (
//         <div>

//             {/* <ExchangeRate /> */}

//             <Test path="bankingServices" />

//             <div className={styles.agarImage}>
//                 <img src={About_us} ></img>
//             </div>

//             {/* <p className={styles.title}>
//                 Wegagen Bank provides loan to employees of companies that are corporate customer. The loan facilities provided includes
//                 household items, vehicles and houses, with relaxed repayment schedules extending from mid to long term, depending on the loan.
//             </p>
//             <div className={styles.features}>
//                 <div className={styles.featuresTitle}>
//                     <p style={{ backgroundColor: '#ff6b0b', margin: '10px', marginRight: '1px' }}></p>
//                     <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginLeft: '1px' }}></p>
//                     <p>FEATURES:</p>
//                 </div>
//                 <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
//                     <li>For purchase of a vehicle the customer should deposit 10% of the value initially, and additional 15% within the
//                         first six months and the remaining 15% in the next six months.Then after, the Bank provides loan for the remaining 60% of the value.</li>
//                     <li>For purchase of a house the customer should deposit 10% of the value initially and additional 10% within the
//                         first six months and the remaining 10% in the next six months.Then after, the Bank provides loan for the remaining 70% of the value.</li>
//                     <li>The interest rate is calculated as per the Bank’s terms and tariffs.</li>
//                     <li>The maturity of the loan for a Vehicle is 7 years and 10 years for acquisition of a House</li>
//                     <li>The assets acquired with the Bank’s finance shall be used as collateral.</li>
//                     <li>The account holder should deposit at least for one year to be eligible for the loan.</li>
//                 </ul>
//             </div> */}

//             <div className={styles.moreFeatures} style={{ marginTop: '50px' }}>
//                 <div className={styles.leftFeatures}>
//                     <IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll>
//                 </div>
//                 <div className={styles.rightFeatures}>
//                     {/* <h6>Requirement</h6> */}
//                     <p>
//                         Wegagen offers its customers convenient ways to its service, one of which is Electronic card banking. Wegagen’s customized
//                         electronic payment cards are usable in its well-distributed ATM and POS terminals. The recently introduced national switching
//                         system, Et-Switch, has also increased the usability of our cards through ATMs of other banks as well. Our regular debit card is named Agar.
//                     </p>
//                 </div>
//             </div>
//             <div className={styles.moreFeatures} style={{ marginBottom: '100px' }}>
//                 <div className={styles.leftFeatures}>
//                     <IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll>
//                 </div>
//                 <div className={styles.rightFeatures}>
//                     {/* <h6>Requirement</h6> */}
//                     <p>
//                         We also offer Nigat Debit Card for Women customers and Amana Debit Card for our interest free account holders. Wegagen is also
//                         pioneer in introducing cobranded shopping cards in collaboration with Shoa Shopping Center, the biggest retail outlet in Ethiopia,
//                         and FETTAN, an aggregation technology & service provider. Shoa shopping cards come in three options as Shoa Gift Card, Shoa Prepaid
//                         Card and Shoa Loyalty card, each with imbedded loyalty features & rewards. All debit cards are available at all Wegagen Branches across Ethiopia,
//                         while Shoa Shopping cards are available only in Wegagen Branches and Shoa Shopping Centers in Addis Ababa.
//                     </p>
//                 </div>
//             </div>

//             <Footer />

//         </div>
//     )
// }

// export default AtmBanking