import React, { useState, useEffect } from "react";
import Header from '../Common/Header'
import ExchangeRate from '../Common/ExchangeRate'
import Slider from '../Common/Slider'
import About_us from "../../../assets/Images/common.jpg";
import agar1 from "../../../assets/Images/agar1.png";
import styles from "./agar.module.css";
import "animate.css";
import Aos from "aos";
import "aos/dist/aos.css";
// import { FaUserCheck } from "react-icons/fa";
import { IoIosDoneAll } from "react-icons/io";
import Mega_Menu from "../Common/Mega_Menu";
import Footer from "../Common/Footer";
import StikyNav from "../Common/StikyNav";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { MdMenuOpen } from "react-icons/md";
import { useLocation } from 'react-router-dom';

function Personal_Banking() {

    useEffect(() => {
        Aos.init();
    }, []);

    const [dispaly, setDisplay] = useState(1);
    const [showMenu, setshowMenu] = useState(false);
    const MySwal = withReactContent(Swal);
    useEffect(() => {
        if (dispaly !== 0) {
            MySwal.close();
        }
    }, [dispaly]);

    const location = useLocation();

    useEffect(() => {
        // Check if state is passed
        if (location.state && location.state.display) {
            setDisplay(location.state.display);
        }
    }, [location]);

    const handleNavigationClick = (index) => {
        setDisplay(index);
        window.scrollTo(0, 280);
    };

    useEffect(() => {
        Aos.init();
    }, []);

    const handleClick = (index) => {
        setDisplay(index);
        MySwal.close();
        window.scrollTo(0, 0);
    };

    // const MySwal = withReactContent(Swal);

    const menutoggle = () => {
        MySwal.fire({
            html: (
                <div className="leftNavBars" style={{ marginTop: '30px' }} >
                    <div className={`animate__animated animate__fadeInLeft ${styles.popupshortInfo}`}>
                        <p onClick={() => { handleClick(1, showMenu) }} style={dispaly === 1 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>Local Currency Saving Accounts</p>
                        <p onClick={() => { handleClick(2, showMenu) }} style={dispaly === 2 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>Special Saving Account</p>
                        <p onClick={() => { handleClick(3, showMenu) }} style={dispaly === 3 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>Goh Child Trust Account</p>
                        <p onClick={() => { handleClick(4, showMenu) }} style={dispaly === 4 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>Nigat (Women) Saving Account</p>
                        <p onClick={() => { handleClick(5, showMenu) }} style={dispaly === 5 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>Elders/Warka Saving Account</p>
                        <p onClick={() => { handleClick(6, showMenu) }} style={dispaly === 6 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>Edir/Equb Saving Account</p>
                        <p onClick={() => { handleClick(7, showMenu) }} style={dispaly === 7 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>Muday Box Saving Account</p>
                        <p onClick={() => { handleClick(8, showMenu) }} style={dispaly === 8 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>Supplier Credit Saving</p>
                        <p onClick={() => { handleClick(9, showMenu) }} style={dispaly === 9 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>Biruh Youth Saving Account</p>
                        <p onClick={() => { handleClick(10, showMenu) }} style={dispaly === 10 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>TILA (TSILAL) SAVING ACCOUNT</p>
                        <p onClick={() => { handleClick(11, showMenu) }} style={dispaly === 11 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>Normal Checking Account</p>
                        <p onClick={() => { handleClick(12, showMenu) }} style={dispaly === 12 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>Special Demand Deposit</p>
                        <p onClick={() => { handleClick(13, showMenu) }} style={dispaly === 13 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>Mixed/ NOW Account (withdrawal at Notice or Negotiable Order of Withdrawal)</p>
                        <p onClick={() => { handleClick(14, showMenu) }} style={dispaly === 14 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>Overdraft Account</p>
                        <p onClick={() => { handleClick(15, showMenu) }} style={dispaly === 15 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>Ethiopia Commodity Exchange Settlement Accounts</p>
                        <p onClick={() => { handleClick(16, showMenu) }} style={dispaly === 16 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>Linked (Zero Balance) Account</p>
                        <p onClick={() => { handleClick(17, showMenu) }} style={dispaly === 17 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>School Account</p>
                        <p onClick={() => { handleClick(18, showMenu) }} style={dispaly === 18 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>Foreign Currency Accounts</p>
                        <p onClick={() => { handleClick(19, showMenu) }} style={dispaly === 19 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>Non-Resident Non-Transferrable Account</p>
                        <p onClick={() => { handleClick(20, showMenu) }} style={dispaly === 20 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>Foreign Currency Saving Account</p>
                        <p onClick={() => { handleClick(21, showMenu) }} style={dispaly === 21 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>Non-Resident Foreign Currency Account (NR-FCY)</p>
                        <p onClick={() => { handleClick(22, showMenu) }} style={dispaly === 22 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>Non- Resident Transferrable Birr Account</p>


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
            }
        }).then((result) => {
            if (result.isDenied) {
                // 
            }
        })
    }

    return (
        <div>

            <StikyNav />

            <Mega_Menu path="bankingServices" />

            <div className={styles.agarImage}>
                <img src={About_us} ></img>
            </div>




            <div className={styles.establishment}>

                <p className={styles.aboutUsMenu} onClick={() => { menutoggle() }} ><MdMenuOpen style={{ fontSize: '30px' }} /></p>

                <div className={styles.leftNavBars}>
                    <div className={`animate__animated animate__fadeInLeft ${styles.shortInfo}`}>
                        <p onClick={() => handleNavigationClick(1)} style={dispaly === 1 ? { backgroundColor: '#ff6b0b', color: 'white', padding: '7px', fontSize: '16px' } : null}> 1. Local Currency Saving Accounts</p>
                        <p onClick={() => handleNavigationClick(2)} style={dispaly === 2 ? { backgroundColor: '#ff6b0b', color: 'white', padding: '7px', fontSize: '16px' } : null}> 2. Special Saving Account</p>
                        <p onClick={() => handleNavigationClick(3)} style={dispaly === 3 ? { backgroundColor: '#ff6b0b', color: 'white', padding: '7px', fontSize: '16px' } : null}> 3. Goh Child Trust Account</p>
                        <p onClick={() => handleNavigationClick(4)} style={dispaly === 4 ? { backgroundColor: '#ff6b0b', color: 'white', padding: '7px', fontSize: '16px' } : null}> 4. Nigat (Women) Saving Account</p>
                        <p onClick={() => handleNavigationClick(5)} style={dispaly === 5 ? { backgroundColor: '#ff6b0b', color: 'white', padding: '7px', fontSize: '16px' } : null}> 5. Elders/Warka Saving Account</p>
                        <p onClick={() => handleNavigationClick(6)} style={dispaly === 6 ? { backgroundColor: '#ff6b0b', color: 'white', padding: '7px', fontSize: '16px' } : null}> 6. Edir/Equb Saving Account</p>
                        <p onClick={() => handleNavigationClick(7)} style={dispaly === 7 ? { backgroundColor: '#ff6b0b', color: 'white', padding: '7px', fontSize: '16px' } : null}> 7. Muday Box Saving Account </p>
                        <p onClick={() => handleNavigationClick(8)} style={dispaly === 8 ? { backgroundColor: '#ff6b0b', color: 'white', padding: '7px', fontSize: '16px' } : null}> 8. Supplier Credit Saving</p>
                        <p onClick={() => handleNavigationClick(9)} style={dispaly === 9 ? { backgroundColor: '#ff6b0b', color: 'white', padding: '7px', fontSize: '16px' } : null}> 9. Biruh Youth Saving Account</p>
                        <p onClick={() => handleNavigationClick(10)} style={dispaly === 10 ? { backgroundColor: '#ff6b0b', color: 'white', padding: '7px', fontSize: '16px' } : null}>10. TILA (TSILAL) SAVING ACCOUNT</p>
                        <p onClick={() => handleNavigationClick(11)} style={dispaly === 11 ? { backgroundColor: '#ff6b0b', color: 'white', padding: '7px', fontSize: '16px' } : null}>11. Normal Checking Account</p>
                        <p onClick={() => handleNavigationClick(12)} style={dispaly === 12 ? { backgroundColor: '#ff6b0b', color: 'white', padding: '7px', fontSize: '16px' } : null}>12 Special Demand Deposit </p>
                        <p onClick={() => handleNavigationClick(13)} style={dispaly === 13 ? { backgroundColor: '#ff6b0b', color: 'white', padding: '7px', fontSize: '16px' } : null}>13. Mixed/ NOW Account (withdrawal at Notice or Negotiable Order of Withdrawal)</p>
                        <p onClick={() => handleNavigationClick(14)} style={dispaly === 14 ? { backgroundColor: '#ff6b0b', color: 'white', padding: '7px', fontSize: '16px' } : null}>14. Overdraft Account</p>
                        <p onClick={() => handleNavigationClick(15)} style={dispaly === 15 ? { backgroundColor: '#ff6b0b', color: 'white', padding: '7px', fontSize: '16px' } : null}>15. Ethiopia Commodity Exchange Settlement Accounts</p>
                        <p onClick={() => handleNavigationClick(16)} style={dispaly === 16 ? { backgroundColor: '#ff6b0b', color: 'white', padding: '7px', fontSize: '16px' } : null}>16. Linked (Zero Balance) Account</p>
                        <p onClick={() => handleNavigationClick(17)} style={dispaly === 17 ? { backgroundColor: '#ff6b0b', color: 'white', padding: '7px', fontSize: '16px' } : null}>17. School Account</p>
                        <p onClick={() => handleNavigationClick(18)} style={dispaly === 18 ? { backgroundColor: '#ff6b0b', color: 'white', padding: '7px', fontSize: '16px' } : null}>18 Foreign Currency Accounts</p>
                        <p onClick={() => handleNavigationClick(19)} style={dispaly === 19 ? { backgroundColor: '#ff6b0b', color: 'white', padding: '7px', fontSize: '16px' } : null}>18.1 Non-Resident Non-Transferrable Account</p>
                        <p onClick={() => handleNavigationClick(20)} style={dispaly === 20 ? { backgroundColor: '#ff6b0b', color: 'white', padding: '7px', fontSize: '16px' } : null}>18.2 Foreign Currency Saving Account</p>
                        <p onClick={() => handleNavigationClick(21)} style={dispaly === 21 ? { backgroundColor: '#ff6b0b', color: 'white', padding: '7px', fontSize: '16px' } : null}>18.3 Non-Resident Foreign Currency Account (NR-FCY)</p>
                        <p onClick={() => handleNavigationClick(22)} style={dispaly === 22 ? { backgroundColor: '#ff6b0b', color: 'white', padding: '7px', fontSize: '16px' } : null}>18.4 Non- Resident Transferrable Birr Account</p>
                    </div>
                </div>
                <div>

                    {dispaly == 1 ?
                        <div className="animate__animated animate__bounceInUp" style={{ marginBottom: '100px' }}>
                            <p className={styles.title}>
                                <h5>Local Currency Saving Accounts</h5>
                                <h5 style={{ fontSize: '21px', color: '#004360' }}>Description</h5>
                            </p>
                            <div className={styles.description} >
                                <p>Offers an interest bearing account for natural and legal persons (Individuals, organizations and associations) who can fulfil the Bank’s requirement</p>
                            </div>

                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#004360', margin: '10px', marginLeft: '1px' }}></p>
                                    <p>FEATURES:</p>
                                </div>
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li> Bears Interest which is calculated on the minimum balance of the month. </li>
                                    <li> Account can be opened with or without passbook as per the customer preference</li>
                                    <li> Account can be linked with Digital banking services such as ATM card, Internet banking and Mobile banking access</li>
                                </ul>
                            </div>

                            <p className={styles.title} style={{ color: '#ff6b0b', textAlign: 'center', fontSize: '21px', paddingBottom: '20px' }}>
                                Basic Requirement to get the Product
                            </p>

                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll> </div>
                                <div className={styles.rightFeatures}>
                                    <p>Individual account can be opened after delivering a valid and renewed Identification Card (ID card) which shall bear </p>
                                </div>
                            </div>
                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll> </div>
                                <div className={styles.rightFeatures}>
                                    <p>Unexpired date </p>
                                </div>
                            </div>
                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll> </div>
                                <div className={styles.rightFeatures}>
                                    <p>Signature and seal of the issuer</p>
                                </div>
                            </div>
                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll> </div>
                                <div className={styles.rightFeatures}>
                                    <p>Traceable residential address</p>
                                </div>
                            </div>
                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll> </div>
                                <div className={styles.rightFeatures}>
                                    <p>No deletion, alteration and cancellations on the particulars</p>
                                </div>
                            </div>
                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll> </div>
                                <div className={styles.rightFeatures}>
                                    <p>The abovementioned ID’s shall be authenticated from the respective issuing organization</p>
                                </div>
                            </div>
                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll> </div>
                                <div className={styles.rightFeatures}>
                                    <p>Two passport Size photographs in hard or soft copy</p>
                                </div>
                            </div>
                        </div>
                        : ""}

                    {dispaly == 2 ?

                        <div className="animate__animated animate__bounceInUp" style={{ marginBottom: '100px' }}>

                            <p className={styles.title}>
                                <h5>Special Saving Account</h5>
                                <h5 style={{ fontSize: '21px', color: '#004360' }}>Description</h5>
                            </p>
                            <div className={styles.description}>
                                <p> Saving scheme for individuals who are legally travelling abroad for work through agencies. </p>
                            </div>

                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#004360', margin: '10px', marginLeft: '1px' }}></p>
                                    <p>FEATURES:</p>
                                </div>
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li>Attractive interest rate.</li>
                                </ul>
                            </div>

                            <p className={styles.title} style={{ color: '#ff6b0b', textAlign: 'center', fontSize: '21px', paddingBottom: '20px' }}>
                                Basic Requirement to get the Product
                            </p>

                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll></div>
                                <div className={styles.rightFeatures}>
                                    <p>All documents required to open normal saving account shall be applicable to open special saving account too.</p>
                                </div>
                            </div>
                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll></div>
                                <div className={styles.rightFeatures}>
                                    <p>Account opening & operation procedures applied for normal saving account is applicable.</p>
                                </div>
                            </div>
                        </div>
                        : ""}

                    {dispaly == 3 ?

                        <div className="animate__animated animate__bounceInUp" style={{ marginBottom: '100px' }}>

                            <p className={styles.title}>
                                <h5>Goh Child Trust Account</h5>
                                <h5 style={{ fontSize: '21px', color: '#004360' }}>Description</h5>
                            </p>
                            <div className={styles.description} >
                                <p>
                                    Saving scheme that imparts and encourages the saving habit of children. Parents/ guardians are required to open
                                    the account on behalf of  the child/children under their care for  future use when the child/children turn 18 or older.
                                </p>
                            </div>


                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#004360', margin: '10px', marginLeft: '1px' }}></p>
                                    <p>FEATURES:</p>
                                </div>
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li>Uniquely prepared passbook shall be issued.</li>
                                    <li>The Interest rate for the first five years is Normal saving interest rate plus 0.5%. If the depositor agrees to extend the contract,
                                        the interest will progressively increase by additional 0.5% for every five years until the child reaches 18 years’ of age.</li>
                                    <li>The Bank sends a birthday wish for the child through SMS</li>
                                    <li>After every renewal (at five year), the bank will provide a bonus Birr 500.00 for a deposit amount up to Birr 10,000.00 and Birr 1,000.00
                                        or deposit amount above Birr 10,000.00 at maturity. The branch effect bonus payment after receiving a written authorization from their respective districts.
                                        Hence, the bonus payment is subject to a 5% (five percent) tax deduction</li>
                                    <li> Withdrawal is not allowed before the agreed maturity date. If withdrawal is made before the agreed maturity date, only normal saving interest rate per annum shall be paid. </li>
                                    <li>Parents/guardians are encouraged to deposit on monthly basis any amount but they are expected to meet a minimum deposit amount of Birr 1200.00 per annum.
                                        If the parent/guardian fails to save the minimum annual deposit amount only normal saving interest rate shall be applied.</li>
                                </ul>
                            </div>

                            <p className={styles.title} style={{ color: '#ff6b0b', textAlign: 'center', fontSize: '21px', paddingBottom: '20px' }}>
                                Basic Requirement to get the Product
                            </p>

                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll></div>
                                <div className={styles.rightFeatures}>
                                    <p>Parent/ legal guardians of a person who is under 18 years old </p>
                                </div>
                            </div>
                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll></div>
                                <div className={styles.rightFeatures}>
                                    <p>Identification papers with full details of the address and occupation</p>
                                </div>
                            </div>
                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll></div>
                                <div className={styles.rightFeatures}>
                                    <p>Birth certificate of the child from municipality or Government Service, or Hospital, or Church</p>
                                </div>
                            </div>
                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll></div>
                                <div className={styles.rightFeatures}>
                                    <p>Court appointment document, if the account is to be opened by a person other than parents</p>
                                </div>
                            </div>

                        </div>
                        : ""}

                    {dispaly == 4 ?

                        <div className="animate__animated animate__bounceInUp" style={{ marginBottom: '100px' }}>

                            <p className={styles.title}>
                                <h5>Nigat (Women) Saving Account</h5>
                                <h5 style={{ fontSize: '21px', color: '#004360' }}>Description</h5>
                            </p>
                            <div className={styles.description}>
                                <p >
                                    Saving account that encourages and simplifies banking for women in all spectrum of life.
                                </p>
                            </div>
                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#004360', margin: '10px', marginLeft: '1px' }}></p>
                                    <p>FEATURES:</p>
                                </div>
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li>Higher interest rate (Normal saving interest rate plus 0.5%)</li>
                                    <li>Operated through pass book uniquely prepared for women and can also be operated without passbook</li>
                                    <li>Unique payment card for individual account holder with discounts from selected merchants and service providers
                                        (arranged by the Bank) for purchases and/or payments effected through POS.</li>
                                    <li>Account can be linked with Digital banking services such as ATM card, Internet banking and Mobile banking access</li>
                                    <li>Bank statement free of charges once per month.</li>
                                    <li>Discounts may be facilitated for transactions that take place with Wegagen branded outlets</li>
                                </ul>
                            </div>

                            <p className={styles.title} style={{ color: '#ff6b0b', textAlign: 'center', fontSize: '21px', paddingBottom: '20px' }}>
                                Basic Requirement to get the Product
                            </p>

                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll></div>
                                <div className={styles.rightFeatures}>
                                    <p>All the requirements stipulated for account opening by individuals, businesses, and associations shall be applicable</p>
                                </div>
                            </div>
                        </div>
                        : ""}

                    {dispaly == 5 ?

                        <div className="animate__animated animate__bounceInUp" style={{ marginBottom: '100px' }}>

                            <p className={styles.title}>
                                <h5>Elders/Warka Saving Account</h5>
                                <h5 style={{ fontSize: '21px', color: '#004360' }}>Description</h5>
                            </p>
                            <div className={styles.description}>
                                <p >
                                    This account provides a haven of financial security, offering higher interest rates and special priority services for account holders aged 50 and above
                                </p>
                            </div>
                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#004360', margin: '10px', marginLeft: '1px' }}></p>
                                    <p>FEATURES:</p>
                                </div>
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li> Higher interest rate (saving+ 1 which is based on the market rate).</li>
                                    <li> Priority at counter shall be provided.</li>
                                    <li> Small gifts like customized pens, chest pins, holiday cards, and customized diary/notebook will be provided. </li>
                                    <li> Account can be linked with Digital Banking Services such as ATM card, Internet banking and Mobile banking access.</li>
                                </ul>
                            </div>

                            <p className={styles.title} style={{ color: '#ff6b0b', textAlign: 'center', fontSize: '21px', paddingBottom: '20px' }}>
                                Basic Requirement to get the Product
                            </p>

                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll></div>
                                <div className={styles.rightFeatures}>
                                    <p>Opened for elders at age of 50 and above.</p>
                                </div>
                            </div>
                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll></div>
                                <div className={styles.rightFeatures}>
                                    <p>Other requirements for account opening and operation for normal saving account will also apply for this scheme.</p>
                                </div>
                            </div>
                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll></div>
                                <div className={styles.rightFeatures}>
                                    <p>Minimum initial account opening balance should be not less than 500 Birr.</p>
                                </div>
                            </div>
                        </div>
                        : ""}

                    {dispaly == 6 ?

                        <div className="animate__animated animate__bounceInUp" style={{ marginBottom: '100px' }}>

                            <p className={styles.title}>
                                <h5>Edir/Equb Saving Account</h5>
                                <h5 style={{ fontSize: '21px', color: '#004360' }}>Description</h5>
                            </p>
                            <div className={styles.description}>
                                <p >
                                    Saving account targeting Edir and Equib unions
                                </p>
                            </div>
                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#004360', margin: '10px', marginLeft: '1px' }}></p>
                                    <p>FEATURES:</p>
                                </div>
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li>Higher interest rate (+0.5% based on the industry market rate)</li>
                                    <li>Weekly/Monthly statements to be given by hard copy </li>
                                    <li>Priority of the corporate social responsibly will be given to these account holders when reaching a certain milestone in deposits.
                                        (For local road construction, sponsoring events, printing Edir / Equib books, giving pins, diary/ notebook etc).</li>
                                </ul>
                            </div>

                            <p className={styles.title} style={{ color: '#ff6b0b', textAlign: 'center', fontSize: '21px', paddingBottom: '20px' }}>
                                Basic Requirement to get the Product
                            </p>

                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll></div>
                                <div className={styles.rightFeatures}>
                                    <p>All the requirements stipulated for opening of accounts for individuals, businesses, and associations will also apply for this account.</p>
                                </div>
                            </div>
                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll></div>
                                <div className={styles.rightFeatures}>
                                    <p>On top of the usual account opening format, the Branch shall use additional undertaking format specifically designed for Equibs in the account opening process.</p>
                                </div>
                            </div>
                        </div>
                        : ""}

                    {dispaly == 7 ?

                        <div className="animate__animated animate__bounceInUp" style={{ marginBottom: '100px' }}>

                            <p className={styles.title}>
                                <h5>Muday Box Saving Account</h5>
                                <h5 style={{ fontSize: '21px', color: '#004360' }}>Description</h5>
                            </p>
                            <div className={styles.description}>
                                <p >
                                    Muday Box Saving Account creates opportunities for small-scale businesses owners such as petty traders, retail shops, barbershops, coffee houses,
                                    shoe shiners and others to save their sales on daily basis without the need to go to the bank branches and thereby enhance their saving habit.
                                </p>
                            </div>
                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#004360', margin: '10px', marginLeft: '1px' }}></p>
                                    <p>FEATURES:</p>
                                </div>
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li> Bears normal interest rate.</li>
                                </ul>
                            </div>

                            <p className={styles.title} style={{ color: '#ff6b0b', textAlign: 'center', fontSize: '21px', paddingBottom: '20px' }}>
                                Basic Requirement to get the Product
                            </p>

                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll></div>
                                <div className={styles.rightFeatures}>
                                    <p>All documents required to open normal saving account shall be applicable to open Muday box saving account.</p>
                                </div>
                            </div>
                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll></div>
                                <div className={styles.rightFeatures}>
                                    <p>The customer should bring the saving box to the branch to deposit the money collected on the saving box
                                        every monthly basis depending on the initial agreement between the customer and the branch</p>
                                </div>
                            </div>
                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll></div>
                                <div className={styles.rightFeatures}>
                                    <p>The customer cannot transfer the box to other party.</p>
                                </div>
                            </div>
                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll></div>
                                <div className={styles.rightFeatures}>
                                    <p>If the customer fails to deposit in the account for one year, the branch shall collect the minimum deposit balance.</p>
                                </div>
                            </div>
                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll></div>
                                <div className={styles.rightFeatures}>
                                    <p>Minimum deposit balance for Muday box saving account shall be Birr 500.00 (five hundred Birr)</p>
                                </div>
                            </div>
                        </div>
                        : ""}

                    {dispaly == 8 ?

                        <div className="animate__animated animate__bounceInUp" style={{ marginBottom: '100px' }}>

                            <p className={styles.title}>
                                <h5>Supplier Credit Saving</h5>
                                <h5 style={{ fontSize: '21px', color: '#004360' }}>Description</h5>
                            </p>
                            <div className={styles.description}>
                                <p >
                                    Saving accounts operated by customers who have approvals of freight track on supplies credit so as to
                                    process the settlement of supplier credit loan repayment and exchange rate fluctuation.
                                </p>
                            </div>
                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#004360', margin: '10px', marginLeft: '1px' }}></p>
                                    <p>FEATURES:</p>
                                </div>
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li> Bears normal interest rate.</li>
                                </ul>
                            </div>

                            <p className={styles.title} style={{ color: '#ff6b0b', textAlign: 'center', fontSize: '21px', paddingBottom: '20px' }}>
                                Basic Requirement to get the Product
                            </p>

                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll></div>
                                <div className={styles.rightFeatures}>
                                    <p>It can be opened and operated by both individual & corporate customer </p>
                                </div>
                            </div>
                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll></div>
                                <div className={styles.rightFeatures}>
                                    <p>It can be opened up on receiving approval of LAF by and receiving pertaining account opening document.</p>
                                </div>
                            </div>
                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll></div>
                                <div className={styles.rightFeatures}>
                                    <p>The applicant shall present tax identification number, active trade license for current fiscal year or investment license and principal registration certificate.</p>
                                </div>
                            </div>

                        </div>
                        : ""}

                    {dispaly == 9 ?

                        <div className="animate__animated animate__bounceInUp" style={{ marginBottom: '100px' }}>

                            <p className={styles.title}>
                                <h5>Biruh Youth Saving Account</h5>
                                <h5 style={{ fontSize: '21px', color: '#004360' }}>Description</h5>
                            </p>
                            <div className={styles.description}>
                                <p >
                                    It is a saving account which encourages the saving habit of the youth
                                </p>
                            </div>
                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#004360', margin: '10px', marginLeft: '1px' }}></p>
                                    <p>FEATURES:</p>
                                </div>
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li>Operated through pass book uniquely prepared for the youth</li>
                                    <li> Incremental interest rate ranging from 7.25% - 7.75% based on the amount of deposit</li>
                                    <li> Account can be linked with Digital Banking Services such as ATM card, Internet banking and Mobile banking access.</li>
                                </ul>
                            </div>

                            <p className={styles.title} style={{ color: '#ff6b0b', textAlign: 'center', fontSize: '21px', paddingBottom: '20px' }}>
                                Basic Requirement to get the Product
                            </p>

                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll></div>
                                <div className={styles.rightFeatures}>
                                    <p>Opens for young people in the age range of 18 to 24 years old.</p>
                                </div>
                            </div>
                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll></div>
                                <div className={styles.rightFeatures}>
                                    <p>The account can be opened with minimum deposit of Birr 25.00.</p>
                                </div>
                            </div>
                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll></div>
                                <div className={styles.rightFeatures}>
                                    <p>Other requirements for account opening and operation for normal saving account shall be applicable.</p>
                                </div>
                            </div>
                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll></div>
                                <div className={styles.rightFeatures}>
                                    <p>Goh Child Trust account holders can open the Biruh Youth Saving account at the age of 18 by transferring the existing balance fully or partially</p>
                                </div>
                            </div>
                        </div>
                        : ""}

                    {dispaly == 10 ?

                        <div className="animate__animated animate__bounceInUp" style={{ marginBottom: '100px' }}>

                            <p className={styles.title}>
                                <h5>TILA (TSILAL) SAVING ACCOUNT</h5>
                                <h5 style={{ fontSize: '21px', color: '#004360' }}>Description</h5>
                            </p>
                            <div className={styles.description}>
                                <p >
                                    It is a special saving account which offers a credit for saving scheme to purchase real estate.
                                </p>
                            </div>
                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#004360', margin: '10px', marginLeft: '1px' }}></p>
                                    <p style={{ fontSize: '22px' }}>Features for Tila (Tsilal) Local Saving Account:</p>
                                </div>
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li>The customer shall open Tila/Tsilal Saving Account earning normal saving plus zero point five interest rate (7.5%)
                                        if the deposit is in local currency; and for the sake of follow-up, the account shall have a different product ID,</li>
                                    <li>Tila/Tsilal local saving account will have its own branded unique Passbook.</li>
                                    <li>Withdrawal from Tila/Tsilal local saving account is forbidden until the loan process is finalized. If there is withdrawal,
                                        it is considered as breach of contract; hence interest rate will be changed from 7.5% to 7% annually.</li>
                                </ul>
                            </div>

                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#004360', margin: '10px', marginLeft: '1px' }}></p>
                                    <p style={{ fontSize: '22px' }}>Features for Tila(Tsilal) Diaspora Saving Account:</p>
                                </div>
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li>The customer shall open Tila/Tsilal Diaspora Saving Account which is non-transferable Birr account earning normal
                                        saving interest rate plus three percent (10%) that shall be deposited only in foreign currency (USD, EURO and GBP); and for
                                        the sake of follow up, the account shall have a different product ID.</li>
                                    <li>The customer shall only deposit the amount consecutively over the period,
                                        rather than onetime payment at the end of the period.
                                    </li>
                                    <li>Tila Diaspora saving account will have its own branded unique Passbook.</li>
                                </ul>
                            </div>

                            <p className={styles.title} style={{ color: '#ff6b0b', textAlign: 'center', fontSize: '21px', paddingBottom: '20px' }}>
                                Requirement of Tila Local Saving Account
                            </p>

                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll></div>
                                <div className={styles.rightFeatures}>
                                    <p>Tila local saving account can be opened after delivering a Valid and renewed Identification Card (ID card) </p>
                                </div>
                            </div>
                            <p className={styles.title} style={{ color: '#ff6b0b', textAlign: 'center', fontSize: '21px', paddingBottom: '20px' }}>
                                Requirement of Tila Diaspora saving account
                            </p>

                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll></div>
                                <div className={styles.rightFeatures}>
                                    <p>Tila Diaspora saving account can be opened after delivering a Valid and renewed Identification Card (ID card); ID card can be:-</p>
                                    <p style={{ marginLeft: '15px', fontSize: '17px' }}>A) Ethiopian Passport;</p>
                                    <p style={{ marginLeft: '15px', fontSize: '17px' }}>B) Resident of Ethiopia;</p>
                                    <p style={{ marginLeft: '15px', fontSize: '17px' }}>C) Non-Resident of Ethiopia;</p>
                                    <p style={{ marginLeft: '15px', fontSize: '17px' }}>D) Non-Resident Ethiopia Origin;</p>
                                    <p style={{ marginLeft: '15px', fontSize: '17px' }}>E) Ethiopian Work permit;</p>
                                    <p style={{ marginLeft: '15px', fontSize: '17px' }}>F) Membership ID only valid if the ID was issued by legally incorporated organization;</p>
                                    <p style={{ marginLeft: '15px', fontSize: '17px' }}>G) International Passport with Ethiopian Residential Permit;</p>
                                    <p style={{ marginLeft: '15px', fontSize: '17px' }}>H) Organizational employment ID card; or</p>
                                    <p style={{ marginLeft: '15px', fontSize: '17px' }}>I) Investment license.</p>
                                </div>
                            </div>
                        </div>
                        : ""}

                    {dispaly == 11 ?

                        <div className="animate__animated animate__bounceInUp" style={{ marginBottom: '100px' }}>

                            <p className={styles.title}>
                                <h5>Normal Checking Account</h5>
                                <h5 style={{ fontSize: '21px', color: '#004360' }}>Description</h5>
                            </p>
                            <div className={styles.description}>
                                <p >
                                    Lets customers who fulfils the general requirement criteria and documents to store cash safely & securely while enjoying easy access to settle payments
                                </p>
                            </div>
                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#004360', margin: '10px', marginLeft: '1px' }}></p>
                                    <p>FEATURES:</p>
                                </div>
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li>The account is operated by cheque for withdrawals.</li>
                                    <li>All digital banking products can be linked to the account.</li>
                                    <li>Free monthly account statement can be provided to the customer.</li>
                                </ul>
                            </div>

                            <p className={styles.title} style={{ color: '#ff6b0b', textAlign: 'center', fontSize: '21px', paddingBottom: '20px' }}>
                                Basic Requirement to get the Product
                            </p>

                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll></div>
                                <div className={styles.rightFeatures}>
                                    <p>If a customer has multiple checking accounts in various branches of a bank, the bank shall aggregate all the
                                        checking accounts in a branch and treat them as a single account for purpose of closing the checking account.</p>
                                </div>
                            </div>
                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll></div>
                                <div className={styles.rightFeatures}>
                                    <p>Carry out due diligence as required under “KYC” and Anti Money laundry” (AML) guideline issued by NBE and or procedures adopted by the Bank.</p>
                                </div>
                            </div>
                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll></div>
                                <div className={styles.rightFeatures}>
                                    <p>Must not be listed in the delinquent list </p>
                                </div>
                            </div> <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll></div>
                                <div className={styles.rightFeatures}>
                                    <p>Minimum balance for opening the account is Birr 250.00 (Two hundred fifty Birr).</p>
                                </div>
                            </div>
                        </div>
                        : ""}

                    {dispaly == 12 ?

                        <div className="animate__animated animate__bounceInUp" style={{ marginBottom: '100px' }}>

                            <p className={styles.title}>
                                <h5>Special Demand Deposit</h5>
                                <h5 style={{ fontSize: '21px', color: '#004360' }}>Description</h5>
                            </p>
                            <div className={styles.description}>
                                <p >
                                    This account offers a checking account that bears interest for those customers who maintain a substantial amount of deposit
                                </p>
                            </div>
                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#004360', margin: '10px', marginLeft: '1px' }}></p>
                                    <p>FEATURES:</p>
                                </div>
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li>Interest shall be computed on monthly minimum balance provided that the account balance is more than the minimum balance.</li>
                                    <li>All digital banking products can be linked to the account.</li>
                                    <li>Free monthly account statement can be provided to the customer up on request</li>
                                </ul>
                            </div>

                            <p className={styles.title} style={{ color: '#ff6b0b', textAlign: 'center', fontSize: '21px', paddingBottom: '20px' }}>
                                Basic Requirement to get the Product
                            </p>

                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll></div>
                                <div className={styles.rightFeatures}>
                                    <p>This account is mainly opened for corporate institutions / individuals by the approval of
                                        the Resource Mobilization and Branch Banking Directorate.</p>
                                </div>
                            </div>
                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll></div>
                                <div className={styles.rightFeatures}>
                                    <p> All Criteria for Normal checking account shall be applied.</p>
                                </div>
                            </div>
                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll></div>
                                <div className={styles.rightFeatures}>
                                    <p>The account is operated by cheque for withdrawals.</p>
                                </div>
                            </div>
                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll></div>
                                <div className={styles.rightFeatures}>
                                    <p>Minimum balance for opening the account is Birr 1,000,000.00 (One Million).</p>
                                </div>
                            </div>

                        </div>
                        : ""}

                    {dispaly == 13 ?

                        <div className="animate__animated animate__bounceInUp" style={{ marginBottom: '100px' }}>

                            <p className={styles.title}>
                                <h5>Mixed/ NOW Account (withdrawal at Notice or Negotiable Order of Withdrawal)</h5>
                                <h5 style={{ fontSize: '21px', color: '#004360' }}>Description</h5>
                            </p>
                            <div className={styles.description}>
                                <p >
                                    For institutions and business persons as well as large individual depositors who have less frequent withdrawals.
                                </p>
                            </div>
                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#004360', margin: '10px', marginLeft: '1px' }}></p>
                                    <p>FEATURES:</p>
                                </div>
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li> Interest shall be paid on the minimum standing balance during the month as per the bank’s terms and tariffs.
                                        Interest period shall be from the first day of the month. However, as long as the deposit stays in the bank for a
                                        full month not starting from the first day of the month, interest payment could be exceptionally approved by the
                                        Resource Mobilization Committee based on potential of the depositor.</li>
                                    <li>Monthly statements are given to the account holders without charge. </li>
                                    <li>Cheque books are issued to make payments.</li>
                                    <li>Can be linked to all digital banking service.</li>
                                </ul>
                            </div>

                            <p className={styles.title} style={{ color: '#ff6b0b', textAlign: 'center', fontSize: '21px', paddingBottom: '20px' }}>
                                Basic Requirement to get the Product
                            </p>

                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll></div>
                                <div className={styles.rightFeatures}>
                                    <p>NOW Account may be opened with a minimum initial deposit of Birr 10,000.00 and above.</p>
                                </div>
                            </div>
                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll></div>
                                <div className={styles.rightFeatures}>
                                    <p>Only three free withdrawals are allowed per month to obtain interest but no restriction to deposit intakes. If the balance
                                        falls below Birr 10,000 which is the minimum amount to open and maintain “NOW” Account and also if withdrawals are made more than three times
                                        per month, the account will revert to normal Current Account forfeiting interest benefit in its entirety for the particular month.</p>
                                </div>
                            </div>
                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll></div>
                                <div className={styles.rightFeatures}>
                                    <p>The account can be opened by companies, individual, partnerships, sole proprietors, clubs and societies.</p>
                                </div>
                            </div>
                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll></div>
                                <div className={styles.rightFeatures}>
                                    <p>Can be opened with minimum requirement of Tax Identification Number (TIN) and Identification card.</p>
                                </div>
                            </div>
                        </div>
                        : ""}

                    {dispaly == 14 ?

                        <div className="animate__animated animate__bounceInUp" style={{ marginBottom: '100px' }}>

                            <p className={styles.title}>
                                <h5>Overdraft Account</h5>
                                <h5 style={{ fontSize: '21px', color: '#004360' }}>Description</h5>
                            </p>
                            <div className={styles.description}>
                                <p >
                                    Allows account holders to use or withdraw fund up to approved limit in excess of own fund to help an individual or a business with short-term cash flow problems.
                                </p>
                            </div>
                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#004360', margin: '10px', marginLeft: '1px' }}></p>
                                    <p>FEATURES:</p>
                                </div>
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li>The account is operated by cheque for withdrawals.</li>
                                    <li>All digital banking products can be linked to the account.</li>
                                    <li>Free monthly account statement can be provided to the customer.</li>
                                </ul>
                            </div>

                            <p className={styles.title} style={{ color: '#ff6b0b', textAlign: 'center', fontSize: '21px', paddingBottom: '20px' }}>
                                Basic Requirement to get the Product
                            </p>

                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll></div>
                                <div className={styles.rightFeatures}>
                                    <p> Overdraft account can only be opened following approval of the overdraft facility limit by the concerned
                                        credit approving organ and written instruction from Credit Relationship Management Directorate.</p>
                                </div>
                            </div>
                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll></div>
                                <div className={styles.rightFeatures}>
                                    <p> Authorized memo shall be generated from Customer Relationship Management Directorate with Loan Approval Form/LAF from concerned credit Committee.</p>
                                </div>
                            </div>
                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll></div>
                                <div className={styles.rightFeatures}>
                                    <p>The customer shall bring all the necessary documents as required to open normal current account.</p>
                                </div>
                            </div>

                        </div>
                        : ""}

                    {dispaly == 15 ?

                        <div className="animate__animated animate__bounceInUp" style={{ marginBottom: '100px' }}>

                            <p className={styles.title}>
                                <h5>Ethiopia Commodity Exchange Settlement Accounts</h5>
                                <h5 style={{ fontSize: '21px', color: '#004360' }}>Description</h5>
                            </p>
                            <div className={styles.description}>
                                <p >
                                    ECX members or clients for pay-in and pay-out in relation to Ethiopia Commodity Exchange transactions for payment settlement or collection purpose.
                                </p>
                            </div>
                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#004360', margin: '10px', marginLeft: '1px' }}></p>
                                    <p>Products and Services:</p>
                                </div>
                            </div>

                            <p className={styles.title} style={{ color: '#ff6b0b', textAlign: 'left', fontSize: '19px', paddingBottom: '20px' }}>
                                1. ECX-level account ECX settlement account
                            </p>
                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#004360', margin: '10px', marginLeft: '1px' }}></p>
                                    <p style={{ fontSize: '21px' }}>FEATURES:</p>
                                </div>
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li>ECX will send electronic debit instructions for this account.</li>
                                    <li>ECX will send electronic credit instruction for this account.</li>
                                    <li>No cheque book issued on this account.</li>
                                    <li>No payment card issued on this account.</li>
                                </ul>
                            </div>
                            <p className={styles.title} style={{ color: '#ff6b0b', textAlign: 'center', fontSize: '21px', paddingBottom: '20px' }}>
                                Basic Requirement to get the Product
                            </p>

                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll></div>
                                <div className={styles.rightFeatures}>
                                    <p>ECX is the legal owner of this account.</p>
                                </div>
                            </div>
                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll></div>
                                <div className={styles.rightFeatures}>
                                    <p>ECX has sole right to all debits and credits</p>
                                </div>
                            </div>


                            <p className={styles.title} style={{ color: '#ff6b0b', textAlign: 'left', fontSize: '21px', paddingBottom: '10px' }}>
                                2. Member-level account (per member)
                            </p>
                            <p className={styles.title} style={{ color: '#ff6b0b', paddingLeft: '20px', textAlign: 'left', fontSize: '18px', paddingBottom: '10px' }}>
                                2.1 Member Pay-in (to ECX) - mandatory for trading on their own account
                            </p>
                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#004360', margin: '10px', marginLeft: '1px' }}></p>
                                    <p style={{ fontSize: '21px' }}>FEATURES:</p>
                                </div>
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li>Member is the legal owner of this account</li>
                                    <li>Member signs Power of Attorney giving ECX sole right to request debits</li>
                                    <li>No member withdrawals allowed on this account</li>
                                    <li>No cheque book issued on this account.</li>
                                    <li>Not linked to digital Banking products.</li>
                                    <li>Deposit to ECX account is made by account to account transfer only.</li>
                                </ul>
                            </div>

                            <p className={styles.title} style={{ color: '#ff6b0b', paddingLeft: '20px', textAlign: 'left', fontSize: '18px', paddingBottom: '10px' }}>
                                2.2 Member Pay-out (from ECX) – mandatory for trading on their own account
                            </p>
                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#004360', margin: '10px', marginLeft: '1px' }}></p>
                                    <p style={{ fontSize: '21px' }}>FEATURES:</p>
                                </div>
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li>Member is the legal owner.</li>
                                    <li>Cheque book can be issued if required.</li>
                                    <li>ECX will send electronic credit instructions to this account.</li>
                                    <li>Member has sole right to request debits.</li>
                                    <li>This can be an existing customer bank account. The customer shall
                                        bring all the necessary documents as required to open normal current account.</li>
                                </ul>
                            </div>

                            <p className={styles.title} style={{ color: '#ff6b0b', paddingLeft: '20px', textAlign: 'left', fontSize: '18px', paddingBottom: '10px' }}>
                                2.3. Member clearing Pay-in (to ECX) - mandatory for clearing on behalf of other members
                            </p>
                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#004360', margin: '10px', marginLeft: '1px' }}></p>
                                    <p style={{ fontSize: '21px' }}>FEATURES:</p>
                                </div>
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li>Member is the legal owner of this account</li>
                                    <li>Member signs Power of Attorney giving ECX sole right to request debits.</li>
                                    <li>No member withdrawals allowed on this account.</li>
                                    <li>ECX will send electronic balance enquiries for this account.</li>
                                    <li>ECX will send electronic debit instructions for this account.</li>
                                    <li>No cheque book issued on this account.</li>
                                    <li>No Visa card issued on this account.</li>
                                </ul>
                            </div>

                            <p className={styles.title} style={{ color: '#ff6b0b', paddingLeft: '20px', textAlign: 'left', fontSize: '18px', paddingBottom: '10px' }}>
                                2.4 Client Pay-in (to ECX) – mandatory for trading on behalf of clients
                            </p>
                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#004360', margin: '10px', marginLeft: '1px' }}></p>
                                    <p style={{ fontSize: '21px' }}>FEATURES:</p>
                                </div>
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li>Member is the legal owner of this account</li>
                                    <li>Member signs Power of Attorney giving ECX sole right to request debits.</li>
                                    <li>No member withdrawals allowed on this account.</li>
                                    <li>ECX will send electronic balance enquiries for this account.</li>
                                    <li>ECX will send electronic debit instructions for this account.</li>
                                    <li>No cheque book issued on this account.</li>
                                    <li>No Visa card issued on this account.</li>
                                </ul>
                            </div>

                            <p className={styles.title} style={{ color: '#ff6b0b', paddingLeft: '20px', textAlign: 'left', fontSize: '18px', paddingBottom: '10px' }}>
                                2.5 Client Pay-out (from ECX) – mandatory for trading on behalf of clients
                            </p>
                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#004360', margin: '10px', marginLeft: '1px' }}></p>
                                    <p style={{ fontSize: '21px' }}>FEATURES:</p>
                                </div>
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li>Member is the legal owner.</li>
                                    <li>Cheque book can be issued if required.</li>
                                    <li>ECX will send electronic credit instructions to this account.</li>
                                    <li>Member has sole right to request debits.</li>
                                </ul>
                            </div>

                            <p className={styles.title} style={{ color: '#ff6b0b', paddingLeft: '20px', textAlign: 'left', fontSize: '18px', paddingBottom: '10px' }}>
                                2.6 Limited Member Client Pay-out (From ECX) – mandatory for limited member trading on behalf of clients
                            </p>
                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#004360', margin: '10px', marginLeft: '1px' }}></p>
                                    <p style={{ fontSize: '21px' }}>FEATURES:</p>
                                </div>
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li>Limited member is the legal owner.</li>
                                    <li>Cheque book can be issued if required.</li>
                                    <li>ECX will request electronic or TT credit instructions to this account.</li>
                                    <li>Limited Member has sole right to request   debits.</li>
                                </ul>
                            </div>

                        </div>
                        : ""}

                    {dispaly == 16 ?

                        <div className="animate__animated animate__bounceInUp" style={{ marginBottom: '100px' }}>

                            <p className={styles.title}>
                                <h5> Linked (Zero Balance) Account</h5>
                                <h5 style={{ fontSize: '21px', color: '#004360' }}>Description</h5>
                            </p>
                            <div className={styles.description}>
                                <p >
                                    It is tailored to attract large depositors by providing benefits of both current and saving accounts.
                                </p>
                            </div>
                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#004360', margin: '10px', marginLeft: '1px' }}></p>
                                    <p>FEATURES:</p>
                                </div>
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li>Interest calculated and paid at minimum monthly balance as per the term and tariff of the bank and use of cheque.</li>
                                    <li> Interest on “Zero balance current account” shall be computed and paid monthly as per the bank term and tariff.</li>
                                    <li>Interest shall not be paid for this account, if the account balance falls below Birr 1,000,000.00  for the month.</li>
                                </ul>
                            </div>

                            <p className={styles.title} style={{ color: '#ff6b0b', textAlign: 'center', fontSize: '21px', paddingBottom: '20px' }}>
                                Basic Requirement to get the Product
                            </p>

                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll></div>
                                <div className={styles.rightFeatures}>
                                    <p>Zero Balance current account is opened with Zero balance and the related saving account shall be opened with an initial amount of birr 1,000,000.00.</p>
                                </div>
                            </div>
                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll></div>
                                <div className={styles.rightFeatures}>
                                    <p>Individuals owning big business and companies can open such an account. </p>
                                </div>
                            </div>
                        </div>
                        : ""}

                    {dispaly == 17 ?

                        <div className="animate__animated animate__bounceInUp" style={{ marginBottom: '100px' }}>

                            <p className={styles.title}>
                                <h5> School Account</h5>
                                <h5 style={{ fontSize: '21px', color: '#004360' }}>Description</h5>
                            </p>
                            <div className={styles.description}>
                                <p >
                                    An account targeting mainly Private schools (kindergarten, primary, & secondary), technical & vocational training institutes, universities, colleges and professional training institutes
                                </p>
                            </div>
                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#004360', margin: '10px', marginLeft: '1px' }}></p>
                                    <p>FEATURES:</p>
                                </div>
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li>An interest bearing account operated through cheque and annual interest rate can be calculated on monthly basis as per the bank term and tariff.</li>
                                    <li>The Bank provides consumer/personal loan to employees of the school as per the consumer loan procedure of the bank.</li>
                                    <li>The Bank may provide overdraw facility for schools in case of immediate financial need, which could be collected through school fees as per the bank’s credit procedure.</li>
                                    <li> The Bank would also provide finance for working capital as well as expansion projects of the school in accordance with the credit policy and procedure of the bank.</li>
                                    <li>The Bank will facilitate collection of school fees from parents and pays salary to employees through its branches and other digital channels.</li>
                                    <li>The Bank may also sponsor major events of the school depending its promotional value (like question and answer competition, key parents' and students’ day, and other sport and talent competition among students or schools etc.</li>
                                </ul>
                            </div>

                            <p className={styles.title} style={{ color: '#ff6b0b', textAlign: 'center', fontSize: '21px', paddingBottom: '20px' }}>
                                Basic Requirement to get the Product
                            </p>

                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll></div>
                                <div className={styles.rightFeatures}>
                                    <p> Initial deposit amount of birr 500,000.00 and should maintain it as minimum balance at all-time otherwise it will forfeit the interest rate for that particular month.</p>
                                </div>
                            </div>
                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll></div>
                                <div className={styles.rightFeatures}>
                                    <p>All the requirements for normal current account opening and credit facilities stipulated in Branch Operation and Credit procedures, respectively, shall apply to get the facility</p>
                                </div>
                            </div>
                        </div>
                        : ""}


                    {dispaly == 18 ?

                        <div className="animate__animated animate__bounceInUp" style={{ marginBottom: '100px' }}>

                            <p className={styles.title}>
                                <h5> Foreign Currency Accounts</h5>
                            </p>
                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#004360', margin: '10px', marginLeft: '1px' }}></p>
                                    <p>Eligible entities to open Foreign Currency Accounts:</p>
                                </div>
                                <div className={styles.description}>
                                    <p >

                                    </p>
                                </div>
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li>Embassies</li>
                                    <li>Diplomats</li>
                                    <li>International organizations</li>
                                    <li>Expatriate employees of international organizations</li>
                                    <li>Non-Governmental Organizations</li>
                                    <li>Non-resident companies</li>
                                    <li>Foreign investors</li>
                                    <li>Ethiopians living abroad and foreign nationals of Ethiopian origin</li>
                                    <li>Exporters</li>
                                    <li>Recipients of inward remittances</li>
                                </ul>
                            </div>
                        </div>
                        : ""}



                    {dispaly == 19 ?

                        <div className="animate__animated animate__bounceInUp" style={{ marginBottom: '100px' }}>

                            <p className={styles.title}>
                                <h5> Non-Resident Non-Transferrable Account</h5>
                                <h5 style={{ fontSize: '21px', color: '#004360' }}>Description</h5>
                            </p>
                            <div className={styles.description}>
                                <p >
                                    {/* Eligible entities to open Foreign Currency Accounts. */}
                                </p>
                            </div>
                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#004360', margin: '10px', marginLeft: '1px' }}></p>
                                    <p>FEATURES:</p>
                                </div>
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li>Interest rate payment on non-Transferrable Birr accounts shall be double of the minimum saving deposit set by the NBE (i.e. 14% per annum).</li>
                                    <li> NR non-transferable Birr account is maintained in local currency for the account holders of NR FCY and NR Transferable Birr accounts.</li>
                                    <li>The purpose of which is to enable them meet their local expenses same as NR transferable Birr account.</li>
                                    <li>It should be understood that the account designated as NR non-transferable Birr account to indicate the fact that its convertibility is not automatic as the NBE must approve it</li>
                                </ul>
                            </div>

                            <p className={styles.title} style={{ color: '#ff6b0b', textAlign: 'center', fontSize: '21px', paddingBottom: '20px' }}>
                                Basic Requirement to get the Product
                            </p>

                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll></div>
                                <div className={styles.rightFeatures}>
                                    <p>Persons who do not fall under in the list of eligible entities, but whose salaries are fully paid from sources outside
                                        Ethiopia and paid in cash or credited to their local currency accounts such as foreign employees of embassies, consulates, legations,
                                        ECA, AU, UN, etc., may open only a NR transferable Birr accounts for their local expenses.</p>
                                </div>
                            </div>
                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll></div>
                                <div className={styles.rightFeatures}>
                                    <p>NR Non-transferable Birr account shall be credited only with: </p>
                                    <p>I. Foreign exchange receipts from abroad;</p>
                                    <p>II. Payments from other NR Transferable Birr or NR FCY account; </p>
                                    <p>III. Payments from residents of Ethiopia effected under specific authorization of NBE</p>
                                </div>
                            </div>
                        </div>
                        : ""}


                    {dispaly == 20 ?

                        <div className="animate__animated animate__bounceInUp" style={{ marginBottom: '100px' }}>

                            <p className={styles.title}>
                                <h5> Foreign Currency Saving Account</h5>
                                <h5 style={{ fontSize: '21px', color: '#004360' }}>Description</h5>
                            </p>
                            <div className={styles.description}>
                                <p >
                                    Residents of Ethiopia, non -resident Ethiopian and Non-resident Ethiopian origin
                                </p>
                            </div>
                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#004360', margin: '10px', marginLeft: '1px' }}></p>
                                    <p>FEATURES:</p>
                                </div>
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li> Interest bearing and non -interest bearing account depends on the choice of the account holder.</li>
                                    <li> Interest rate shall be calculated in foreign currency but paid in local currency. Minimum interest rate shall be LIBOR plus 4 percent. The interest rate shall be calculated based on end of month LIBOR rate PLUS 4%. </li>
                                </ul>
                            </div>

                            <p className={styles.title} style={{ color: '#ff6b0b', textAlign: 'center', fontSize: '21px', paddingBottom: '20px' }}>
                                Basic Requirement to get the Product
                            </p>

                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll></div>
                                <div className={styles.rightFeatures}>
                                    <p>Account can be opened by the following Individuals: </p>
                                    <p>I. Resident of Ethiopia</p>
                                    <p>II. Non Resident Ethiopia </p>
                                    <p>III. Non Resident Ethiopia Origin </p>
                                </div>
                            </div>

                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll></div>
                                <div className={styles.rightFeatures}>
                                    <p>Power of attorney holders are allowed to open Foreign Currency Accounts but cannot credit the account on behalf of non-resident and/or foreign nationals of Ethiopian origin.</p>
                                </div>
                            </div>
                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll></div>
                                <div className={styles.rightFeatures}>
                                    <p>Account is opened either of the following currency; US dollar, Pound Sterling or Euro.</p>
                                </div>
                            </div>
                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll></div>
                                <div className={styles.rightFeatures}>
                                    <p>Minimum Account Opening Balance is USD 50 or equivalent of Pound Sterling or Euro</p>
                                </div>
                            </div>
                        </div>
                        : ""}


                    {dispaly == 21 ?

                        <div className="animate__animated animate__bounceInUp" style={{ marginBottom: '100px' }}>

                            <p className={styles.title}>
                                <h5>  Non-Resident Foreign Currency Account (NR-FCY)</h5>
                                <h5 style={{ fontSize: '21px', color: '#004360' }}>Description</h5>
                            </p>
                            <div className={styles.description}>
                                <p >
                                    Individuals or companies classified on the basis of the criteria and classification set by NBE.
                                </p>
                            </div>

                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#004360', margin: '10px', marginLeft: '1px' }}></p>
                                    <p>FEATURES:</p>
                                </div>
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li>
                                        NR foreign currency account holder can have the privilege to request our bank to debit his/her account
                                        and instruct transfer of funds abroad without having the necessary foreign exchange permits.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        : ""}

                    {dispaly == 22 ?

                        <div className="animate__animated animate__bounceInUp" style={{ marginBottom: '100px' }}>

                            <p className={styles.title}>
                                <h5> Non- Resident Transferrable Birr Account</h5>
                                <h5 style={{ fontSize: '21px', color: '#004360' }}>Description</h5>
                            </p>
                            <div className={styles.description}>
                                <p >
                                    This account is nearly a duplicate of NR foreign currency account since the NR Transferable Birr account is fully and effectively convertible for all practical purposes;
                                </p>
                            </div>
                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#004360', margin: '10px', marginLeft: '1px' }}></p>
                                    <p>FEATURES:</p>
                                </div>
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li>
                                        As stipulated in the rules of handling NR accounts, overdrawing of transferable Birr account and maintenance of both NR foreign currency and NR
                                        Transferable Birr account at the same time is forbidden unless exceptionally considered. Special Features of NR Accounts
                                        <p style={{ fontSize: '13px', marginLeft: '20px' }}>i. Opening of FCY and NR/NT accounts is allowed only to foreigners or international organizations upon the submission of a written approval from National Bank of Ethiopia;</p>
                                        <p style={{ fontSize: '13px', marginLeft: '20px' }}>ii. Holders of such accounts are exempted from foreign exchange approval requirements whenever they need to utilize their foreign currency for import of goods;</p>
                                        <p style={{ fontSize: '13px', marginLeft: '20px' }}>iii. Request for foreign currency cash notes for bona fide travellers of NR FCY and Transferable Birr account holders are allowed up to USD 5000.00;</p>
                                        <p style={{ fontSize: '13px', marginLeft: '20px' }}>iv. Sales of foreign currency cash notes to NR FCY account holders, for the purpose of providing supports to workshop participants, seminars, travel allowances and per diem expenses
                                            from their Foreign Currency Accounts maintained to the level of their demand provided that their requests are supported by explanatory letter which should state the purpose of the cash purchase requirement. In doing so, due care should be taken in issuing the cash note and get the assurance that the cash is to be paid only to non-resident persons and for the execution of the intended program.</p>
                                    </li>
                                </ul>
                            </div>

                            <p className={styles.title} style={{ color: '#ff6b0b', textAlign: 'center', fontSize: '21px', paddingBottom: '20px' }}>
                                Basic Requirement to get the Product
                            </p>

                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll></div>
                                <div className={styles.rightFeatures}>
                                    <p>Persons, corporate bodies, institutions and diplomatic organizations that are authorized to maintain NR FCY,
                                        NR transferable Birr, and NR non-transferable Birr account are not authorized to maintain additional current accounts
                                        with our bank unless exceptionally considered as their local expenses are met with NR transferable Birr
                                        accounts or NR non-transferable Birr account.</p>
                                </div>
                            </div>
                        </div>
                        : ""}

                    {/* {dispaly == 16 ? 

                        <div className="animate__animated animate__bounceInUp" style={{ marginBottom: '100px' }}>

                            <p className={styles.title}>
                                <h5> School Account</h5>
                                <h5 style={{ fontSize: '21px', color: '#004360' }}>Description</h5>
                            </p>
                            <div className={styles.description}>
                                <p >
                                    It is tailored to attract large depositors by providing benefits of both current and saving accounts.
                                </p>
                            </div>
                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginLeft: '1px' }}></p>
                                    <p>FEATURES:</p>
                                </div>
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li>Interest calculated and paid at minimum monthly balance as per the term and tariff of the bank and use of cheque.</li>
                                    <li> Interest on “Zero balance current account” shall be computed and paid monthly as per the bank term and tariff.</li>
                                    <li>Interest shall not be paid for this account, if the account balance falls below 1,000,000.00 for the month.</li>
                                </ul>
                            </div>

                            <p className={styles.title} style={{ color: '#ff6b0b', textAlign: 'center', fontSize: '21px', paddingBottom: '20px' }}>
                                Basic Requirement to get the Product
                            </p>

                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll></div>
                                <div className={styles.rightFeatures}>
                                    <p>Zero Balance current account is opened with Zero balance and the related saving account shall be opened with an initial amount of birr 1,000,000.00.</p>
                                </div>
                            </div>
                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll></div>
                                <div className={styles.rightFeatures}>
                                    <p>Individuals owning big business and companies can open such an account. </p>
                                </div>
                            </div>
                        </div>
                        : ""} */}



                </div>
            </div>

            <Footer />

        </div>
    )
}

export default Personal_Banking