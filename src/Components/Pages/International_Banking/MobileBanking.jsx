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

// function MobileBanking() {

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

//             <p className={styles.title}>
//                 <h5>Mobile Banking Service</h5>
//                 This is a service that enables customers to access and manage their account 24/7 through their mobile phones.
//                 This service supports both English & Amharic
//             </p>

//             <p style={{ color: '#ff6b0b', fontSize: '19px', textAlign: 'left', marginLeft: '5%', marginTop: '20px' }}>By dialing to *866#, customers can get the following services:</p>

//             <div className={styles.moreFeatures} style={{ marginTop: '20px' }}>
//                 <div className={styles.leftFeatures}>
//                     <IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll>
//                 </div>
//                 <div className={styles.rightFeatures}>
//                     <h6>Transfer funds between own</h6>
//                     <p>
//                         accounts and to other customers’ accounts within the Bank,
//                     </p>
//                 </div>
//             </div>
//             <div className={styles.moreFeatures} >
//                 <div className={styles.leftFeatures}>
//                     <IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll>
//                 </div>
//                 <div className={styles.rightFeatures}>
//                     <h6>Transfer funds</h6>
//                     <p>
//                         to non-account holders
//                     </p>
//                 </div>
//             </div>
//             <div className={styles.moreFeatures} >
//                 <div className={styles.leftFeatures}>
//                     <IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll>
//                 </div>
//                 <div className={styles.rightFeatures}>
//                     <h6>Cheque Management -Request</h6>
//                     <p>
//                     cheque book, view cheque status and stop cheque payments,
//                     </p>
//                 </div>
//             </div>
//             <div className={styles.moreFeatures} >
//                 <div className={styles.leftFeatures}>
//                     <IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll>
//                 </div>
//                 <div className={styles.rightFeatures}>
//                     <h6>Receive SMS alert</h6>
//                     {/* <p>
//                         to non-account holders
//                     </p> */}
//                 </div>
//             </div>
//             <div className={styles.moreFeatures} >
//                 <div className={styles.leftFeatures}>
//                     <IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll>
//                 </div>
//                 <div className={styles.rightFeatures}>
//                     <h6>View loan contract details</h6>
//                     <p>
//                     and account balance
//                     </p>
//                 </div>
//             </div>
//             <div className={styles.moreFeatures} >
//                 <div className={styles.leftFeatures}>
//                     <IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll>
//                 </div>
//                 <div className={styles.rightFeatures}>
//                     <h6>View mini statement</h6>
//                     <p>
//                     of accounts transaction and
//                     </p>
//                 </div>
//             </div>
//             <div className={styles.moreFeatures} style={{ marginBottom: '100px' }}>
//                 <div className={styles.leftFeatures}>
//                     <IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll>
//                 </div>
//                 <div className={styles.rightFeatures}>
//                     <h6>View foreign exchange rate.</h6>
//                     <p>
//                     {/* of accounts transaction and */}
//                     </p>
//                 </div>
//             </div>

//             <Footer />

//         </div>
//     )
// }

// export default MobileBanking