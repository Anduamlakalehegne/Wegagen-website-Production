import React, { useState } from "react";
import {
  Container,
  Typography,
  Tabs,
  Tab,
  Divider,
  Grid,
  Box,
} from "@mui/material";
import StikyNav from "../Common/StikyNav";
import Mega_Menu from "../Common/Mega_Menu";
import Footer from "../Common/Footer";

// Helper for Tab Panels
function TabPanel({ children, value, index }) {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && (
        <Box p={3} style={{ backgroundColor: "#f5f5f5", borderRadius: "8px" }}>
          <Typography
            variant="body1"
            paragraph
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            {children}
          </Typography>
        </Box>
      )}
    </div>
  );
}

function WegagenPrivacyPolicy() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <>
      {/* Sticky Navigation and Mega Menu */}
      <StikyNav />
      <Mega_Menu />

      {/* Main Content Section */}
      <div className="flex justify-center">
        <Container
          maxWidth="lg"
          style={{ marginTop: "3rem", marginBottom: "-3rem" }}
        >
          {/* Title */}
          <Grid
            container
            justifyContent="center"
            style={{ marginBottom: "20px" }}
          >
            <Grid item>
              <Typography
                variant="h3"
                align="center"
                style={{
                  color: "#FF6B0B",
                  fontWeight: "bold",
                  fontSize: "27px",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Wegagen Bank Privacy Policy
              </Typography>
            </Grid>
          </Grid>

          {/* Divider */}
          <Divider style={{ margin: "20px 0" }} />

          {/* Tabs for Navigation */}
          <Tabs
            value={tabIndex}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="Privacy Policy Sections"
            sx={{
              "& .MuiTab-root": {
                fontFamily: "Poppins, sans-serif",
                fontSize: "17px",
              },
            }}
          >
            <Tab label="Introduction" />
            <Tab label="Data Collection" />
            <Tab label="How We Use Data" />
            <Tab label="Data Protection" />
            <Tab label="Your Rights" />
            <Tab label="Data Sharing" />
            <Tab label="Data Retention" />
            <Tab label="Policy Updates" />
            <Tab label="Customer Responsibility" />
          </Tabs>

          {/* Tab Content */}
          <TabPanel value={tabIndex} index={0}>
            <Typography
              variant="body1"
              paragraph
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "17px",
                textAlign: "justify",
              }}
            >
              At Wegagen Bank, we value your privacy and are committed to
              protecting your personal data. In accordance with Ethiopia’s
              Personal Data Protection Proclamation No. 1321/2024, we ensure
              that your information is handled with the highest standards of
              security and transparency. This policy awareness message provides
              an overview of how we collect, use, share, and protect your
              personal data.
            </Typography>
          </TabPanel>

          <TabPanel value={tabIndex} index={1}>
            <Typography
              variant="body1"
              paragraph
              color="#004360"
              fontWeight={500}
              style={{ fontFamily: "Poppins, sans-serif", fontSize: "17px" }}
            >
              Wegagen Bank may collect personal information from individuals
              when you:
            </Typography>
            <ul
              style={{
                paddingLeft: "20px",
                fontFamily: "Poppins, sans-serif",
                fontSize: "16px",
                textAlign: "left",
                listStyleType: "disc",
                margin: "0 auto",
                maxWidth: "600px",
              }}
            >
              <li style={{ marginBottom: "10px" }}>
                Apply for, avail, or use the Bank's products or services.
              </li>
              <li style={{ marginBottom: "10px" }}>
                Interact with our employees and/or authorized representatives.
              </li>
              <li style={{ marginBottom: "10px" }}>Visit our premises.</li>
              <li style={{ marginBottom: "30px" }}>
                Access our Mobile banking, online systems, and mobile
                applications.
              </li>
            </ul>
            <Typography
              variant="body1"
              paragraph
              style={{ fontFamily: "Poppins, sans-serif", fontSize: "17px" }}
            >
              This information is collected to provide services, make decisions,
              and support the Bank’s business operations, programs, and
              activities.
            </Typography>
          </TabPanel>

          <TabPanel value={tabIndex} index={2}>
            <Typography
              variant="body1"
              paragraph
              color="#004360"
              fontWeight={500}
              style={{ fontFamily: "Poppins, sans-serif", fontSize: "17px" }}
            >
              Your personal data is collected and used for specific purposes,
              including:
            </Typography>
            <ul
              style={{
                paddingLeft: "20px",
                fontFamily: "Poppins, sans-serif",
                fontSize: "16px",
                textAlign: "left",
                margin: "0 auto",
                maxWidth: "700px",
                listStyleType: "disc",
              }}
            >
              <li style={{ marginBottom: "10px" }}>
                <span style={{ fontWeight: "bold" }}>Account Management:</span>{" "}
                To open and manage your bank accounts and services.
              </li>
              <li style={{ marginBottom: "10px" }}>
                <span style={{ fontWeight: "bold" }}>
                  Transaction Processing:
                </span>{" "}
                To facilitate transactions, payments, and transfers.
              </li>
              <li style={{ marginBottom: "10px" }}>
                <span style={{ fontWeight: "bold" }}>Customer Service:</span> To
                respond to inquiries, provide assistance, and enhance your
                customer experience.
              </li>
              <li style={{ marginBottom: "10px" }}>
                <span style={{ fontWeight: "bold" }}>
                  Regulatory Compliance:
                </span>
                To comply with legal obligations, such as anti-money laundering
                (AML).
              </li>
              <li style={{ marginBottom: "10px" }}>
                <span style={{ fontWeight: "bold" }}>
                  Marketing and Communication:
                </span>
                To send you updates, promotions, and service-related
                information.
              </li>
            </ul>
          </TabPanel>

          <TabPanel value={tabIndex} index={3}>
            <Typography
              variant="body1"
              paragraph
              color="#004360"
              fontWeight={500}
              style={{ fontFamily: "Poppins, sans-serif", fontSize: "17px" }}
            >
              Wegagen Bank takes data protection seriously. We implement robust
              security measures to safeguard your information, including:
            </Typography>
            <ul
              style={{
                paddingLeft: "20px",
                fontFamily: "Poppins, sans-serif",
                fontSize: "16px",
                textAlign: "left",
                margin: "0 auto",
                maxWidth: "700px",
                listStyleType: "disc",
              }}
            >
              <li style={{ marginBottom: "10px" }}>
                <span style={{ fontWeight: "bold" }}>Data Encryption: </span>{" "}
                Your personal data is encrypted during transmission to prevent
                unauthorized access.
              </li>
              <li style={{ marginBottom: "10px" }}>
                <span style={{ fontWeight: "bold" }}>Access Control:</span> Only
                authorized employees and service providers have access to your
                data, and they are bound by confidentiality agreements.
              </li>
              <li style={{ marginBottom: "10px" }}>
                <span style={{ fontWeight: "bold" }}>
                  Regular Security Audits:
                </span>{" "}
                We conduct regular security assessments and audits to ensure
                compliance with data protection laws and our internal policies.
              </li>
            </ul>
          </TabPanel>

          <TabPanel value={tabIndex} index={4}>
            <Typography
              variant="body1"
              paragraph
              color="#004360"
              fontWeight={500}
              style={{ fontFamily: "Poppins, sans-serif", fontSize: "17px" }}
            >
              Under Proclamation No. 1321/2024, you have several rights
              regarding your personal data:
            </Typography>
            <ul
              style={{
                paddingLeft: "20px",
                fontFamily: "Poppins, sans-serif",
                fontSize: "16px",
                textAlign: "left",
                margin: "0 auto",
                maxWidth: "700px",
                listStyleType: "disc",
              }}
            >
              <li style={{ marginBottom: "10px" }}>
                <strong>Right to Access</strong>: You have the right to request
                a copy of your personal data held by Wegagen Bank.
              </li>
              <li style={{ marginBottom: "10px" }}>
                <strong>Right to Rectification</strong>: You can request
                corrections to any inaccurate or incomplete personal data.
              </li>
              <li style={{ marginBottom: "10px" }}>
                <strong>Right to Erasure</strong>: You have the right to request
                the deletion of your personal data under certain conditions.
              </li>
              <li style={{ marginBottom: "10px" }}>
                <strong>Right to Data Portability</strong>: You can request a
                transfer of your personal data to another financial service
                provider.
              </li>
              <li style={{ marginBottom: "10px" }}>
                <strong>Right to Object</strong>: You can object to the
                processing of your personal data for direct marketing purposes.
              </li>
              <li style={{ marginBottom: "10px" }}>
                <strong>Right to Withdraw Consent</strong>: If you have provided
                consent for data processing, you have the right to withdraw it
                at any time.
              </li>
            </ul>
          </TabPanel>

          <TabPanel value={tabIndex} index={5}>
            <Typography
              variant="body1"
              paragraph
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "17px",
                maxWidth: "700px",
                margin: "0 auto",
                textAlign: "center",
                display: "block",
              }}
            >
              We share your personal data only with trusted third-party vendors,
              regulatory authorities, and affiliates when necessary under strict
              data protection agreements. We do NOT sell or rent your personal
              data.
            </Typography>
          </TabPanel>

          <TabPanel value={tabIndex} index={6}>
            <Typography
              variant="body1"
              paragraph
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "17px",
                maxWidth: "700px",
                margin: "0 auto",
                textAlign: "center",
                display: "block",
              }}
            >
              Your personal data is retained only as long as necessary to
              fulfill purposes outlined in this policy or as required by law.
            </Typography>
          </TabPanel>

          <TabPanel value={tabIndex} index={7}>
            <Typography
              variant="body1"
              paragraph
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "17px",
                maxWidth: "700px",
                margin: "0 auto",
                textAlign: "center",
                display: "block",
              }}
            >
              This privacy policy may be updated from time to time. We encourage
              you to review the latest version of the privacy policy regularly
              on our website or mobile app.
            </Typography>
          </TabPanel>

          <TabPanel value={tabIndex} index={8}>
            <Typography
              variant="body1"
              paragraph
              color="#004360"
              fontWeight={500}
              style={{ fontFamily: "Poppins, sans-serif", fontSize: "17px" }}
            >
              Customers should play an active role in protecting their personal
              information by:
            </Typography>
            <ul
              style={{
                paddingLeft: "20px",
                fontFamily: "Poppins, sans-serif",
                fontSize: "16px",
                textAlign: "left",
                margin: "0 auto",
                maxWidth: "700px",
                listStyleType: "disc",
              }}
            >
              <li style={{ marginBottom: "10px" }}>
                Keeping account details and passwords confidential.
              </li>
              <li style={{ marginBottom: "10px" }}>
                Reporting any changes in contact details.
              </li>
              <li style={{ marginBottom: "10px" }}>
                Being cautious of phishing scams.
              </li>
              <li style={{ marginBottom: "10px" }}>
                Regularly monitoring account activity.
              </li>
            </ul>
          </TabPanel>

          <Typography
            variant="body1"
            paragraph
            marginTop={10}
            style={{ fontFamily: "Poppins, sans-serif", fontSize: "17px" }}
          >
            Your privacy is important to us. Wegagen Bank is committed to
            protecting your personal data and ensuring that it is handled with
            the utmost care and transparency. By understanding your rights and
            our data protection practices, you can enjoy a safer and more secure
            banking experience.
          </Typography>
        </Container>
      </div>

      {/* Footer Section */}
      <Footer />
    </>
  );
}

export default WegagenPrivacyPolicy;
