import React, { useState, useEffect } from "react";
import Header from '../Common/Header'
import ExchangeRate from '../Common/ExchangeRate'
import Slider from '../Common/Slider'
import About_us from "../../../assets/Images/common.jpg";
import agar1 from "../../../assets/Images/agar1.png";
import styles from "./international_banking.module.css";
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

function International_Banking() {

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
                <div className="leftNavBars" style={{ marginTop: '40px' }} >
                    <div className={`animate__animated animate__fadeInLeft ${styles.popupshortInfo}`}>
                        <p onClick={() => { handleClick(1, showMenu) }} style={dispaly === 1 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>Letter of Credit</p>
                        <p onClick={() => { handleClick(2, showMenu) }} style={dispaly === 2 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>Cash Against Documents</p>
                        <p onClick={() => { handleClick(3, showMenu) }} style={dispaly === 3 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>Advance Payment</p>
                        <p onClick={() => { handleClick(4, showMenu) }} style={dispaly === 4 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>Consignment Basis Payment</p>
                        <p onClick={() => { handleClick(5, showMenu) }} style={dispaly === 5 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>Small Export Items</p>
                        <p onClick={() => { handleClick(6, showMenu) }} style={dispaly === 6 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>Guarantee</p>
                        <p onClick={() => { handleClick(7, showMenu) }} style={dispaly === 7 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>International Money Transfer</p>
                        <p onClick={() => { handleClick(8, showMenu) }} style={dispaly === 8 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>Exchange of Foreign Currency</p>
                        <p onClick={() => { handleClick(9, showMenu) }} style={dispaly === 9 ? { backgroundColor: '#ff6b0b', color: 'white' } : { fontSize: '' }}>Foreign Currency Accounts</p>
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

            {/* <ExchangeRate /> */}
            <StikyNav />

            <Mega_Menu path="bankingServices" />

            <div className={styles.agarImage}>
                <img src={About_us} ></img>
            </div>
            <div className={styles.establishment}>
                <p className={styles.aboutUsMenu} onClick={() => { menutoggle() }} ><MdMenuOpen style={{ fontSize: '30px' }} /></p>
                <div className={styles.leftNavBars}>
                    <div className={`animate__animated animate__fadeInLeft ${styles.shortInfo}`} >
                        <p onClick={() => handleNavigationClick(1)} style={dispaly === 1 ? { backgroundColor: '#ff6b0b', color: 'white', padding: '7px', fontSize: '16px' } : null}> 1. Letter of Credit</p>
                        <p onClick={() => handleNavigationClick(2)} style={dispaly === 2 ? { backgroundColor: '#ff6b0b', color: 'white', padding: '7px', fontSize: '16px' } : null}> 2. Cash Against Documents  </p>
                        <p onClick={() => handleNavigationClick(3)} style={dispaly === 3 ? { backgroundColor: '#ff6b0b', color: 'white', padding: '7px', fontSize: '16px' } : null}> 3. Advance Payment</p>
                        <p onClick={() => handleNavigationClick(4)} style={dispaly === 4 ? { backgroundColor: '#ff6b0b', color: 'white', padding: '7px', fontSize: '16px' } : null}> 4. Consignment Basis Payment </p>
                        <p onClick={() => handleNavigationClick(5)} style={dispaly === 5 ? { backgroundColor: '#ff6b0b', color: 'white', padding: '7px', fontSize: '16px' } : null}> 5. Small Export Items </p>
                        <p onClick={() => handleNavigationClick(6)} style={dispaly === 6 ? { backgroundColor: '#ff6b0b', color: 'white', padding: '7px', fontSize: '16px' } : null}> 6. Guarantee </p>
                        <p onClick={() => handleNavigationClick(7)} style={dispaly === 7 ? { backgroundColor: '#ff6b0b', color: 'white', padding: '7px', fontSize: '16px' } : null}> 7. International Money Transfer </p>
                        <p onClick={() => handleNavigationClick(8)} style={dispaly === 8 ? { backgroundColor: '#ff6b0b', color: 'white', padding: '7px', fontSize: '16px' } : null}> 8. Exchange of Foreign Currency </p>
                        <p onClick={() => handleNavigationClick(9)} style={dispaly === 9 ? { backgroundColor: '#ff6b0b', color: 'white', padding: '7px', fontSize: '16px' } : null}> 9. Foreign Currency Accounts </p>
                    </div>
                </div>
                <div>

                    {dispaly == 1 ?
                        <div className="animate__animated animate__bounceInUp">
                            <p className={styles.title}>
                                <h5>1. Letter of Credit</h5> 
                                <h5 style={{ fontSize: '21px', color: '#007070' }}>Description</h5>
                            </p>
                            <div className={styles.description} >
                                <p>
                                    A documentary letter of credit is an undertaking that a bank takes by the request
                                    of a buyer to pay an amount to a seller as specified under the terms and conditions.
                                </p>
                            </div>
                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#007070', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginLeft: '1px' }}></p>
                                    <p>FEATURES:</p>
                                </div>
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li>Wegagen Bank has well regarded professional relationship with various
                                        international correspondent bank and offers reliable & timely L/C settlement service.</li>
                                </ul>
                            </div>
                            <p className={styles.title} style={{ color: '#ff6b0b', textAlign: 'center', fontSize: '21px', paddingBottom: '20px' }}>
                                Basic Requirement to get the Product For Import
                            </p>
                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll> </div>
                                <div className={styles.rightFeatures}>
                                    <p>1. Duly filled, Signed and stamped Import application form</p>
                                    <p>2. ICB (International Competitive Bid) documents for imports value 1,000,000 USD or more</p>
                                    <p>3. Proforma invoice including full description of goods, unit price, quantity, mode of shipment, terms of payment, place of delivery</p>
                                    <p>4. Insurance certificate with sum insured not less than 110% value of the consignment</p>
                                    <p>5. Valid and renewed Foreign Trade, Investment, Industry, Agriculture or Mining License</p>
                                    <p>6. TIN Certificate</p>
                                    <p>7. Third party original price confirmation for used commodities/vehicles</p>
                                    <p>8. L/C opening application form</p>
                                    <p>9. Customer’s name should not appear in delinquent list of NBE</p>
                                </div>
                            </div>

                            <p className={styles.title} style={{ color: '#ff6b0b', textAlign: 'center', fontSize: '21px', paddingBottom: '20px' }}>
                                Basic Requirement to get the Product For Export
                            </p>
                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll> </div>
                                <div className={styles.rightFeatures}>
                                    <p>1. Export permit application form duly filled, signed & stamped (as appropriate) by the customer</p>
                                    <p>2. Duly signed contract by seller & buyer</p>
                                    <p>3. Proforma invoice including full description of goods, unit price, quantity, mode of shipment, terms of payment, place of delivery</p>
                                    <p>4. Authenticated message of L/C</p>
                                    <p>5. Exporter’s invoice</p>
                                    <p>6. Valid and relevant Export/Manufacturing/ Industry License</p>
                                    <p>7. TAX Identification Certificate (TIN certificate)</p>
                                    <p>8. The L/C should be irrevocable & confirmed</p>
                                    <p>9. Customer’s name should not appear in delinquent list of NBE</p>
                                    <p>10. Undertaking letter to repatriate the amount within 90 days form the approval date except for cut flowers for 30 days</p>
                                    <p>11. Deferred/Acceptance period should be within validity date of L/C</p>
                                </div>
                            </div>
                        </div>
                        : ""}

                    {dispaly == 2 ?
                        <div className="animate__animated animate__bounceInUp">
                            <p className={styles.title} s>
                                <h5 style={{ fontSize: '23px' }}>2. Cash Against Documents  </h5>
                                <h5 style={{ fontSize: '21px', color: '#007070' }}>Description</h5>
                            </p>
                            <div className={styles.description} >
                                <p>
                                    A mode of payment under which banks handle a seller’s commercial
                                    documents in accordance with instructions received from the seller in order to deliver
                                    the documents to the buyer against payment/or acceptance or against any other terms and conditions.
                                </p>
                            </div>
                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#007070', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginLeft: '1px' }}></p>
                                    <p>FEATURES:</p>
                                </div>
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li>Wegagen Bank offers all kinds of collection services allowed under NBE. Moreover, our reputation with other correspondent banks is well founded.</li>
                                </ul>
                            </div>
                            <p className={styles.title} style={{ color: '#ff6b0b', textAlign: 'center', fontSize: '21px', paddingBottom: '20px' }}>
                                Basic Requirement to get the Product For Import
                            </p>
                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll> </div>
                                <div className={styles.rightFeatures}>
                                    <p>1. Purchase order in two originals</p>
                                    <p>2. Proforma invoice including full description of goods, unit price, quantity, mode of shipment, terms of payment, place of delivery</p>
                                    <p>3. Insurance certificate with sum insured not less than 110% value of the consignment</p>
                                    <p>4. Valid and renewed Foreign Trade, Investment, Industry, Agriculture or Mining License</p>
                                    <p>5. Tin Certificate</p>
                                    <p>6. Title certificate for used vehicles</p>
                                    <p>7. Third party original price confirmation for used commodities / vehicles</p>
                                    <p>8. Customer’s name should not appear in delinquent list of NBE</p>
                                </div>
                            </div>

                            <p className={styles.title} style={{ color: '#ff6b0b', textAlign: 'center', fontSize: '21px', paddingBottom: '20px' }}>
                                Basic Requirement to get the Product For Export
                            </p>
                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll> </div>
                                <div className={styles.rightFeatures}>
                                    <p>1. Duly filled, signed and stamped export application form</p>
                                    <p>2. Duly signed contract by seller & buyer</p>
                                    <p>3. Valid and renewed Export / Manufacturing / Industry License</p>
                                    <p>4. TIN Certificate </p>
                                    <p>5. Undertaking letter that the sight CAD will be settled within 90 days </p>
                                    <p>6. Customer’s name should not appear in delinquent list of NBE</p>
                                </div>
                            </div>
                        </div>
                        : ""}

                    {dispaly == 3 ?
                        <div className="animate__animated animate__bounceInUp">
                            <p className={styles.title}>
                                <h5>3. Advance Payment </h5>
                                <h5 style={{ fontSize: '21px', color: '#007070' }}>Description</h5>
                            </p>
                            <div className={styles.description} >
                                <p>
                                    This Is a method through which a seller receives payment from a buyer prior to shipment of goods
                                </p>
                            </div>
                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#007070', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginLeft: '1px' }}></p>
                                    <p>FEATURES:</p>
                                </div>
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li>Goods shipped at seller conveniences</li>
                                    <li>Payment is received prior to the transfer of ownership of the goods</li>
                                    <li>Buyer shall not make any payment until they receive the goods</li>
                                    <li>Allows the buyer to import goods at relatively lower finance cost.</li>
                                    <li>Establishing of a new relationship with a minimum cost.</li>
                                </ul>
                            </div>

                            <p className={styles.title} style={{ color: '#ff6b0b', textAlign: 'center', fontSize: '21px', paddingBottom: '20px' }}>
                                Basic Requirement to get the Product For Import
                            </p>
                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll> </div>
                                <div className={styles.rightFeatures}>
                                    <p>1. Advance payment receipt (Incoming Telegraphic Transfer) advice or customs declaration
                                        along with bank advice for the sale of the Cash Notes to the Bank. (If deposited in Foreign Currency Cash Notes),
                                        commercial invoice, sales contract, License & TIN certificate.</p>
                                </div>
                            </div>

                            <p className={styles.title} style={{ color: '#ff6b0b', textAlign: 'center', fontSize: '21px', paddingBottom: '20px' }}>
                                Basic Requirement to get the Product For Export
                            </p>
                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll> </div>
                                <div className={styles.rightFeatures}>
                                    <p>1. Duly filled, signed and stamped export application form</p>
                                    <p>2. Duly signed contract by seller & buyer</p>
                                    <p>3. Valid and renewed Export / Manufacturing / Industry License</p>
                                    <p>4. TIN Certificate </p>
                                    <p>5. Undertaking letter that the sight CAD will be settled within 90 days </p>
                                    <p>6. Foreign inward remittance received and credit advice generated by DB</p>
                                    <p>7. Foreign cash note deposited to the Exporter’s account which shall be accompanied by customs declaration</p>
                                    <p>8. Purpose of payment and beneficiary name should clearly be stated on the credit advice</p>
                                    <p>9. Customer’s name should not appear in delinquent list of NBE</p>
                                </div>
                            </div>
                        </div>
                        : ""}

                    {dispaly == 4 ?
                        <div className="animate__animated animate__bounceInUp">
                            <p className={styles.title}>
                                <h5>4. Consignment Basis Payment </h5>
                                <h5 style={{ fontSize: '21px', color: '#007070' }}>Description</h5>
                            </p>
                            <div className={styles.description} >
                                <p>
                                    A mode of payment in which title to the goods remains with the seller until an agent in a foreign country sells them
                                </p>
                            </div>
                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#007070', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginLeft: '1px' }}></p>
                                    <p>FEATURES:</p>
                                </div>
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li>Applicable to perishable items such as fruits, flowers, meat, etc and items as approved by the National Bank of Ethiopia. </li>
                                </ul>
                            </div>
                            <p className={styles.title} style={{ color: '#ff6b0b', textAlign: 'center', fontSize: '21px', paddingBottom: '20px' }}>
                                Basic Requirement to get the Product For Export
                            </p>
                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll> </div>
                                <div className={styles.rightFeatures}>
                                    <p>1. Applicants engaged in export business, or other applicants who export perishable materials for various purposes</p>
                                </div>
                            </div>
                        </div>
                        : ""}

                    {dispaly == 5 ?
                        <div className="animate__animated animate__bounceInUp">
                            <p className={styles.title}>
                                <h5>5. Small Export Items </h5>
                                <h5 style={{ fontSize: '21px', color: '#007070' }}>Description</h5>
                            </p>
                            <div className={styles.description} >
                                <p>
                                    Offers a means under which samples, repairs, replacements, exhibitions and trade fairs, personal effects and belongings etc.
                                    sent to abroad without surrendering foreign exchange given to the limit set by NBE.
                                </p>
                            </div>
                            <p className={styles.title} style={{ color: '#ff6b0b', textAlign: 'center', fontSize: '21px', paddingBottom: '20px' }}>
                                Basic Requirement to get the Product For Export
                            </p>
                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll> </div>
                                <div className={styles.rightFeatures}>
                                    <p>Issued for small export items to tourists, foreign residents of Ethiopian nationals who wish to take souvenir,
                                        samples, gifts, repairs, replacements, exhibitions and personal effects and belongingness, etc.</p>
                                </div>
                            </div>
                        </div>
                        : ""}


                    {dispaly == 6 ?
                        <div className="animate__animated animate__bounceInUp">
                            <p className={styles.title}>
                                <h5>6. Guarantee </h5>
                                <h5 style={{ fontSize: '21px', color: '#007070' }}>Description</h5>
                            </p>
                            <div className={styles.description} >
                                <p>
                                    Is a written undertaking by the bank to compensate (pay a sum of money) to the beneficiary
                                    (local or foreign) in the event that the obligor/principal fails to fulfil his/her/its obligations in
                                    accordance with the terms and conditions of the guarantee/agreement/contract.
                                </p>
                            </div>
                        </div>
                        : ""}

                    {dispaly == 7 ?
                        <div className="animate__animated animate__bounceInUp">
                            <p className={styles.title}>
                                <h5>7. International Money Transfer </h5>
                                <h5 style={{ fontSize: '21px', color: '#007070' }}>Description</h5>
                            </p>
                            <div className={styles.description} >
                                <p>
                                    The bank provides special incoming remittance services to local beneficiaries when money is sent from abroad via SWIFT WEGAETAA
                                </p>
                            </div>
                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#007070', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginLeft: '1px' }}></p>
                                    <p>FEATURES:</p>
                                </div>
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li>Wegagen Bank is an agent for 9 international money transfer companies i.e. Western Union, MoneyGram, Ria, Trans Fast, Taaj, Tawakal, Dahabshil, Amal and Thunes.</li>
                                </ul>
                            </div>
                        </div>
                        : ""}

                    {dispaly == 8 ?
                        <div className="animate__animated animate__bounceInUp">
                            <p className={styles.title}>
                                <h5>8. Exchange of Foreign Currency </h5>
                                <h5 style={{ fontSize: '21px', color: '#007070' }}>Description</h5>
                            </p>
                            <div className={styles.description} >
                                <p>
                                    Provide exchange of foreign currency to local currency at your convenience
                                </p>
                            </div>
                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#007070', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginLeft: '1px' }}></p>
                                    <p>FEATURES:</p>
                                </div>
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li>With the liberalization of handling of foreign exchange dealing, Wegagen Bank buys and sells
                                        foreign currencies. In addition, it has forex bureaus in various hotels.</li>
                                </ul>
                            </div>

                        </div>
                        : ""}

                    {dispaly == 9 ?
                        <div className="animate__animated animate__bounceInUp">
                            <p className={styles.title}>
                                <h5>6. Foreign Currency Accounts </h5>
                                <h5 style={{ fontSize: '21px', color: '#007070' }}>Description</h5>
                            </p>
                            <div className={styles.description}>
                                <p>
                                    A service designed for individuals, foreign diplomats, international organizations,
                                    and others who would like to open and maintain accounts in major currencies i.e. US Dollar, GBP, Euro and Birr.
                                </p>
                            </div>
                            <div className={styles.features}>
                                <div className={styles.featuresTitle}>
                                    <p style={{ backgroundColor: '#007070', margin: '10px', marginRight: '1px' }}></p>
                                    <p style={{ backgroundColor: '#ff8f12', margin: '10px', marginLeft: '1px' }}></p>
                                    <p>FEATURES:</p>
                                </div>
                                <ul class="list-disc list-inside" style={{ marginLeft: '25px' }}>
                                    <li>Pursuant to NBE’s foreign exchange control regulation non-resident accounts are
                                        opened to foreign nationals to meet their local and foreign payment needs on the basis of
                                        approval letter from NBE specifying name and type of NR accounts to be opened to customers under caption.</li>
                                </ul>
                            </div>
                            <p className={styles.title} style={{ color: '#ff6b0b', textAlign: 'center', fontSize: '21px', paddingBottom: '20px' }}>
                                Basic Requirement to get the Product For Import
                            </p>
                            <div className={styles.moreFeatures}>
                                <div className={styles.leftFeatures}><IoIosDoneAll className={styles.checkIcon}></IoIosDoneAll> </div>
                                <div className={styles.rightFeatures}>
                                    <p>Application forms properly filled and signed by the applicant. <br />
                                        ▪ For Ethiopians or foreign nationals of Ethiopian origin valid passport and/or
                                        Ethiopian origin identification card and/or Resident identification card where they
                                        are living.</p>
                                </div>
                            </div>
                        </div>
                        : ""}
                </div>
            </div>
            <Footer />

        </div>
    )
}

export default International_Banking