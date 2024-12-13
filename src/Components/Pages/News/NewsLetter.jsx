import React, { useState, useEffect } from "react";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import styles from "./annualReport.module.css";
import { FaInfoCircle } from 'react-icons/fa'; 
import About_us from "../../../assets/Images/common.jpg";
import StikyNav from "../Common/StikyNav";
import Mega_Menu from "../Common/Mega_Menu";  
import Footer from '../Common/Footer';
import axios from 'axios'; // Import axios for HTTP requests
import { API_BASE_URL } from '../Common/Config/Config'; 

const MySwal = withReactContent(Swal);

export default function NewsLetter() {
    const [reports, setReports] = useState([]);

    useEffect(() => {
        const fetchReports = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/api/news-letters?pagination[page]=1&pagination[pageSize]=1000&populate=*`);
                const data = await response.json();
                const fetchedReports = data.data.map(report => ({
                    id: report.id,
                    name: report.attributes.name.trim(),
                    date: report.attributes.date.trim(),
                    imageUrl: `${API_BASE_URL}${report.attributes.featured_image.data.attributes.url}`,
                    pdfUrl: `${API_BASE_URL}${report.attributes.pdf_file.data[0].attributes.url}`, 
                }));
                setReports(fetchedReports);
            } catch (error) {
                console.error('Error fetching newsletters:', error);
                MySwal.fire({
                    icon: 'error',
                    title: 'Failed to Fetch Newsletters',
                    text: 'There was an error fetching the newsletters. Please try again later.',
                });
            }
        };

        fetchReports();
    }, []);

    // Email verification using Hunter.io API
    const verifyEmail = async (email) => {
        try {
            const response = await axios.get('https://api.hunter.io/v2/email-verifier', {
                params: {
                    email: email,
                    api_key: "d17237178396a9f50b98da3e9662d07729dca663"
                }
            });

            const { result } = response.data.data;

            // The result can be 'deliverable', 'risky', 'undeliverable', 'webmail', 'accept_all', 'disposable', or 'unknown'
            // Consider 'deliverable' and 'risky' as valid
            if (result === 'deliverable' || result === 'risky') {
                return true; // Email is valid
            } else {
                return false; // Email is not valid
            }
        } catch (error) {
            console.error('Error verifying email:', error);
            MySwal.fire({
                icon: 'error',
                title: 'Email Verification Failed',
                text: 'Failed to verify the email address. Please try again later.',
            });
            return false; // Return false if there is an error
        }
    };

    const handleEmailSubmission = async (report) => {
        const { value: email } = await MySwal.fire({
            text: 'Enter your email to subscribe and download the newsletter',
            input: 'email',
            inputPlaceholder: 'Enter your email address',
            inputAttributes: {
                'aria-label': 'Enter your email address here',
            },
            showCancelButton: true,
            confirmButtonText: 'Submit',
            showLoaderOnConfirm: true,
            preConfirm: async (email) => {
                if (!email) {
                    Swal.showValidationMessage(`Please enter an email address.`);
                    return null;
                }
                const emailIsValid = await verifyEmail(email);
                if (!emailIsValid) {
                    Swal.showValidationMessage(`Invalid email: Please provide a valid email address.`);
                    return null;
                }
                return email;
            },
            allowOutsideClick: () => !Swal.isLoading()
        });
    
        if (email) {
            const isRegistered = await checkEmailRegistered(email);
            if (isRegistered) {
                // If email is already registered, directly initiate download
                window.location.href = report.pdfUrl;
            } else {
                try {
                    // If email is not registered, subscribe the email
                    await subscribeEmail(email);
                    // Show success message and initiate download
                    MySwal.fire({
                        icon: 'success',
                        title: 'Thank you for subscribing!',
                        text: 'Your download will start shortly.',
                        timer: 5000,
                        willClose: () => {
                            window.location.href = report.pdfUrl;
                        }
                    });
                } catch (error) {
                    // Show error message if subscription fails
                    console.error('Error subscribing email:', error);
                    MySwal.fire({
                        icon: 'error',
                        title: 'Subscription Failed',
                        text: 'Failed to subscribe email. Please try again later.'
                    });
                }
            }
        }
    };

    const checkEmailRegistered = async (email) => { 
        try {
            const response = await fetch(`${API_BASE_URL}/api/subscriptions?filters[email][$eq]=${encodeURIComponent(email)}`);
            const data = await response.json();
            return data.data.length > 0; // True if email is already registered
        } catch (error) {
            console.error("Error checking email registration:", error);
            return false; // Assume not registered on error
        }
    };

    const subscribeEmail = async (email) => {
        try {
            await fetch(`${API_BASE_URL}/api/subscriptions`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ data: { email } })
            });
        } catch (error) {
            console.error('Error subscribing email:', error);
            throw new Error('Failed to subscribe email');
        }
    };

    const showReportDetail = (report) => {
        MySwal.fire({
            html: (
                <div>
                    <h1 style={{ fontSize: '27px', color: '#ff6b0b' }}>{report.name}</h1>
                    <img src={report.imageUrl} alt="Report cover" style={{ width: '100%', height: '400px' }} />
                    <p><strong>Date:</strong> {report.date}</p>
                    <button className={styles.downloadButton} onClick={() => handleEmailSubmission(report)}>Download PDF</button>
                </div>
            ),
            showConfirmButton: false,
            showCloseButton: true,
            customClass: {
                popup: 'custom-popup-class'
            }
        });
    };

    return (
        <>
            <StikyNav />
            <Mega_Menu path="news" />
            <div className={styles.serviceimage}>
                <img src={About_us} alt="About us" />
            </div>
            <p style={{fontSize: '30px', padding: '30px', fontWeight: '600', color: '#004360'}}>Newsletter</p>
            <div className={styles.reportsGrid}>
                {reports.map((report) => (
                    <div key={report.id} className={styles.reportItem}>
                        <img src={report.imageUrl} alt={`Cover of ${report.name}`} className={styles.reportImage} />
                        <div className={styles.reportOverlay}>
                            <p className={styles.reportTitle}>{report.name}</p>
                            <div className={styles.overlayIcons}>
                                <FaInfoCircle className={styles.infoIcon} onClick={() => showReportDetail(report)} />
                            </div> 
                        </div>
                    </div> 
                ))} 
            </div>
            <Footer />
        </>
    );
}
