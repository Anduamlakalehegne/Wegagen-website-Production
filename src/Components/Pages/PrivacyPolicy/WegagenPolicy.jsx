import React, { useState, useEffect } from "react";
import "animate.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { MdMenuOpen } from "react-icons/md";
import About_us from "../../../assets/Images/common.jpg";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import styles from "../Personal Loan/personalLoan.module.css";
import StikyNav from "../Common/StikyNav";
import Mega_Menu from "../Common/Mega_Menu";
import Footer from "../Common/Footer";

export default function WegagenPrivacyPolicy() {
  useEffect(() => {
    Aos.init();
  }, []);

  const [display, setDisplay] = useState(1);
  const MySwal = withReactContent(Swal);

  const handleNavigationClick = (index) => {
    setDisplay(index);
    window.scrollTo(0, 280);
  };

  const handleClick = (index) => {
    setDisplay(index);
    MySwal.close();
    window.scrollTo(0, 0);
  };

  const menutoggle = () => {
    MySwal.fire({
      html: (
        <div className="leftNavBars" style={{ marginTop: "40px" }}>
          <div
            className={`animate__animated animate__fadeInLeft ${styles.popupshortInfo}`}
          >
            <p
              onClick={() => {
                handleClick(1);
              }}
              style={{
                backgroundColor: "#004360",
                color: "white",
                padding: "7px",
                fontSize: "16px",
              }}
            >
              Context Description
            </p>
            <p
              onClick={() => {
                handleClick(2);
              }}
              style={
                display === 2
                  ? { backgroundColor: "#ff6b0b", color: "white" }
                  : { fontSize: "" }
              }
            >
              Introduction
            </p>
            <p
              onClick={() => {
                handleClick(3);
              }}
              style={
                display === 3
                  ? { backgroundColor: "#ff6b0b", color: "white" }
                  : { fontSize: "" }
              }
            >
              What Personal Data Do We Collect?
            </p>
            <p
              onClick={() => {
                handleClick(4);
              }}
              style={
                display === 4
                  ? { backgroundColor: "#ff6b0b", color: "white" }
                  : { fontSize: "" }
              }
            >
              How We Use Your Personal Data
            </p>
            <p
              onClick={() => {
                handleClick(5);
              }}
              style={
                display === 5
                  ? { backgroundColor: "#ff6b0b", color: "white" }
                  : { fontSize: "" }
              }
            >
              How We Protect Your Personal Data
            </p>
            <p
              onClick={() => {
                handleClick(6);
              }}
              style={
                display === 6
                  ? { backgroundColor: "#ff6b0b", color: "white" }
                  : { fontSize: "" }
              }
            >
              Your Rights as a Customer
            </p>
            <p
              onClick={() => {
                handleClick(7);
              }}
              style={
                display === 7
                  ? { backgroundColor: "#ff6b0b", color: "white" }
                  : { fontSize: "" }
              }
            >
              How We Share Your Personal Data
            </p>
            <p
              onClick={() => {
                handleClick(8);
              }}
              style={
                display === 8
                  ? { backgroundColor: "#ff6b0b", color: "white" }
                  : { fontSize: "" }
              }
            >
              Data Retention
            </p>

            <p
              onClick={() => {
                handleClick(9);
              }}
              style={
                display === 9
                  ? { backgroundColor: "#ff6b0b", color: "white" }
                  : { fontSize: "" }
              }
            >
              Updates to This Policy
            </p>
            <p
              onClick={() => {
                handleClick(10);
              }}
              style={
                display === 10
                  ? { backgroundColor: "#ff6b0b", color: "white" }
                  : { fontSize: "" }
              }
            >
              Customer Responsibility
            </p>
            <p
              onClick={() => {
                handleClick(11);
              }}
              style={
                display === 11
                  ? { backgroundColor: "#ff6b0b", color: "white" }
                  : { fontSize: "" }
              }
            >
              Conclusion
            </p>
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
      },
    }).then((result) => {
      if (result.isDenied) {
        //
      }
    });
  };

  return (
    <div>
      <StikyNav />
      <Mega_Menu />

      <div className={styles.agarImage}>
        <img src={About_us}></img>
      </div>

      <h2 className="text-3xl text-[#004360] font-bold my-5">
        Wegagen Bank Privacy Policy
      </h2>
      <hr className="mx-10 md:mx-20" />
      <div className={`${styles.establishment} mt-10`}>
        <p className={styles.aboutUsMenu} onClick={() => menutoggle()}>
          <MdMenuOpen style={{ fontSize: "30px" }} />
        </p>

        <div className={styles.leftNavBars}>
          <div
            className={`animate__animated animate__fadeInLeft ${styles.shortInfo}`}
            style={{ height: "400px" }}
          >
            <p
              onClick={() => handleNavigationClick(1)}
              style={
                display === 1
                  ? {
                      backgroundColor: "#ff6b0b",
                      color: "white",
                      padding: "7px",
                      fontSize: "16px",
                    }
                  : null
              }
            >
              Context Description
            </p>
            <p
              onClick={() => handleNavigationClick(2)}
              style={
                display === 2
                  ? {
                      backgroundColor: "#ff6b0b",
                      color: "white",
                      padding: "7px",
                      fontSize: "16px",
                    }
                  : null
              }
            >
              Introduction
            </p>
            <p
              onClick={() => handleNavigationClick(3)}
              style={
                display === 3
                  ? {
                      backgroundColor: "#ff6b0b",
                      color: "white",
                      padding: "7px",
                      fontSize: "16px",
                    }
                  : null
              }
            >
              What Personal Data Do We Collect?
            </p>
            <p
              onClick={() => handleNavigationClick(4)}
              style={
                display === 4
                  ? {
                      backgroundColor: "#ff6b0b",
                      color: "white",
                      padding: "7px",
                      fontSize: "16px",
                    }
                  : null
              }
            >
              How We Use Your Personal Data
            </p>
            <p
              onClick={() => handleNavigationClick(5)}
              style={
                display === 5
                  ? {
                      backgroundColor: "#ff6b0b",
                      color: "white",
                      padding: "7px",
                      fontSize: "16px",
                    }
                  : null
              }
            >
              How We Protect Your Personal Data
            </p>
            <p
              onClick={() => handleNavigationClick(6)}
              style={
                display === 6
                  ? {
                      backgroundColor: "#ff6b0b",
                      color: "white",
                      padding: "7px",
                      fontSize: "16px",
                    }
                  : null
              }
            >
              Your Rights as a Customer
            </p>
            <p
              onClick={() => handleNavigationClick(7)}
              style={
                display === 7
                  ? {
                      backgroundColor: "#ff6b0b",
                      color: "white",
                      padding: "7px",
                      fontSize: "16px",
                    }
                  : null
              }
            >
              How We Share Your Personal Data
            </p>
            <p
              onClick={() => handleNavigationClick(8)}
              style={
                display === 8
                  ? {
                      backgroundColor: "#ff6b0b",
                      color: "white",
                      padding: "7px",
                      fontSize: "16px",
                    }
                  : null
              }
            >
              Data Retention
            </p>
            <p
              onClick={() => handleNavigationClick(9)}
              style={
                display === 9
                  ? {
                      backgroundColor: "#ff6b0b",
                      color: "white",
                      padding: "7px",
                      fontSize: "16px",
                    }
                  : null
              }
            >
              Updates to This Policy
            </p>
            <p
              onClick={() => handleNavigationClick(10)}
              style={
                display === 10
                  ? {
                      backgroundColor: "#ff6b0b",
                      color: "white",
                      padding: "7px",
                      fontSize: "16px",
                    }
                  : null
              }
            >
              Customer Responsibility
            </p>
            <p
              onClick={() => handleNavigationClick(11)}
              style={
                display === 11
                  ? {
                      backgroundColor: "#ff6b0b",
                      color: "white",
                      padding: "7px",
                      fontSize: "16px",
                    }
                  : null
              }
            >
              Conclusion
            </p>
          </div>
        </div>

        <div>
          {display === 1 && (
            <div
              className="animate__animated animate__bounceInUp"
              style={{ marginBottom: "100px" }}
            >
              <p className={`${styles.title} -mt-5`}>
                <h5>Context Description</h5>

                <h5 style={{ fontSize: "21px", color: "#004360" }}>
                  Description
                </h5>
              </p>
              <div className={styles.description}>
                <p>
                  In the course of its daily operations, Wegagen Bank may
                  collect personal information from individuals when you:
                </p>
                <div className="mx-20 my-5">
                  <p className="list-item list-disc">
                    Apply for, avail, or use the Bank's products or services
                  </p>
                  <p className="list-item list-disc">
                    Interact with our employees and/or authorized
                    representatives
                  </p>
                  <p className="list-item list-disc">Visit our premises</p>
                  <p className="list-item list-disc">
                    Access our Mobile banking, online systems, and mobile
                    applications
                  </p>
                </div>
                <p>
                  This information is collected to provide services, make
                  decisions, and support the Bank’s business operations,
                  programs, and activities.
                </p>
                <p>
                  This Privacy Notice informs you, as the data subject, about
                  personal data protection and your rights.
                </p>
              </div>
            </div>
          )}

          {display === 2 && (
            <div
              className="animate__animated animate__bounceInUp"
              style={{ marginBottom: "100px" }}
            >
              <p className={`${styles.title} -mt-5`}>
                <h5>Introduction</h5>
                <h5 style={{ fontSize: "21px", color: "#004360" }}>
                  Description
                </h5>
              </p>
              <div className={`${styles.description}`}>
                <p>
                  At Wegagen Bank, we value your privacy and are committed to
                  protecting your personal data. In accordance with Ethiopia’s
                  Personal Data Protection Proclamation No. 1321/2024, we ensure
                  that your information is handled with the highest standards of
                  security and transparency. This policy awareness message
                  provides an overview of how we collect, use, share, and
                  protect your personal data.
                </p>
              </div>
            </div>
          )}

          {display === 3 && (
            <div
              className="animate__animated animate__bounceInUp"
              style={{ marginBottom: "100px" }}
            >
              <p className={`${styles.title} -mt-5`}>
                <h5>What Personal Data Do We Collect?</h5>

                <h5 style={{ fontSize: "21px", color: "#004360" }}>
                  We may collect various types of personal data, including:
                </h5>
              </p>
              <div className={`${styles.description}`}>
                <p className="list-item list-disc">
                  <strong className="mr-3">
                    Personal Identification Information:{" "}
                  </strong>
                  Name, address, phone number, date of birth, and national
                  ID/passport number.
                </p>
                <p className="list-item list-disc">
                  <strong className="mr-3">Financial Information:</strong>
                  Bank account details, Income Information, debit card numbers,
                  transaction history, and payment information.
                </p>
                <p className="list-item list-disc">
                  <strong className="mr-3">
                    Stay Alert for Fake IT/Bank Support Calls:
                  </strong>
                  Fraudsters may pose as bank representatives. Always verify
                  calls through official bank contact numbers before sharing any
                  personal information. Wegagen Bank Official Contact Number is
                  866.
                </p>
                <p className="list-item list-disc">
                  <strong className="mr-3">Contact Information: </strong>
                  Email address, phone numbers, and mailing address.
                </p>
                <p className="list-item list-disc">
                  <strong className="mr-3">Digital Data:</strong>
                  IP addresses, device information, and online activity on our
                  website or mobile banking app.
                </p>
              </div>
            </div>
          )}

          {display === 4 && (
            <div
              className="animate__animated animate__bounceInUp"
              style={{ marginBottom: "100px" }}
            >
              <p className={`${styles.title} -mt-5`}>
                <h5>How We Use Your Personal Data</h5>

                <h5 style={{ fontSize: "21px", color: "#004360" }}>
                  Your personal data is collected and used for specific
                  purposes, including:
                </h5>
              </p>
              <div className={`${styles.description}`}>
                <p className="list-item list-disc">
                  <strong className="mr-3">Account Management:</strong>
                  To open and manage your bank accounts and services.
                </p>
                <p className="list-item list-disc">
                  <strong className="mr-3">Transaction Processing:</strong>
                  To facilitate transactions, payments, and transfers.
                </p>
                <p className="list-item list-disc">
                  <strong className="mr-3">Customer Support:</strong>
                  To respond to inquiries, provide assistance, and enhance your
                  customer experience.
                </p>
                <p className="list-item list-disc">
                  <strong className="mr-3">Regulatory Compliance:</strong>
                  To comply with legal obligations, such as anti-money
                  laundering (AML), National Bank of Ethiopia Reporting
                  requirements and Other regulatory requirements.
                </p>
                <p className="list-item list-disc">
                  <strong className="mr-3">Marketing and Communication:</strong>
                  To send you updates, promotions, and service-related
                  information.
                </p>
              </div>
            </div>
          )}

          {display === 5 && (
            <div
              className="animate__animated animate__bounceInUp"
              style={{ marginBottom: "100px" }}
            >
              <p className={`${styles.title} -mt-5`}>
                <h5>How We Protect Your Personal Data</h5>

                <h5 style={{ fontSize: "21px", color: "#004360" }}>
                  Wegagen Bank takes data protection seriously. We implement
                  robust security measures to safeguard your information,
                  including:
                </h5>
              </p>
              <div className={`${styles.description}`}>
                <p className="list-item list-disc">
                  <strong className="mr-3">Data Encryption:</strong>
                  Your personal data is encrypted during transmission to prevent
                  unauthorized access.
                </p>
                <p className="list-item list-disc">
                  <strong className="mr-3">Access Control:</strong>
                  Only authorized employees and service providers have access to
                  your data, and they are bound by confidentiality agreements.
                </p>
                <p className="list-item list-disc">
                  <strong className="mr-3">Regular Audits:</strong>
                  We conduct regular security assessments and audits to ensure
                  compliance with data protection laws and our internal
                  policies.
                </p>
              </div>
            </div>
          )}

          {display === 6 && (
            <div
              className="animate__animated animate__bounceInUp"
              style={{ marginBottom: "100px" }}
            >
              <p className={`${styles.title} -mt-5`}>
                <h5>Your Rights as a Customer</h5>

                <h5 style={{ fontSize: "21px", color: "#004360" }}>
                  Under Proclamation No. 1321/2024, you have several rights
                  regarding your personal data:
                </h5>
              </p>
              <div className={`${styles.description}`}>
                <p className="list-item list-disc">
                  <strong className="mr-3">Right to Access:</strong>
                  You have the right to request a copy of your personal data
                  held by Wegagen Bank.
                </p>
                <p className="list-item list-disc">
                  <strong className="mr-3">Right to Rectification:</strong>
                  You can request corrections to any inaccurate or incomplete
                  personal data.
                </p>
                <p className="list-item list-disc">
                  <strong className="mr-3">Right to Erasure:</strong>
                  You have the right to request the deletion of your personal
                  data under certain conditions.
                </p>
                <p className="list-item list-disc">
                  <strong className="mr-3">Right to Data Portability:</strong>
                  You can request a transfer of your personal data to another
                  financial service provider.
                </p>
                <p className="list-item list-disc">
                  <strong className="mr-3">Right to Object:</strong>
                  You can object to the processing of your personal data for
                  direct marketing purposes.
                </p>
                <p className="list-item list-disc">
                  <strong className="mr-3">Right to Withdraw Consent:</strong>
                  If you have provided consent for data processing, you have the
                  right to withdraw it at any time.
                </p>
              </div>
            </div>
          )}

          {display === 7 && (
            <div
              className="animate__animated animate__bounceInUp"
              style={{ marginBottom: "100px" }}
            >
              <p className={`${styles.title} -mt-5`}>
                <h5>How We Share Your Personal Data</h5>

                <h5 style={{ fontSize: "21px", color: "#004360" }}>
                  Wegagen Bank may share your personal data with:
                </h5>
              </p>
              <div className={`${styles.description}`}>
                <p className="list-item list-disc">
                  <strong className="mr-3">Service Providers:</strong>
                  Third-party vendors who assist us with services such as
                  payment processing, IT support, and marketing (under strict
                  data protection agreements).
                </p>
                <p className="list-item list-disc">
                  <strong className="mr-3">Regulatory Authorities:</strong>
                  Government bodies and law enforcement agencies when required
                  by law.
                </p>
                <p className="list-item list-disc">
                  <strong className="mr-3">Affiliates and Partners:</strong>
                  With your consent, we may share data with our affiliates for
                  joint marketing or service provision.
                </p>
                <p className="mt-5">
                  We do not sell or rent your personal data to third parties.
                </p>
              </div>
            </div>
          )}

          {display === 8 && (
            <div
              className="animate__animated animate__bounceInUp"
              style={{ marginBottom: "100px" }}
            >
              <p className={`${styles.title} -mt-5`}>
                <h5>Data Retention</h5>

                <h5 style={{ fontSize: "21px", color: "#004360" }}>
                  Description
                </h5>
              </p>
              <div className={`${styles.description}`}>
                <p>
                  Your personal data is retained only as long as necessary to
                  fulfill the purposes outlined in this policy or as required by
                  law. Once your data is no longer needed, it is securely
                  deleted or anonymized.
                </p>
              </div>
            </div>
          )}

          {display === 9 && (
            <div
              className="animate__animated animate__bounceInUp"
              style={{ marginBottom: "100px" }}
            >
              <p className={`${styles.title} -mt-5`}>
                <h5>Updates to This Policy</h5>

                <h5 style={{ fontSize: "21px", color: "#004360" }}>
                  Description
                </h5>
              </p>
              <div className={`${styles.description}`}>
                <p>
                  We may update this privacy policy awareness message to reflect
                  changes in our practices or legal requirements. We encourage
                  you to review our privacy policy regularly on our website or
                  mobile app.
                </p>
              </div>
            </div>
          )}

          {display === 10 && (
            <div
              className="animate__animated animate__bounceInUp"
              style={{ marginBottom: "100px" }}
            >
              <p className={`${styles.title} -mt-5`}>
                <h5>Customer Responsibility</h5>

                <h5 style={{ fontSize: "21px", color: "#004360" }}>
                  While Wegagen Bank takes extensive measures to protect your
                  personal data, you also play a role in safeguarding your
                  information. We recommend:
                </h5>
              </p>
              <div className={`${styles.description}`}>
                <p className="list-item list-disc">
                  Keeping your account details and passwords confidential.
                </p>
                <p className="list-item list-disc">
                  Reporting any changes in your contact details such as phone
                  number & email.
                </p>
                <p className="list-item list-disc">
                  Being cautious of phishing scams and suspicious requests for
                  personal information.
                </p>
                <p className="list-item list-disc">
                  Regularly monitoring your account activity and reporting any
                  unauthorized transactions immediately.
                </p>
              </div>
            </div>
          )}

          {display === 11 && (
            <div
              className="animate__animated animate__bounceInUp"
              style={{ marginBottom: "100px" }}
            >
              <p className={`${styles.title} -mt-5`}>
                <h5>Conclusion</h5>

                <h5 style={{ fontSize: "21px", color: "#004360" }}>
                  Description
                </h5>
              </p>
              <div className={`${styles.description}`}>
                <p>
                  Your privacy is important to us. Wegagen Bank is committed to
                  protecting your personal data and ensuring that it is handled
                  with the utmost care and transparency. By understanding your
                  rights and our data protection practices, you can enjoy a
                  safer and more secure banking experience.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
