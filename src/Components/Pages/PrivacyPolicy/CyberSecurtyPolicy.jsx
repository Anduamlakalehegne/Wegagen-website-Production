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
      <Container
        style={{
          marginTop: "3rem",
          marginBottom: "-5rem",
          fontFamily: "Poppins, sans-serif",
        }}
      >
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
            style={{
              fontSize: "27px",
              fontWeight: "bold",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Cyber Security Awarness Tips
          </Typography>
          <hr />
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-9 ">
            <div>
              <Typography
                variant="h4"
                gutterBottom
                color="#004360"
                marginTop={5}
                style={{
                  fontSize: "21px",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Knowledge is a Powerful Defence
              </Typography>
              <Typography
                variant="body1"
                paragraph
                marginTop={2}
                style={{
                  fontSize: "17px",
                  fontFamily: "Poppins, sans-serif",
                  color: "#575757",
                }}
              >
                Fraudulent practices have become increasingly sophisticated,
                involving emails, text messages, and phone calls that appear to
                be from trusted companies like banks, the Revenue Authority, and
                more. Scammers use these methods to deceive customers into
                giving money or sharing personal information, such as bank
                account numbers, passwords, mobile banking codes, and PINs.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                marginBottom={5}
                style={{
                  fontSize: "17px",
                  fontFamily: "Poppins, sans-serif",
                  color: "#575757",
                }}
              >
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
                style={{
                  fontSize: "21px",
                  fontFamily: "Poppins, sans-serif",
                }}
                marginTop={5}
              >
                Protect Yourself Against Common Threats
              </Typography>
              <List
                sx={{
                  listStyleType: "disc",
                  pl: 4,
                  "& .MuiListItem-root": {
                    display: "list-item",
                  },
                }}
              >
                <ListItem
                  sx={{
                    display: "list-item",
                  }}
                >
                  <ListItemText
                    primary="Be cautious of unexpected phone calls, emails, or text messages."
                    primaryTypographyProps={{
                      style: {
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "17px",
                        color: "#575757",
                      },
                    }}
                  />
                </ListItem>
                <ListItem
                  sx={{
                    display: "list-item",
                  }}
                >
                  <ListItemText
                    primary="Verify the caller's identity by contacting the bank directly using official contact numbers."
                    primaryTypographyProps={{
                      style: {
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "17px",
                        color: "#575757",
                      },
                    }}
                  />
                </ListItem>
                <ListItem
                  sx={{
                    display: "list-item",
                  }}
                >
                  <ListItemText
                    primary="Never share your passwords, PINs, or sensitive information with anyone."
                    primaryTypographyProps={{
                      style: {
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "17px",
                        color: "#575757",
                      },
                    }}
                  />
                </ListItem>
                <ListItem
                  sx={{
                    display: "list-item",
                  }}
                >
                  <ListItemText
                    primary="Enable multi-factor authentication (MFA) for an extra layer of security."
                    primaryTypographyProps={{
                      style: {
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "17px",
                        color: "#575757",
                      },
                    }}
                  />
                </ListItem>
                <ListItem
                  sx={{
                    display: "list-item",
                  }}
                >
                  <ListItemText
                    primary="Stay informed about common scams and report suspicious activity to the bank."
                    primaryTypographyProps={{
                      style: {
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "17px",
                        color: "#575757",
                      },
                    }}
                  />
                </ListItem>
              </List>
            </div>

            <div className="md:col-span-2">
              <Typography
                variant="h4"
                gutterBottom
                color="#004360"
                style={{
                  fontSize: "21px",
                  fontFamily: "Poppins, sans-serif",
                }}
                marginTop={5}
              >
                Trending Scams: What You Need to Know
              </Typography>
              <Card
                variant="outlined"
                style={{ marginBottom: "50px", marginTop: "20px" }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    gutterBottom
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontSize: "18px",
                    }}
                  >
                    Understand Scammers’ Tactics
                  </Typography>
                  <List
                    sx={{
                      listStyleType: "disc",
                      pl: 4,
                      "& .MuiListItem-root": {
                        display: "list-item",
                      },
                    }}
                  >
                    <ListItem
                      sx={{
                        display: "list-item",
                      }}
                    >
                      <ListItemText
                        primary="Fear"
                        secondary="Scammers often use fear to manipulate victims. For example, they might claim there is an error with your account balance and that you will face trouble if you don’t fix it right away."
                        primaryTypographyProps={{
                          style: {
                            fontFamily: "Poppins, sans-serif",
                            fontSize: "18px",
                          },
                        }}
                        secondaryTypographyProps={{
                          style: {
                            fontFamily: "Poppins, sans-serif",
                            fontSize: "16px",
                            color: "#575757",
                          },
                        }}
                      />
                    </ListItem>
                    <Divider />
                    <ListItem
                      sx={{
                        display: "list-item",
                      }}
                    >
                      <ListItemText
                        primary="Urgency"
                        secondary="Scammers create a sense of urgency, pressuring people to act quickly without thinking."
                        primaryTypographyProps={{
                          style: {
                            fontFamily: "Poppins, sans-serif",
                            fontSize: "18px",
                          },
                        }}
                        secondaryTypographyProps={{
                          style: {
                            fontFamily: "Poppins, sans-serif",
                            fontSize: "16px",
                            color: "#575757",
                          },
                        }}
                      />
                    </ListItem>
                    <Divider />
                    <ListItem
                      sx={{
                        display: "list-item",
                      }}
                    >
                      <ListItemText
                        primary="Money"
                        secondary="Scammers impersonate bank officials or tax professionals, claiming you are eligible for a refund to trick you into sharing information."
                        primaryTypographyProps={{
                          style: {
                            fontFamily: "Poppins, sans-serif",
                            fontSize: "18px",
                          },
                        }}
                        secondaryTypographyProps={{
                          style: {
                            fontFamily: "Poppins, sans-serif",
                            fontSize: "16px",
                            color: "#575757",
                          },
                        }}
                      />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </div>

            <div className="md:col-span-2">
              <Typography
                variant="h4"
                gutterBottom
                color="#004360"
                style={{
                  fontSize: "21px",
                  fontFamily: "Poppins, sans-serif",
                }}
                marginBottom={3}
              >
                Additional Security Tips
              </Typography>
              <div className="grid grid-cols-1 md:grid-cols-2 md:flex-row md:gap-5">
                <Card variant="outlined" style={{ marginBottom: "20px" }}>
                  <CardContent>
                    <Typography
                      variant="h6"
                      fontSize={19}
                      gutterBottom
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "18px",
                      }}
                    >
                      ATM Card Fraud Prevention
                    </Typography>
                    <List
                      sx={{
                        listStyleType: "disc",
                        pl: 4,
                        "& .MuiListItem-root": {
                          display: "list-item",
                        },
                      }}
                    >
                      <ListItem
                        sx={{
                          display: "list-item",
                        }}
                      >
                        <ListItemText
                          primary="Beware of shoulder surfing and shield your keypad when entering PINs."
                          primaryTypographyProps={{
                            style: {
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "17px",
                              color: "#575757",
                            },
                          }}
                        />
                      </ListItem>
                      <ListItem
                        sx={{
                          display: "list-item",
                        }}
                      >
                        <ListItemText
                          primary="Avoid sharing PINs and passwords with anyone."
                          primaryTypographyProps={{
                            style: {
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "17px",
                              color: "#575757",
                            },
                          }}
                        />
                      </ListItem>
                      <ListItem
                        sx={{
                          display: "list-item",
                        }}
                      >
                        <ListItemText
                          primary="Stay alert for fake IT or bank support calls."
                          primaryTypographyProps={{
                            style: {
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "17px",
                              color: "#575757",
                            },
                          }}
                        />
                      </ListItem>
                      <ListItem
                        sx={{
                          display: "list-item",
                        }}
                      >
                        <ListItemText
                          primary="Check ATMs for skimming devices before use."
                          primaryTypographyProps={{
                            style: {
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "17px",
                              color: "#575757",
                            },
                          }}
                        />
                      </ListItem>
                      <ListItem
                        sx={{
                          display: "list-item",
                        }}
                      >
                        <ListItemText
                          primary="Monitor your account activity regularly."
                          primaryTypographyProps={{
                            style: {
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "17px",
                              color: "#575757",
                            },
                          }}
                        />
                      </ListItem>
                    </List>
                  </CardContent>
                </Card>

                <Card variant="outlined" style={{ marginBottom: "20px" }}>
                  <CardContent>
                    <Typography
                      variant="h6"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "18px",
                      }}
                    >
                      Password Security Tips
                    </Typography>
                    <List
                      sx={{
                        listStyleType: "disc",
                        pl: 4,
                        "& .MuiListItem-root": {
                          display: "list-item",
                        },
                      }}
                    >
                      <ListItem
                        sx={{
                          display: "list-item",
                        }}
                      >
                        <ListItemText
                          primary="Use strong, unique passwords for each account."
                          primaryTypographyProps={{
                            style: {
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "17px",
                              color: "#575757",
                            },
                          }}
                        />
                      </ListItem>
                      <ListItem
                        sx={{
                          display: "list-item",
                        }}
                      >
                        <ListItemText
                          primary="Enable multi-factor authentication (MFA)."
                          primaryTypographyProps={{
                            style: {
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "17px",
                              color: "#575757",
                            },
                          }}
                        />
                      </ListItem>
                      <ListItem
                        sx={{
                          display: "list-item",
                        }}
                      >
                        <ListItemText
                          primary="Change passwords regularly and avoid reusing old ones."
                          primaryTypographyProps={{
                            style: {
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "17px",
                              color: "#575757",
                            },
                          }}
                        />
                      </ListItem>
                    </List>
                  </CardContent>
                </Card>

                <Card variant="outlined" style={{ marginBottom: "20px" }}>
                  <CardContent>
                    <Typography
                      variant="h6"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "18px",
                      }}
                    >
                      Social Engineering Threats and How to Avoid Them
                    </Typography>
                    <List
                      sx={{
                        listStyleType: "disc",
                        pl: 4,
                        "& .MuiListItem-root": {
                          display: "list-item",
                        },
                      }}
                    >
                      <ListItem
                        sx={{
                          display: "list-item",
                        }}
                      >
                        <ListItemText
                          primary={
                            <>
                              <strong>Phishing Awareness</strong> :- Be cautious
                              of emails or messages that ask you to click on
                              links or provide personal information. Verify the
                              sender's email address and look for signs of
                              phishing, such as misspellings and urgent
                              language.
                            </>
                          }
                          primaryTypographyProps={{
                            style: {
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "17px",
                              color: "#575757",
                            },
                          }}
                        />
                      </ListItem>
                      <ListItem
                        sx={{
                          display: "list-item",
                        }}
                      >
                        <ListItemText
                          primary={
                            <>
                              <strong>
                                Vishing (Voice Phishing) Protection
                              </strong>
                              :- If you receive a call from someone claiming to
                              be from the bank, do not share your PIN or account
                              details. Call back using the official bank contact
                              number to verify.
                              <strong className="text-orange-600 text-md">
                                Wegagen Bank Official Contact Number is 866.
                              </strong>
                            </>
                          }
                          primaryTypographyProps={{
                            style: {
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "17px",
                              color: "#575757",
                            },
                          }}
                        />
                      </ListItem>
                      <ListItem
                        sx={{
                          display: "list-item",
                        }}
                      >
                        <ListItemText
                          primary={
                            <>
                              <strong>Smishing (SMS Phishing) Caution</strong>{" "}
                              :- Do not click on links sent via SMS from unknown
                              or suspicious numbers. Fraudsters may use text
                              messages to steal your information.
                            </>
                          }
                          primaryTypographyProps={{
                            style: {
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "17px",
                              color: "#575757",
                            },
                          }}
                        />
                      </ListItem>
                      <ListItem
                        sx={{
                          display: "list-item",
                        }}
                      >
                        <ListItemText
                          primary={
                            <>
                              <strong>Call Center Fraud Defense</strong> :- When
                              receiving calls from the bank, never provide
                              personal information unless you initiated the
                              call. Banks will not ask for sensitive information
                              over the phone.
                            </>
                          }
                          primaryTypographyProps={{
                            style: {
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "17px",
                              color: "#575757",
                            },
                          }}
                        />
                      </ListItem>
                      <ListItem
                        sx={{
                          display: "list-item",
                        }}
                      >
                        <ListItemText
                          primary={
                            <>
                              <strong>Avoid Email Spoofing</strong> :- Be
                              skeptical of emails that seem to come from bank
                              but contain links or attachments. Always type the
                              bank’s URL directly into your browser instead of
                              clicking links in emails.
                            </>
                          }
                          primaryTypographyProps={{
                            style: {
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "17px",
                              color: "#575757",
                            },
                          }}
                        />
                      </ListItem>
                    </List>
                  </CardContent>
                </Card>

                <Card variant="outlined" style={{ marginBottom: "20px" }}>
                  <CardContent>
                    <Typography
                      variant="h6"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "18px",
                      }}
                    >
                      Mobile and Internet Banking Security Tips
                    </Typography>
                    <List
                      sx={{
                        listStyleType: "disc",
                        pl: 4,
                        "& .MuiListItem-root": {
                          display: "list-item",
                        },
                      }}
                    >
                      <ListItem
                        sx={{
                          display: "list-item",
                        }}
                      >
                        <ListItemText
                          primary={
                            <>
                              <strong>Use the Official Bank App</strong> :- Only
                              download mobile banking apps from official app
                              stores (Google Play Store, Apple App Store) or
                              directly from the bank’s website. Links{" "}
                              <a
                                href="https://play.google.com/store/apps/details?id=com.act.wegagen&hl"
                                className="no-underline text-orange-400 font-semibold hover:no-underline hover:text-orange-600"
                                target="_blank"
                              >
                                google playstore
                              </a>{" "}
                              and{" "}
                              <a
                                href="https://apps.apple.com/in/app/wegagen-mobile/id6472656143"
                                className="no-underline text-orange-400 font-semibold hover:no-underline hover:text-orange-600"
                                target="_blank"
                              >
                                app store
                              </a>
                            </>
                          }
                          primaryTypographyProps={{
                            style: {
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "17px",
                              color: "#575757",
                            },
                          }}
                        />
                      </ListItem>
                      <ListItem
                        sx={{
                          display: "list-item",
                        }}
                      >
                        <ListItemText
                          primary={
                            <>
                              <strong>Secure Your Device</strong> :- Keep your
                              mobile and computer updated with the latest
                              software and antivirus protection. Use strong
                              passwords and biometric security (fingerprint/face
                              recognition).
                            </>
                          }
                          primaryTypographyProps={{
                            style: {
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "17px",
                              color: "#575757",
                            },
                          }}
                        />
                      </ListItem>
                      <ListItem
                        sx={{
                          display: "list-item",
                        }}
                      >
                        <ListItemText
                          primary={
                            <>
                              <strong>Enable Alerts</strong> :- Set up and
                              always check SMS or email alerts for any
                              transactions made with your account to detect
                              unauthorized activity quickly.
                            </>
                          }
                          primaryTypographyProps={{
                            style: {
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "17px",
                              color: "#575757",
                            },
                          }}
                        />
                      </ListItem>
                      <ListItem
                        sx={{
                          display: "list-item",
                        }}
                      >
                        <ListItemText
                          primary={
                            <>
                              <strong>Avoid Public Wi-Fi</strong> :- Never use
                              public Wi-Fi for accessing your bank account.
                              Fraudsters can easily intercept your data on
                              unsecured networks.
                            </>
                          }
                          primaryTypographyProps={{
                            style: {
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "17px",
                              color: "#575757",
                            },
                          }}
                        />
                      </ListItem>
                      <ListItem
                        sx={{
                          display: "list-item",
                        }}
                      >
                        <ListItemText
                          primary={
                            <>
                              <strong>Log Out When Finished</strong> :- Always
                              log out of your Mobile/Internet banking session
                              when finished, especially on shared or public
                              devices.
                            </>
                          }
                          primaryTypographyProps={{
                            style: {
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "17px",
                              color: "#575757",
                            },
                          }}
                        />
                      </ListItem>
                    </List>
                  </CardContent>
                </Card>

                <Card variant="outlined" style={{ marginBottom: "20px" }}>
                  <CardContent>
                    <Typography
                      variant="h6"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "18px",
                      }}
                    >
                      Security Tips for ATM Usage and Card Security
                    </Typography>
                    <List
                      sx={{
                        listStyleType: "disc",
                        pl: 4,
                        "& .MuiListItem-root": {
                          display: "list-item",
                        },
                      }}
                    >
                      <ListItem
                        sx={{
                          display: "list-item",
                        }}
                      >
                        <ListItemText
                          primary={
                            <>
                              <strong>Choose Well-Lit ATMs</strong> :- Use ATMs
                              in secure, well-lit locations. If the ATM machine
                              looks tampered with or feels suspicious, do not
                              use it.
                            </>
                          }
                          primaryTypographyProps={{
                            style: {
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "17px",
                              color: "#575757",
                            },
                          }}
                        />
                      </ListItem>
                      <ListItem
                        sx={{
                          display: "list-item",
                        }}
                      >
                        <ListItemText
                          primary={
                            <>
                              <strong>Cover Your PIN Entry</strong> :- Use your
                              hand to shield the keypad when entering your PIN.
                              Fraudsters may place hidden cameras to capture
                              your PIN.
                            </>
                          }
                          primaryTypographyProps={{
                            style: {
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "17px",
                              color: "#575757",
                            },
                          }}
                        />
                      </ListItem>
                      <ListItem
                        sx={{
                          display: "list-item",
                        }}
                      >
                        <ListItemText
                          primary={
                            <>
                              <strong>Keep Your Cards Safe</strong> :- Store
                              your cards in a secure place and report any lost
                              or stolen cards immediately.
                            </>
                          }
                          primaryTypographyProps={{
                            style: {
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "17px",
                              color: "#575757",
                            },
                          }}
                        />
                      </ListItem>
                      <ListItem
                        sx={{
                          display: "list-item",
                        }}
                      >
                        <ListItemText
                          primary={
                            <>
                              <strong>Set Spending Alerts</strong> :- Enable SMS
                              alerts for card transactions to get notified of
                              any suspicious activity immediately.
                            </>
                          }
                          primaryTypographyProps={{
                            style: {
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "17px",
                              color: "#575757",
                            },
                          }}
                        />
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
