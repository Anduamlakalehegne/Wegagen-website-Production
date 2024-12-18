import React from "react";
import StikyNav from "../Common/StikyNav";
import Mega_Menu from "../Common/Mega_Menu";
import Footer from "../Common/Footer";
import {
  Container,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";

export default function CyberSecurtyPolicy() { 
  return (
    <>
      <StikyNav />
      <Mega_Menu />
      <Container style={{ marginTop: "3rem", marginBottom: "-5rem" }}>
        <Card
          variant="outlined"
          style={{ padding: "1rem" }}
          className="shadow-lg"
        >
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            color="#FF6B0B"
            fontSize={35}
            fontWeight={"bold"}
          >
            Cyber Security Awarness
          </Typography>
          <hr />
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-9 ">
            <div>
              <Typography
                variant="h4"
                gutterBottom
                color="#004360"
                fontSize={25}
                marginTop={5}
              >
                Knowledge is a Powerful Defence
              </Typography>
              <Typography variant="body1" paragraph marginTop={2}>
                Fraudulent practices have become increasingly sophisticated,
                involving emails, text messages, and phone calls that appear to
                be from trusted companies like banks, the Revenue Authority, and
                more. Scammers use these methods to deceive customers into
                giving money or sharing personal information, such as bank
                account numbers, passwords, mobile banking codes, and PINs.
              </Typography>
              <Typography variant="body1" paragraph marginBottom={5}>
                A quick way to remember what to do when you think you are being
                scammed is to follow the three S's:
                <b>
                  {" "}
                  "Stay Suspicious, stop for a Second (and think about it), and
                  Stay Protected."
                </b>
              </Typography>
            </div>

            <div>
              <Typography
                variant="h4"
                gutterBottom
                color="#004360"
                fontSize={25}
                marginTop={5}
              >
                Protect Yourself Against Common Threats
              </Typography>
              <List>
                <ListItem>
                  <ListItemText primary="Be cautious of unexpected phone calls, emails, or text messages." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Verify the caller’s identity by contacting the bank directly using official contact numbers." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Never share your passwords, PINs, or sensitive information with anyone." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Enable multi-factor authentication (MFA) for an extra layer of security." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Stay informed about common scams and report suspicious activity to the bank." />
                </ListItem>
              </List>
            </div>

            <div>
              <Typography
                variant="h4"
                gutterBottom
                color="#004360"
                fontSize={25}
                marginTop={5}
              >
                Trending Scams: What You Need to Know
              </Typography>
              <Card
                variant="outlined"
                style={{ marginBottom: "50px", marginTop: "20px" }}
              >
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Understand Scammers’ Tactics
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="Fear"
                        secondary="Scammers often use fear to manipulate victims. For example, they might claim there is an error with your account balance and that you will face trouble if you don’t fix it right away."
                      />
                    </ListItem>
                    <Divider />
                    <ListItem>
                      <ListItemText
                        primary="Urgency"
                        secondary="Scammers create a sense of urgency, pressuring people to act quickly without thinking."
                      />
                    </ListItem>
                    <Divider />
                    <ListItem>
                      <ListItemText
                        primary="Money"
                        secondary="Scammers impersonate bank officials or tax professionals, claiming you are eligible for a refund to trick you into sharing information."
                      />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </div>

            <div>
              <Typography
                variant="h4"
                gutterBottom
                color="#004360"
                fontSize={25}
                marginTop={5}
              >
                Additional Security Tips
              </Typography>
              <div className="flex flex-col md:flex-row md:gap-5">
                <Card variant="outlined" style={{ marginBottom: "20px" }}>
                  <CardContent>
                    <Typography variant="h6" fontSize={19} gutterBottom>
                      ATM Card Fraud Prevention
                    </Typography>
                    <List>
                      <ListItem>
                        <ListItemText primary="Beware of shoulder surfing and shield your keypad when entering PINs." />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Avoid sharing PINs and passwords with anyone." />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Stay alert for fake IT or bank support calls." />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Check ATMs for skimming devices before use." />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Monitor your account activity regularly." />
                      </ListItem>
                    </List>
                  </CardContent>
                </Card>

                <Card variant="outlined" style={{ marginBottom: "20px" }}>
                  <CardContent>
                    <Typography variant="h6">Password Security Tips</Typography>
                    <List>
                      <ListItem>
                        <ListItemText primary="Use strong, unique passwords for each account." />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Enable multi-factor authentication (MFA)." />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Change passwords regularly and avoid reusing old ones." />
                      </ListItem>
                    </List>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </Card>
      </Container>
      <Footer />
    </>
  );
}
