import React, { useState, useEffect } from "react";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import styles from "./annualReport.module.css";
import { FaInfoCircle } from 'react-icons/fa';
import About_us from "../../../assets/Images/common.jpg";
import StikyNav from "../Common/StikyNav";
import Mega_Menu from "../Common/Mega_Menu";
import Footer from '../Common/Footer';
import { API_BASE_URL } from '../Common/Config/Config';

const MySwal = withReactContent(Swal);

export default function AnnualReport() {
    const [reports, setReports] = useState([]);

    useEffect(() => {
        const fetchReports = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/api/anual-reports?pagination[page]=1&pagination[pageSize]=1000&populate=*`);
                const data = await response.json();
                const fetchedReports = data.data.map(report => ({
                    id: report.id,
                    name: report.attributes.name.trim(),
                    date: report.attributes.date.trim(),  // This is the report's date
                    year: extractYear(report.attributes.date),  // Extract year for sorting
                    imageUrl: `${API_BASE_URL}${report.attributes.featured_image.data.attributes.url}`,
                    pdfUrl: `${API_BASE_URL}${report.attributes.pdf_file.data[0].attributes.url}`,
                }));

                // Sort reports based on extracted year and date
                const sortedReports = fetchedReports.sort((a, b) => b.year - a.year || compareDate(a.date, b.date));

                setReports(sortedReports);
            } catch (error) {
                console.error('Error fetching reports:', error);
                MySwal.fire({
                    icon: 'error',
                    title: 'Failed to Fetch Reports',
                    text: 'There was an error fetching the reports. Please try again later.',
                });
            }
        };

        fetchReports();
    }, []);

    // Extract the year from the date string (e.g., "12 Sat 2023" -> 2023)
    const extractYear = (dateString) => {
        const match = dateString.trim().split(' ');
        return match.length > 1 ? parseInt(match[2], 10) : 0; // Assuming the year is always the 3rd word
    };

    // Compare two date strings for sorting (e.g., "12 Sat 2023" vs. "9 Sat 2024")
    const compareDate = (dateA, dateB) => {
        const [dayA, monthA, yearA] = dateA.trim().split(' ');
        const [dayB, monthB, yearB] = dateB.trim().split(' ');

        if (yearA !== yearB) {
            return parseInt(yearB) - parseInt(yearA);  // First compare year
        } else if (monthA !== monthB) {
            return monthA.localeCompare(monthB);  // Then compare month if necessary
        } else {
            return parseInt(dayB) - parseInt(dayA);  // Finally compare day
        }
    };

    const handleEmailSubmission = async (report) => {
        const { value: email } = await MySwal.fire({
            text: 'Enter your email to subscribe and download the annual report',
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
                return email;
            },
            allowOutsideClick: () => !Swal.isLoading()
        });

        if (email) {
            const isRegistered = await checkEmailRegistered(email);
            if (isRegistered) {
                window.location.href = report.pdfUrl;
            } else {
                try {
                    await subscribeEmail(email);
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
            <p style={{ fontSize: '30px', padding: '30px', fontWeight: '600', color: '#004360' }}>Annual Reports</p>
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
