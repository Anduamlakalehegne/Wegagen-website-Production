// src/PrivacyPolicy.jsx

import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';
import './PrivacyPolicy.css';
import StikyNav from '../Common/StikyNav';
import Mega_Menu from '../Common/Mega_Menu';
import Footer from '../Common/Footer';

const privacyPolicyData = [
    {
        // title: 'Changes to This Policy',
        content: (
            <p>
                This privacy policy (the "Policy") outlines the ways in which Wegagen Bank may gather, utilize, and reveal personal data about you when you use our mobile banking app.
            </p>
        ),
    },
    {
        title: 'Personal Information We Collect',
        content: (
            <ul className='unorder-list' class="list-disc list-inside" style={{ marginLeft: "20px" }}>
                <li>
                    When you use the App, we gather the following personal information about you: Account specifics: Your account number, transaction number, and other details regarding your accounts with us are collected by us.
                </li>
                <li>
                    Information about your transactions: We keep track of details about each transaction you make, including the total amount, the date and time it occurred, and the merchant you used.
                </li>
                <li>
                    Device details: We gather specifics about your device, including its operating system, IP address, and unique identifier.
                </li>
                <li>
                    Usage information: We gather data on your usage of the App, including the page you browse, the features you utilize, and the time spent using the App.
                </li>
            </ul>
        ),
    },
    {
        title: 'How We Use Your Personal Information',
        content: (
            <>
                <p>
                    We utilize your personal information for the following reasons:
                </p>
                <ul className='unorder-list' class="list-disc list-inside" style={{ marginLeft: "20px" }}>
                    <li>In order to offer you the App and its features.</li>
                    <li>To verify your identity and stop fraud.</li>
                    <li>To notify you about your accounts and transactions.</li>
                    <li>To enhance our services and the App.</li>
                    <li>To comply with legal obligations.</li>
                    <li>To safeguard our interests and our rights.</li>
                </ul>
            </>

        ),
    },
    {
        title: 'Sharing Your Personal Information',
        content: (
            <>
                <p>
                    The following third parties may get your personal information from us:
                </p>

                <ul className='unorder-list' class="list-disc list-inside" style={{ marginLeft: "20px" }}>
                    <li>
                        <strong>Our service providers:</strong> Who assist us in running the App and offering our services.
                    </li>
                    <li>
                        <strong>Financial institutions:</strong> Such as credit bureaus to confirm your identification and prevent fraud.
                    </li>
                    <li>
                        <strong>Law enforcement agencies:</strong> If required by law.
                    </li>
                </ul>
            </>

        ),
    },
    {
        title: 'Your Rights',
        content: (
            <>
                <p>
                    You are entitled to the following protections with regard to your personal data:
                </p>

                <ul className='unorder-list' class="list-disc list-inside" style={{ marginLeft: "20px" }}>
                    <li>
                        The right to view your personal information and the right to have any incorrect or incomplete information about you corrected.
                    </li>
                    <li>
                        The ability to remove your personal data.
                    </li>
                    <li>
                        The ability to object to how your personal information is processed.
                    </li>
                    <li>
                        The right to data portability and the right to revoke permission to the processing of your personal information.
                    </li>
                    <li>
                        By emailing us at <a href="mailto:wegagenonline@wegaenbanksc.com.et">wegagenonline@wegaenbanksc.com.et</a> you can make use of your rights.
                    </li>
                </ul>
            </>

        ),
    },
    {
        title: 'Security',
        content: (

            <p>We guard your personal data against misuse, illegal access, and disclosure. Utilizing security precautions like firewalls and encryption is one of these approaches.
                requiring our staff to maintain the privacy of your personal information.
                training our staff about our privacy rules and practices.
            </p>

        ),
    },
    {
        title: 'Changes to This Policy',
        content: (
            <p>
                We may update this Policy from time to time. If we make any material changes to this Policy, we will notify you by email or by posting a notice on our website.
            </p>
        ),
    },
    {
        title: 'Contact Us',
        content: (
            <p>
                If you have any questions about this Policy, please contact us at <a href="mailto:wegagenonline@wegaenbanksc.com.et">wegagenonline@wegaenbanksc.com.et</a>.
            </p>
        ),
    },
];

const PrivacyPolicy = () => {
    return (
        <>
            <StikyNav />
            <Mega_Menu />
            <div className="terms-container">
                <Typography variant="h4" className="privacy-title" gutterBottom>
                    Privacy Policy
                </Typography>
                <Paper elevation={3} className="privacy-paper">
                    {privacyPolicyData.map((section, index) => (
                        <Box key={index} className="privacy-section">
                            <Typography variant="h5" className="privacy-subtitle">
                                {section.title}
                            </Typography>
                            <Typography variant="h6" className="privacy-content">
                                {section.content}
                            </Typography>
                        </Box>
                    ))}
                </Paper>
            </div>
            <Footer />
        </>
    );
};


export default PrivacyPolicy;
