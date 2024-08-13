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

// function InternetBanking() { 

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
//                 Wegagen Direct – Internet Banking Service This service enables customers to access and manage their accounts anytime,
//                 anywhere through an Internet connection using the Bank’s own website. https://www. wegagenbanksc.com.et:4443
//             </p>
//             <p className={styles.title} style={{ marginBottom: '25px' }}>
//                 Based on the nature & size of the customers operations, the service is provided as either Retail or Corporate Internet banking.
//                 With the newly implemented Oracle Flexicube Core Banking System, our corporate & Retail Internet Banking platforms now provide our
//                 esteemed customers with seamless management of their finances anytime, anywhere.
//             </p>

//             <div className={styles.features} style={{ marginBottom: '10px' }}>
//                 <div className={styles.featuresTitle}>
//                     <p style={{ backgroundColor: '#ff6b0b', margin: '10px', marginRight: '1px' }}></p>
//                     <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginLeft: '1px' }}></p>
//                     <p>RETAIL INTERNET BANKING:</p>
//                 </div>
//                 <ul class="list-disc list-inside" style={{ marginLeft: '25px', }}>
//                     <li>This is a type of internet banking service offered to individuals and businesses 
//                         whose account is run only by a single signatory.</li>
//                 </ul>
//             </div>
//             <div className={styles.features}>
//                 <div className={styles.featuresTitle}>
//                     <p style={{ backgroundColor: '#ff6b0b', margin: '10px', marginRight: '1px' }}></p>
//                     <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginLeft: '1px' }}></p>
//                     <p>CORPORATE INTERNET BANKING:</p>
//                 </div>
//                 <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
//                     <li>The corporate internet banking service is designed for non-individual customers such as private companies, NGOs,
//                         International organizations, government office, etc. Corporate internet banking customers would be provided with
//                         more than one user access depending on their own policy and procedure.</li>
//                 </ul>
//             </div>
//             <div className={styles.internetCards}>

//                 <div className={styles.moreFeatures} >
//                     <div className={styles.leftFeatures}>
//                         <IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll>
//                     </div>
//                     <div className={styles.rightFeatures}>
//                         <h6>Transfer funds between</h6>
//                         <p>
//                             own accounts and to other customers’ accounts within the Bank,
//                         </p>
//                     </div>
//                 </div>

//                 <div className={styles.moreFeatures} >
//                     <div className={styles.leftFeatures}>
//                         <IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll>
//                     </div>
//                     <div className={styles.rightFeatures}>
//                         <h6>Transfer funds</h6>
//                         <p>
//                             to non-account holders
//                         </p>
//                     </div>
//                 </div>
//                 <div className={styles.moreFeatures} >
//                     <div className={styles.leftFeatures}>
//                         <IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll>
//                     </div>
//                     <div className={styles.rightFeatures}>
//                         <h6>Cheque Management -Request</h6>
//                         <p>
//                             cheque book, view cheque status and stop cheque payments,
//                         </p>
//                     </div>
//                 </div>

//                 <div className={styles.moreFeatures} >
//                     <div className={styles.leftFeatures}>
//                         <IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll>
//                     </div>
//                     <div className={styles.rightFeatures}>
//                         <h6>View loan contract</h6>
//                         <p>
//                             details and account balance.
//                         </p>
//                     </div>
//                 </div>

//                 <div className={styles.moreFeatures} >
//                     <div className={styles.leftFeatures}>
//                         <IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll>
//                     </div>
//                     <div className={styles.rightFeatures}>
//                         <h6>View mini and full</h6>
//                         <p>
//                             statement of accounts.
//                         </p>
//                     </div>
//                 </div>

//                 <div className={styles.moreFeatures} >
//                     <div className={styles.leftFeatures}>
//                         <IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll>
//                     </div>
//                     <div className={styles.rightFeatures}>
//                         <h6>View foreign exchange rate.</h6>
//                         <p>
//                             {/* to non-account holders */}
//                         </p>
//                     </div>
//                 </div>

//                 <div className={styles.moreFeatures} >
//                     <div className={styles.leftFeatures}>
//                         <IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll>
//                     </div>
//                     <div className={styles.rightFeatures}>
//                         <h6>Viewing linked accounts;</h6>
//                         <p>
//                             {/* to non-account holders */}
//                         </p>
//                     </div>
//                 </div>

