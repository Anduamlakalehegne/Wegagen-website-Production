// src/EfoytaPrivacyPolicy.jsx

import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';
import './EfoytaPrivacyPolicy.css';
import StikyNav from '../Common/StikyNav';
import Mega_Menu from '../Common/Mega_Menu';
import Footer from '../Common/Footer';

const efoytaPrivacyPolicyData = [
    {
        title: 'Efoyta Privacy Policy',
        content: (
            <>
                <p> This privacy policy describes our policies and procedures on the collection, use, and disclosure of your information when you use Efoyta digital lending services and tells you about your privacy rights and how the law protects you. </p>
                <p> We use your personal data to provide and improve the service. By using this service, you agree to the collection and use of information in accordance with this privacy policy.</p>
            </>
        ),
    },
    {
        title: 'Interpretation and Definitions',
        content: (
            <>
                <p><strong>Interpretation</strong></p>
                <p>
                    The words in bold have meanings defined under the following conditions. These definitions shall have the same meaning regardless of whether they appear in singular or plural.
                </p>
                <p><strong>Definitions</strong></p>
                For the purposes of this Privacy Policy:
                <ul className='list-disc list-inside' style={{ marginLeft: "20px" }}>
                    <li><strong>Account number:</strong> means an account opened in your name at any branch of the bank to access our services.</li>
                    <li><strong>Affiliate:</strong> means an entity that controls, is controlled by or is under common control with a party, where “control” means ownership of 50% or more of the shares, equity interest, or other securities entitled to vote for the election of directors or other managing authority.</li>
                    <li><strong>Application:</strong> refers to Efoyta Digital Lending app., which is a software program provided by the Bank.</li>
                    <li><strong>Bank:</strong> (referred to as either “the Bank”, “We”, “Us” or “Our” in this Agreement) refers to the Wegagen Bank S.C. Addis Ababa, Ethiopia.</li>
                    <li><strong>Country:</strong> Refers to Ethiopia.</li>
                    <li><strong>Device:</strong> means mobile device that can access the service using either mobile data or Wi-Fi, such as a smartphone, or digital tablet.</li>
                    <li><strong>Personal Data:</strong> is any information that relates to an identified or identifiable individual.</li>
                    <li><strong>Service:</strong> Refers to the Application.</li>
                    <li><strong>Service Provider:</strong> means any natural or legal person who processes the data on behalf of the Bank. It refers to third-party companies or individuals employed by the Bank to facilitate the service, to provide the service on behalf of the Bank, to perform services related to providing the Service, or to assist the Bank in analyzing how the service is used.</li>
                    <li><strong>Data Usage</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</li>
                    <li><strong>You:</strong> Means, the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
                </ul>
            </>
        ),
    },
    {
        title: 'Collecting and Using Your Personal Data',
        content: (
            <>
                <p><strong>Personal Data</strong></p>
                <p>
                    When you are using Our Service, We may ask you to provide us the following personal information that can be used to contact or identify you. These may include, but is not limited to:
                </p>
                <ul className='list-disc list-inside' style={{ marginLeft: "20px", display: 'grid', gridTemplateColumns: '40% 40%', justifyContent: 'center', marginTop: '20px' }}>
                    <div>
                        <li>First, Middle and Last Name</li>
                        <li>Sex</li>
                        <li>Birth of Date</li>
                        <li>Marital Status</li>
                        <li>Education Level</li>
                        <li>Spouse /Emergency Contact Name</li>
                        <li>Spouse /Emergency Contact Phone</li>
                        <li>Personal Address</li>
                        <li>Region, City, Zone/ Sub-City, Woreda</li>
                        <li>House Number</li>
                        <li>Type of ID and ID Number</li>
                        <li>Tax Identification Number (TIN)</li>
                        <li>Trade License</li>
                        <li>Account Number</li>
                    </div>
                    <div>
                        <li>Business Sector</li>
                        <li>Business Type</li>
                        <li>Year of Establishment</li>
                        <li>Starting No. of Employees</li>
                        <li>Current No. of Employees</li>
                        <li>Starting Capital</li>
                        <li>Current Capital</li>
                        <li>Source of Initial Capital</li>
                        <li>Annual Sales Current Capital</li>
                        <li>Annual Profit</li>
                        <li>Association type</li>
                        <li>Business Sector and Line of Business</li>
                        <li>Year of Establishment</li>
                    </div>
                </ul>
            </>
        ),
    },
    {
        title: 'Data Usage',
        content: (
            <>
                <strong>Data Usage</strong>  - is collected automatically when using the Service
                <p>
                    When you access our service by or through a mobile device, we may collect certain information automatically, including, but not limited to, the type of mobile device you use, your mobile device unique ID, the IP address of your mobile device, your mobile operating system, the type of mobile internet browser you use, unique device identifiers and other diagnostic data.
                </p>
                <p>
                    We may also collect information that your mobile device sends whenever you access our service through the application.
                </p>
            </>

        ),
    },
    {
        title: 'Information Collected while Using the Application',
        content: (
            <>
                <p>When you are using this application, in order to provide features of the application, we may collect the followings, with your prior permission:</p>
                <ul className='list-disc list-inside' style={{ marginLeft: "20px" }}>
                    <li>Information regarding your location</li>
                    <li>Information from your Device’s phone book (contacts list)</li>
                    <li>Pictures and other information from your Device’s camera and photo library</li>
                </ul>
                <p>We collect and store your information securely on our servers or the servers of our trusted service providers or on your own device, and use it to provide you with the full functionality of our service and continuously improve your experience, including personalizing features and content.</p>
                <p>You can enable or disable access to this information at any time, through your device settings.</p>
            </>
        ),
    },
    {
        title: 'Use of Your Personal Data',
        content: (
            <>
                <p>The Bank may use your personal data for the following purposes:</p>
                <ul className='list-disc list-inside' style={{ marginLeft: "20px" }}>
                    <p><strong>To provide and maintain our service,</strong> including monitoring the usage of our Service.</p>
                    <p><strong>To manage your account:</strong>  to manage your registration as a user of the service. The personal data you provide can give you access to different functionalities of the service that are available to you as a registered user.</p>
                    <p><strong>For the performance of a contract:</strong>  the development, compliance and undertaking of the purchase contract for the products, items or services you have purchased or of any other contract with us through the service.</p>
                    <p><strong>To contact you: </strong>  to contact you by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application’s push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.</p>
                    <p><strong>To provide you:</strong>  with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless you have opted not to receive such information.</p>
                    <p><strong>For business transfers:</strong> we may use your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which personal data held by us about our service users is among the assets transferred.</p>
                    <p><strong>For other purposes: </strong>we may use your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our services, products and customer experience.</p>
                </ul>
                We may share your personal information in the following situations:

                <ul className='list-disc list-inside' style={{ marginLeft: "20px" }}>
                    <li><strong>With service providers: </strong> we may share your personal information with service providers to monitor and analyze the use of our service and to contact you.</li>
                    <li><strong>For business transfers:</strong> we may share or transfer your personal information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
                    <li><strong>With affiliates:</strong> we may share your information with our affiliates, in which case we will require those affiliates to honor this privacy policy. Affiliates include any other subsidiaries, joint venture partners or other companies that we control</li>
                    <li><strong>With business partners:</strong> we may share your information with our business partners to offer you certain products, services or promotions.</li>
                    <li><strong>Information sharing with other users:</strong> When you share personal information or interact with others in public areas of the application, that information can be seen by all users and may be shared publicly outside the application.</li>
                    <li><strong>With your consent: </strong> we may disclose your personal information for any other purpose with your consent.</li>
                </ul>
            </>
        ),
    },
    {
        title: 'Retention of Your Personal Data',
        content: (
            <>
                <p>The bank will retain your personal data only for as long as is necessary for the purposes set out in this privacy policy. We will retain and use your personal data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.</p>
                <p>The company will also retain usage data for internal analysis purposes. Usage data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of our service, or we are legally obligated to retain this data for longer time periods.</p>
            </>
        ),
    },
    {
        title: 'Transfer of Your Personal Data',
        content: (
            <>
                <p>Your information, including personal data, is processed at the company’s operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to and maintained on computers located outside of your province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.</p>
                <p>Your consent to this privacy policy followed by your submission of such information represents your agreement to that transfer.</p>
                <p>The bank will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this privacy policy and no transfer of your personal data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.</p>
            </>
        ),
    },
    {
        title: 'Disclosure of Your Personal Data',
        content: (
            <>
            <strong>Business Transactions</strong>
            <p>If the company is involved in a merger, acquisition or asset sale, your personal data may be transferred. We will provide notice before your personal data is transferred and becomes subject to a different privacy policy.</p>
            <strong>Law enforcement</strong>
            <p>Under certain circumstances, the company may be required to disclose your personal data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).</p>
            <strong>Other legal requirements</strong>
            <p>The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:</p>
            <li>Service providers who process data on behalf of the Bank.</li>
                    <li>Affiliates, under the condition they honor this policy.</li>
                    <li>Business partners offering products, services, or promotions.</li>
                    <li>In case of business transfers or legal requirements.</li>
            </>
        ),
    },
    {
        title: 'Sharing Your Personal Data',
        content: (
            <>
                <p>Your data may be shared with:</p>
                <ul className='list-disc list-inside' style={{ marginLeft: "20px" }}>
                    <li>Comply with a legal obligation</li>
                    <li>Protect and defend the rights or property of the Company</li>
                    <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
                    <li>Protect the personal safety of Users of the Service or the public</li>
                    <li>Protect against legal liability</li>
                </ul>
            </>
        ),
    },
    {
        title: 'Security of Your Personal Data',
        content: (
            <p>
                The security of your personal data is important to us, but remember that no method of transmission over the internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.
            </p>
        ),
    },
    {
        title: 'Children’s Privacy',
        content: (
            <p>
                Our service does not address anyone under the age of 18. We do not knowingly collect personally identifiable information from anyone under the age of 18. If we become aware that we have collected personal data from anyone under the age of 18 we take steps to remove that information from our servers.
            </p>
        ),
    },
    {
        title: 'Links to Other Websites',
        content: (
            <p>
               Our service may contain links to other websites that are not operated by us. If you click on a third party link, you will be directed to that third party’s site. We strongly advise you to review the privacy policy of every site you visit.
            <br />We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
            </p>
        ),
    },
    {
        title: 'Account Deletion',
        content: (
            <p>
               Please use the following email addresses to send your request to have your Efoyta user account deleted,  <a href="mailto:wegagenonline@wegaenbanksc.com.et">wegagenonline@wegaenbanksc.com.et</a>.
            </p>
        ),
    },
    {
        title: 'Changes to This Privacy Policy',
        content: (
           <>
           <p>We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page.</p>
           <p>We will let you know via email and/or a prominent notice on our service, prior to the change becoming effective and update the “last updated” date at the top of this privacy policy.</p>
           <p>You are advised to review this privacy policy periodically for any changes. Changes to this privacy policy are effective when they are posted on this page.</p>
           </>
        ),
    },
    {
        title: 'Contact Us',
        content: (
            <p>
                If you have any questions, you can contact us through phone at +251115523800 or email at <a href="mailto:info@wegagen.com">info@wegagen.com</a>.
            </p>
        ),
    },
];

const EfoytaPrivacyPolicy = () => {
    return (
        <>
            <StikyNav />
            <Mega_Menu />
            <div className="terms-container">
                <Typography variant="h4" className="privacy-title" gutterBottom>
                    Efoyta Privacy Policy
                </Typography>
                <Paper elevation={3} className="privacy-paper">
                    {efoytaPrivacyPolicyData.map((section, index) => (
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

export default EfoytaPrivacyPolicy;
