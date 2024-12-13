import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from 'react-router-dom'
import './footer.css'
import styles from './stikyNav.module.css';
import { BsFacebook } from "react-icons/bs"
import { BsTelegram } from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs"
import { BsTwitter } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"
import { BsYoutube } from "react-icons/bs"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import LoanCalculator from './Loan Calculator/LoanCalculator';
import { FaXTwitter } from "react-icons/fa6";
import axios from "axios";
import { format, parseISO } from 'date-fns';

export default function Footer({ footerColor }) {

  const getColor = () => {
    return '#007070'
  }

  const navigate = useNavigate()
  const MySwal = withReactContent(Swal)


  const cardstoggle = () => {

    MySwal.fire({
      html: (
        <div className='termsAndTarrifs'>
          <label style={{ fontSize: '27px', color: '#ff6b0b', fontWeight: '700', margin: '50px' }}>Terms & Tariffs</label>
          <>
            <p style={{ textAlign: 'center', cursor: 'pointer' }} onClick={Branch_Terms_And_Tariffs}>Branch Banking Terms and Tariffs</p>
            <p style={{ textAlign: 'center', cursor: 'pointer' }} onClick={Digital_Terms_And_Tariffs}> Digital Banking Terms and Tariffs </p>
            <p style={{ textAlign: 'center', cursor: 'pointer' }} onClick={Credit_Terms_And_Tariffs}> Credit Terms and Tariffs </p>
            <p style={{ textAlign: 'center', cursor: 'pointer' }} onClick={International_Terms_And_Tariffs}> IBD Terms and Tariffs </p>
            <p style={{ textAlign: 'center', cursor: 'pointer' }} onClick={IFB_Terms_And_Tariffs}> IFB Tariffs </p>
            <p style={{ textAlign: 'center', cursor: 'pointer' }} onClick={Efoyta_Terms_And_Tariffs}> Efoyta Terms And Tariffs </p>
            <p style={{ textAlign: 'center', cursor: 'pointer' }} onClick={Share_Terms_and_Tariffs}> Share Administration  Terms and Tariffs </p>
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
    })
  }
  const Branch_Terms_And_Tariffs = () => {
    MySwal.close()
    navigate('/Branch_Terms_And_Tariffs')
  }
  const Digital_Terms_And_Tariffs = () => {
    MySwal.close()
    navigate('/Digital_Terms_And_Tariffs')
  }
  const Credit_Terms_And_Tariffs = () => {
    MySwal.close()
    navigate('/Credit_Terms_And_Tariffs')
  }
  const International_Terms_And_Tariffs = () => {
    MySwal.close()
    navigate('/International_Terms_And_Tariffs')
  }
  const IFB_Terms_And_Tariffs = () => {
    MySwal.close()
    navigate('/IFB_Terms_And_Tariffs')
  }
  const Efoyta_Terms_And_Tariffs = () => {
    MySwal.close()
    navigate('/Efoyta_Terms_And_Tariffs')
  }
  const Share_Terms_and_Tariffs = () => {
    MySwal.close()
    navigate('/Share_Terms_and_Tariffs')
  }
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

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
        }
      })
      .catch(error => {
        console.error("There was an error fetching the exchange rates!", error);
      });
  }, []);

  const exchageRate = () => {
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
                <th colSpan={2} style={{ paddingLeft: '6%' }} >Cash & Remittance</th>
                <th colSpan={2} style={{ paddingLeft: '6%' }}>Transactions</th>
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

  const [pdfUrl, setPdfUrl] = useState('');

  useEffect(() => {
    // Fetch the data from Strapi API
    fetch('https://weg.back.strapi.wegagen.com/api/adeles?populate=*')
      .then(response => response.json())
      .then(data => {
        const pdfFile = data.data[0]?.attributes?.file?.data[0]?.attributes?.url;
        if (pdfFile) {
          // Set the full URL for the PDF file
          setPdfUrl(`https://weg.back.strapi.wegagen.com${pdfFile}`);
        }
      })
      .catch(error => console.error('Error fetching the PDF:', error));
  }, []);



  return (
    <div className='footer' style={footerColor == "wadya" ? { backgroundColor: getColor(), textDecoration: 'none' } : { textDecoration: 'none' }}>
      <div className='footerContents'>
        <div className='contacts'>
          <p
            style={{
              fontSize: "20px",
              '@media (max-width: 768px)': {
                fontSize: "14px"
              }
            }}
          >
            Contact Us
          </p>
          <p> Call Center : 866 </p>
          <p>Address : Wegagen Tower, Ras Mekonen St, Addis Ababa</p>
          <p> Phone Number : +251 115 52 3800 </p>
          <p> Email : info@wegagen.com</p>
          <p>SWIFT Code : WEGAETAA</p>
        </div>
        <div className='usefulLinkd'>
          <p style={{
            fontSize: "20px",
            '@media (max-width: 568px)': {
              fontSize: "4px"
            }
          }}>Useful Links</p>
          <Link to="/Bid" style={{ textDecoration: 'none' }}><p>Bid</p></Link>
          <Link to="/ATM_Location" style={{ textDecoration: 'none' }}><p>ATM Locator</p></Link>
          <Link to="/Branch_Location" style={{ textDecoration: 'none' }}><p>Branches</p></Link>
          <Link to="/Vacancy" style={{ textDecoration: 'none' }}><p>Career</p></Link>
          <p onClick={() => { cardstoggle() }}>Terms & Tariffs</p>
        </div>

        <div className='customerSupport2'>
          <p style={{
            fontSize: "20px",
            '@media (max-width: 768px)': { // Change 768px to whatever breakpoint you prefer
              fontSize: "15px"
            }
          }}>Resources</p>
          <Link to="/News" style={{ textDecoration: 'none' }}><p>News</p></Link>
          <Link to="/annualReport" style={{ textDecoration: 'none' }}><p>Annual Reports</p></Link>
          <Link to="/BankFormat" style={{ textDecoration: 'none' }}><p>Bank Format</p></Link>
          <Link to="/Gallery" style={{ textDecoration: 'none' }}><p>Gallery</p></Link>
          <a href={pdfUrl} rel="noopener noreferrer" target="_blank" style={{ textDecoration: 'none', display: 'block' }} > <p>ADELE</p></a>

        </div>

        <div className='customerSupport'>
          <p style={{
            fontSize: "20px",
            '@media (max-width: 768px)': {
              fontSize: "13px"
            }
          }}> Customer Support</p>
          {/* <p>FAQ</p>
          <p>Security Tips</p>  */}
          <p onClick={() => { exchageRate() }}>Exchange Rate</p>
          <p onClick={togglePopup}>Loan Calculator</p>

        </div>

      </div>
      <hr />

      <div className='footerSocialMedias'>
        <p>Copyright © 2024 Wegagen Bank. Terms of Use | Privacy Policy</p>
        <ul>
          <a href='https://www.facebook.com/bankwegagen' target="_blank" rel="noopener noreferrer"><li><BsFacebook ></BsFacebook></li></a>
          <a href='https://t.me/WegagenBanksc' target="_blank" rel="noopener noreferrer"><li><BsTelegram ></BsTelegram></li></a>
          <a href='https://x.com/WegagenBanksc' target="_blank" rel="noopener noreferrer"><li><FaXTwitter ></FaXTwitter></li></a>
          <a href='https://www.linkedin.com/company/66893778/admin/' target="_blank" rel="noopener noreferrer"><li><BsLinkedin ></BsLinkedin></li></a>
          <a href='https://www.youtube.com/channel/UCksW-3Q5a3TKos-jTQp-LCA?view_as=subscriber' target="_blank" rel="noopener noreferrer"><li><BsYoutube ></BsYoutube></li></a>
          <a href='https://www.instagram.com/wegagenbankofficial/' target="_blank" rel="noopener noreferrer"><li><BsInstagram ></BsInstagram></li></a>
        </ul>
      </div>

      <LoanCalculator isOpen={showPopup} onClose={togglePopup} />
    </div>
  )
}
