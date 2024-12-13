import React, { useState, useEffect } from "react";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import styles from "./bankformat.module.css";
import { FaInfoCircle, FaFilePdf } from 'react-icons/fa';
import About_us from "../../../assets/Images/common.jpg";
import StikyNav from "../Common/StikyNav";
import Mega_Menu from "../Common/Mega_Menu";
import Footer from '../Common/Footer';
import { API_BASE_URL } from '../Common/Config/Config'; 

const MySwal = withReactContent(Swal);

export default function BankFormat() {
    const [reports, setReports] = useState([]);  

    useEffect(() => {
        const fetchReports = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/api/forms?populate=*`);
                const data = await response.json();
                const fetchedReports = data.data.map(report => ({
                    id: report.id,
                    name: report.attributes.Name.trim(),
                    createdAt: report.attributes.createdAt.trim(),
                    pdfUrl: `${API_BASE_URL}${report.attributes.form_file.data[0].attributes.url}`,
                }));
                setReports(fetchedReports);
            } catch (error) {
                console.error('Error fetching reports:', error);
            }
        };

        fetchReports();
    }, []);

    const verifyEmail = async (email) => {
        const apiKeys = ['4ZQhtRJIK0GwcaPTAbu6nxVy2NSjXr3M', 'K07WzMZ9UJyu8Ghmfntb2o4LHwAcNeI4', 'U7YWzESckeDrx6BN2Im5yAQGbHRVpgjZ', 'AFCBTqcwjIMY4Unm2NLp76gRsHJ38aDP', 'another_key_4', 'another_key_5'];
        const serviceUri = 'https://emailverifierapi.com/v2/';
    
        for (const apiKey of apiKeys) {
            const formData = new URLSearchParams();
            formData.append('apiKey', apiKey);
            formData.append('email', email);
    
            try {
                const response = await fetch(serviceUri, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: formData.toString(),
                });
    
                const responseData = await response.json();
                if (responseData.status === 'passed' && responseData.event === 'mailboxExists') {
                    return true; // Return true if email is verified successfully
                }
            } catch (error) {
                console.error(`Error verifying email with API key ${apiKey}:`, error);
            }
        }
    
        // If none of the API keys work or there's an error, return false
        MySwal.fire({
            icon: 'error',
            title: 'Invalid Email',
            text: 'Failed to verify the email. Please try again later.'
        });
        return false;
    };

    const handleEmailSubmission = async (report) => {
        const { value: email } = await MySwal.fire({
            text: 'Enter your email to subscribe and download the form',
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
                    <FaFilePdf size={10} color="#ff6b0b" className={styles.reportImage} />
                    <p><strong>Date:</strong> {report.createdAt}</p>
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
            <p style={{ fontSize: '30px', padding: '30px', fontWeight: '600', color: '#004360' }}>Bank Forms</p>
            <div className={styles.reportsGrid}>
                {reports.map((report) => (
                    <div key={report.id} className={styles.reportItem}>
                        <FaFilePdf size={10} color="#ff6b0b" className={styles.reportImage} />
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
