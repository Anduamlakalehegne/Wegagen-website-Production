import React, { useState, useEffect } from "react";
import "animate.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { MdMenuOpen } from "react-icons/md";
import { IoIosDoneAll } from "react-icons/io";
import About_us from "../../../assets/Images/common.jpg";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import styles from "../Personal Loan/personalLoan.module.css";
import StikyNav from "../Common/StikyNav";
import Mega_Menu from "../Common/Mega_Menu";
import Footer from "../Common/Footer";

export default function CyberSecurtyPolicy() {
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
              Knowledge is a Powerful Defence
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
              Trending Scams: What You Need to Know
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
              Protect Yourself Against Common Threats
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
        Cyber Security Awareness
      </h2>
      <hr className="mx-10 md:mx-20" />
      <div className={`${styles.establishment} mt-10`}>
        <p className={styles.aboutUsMenu} onClick={() => menutoggle()}>
          <MdMenuOpen style={{ fontSize: "30px" }} />
        </p>

        <div className={styles.leftNavBars}>
          <div
            className={`animate__animated animate__fadeInLeft ${styles.shortInfo}`}
            style={{ height: "250px" }}
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
              Knowledge is a Powerful Defence
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
              Trending Scams: What You Need to Know
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
              Protect Yourself Against Common Threats
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
                <h5>Knowledge is a Powerful Defence</h5>

                <h5 style={{ fontSize: "21px", color: "#004360" }}>
                  Description
                </h5>
              </p>
              <div className={styles.description}>
                <p>
                  Fraudulent practices have become increasingly sophisticated,
                  involving emails, text messages, and phone calls that appear
                  to be from trusted companies like banks, the Revenue
                  Authority, and more. Scammers use these methods to deceive
                  customers into giving money or sharing personal information,
                  such as bank account numbers, passwords, mobile banking codes,
                  and PINs.
                </p>
                <p>
                  Techniques like phishing emails, text messages, and caller ID
                  spoofing give scammers an advantage. Scammers, a type of
                  fraudster, are always finding new ways to trick people into
                  stealing their money and personal information. While their
                  stories may change, their tactics remain consistent. Consumers
                  should be highly alert and cautious about who they trust,
                  especially online.
                </p>
                <p className="italic">
                  A quick way to remember what to do when you think you are
                  being scammed is to follow the three S's: “Stay Suspicious,
                  stop for a Second (and think about it), and Stay Protected.”
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
                <h5>Trending Scams: What You Need to Know</h5>
                <h5 style={{ fontSize: "21px", color: "#004360" }}>
                  Understand Scammers’ Tactics
                </h5>
              </p>
              <div className={`${styles.description}`}>
                <p>
                  Here are three common tactics used by scammers and how they
                  work:
                </p>
                <p className="list-item list-disc">
                  <strong className="mr-3"> Fear: </strong> Scammers often use
                  fear to manipulate victims. They may contact you via phone or
                  email, using urgent language to make it seem like there is a
                  problem you need to solve immediately.
                </p>
                <p className="list-item list-disc">
                  <strong className="mr-3"> Urgency: </strong> Scammers try to
                  create a sense of urgency, pressuring people to act quickly
                  without thinking.
                </p>
                <p className="list-item list-disc">
                  <strong className="mr-3"> Money: </strong> Scammers often use
                  money as bait. They may impersonate bank officials or tax
                  professionals from the Revenue Service, claiming that you are
                  eligible for a tax refund if you pay for their services or
                  provide personal information.
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
                <h5>Protect Yourself Against Common Threats</h5>

                <h5 style={{ fontSize: "21px", color: "#004360" }}>
                  ATM Card Fraud Prevention Tips
                </h5>
              </p>
              <div className={`${styles.description}`}>
                <p className="list-item list-disc">
                  <strong className="mr-3">Beware of Shoulder Surfing:</strong>
                  Always shield the keypad when entering your PIN at ATMs or
                  payment terminals. Fraudsters may attempt to watch your PIN
                  entry.
                </p>
                <p className="list-item list-disc">
                  <strong className="mr-3">
                    Avoid Sharing PINs and Passwords:
                  </strong>
                  Never share your PIN or card details with anyone, including
                  family members or bank representatives. Your bank will never
                  ask for this information.
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
                  <strong className="mr-3">Check for Skimming Devices:</strong>{" "}
                  Before using an ATM, check for any unusual attachments on the
                  card reader slot. Skimmers can steal your card information.
                </p>
                <p className="list-item list-disc">
                  <strong className="mr-3">
                    Monitor Your Account Activity:
                  </strong>
                  Regularly check your bank statements for unauthorized
                  transactions. Report any suspicious activity immediately.
                </p>
                <p className="list-item list-disc">
                  <strong className="mr-3">Beware of Identity Theft:</strong>{" "}
                  Protect your personal documents and never share sensitive
                  information online. Fraudsters may use your personal data for
                  an unauthorized activity.
                </p>
              </div>

              <p className={styles.title}>
                <h5 style={{ fontSize: "21px", color: "#004360" }}>
                  Social Engineering Threats and How to Avoid Them
                </h5>
              </p>
              <div className={`${styles.description}`}>
                <p className="list-item list-disc">
                  <strong className="mr-3">Phishing Awareness:</strong>Be
                  cautious of emails or messages that ask you to click on links
                  or provide personal information. Verify the sender's email
                  address and look for signs of phishing, such as misspellings
                  and urgent language.
                </p>
                <p className="list-item list-disc">
                  <strong className="mr-3">
                    Vishing (Voice Phishing) Protection:
                  </strong>
                  If you receive a call from someone claiming to be from the
                  bank, do not share your PIN or account details. Call back
                  using the official bank contact number to verify.
                  <strong className="italic text-orange-500">
                    Wegagen Bank Official Contact Number is 866.
                  </strong>
                </p>
                <p className="list-item list-disc">
                  <strong className="mr-3">Call Center Fraud Defense:</strong>
                  When receiving calls from the bank, never provide personal
                  information unless you initiated the call. Banks will not ask
                  for sensitive information over the phone.
                </p>
                <p className="list-item list-disc">
                  <strong className="mr-3">Avoid Email Spoofing:</strong>Be
                  skeptical of emails that seem to come from bank but contain
                  links or attachments. Always type the bank’s URL directly into
                  your browser instead of clicking links in emails.
                </p>
              </div>

              <p className={styles.title}>
                <h5 style={{ fontSize: "21px", color: "#004360" }}>
                  Mobile and Internet Banking Security Tips
                </h5>
              </p>
              <div className={`${styles.description}`}>
                <p className="list-item list-disc">
                  <strong className="mr-3">Use the Official Bank App:</strong>
                  Only download mobile banking apps from official app stores
                  (Google Play Store, Apple App Store) or directly from the
                  bank’s website. Links:
                  <a
                    href="https://play.google.com/store/apps/details?id=com.act.wegagen&hl
                  o"
                    className="text-orange-400 mx-2 hover:no-underline hover:text-orange-600"
                  >
                    Google Play Store
                  </a>
                  and
                  <a
                    href="https://apps.apple.com/in/app/wegagen-mobile/id6472656143"
                    className="text-orange-400 mx-2 hover:no-underline hover:text-orange-600"
                  >
                    Apple App Store
                  </a>
                </p>
                <p className="list-item list-disc">
                  <strong className="mr-3">Secure Your Device:</strong>Keep your
                  mobile and computer updated with the latest software and
                  antivirus protection. Use strong passwords and biometric
                  security (fingerprint/face recognition).
                </p>
                <p className="list-item list-disc">
                  <strong className="mr-3">Enable Alerts:</strong>Set up and
                  always check SMS or email alerts for any transactions made
                  with your account to detect unauthorized activity quickly.
                </p>
                <p className="list-item list-disc">
                  <strong className="mr-3">Avoid Public Wi-Fi:</strong>Never use
                  public Wi-Fi for accessing your bank account. Fraudsters can
                  easily intercept your data on unsecured networks.
                </p>
                <p className="list-item list-disc">
                  <strong className="mr-3">Log Out When Finished:</strong>Always
                  log out of your Mobile/Internet banking session when finished,
                  especially on shared or public devices.
                </p>
              </div>

              <p className={styles.title}>
                <h5 style={{ fontSize: "21px", color: "#004360" }}>
                  Security Tips for ATM Usage and Card Security
                </h5>
              </p>
              <div className={`${styles.description}`}>
                <p className="list-item list-disc">
                  <strong className="mr-3">Choose Well-Lit ATMs:</strong>
                  Use ATMs in secure, well-lit locations. If the ATM machine
                  looks tampered with or feels suspicious, do not use it.
                </p>
                <p className="list-item list-disc">
                  <strong className="mr-3">Cover Your PIN Entry:</strong>Use
                  your hand to shield the keypad when entering your PIN.
                  Fraudsters may place hidden cameras to capture your PIN.
                </p>
                <p className="list-item list-disc">
                  <strong className="mr-3">Keep Your Cards Safe:</strong>Store
                  your cards in a secure place and report any lost or stolen
                  cards immediately.
                </p>
                <p className="list-item list-disc">
                  <strong className="mr-3">Set Spending Alerts:</strong>Enable
                  SMS alerts for card transactions to get notified of any
                  suspicious activity immediately.
                </p>
              </div>

              <p className={styles.title}>
                <h5 style={{ fontSize: "21px", color: "#004360" }}>
                  Password Security Tips
                </h5>
              </p>
              <div className={`${styles.description}`}>
                <p className="list-item list-disc">
                  <strong className="mr-3">Use Strong Passwords:</strong>Create
                  strong, unique passwords for each of your accounts. Use a mix
                  of letters, numbers, and special characters.
                </p>
                <p className="list-item list-disc">
                  <strong className="mr-3">Password Length:</strong>Use
                  passwords that are at least 12 characters long. Mix uppercase
                  and lowercase letters, numbers, and special symbols.
                </p>
                <p className="list-item list-disc">
                  <strong className="mr-3">Avoid Common Passwords:</strong>Never
                  use easily guessed passwords like "123456," "password," or
                  your birthdate, your phone number.
                </p>
                <p className="list-item list-disc">
                  <strong className="mr-3">
                    Change Your Passwords Regularly:
                  </strong>
                  Update your passwords every few months, at least every 3
                  months and do not reuse old passwords.
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