//                 <div className={styles.moreFeatures} >
//                     <div className={styles.leftFeatures}>
//                         <IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll>
//                     </div>
//                     <div className={styles.rightFeatures}>
//                         <h6>Funds transfer status enquiry</h6>
//                         <p>
//                             (both to own and to other accounts); Viewing Activity Log;
//                         </p>
//                     </div>
//                 </div>

//                 <div className={styles.moreFeatures} >
//                     <div className={styles.leftFeatures}>
//                         <IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll>
//                     </div>
//                     <div className={styles.rightFeatures}>
//                         <h6>Transfer funds to non-accountholders</h6>
//                         <p>
//                             {/* to non-account holders */}
//                         </p>
//                     </div>
//                 </div>

//                 <div className={styles.moreFeatures} >
//                     <div className={styles.leftFeatures}>
//                         <IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll>
//                     </div>
//                     <div className={styles.rightFeatures}>
//                         <h6>View loan contract and disbursement details</h6>
//                         <p>
//                             {/* to non-account holders */}
//                         </p>
//                     </div>
//                 </div>
//                 <div className={styles.moreFeatures} >
//                     <div className={styles.leftFeatures}>
//                         <IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll>
//                     </div>
//                     <div className={styles.rightFeatures}>
//                         <h6>Funds transfer status enquiry</h6>
//                         <p>
//                             (both to own and to other accounts);
//                         </p>
//                     </div>
//                 </div>
//                 <div className={styles.moreFeatures} >
//                     <div className={styles.leftFeatures}>
//                         <IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll>
//                     </div>
//                     <div className={styles.rightFeatures}>
//                         <h6>Cheque Management-Request</h6>
//                         <p>
//                             cheque book, view cheque status and stop cheque payments
//                         </p>
//                     </div>
//                 </div>
//                 <div className={styles.moreFeatures} >
//                     <div className={styles.leftFeatures}>
//                         <IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll>
//                     </div>
//                     <div className={styles.rightFeatures}>
//                         <h6>Salary upload</h6>
//                         <p>
//                             {/* to non-account holders */}
//                         </p>
//                     </div>
//                 </div>
//                 <div className={styles.moreFeatures} >
//                     <div className={styles.leftFeatures}>
//                         <IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll>
//                     </div>
//                     <div className={styles.rightFeatures}>
//                         <h6>View customer profile information</h6>
//                         <p>
//                             {/* to non-account holders */}
//                         </p>
//                     </div>
//                 </div>
//                 <div className={styles.moreFeatures} >
//                     <div className={styles.leftFeatures}>
//                         <IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll>
//                     </div>
//                     <div className={styles.rightFeatures}>
//                         <h6>View daily transaction information</h6>
//                         <p>
//                             {/* to non-account holders */}
//                         </p>
//                     </div>
//                 </div>
//                 <div className={styles.moreFeatures} >
//                     <div className={styles.leftFeatures}>
//                         <IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll>
//                     </div>
//                     <div className={styles.rightFeatures}>
//                         <h6>View linked accounts</h6>
//                         <p>
//                             {/* to non-account holders */}
//                         </p>
//                     </div>
//                 </div>
//                 <div className={styles.moreFeatures} >
//                     <div className={styles.leftFeatures}>
//                         <IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll>
//                     </div>
//                     <div className={styles.rightFeatures}>
//                         <h6>View full Statement of Accounts</h6>
//                         <p>
//                             {/* to non-account holders */}
//                         </p>
//                     </div>
//                 </div>
//                 <div className={styles.moreFeatures} >
//                     <div className={styles.leftFeatures}>
//                         <IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll>
//                     </div>
//                     <div className={styles.rightFeatures}>
//                         <h6>Viewing Activity Log</h6>
//                         <p>
//                             {/* to non-account holders */}
//                         </p>
//                     </div>
//                 </div>
//                 <div className={styles.moreFeatures} >
//                     <div className={styles.leftFeatures}>
//                         <IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll>
//                     </div>
//                     <div className={styles.rightFeatures}>
//                         <h6>View foreign exchange rate</h6>
//                         <p>
//                             {/* to non-account holders */}
//                         </p>
//                     </div>
//                 </div>
//             </div>


//             <Footer />

//         </div >
//     )
// }

// export default InternetBanking