import React, { useState, useEffect } from "react";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import axios from 'axios'; // Import axios for HTTP requests
import styles from "./annualReport.module.css";
import { FaInfoCircle } from 'react-icons/fa';
import About_us from "../../../assets/Images/common.jpg";
import StikyNav from "../Common/StikyNav";
import Mega_Menu from "../Common/Mega_Menu";
import Footer from '../Common/Footer';

// Access environment variables
import { API_BASE_URL } from '../Common/Config/Config'; // Import the base URL

const MySwal = withReactContent(Swal);

export default function EnvironmentalPolicy() {
    const [policies, setPolicies] = useState([]);

    useEffect(() => {
        const fetchPolicies = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/api/environmental-policies?pagination[page]=1&pagination[pageSize]=1000&populate=*`);
                const data = await response.json();
                const fetchedPolicies = data.data.map(policy => ({
                    id: policy.id,
                    name: policy.attributes.name.trim(),
                    date: policy.attributes.date.trim(),
                    imageUrl: `${API_BASE_URL}${policy.attributes.featured_image.data[0].attributes.url}`,
                    pdfUrl: `${API_BASE_URL}${policy.attributes.pdf_file.data[0].attributes.url}`,
                }));
                setPolicies(fetchedPolicies);
            } catch (error) {
                console.error('Error fetching policies:', error);
            }
        };

        fetchPolicies();
    }, []);

    // Verify email using Hunter.io API
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
            // We will consider only 'deliverable' and 'risky' as valid
            if (result === 'deliverable' || result === 'risky') {
                return true; // Email is valid
            } else {
                return false; // Email is not valid
            }
        } catch (error) {
            console.error('Error verifying email:', error);
            return false; // Return false if there is an error
        }
    };

    const checkEmailRegistered = async (email) => {
        try {
            const response = await fetch(`${API_BASE_URL}/api/subscriptions?filters[email][$eq]=${encodeURIComponent(email)}`);
            const data = await response.json();
            return data.data.length > 0;
        } catch (error) {
            console.error("Error checking email registration:", error);
            return false;
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

    const handleEmailSubmission = async (policy) => {
        const { value: email } = await MySwal.fire({
            text: 'Enter your email to subscribe and download the policy document',
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
                    Swal.showValidationMessage(`Invalid email: The email is not valid or doesn't exist.`);
                    return null;
                }
                return email;
            },
            allowOutsideClick: () => !Swal.isLoading() 
        });

        if (email) {
            const isRegistered = await checkEmailRegistered(email);
            if (isRegistered) {
                window.location.href = policy.pdfUrl;
            } else {
                try {
                    await subscribeEmail(email);
                    MySwal.fire({
                        icon: 'success',
                        title: 'Thank you for subscribing!',
                        text: 'Your download will start shortly.',
                        timer: 5000,
                        willClose: () => {
                            window.location.href = policy.pdfUrl;
                        }
                    });
                } catch (error) {
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

    const showPolicyDetail = (policy) => {
        MySwal.fire({
            html: (
                <div>
                    <h1 style={{ fontSize: '27px', color: '#ff6b0b' }}>{policy.name}</h1>
                    <img src={policy.imageUrl} alt="Policy cover" style={{ width: '100%', height: '400px' }} />
                    <p><strong>Date:</strong> {policy.date}</p>
                    <button className={styles.downloadButton} onClick={() => handleEmailSubmission(policy)}>Download PDF</button>
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
            <p style={{ fontSize: '30px', padding: '30px', fontWeight: '600', color: '#004360' }}>ESG Policy</p>
            <div className={styles.reportsGrid}>
                {policies.map((policy) => (
                    <div key={policy.id} className={styles.reportItem}>
                        <img src={policy.imageUrl} alt={`Cover of ${policy.name}`} className={styles.reportImage} />
                        <div className={styles.reportOverlay}>
                              <p className={styles.reportTitle}>{policy.name}</p>
                            <div className={styles.overlayIcons}>
                                <FaInfoCircle className={styles.infoIcon} onClick={() => showPolicyDetail(policy)} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </>
    );
}
