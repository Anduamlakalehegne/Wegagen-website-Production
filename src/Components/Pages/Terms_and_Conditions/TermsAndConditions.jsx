// src/TermsAndConditions.jsx

import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';
import './TermsAndConditions.css';
import StikyNav from '../Common/StikyNav';
import Mega_Menu from '../Common/Mega_Menu';
import Footer from '../Common/Footer';

const termsData = [
    {
        title: 'Summary', 
        content: `
        These terms and conditions refer to the Internet Banking being offered at WEGAGEN Bank and the general rules of good banking business. As partners we will guide you through all the possibilities that we make available to you. Our staff will help you in all your financial endeavors and we will make it our top priority in defining for your business solutions that you can only get at WEGAGEN Bank. We thank you for having chosen WEGAGEN Bank and assure you of complete confidentiality. However, it is apparently clear that the bank cannot waive its legal obligations to disclose information related to a customer’s account and its financial transactions where it is required by law or the competent authority.  `,
    },
    {
        title: '1. General Terms and Conditions',  
        content: (
            <>
                <ul className='unorder-list'> 
                    <li>
                        <strong>1.1.</strong> These are the Terms and Conditions of your agreement with WEGAGEN Bank in relation to the Mobile Banking. They apply to the account(s) you designate to be accessed through the MOBILE banking.
                    </li>
                    <li>
                        <strong>1.2.</strong> Your agreement with us is contained in:
                        <ul class="list-disc list-inside" style={{ marginLeft: "20px" }}>
                            <li>The Account Application Form (completed and signed by you the customer);</li>
                            <li>These Terms and Conditions as changed by us from time to time depending on new products and new regulations; and accessible online.</li>
                            <li>Any additional Terms and Conditions which comprise those relating to our charges, interest rates, notice periods, maximum and minimum balances and other features for each type of account or service.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>1.3.1.</strong> Individuals are personally responsible for any money owed to us.
                    </li>
                    <li>
                        <strong>1.3.2.</strong> Joint account holders/partners of partnerships are individually and jointly liable for money owed to us even if one of you has subsequently ceased to be a partner unless we have agreed otherwise in writing.
                    </li>
                    <li>
                        <strong>1.3.3.</strong> Unless otherwise agreed between us, individuals or trustees authorized to give instructions on accounts of clubs, charities, and associations are individually and jointly liable for money owed to us.
                    </li>
                    <li>
                        <strong>1.3.4.</strong> The authorized signatories to a limited company’s account are not normally personally liable for money owed to us unless they have entered into a separate agreement with us.
                    </li>
                    <li>
                        <strong>1.4.</strong> The Internet banking transactions between the Bank and you (its Clients) are subject to these general terms and conditions as well as other specific/supplementary agreements, The Banking Business Proclamation, the Financial Intelligence Center Establishment Proclamation, The Counter Terrorist Financing and Money Laundering Regulation, and all other applicable laws of the country.
                    </li>
                    <li>
                        <strong>1.5.</strong> We will use the address and any other contact details held in our records to contact you unless otherwise agreed. All statements and notices sent to a client in relation to the internet banking are deemed to have been received by the client as soon as we send it or the client can view details on the bank’s web-site.
                    </li>
                    <li>
                        <strong>1.6.</strong> You may contact us using the address and other contact details we give you when you open your account, internet user account & posted online. A written notice via e-copy & posts online will be provided to you if any changes occur.
                    </li>
                    <li>
                        <strong>1.7.</strong> The Bank will display these GENERAL TERMS AND CONDITIONS at its branches and on the Bank's online website. Any changes to the GENERAL TERMS AND CONDITIONS are immediately displayed at the branches and are available on the online website.
                    </li>
                </ul>
            </>
        ),
    },
    {
        title: '2. Instructions',
        content: (
            <ul className='unorder-list'>
                <li>
                    <strong>2.1.</strong> You can give us instructions either in writing or by telephone or facsimile unless we tell you that instructions can only be given in a limited way on a particular account or service.
                </li>
                <li>
                    <strong>2.2.</strong> If you choose to give us telephone instructions (including facsimile), we will agree security procedures for authenticating those instructions and require you to sign an indemnity form.
                </li>
                <li>
                    <strong>2.3.</strong> We may apply limits to telephone instructions from time to time. We may vary these limits at any time with immediate effect.
                </li>
                <li>
                    <strong>2.4.</strong> You agree to keep all security procedures codes and your personal identification codes secret, never to disclose them to anyone and take all reasonable care to prevent their unauthorized or fraudulent use.
                </li>
                <li>
                    <strong>2.5.</strong> You authorize us to act on instructions given:
                    <ul class="list-disc list-inside" style={{ marginLeft: "20px" }}>
                        <li>On documents bearing your original signature(s); or</li>
                        <li>
                            By telephone (including facsimile) provided that we have followed the security procedures agreed between us whether or not such telephone or facsimile instructions were given by you.
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>2.6.</strong> If you know or have any reason to suspect that someone else knows your codes or personal identifiers, you must immediately contact us. Until you do so, you will continue to be liable for all instructions that we receive and act on in accordance with Condition 2.5.
                </li>
                <li>
                    <strong>2.7.</strong> We may ask you to provide written confirmation and to cooperate with us if we have received instructions relating to your account which were not given by you.
                </li>
                <li>
                    <strong>2.8.</strong> We can refuse to act on any instruction if:
                    <ul class="list-disc list-inside" style={{ marginLeft: "20px" }}>
                        <li>We have good reason to believe that you did not give us the instruction; or</li>
                        <li>We doubt the authenticity of the instruction or do not consider it to be sufficiently clear; or</li>
                        <li>We believe that by carrying out the instruction we might be in breach of any law, regulation, contractual obligation, code or other duty which applies to us. or</li>
                        <li>We may also refuse to act on an instruction under Condition C2.8.</li>
                    </ul>
                </li>
                <li>
                    <strong>2.9.</strong> You will be responsible for all instructions received by us from an authorized signatory even if the authorized signatory does something which makes you break these Terms and Conditions. If you wish to cancel any authorization at any time you must inform us in writing.
                </li>
            </ul>
        ),
    },
    {
        title: '3. Fees, Commissions, Charges, and Other Related Expenses',
        content: (
            <ul className='unorder-list'>
                <li>Bank Fees or charges are levied on the Client's account for use of Bank facilities, either as a fixed sum or as a percentage of the amount of the transaction. The Client's account is debited for any additional expenses incurred during the processing of Client Orders, e.g. courier fees, 
                    third party charges and commissions. Relevant banking service Fees are specified in the Bank's Tariff guide, the Bank’s website or is available upon request. If a particular agreement contains a special regime of interest and/or charges and commissions different from those indicated in 
                    the Bank's web site, these conditions can only be modified in such manner as is defined in the Agreement.</li>
                <li>
                    <strong>3.1.</strong> The amount and time of payment of charges for our most frequently used services are detailed in the WEGAGEN Bank schedule of charges. A copy is available on request. We may vary at our discretion all charges payable by you. We will be pleased to supply you with details of our charges for other services when you request them.
                </li>
                <li>
                    <strong>3.2.</strong> You authorize us to deduct our charges from your account(s).
                </li>
                <li>
                    <strong>3.3.</strong> We may vary the interest rate you pay to us or we pay to you for any of the following reasons:
                    <ul class="list-disc list-inside" style={{ marginLeft: "20px" }}>
                        <li>As a result of prevailing market conditions;</li>
                        <li>As a result of changes in our overall costs of providing services to you;</li>
                        <li>As a result of prudent management and practice of our business;</li>
                        <li>To reflect changes in law or regulatory requirements;</li>
                        <li>For any other valid reason.</li>
                    </ul>
                </li>
            </ul>
        ),
    },
    {
        title: '4. Closing and Transferring Your Account',
        content: (
            <ul className='unorder-list'>
                <li>
                    <strong>4.1.</strong> If required you may give us written instructions to close any account; the authority must be signed in accordance with the Mandate signed by you and given to the Bank. In the case of joint accounts, all account holders must sign.
                </li>
                <li>
                    <strong>4.2.</strong> WEGAGEN Bank S.C may cancel this Agreement and terminate your use of Internet Banking for any reason at any time but the customer’s right to cancel the agreement should be subject to the Terms and Conditions of the Internet Banking and other provisions of the user agreement.
                </li>
                <li>
                    <strong>4.3.</strong> We may take actions to close your account immediately if we reasonably believe that:
                    <ul class="list-disc list-inside" style={{ marginLeft: "20px" }}>
                        <li>You are no longer eligible to operate an account;</li>
                        <li>You have given us false information on the Customer Relationship Form when applying for the opening of an account;</li>
                        <li>You or someone else is using the account illegally; or</li>
                        <li>You have been in serious or persistent breach of this Agreement or any additional conditions which apply to an account.</li>
                    </ul>
                </li>
            </ul>
        ),
    },
    {
        title: '5. PROVISION OF ACCOUNTS AND SERVICES AND VARIATION',
        content: (
            <ul className='unorder-list'>
                <li>
                    <strong>5.1.</strong> TWe reserve the right to refuse to take a deposit or to decline to open an account or to provide a service or require an account holder to close their account(s) without giving any reason for our decision.
                </li>
                <li>
                    <strong>5.2.</strong> We may at any time vary these Terms and Conditions and add to, vary or withdraw features of our services. We will give you reasonable notice of any changes. We will use our reasonable endeavors 
                    consistent with good banking practice, to ensure that if the change is material (as determined by us in our absolute discretion) the notice period we give you is sufficient to ensure that you have an opportunity to take any action, as appropriate
                </li>
                <li>
                    <strong>5.3.</strong> Unless we tell you otherwise, notice will be given in writing or by putting messages on your statements.
                </li>

            </ul>
        ),
    },
    {
        title: '6. Limiting Our Liability',
        content: (
            <ul className='unorder-list'>
                <li>
                    <strong>6.1.</strong> We will not be liable to you for any loss you may suffer if we do not act on your instructions for any reason referred to in Conditions B2.8 or C2.8 or we cannot provide or are delayed in providing you with any banking or other services as a direct or indirect result of anything outside our reasonable control. This includes but is not limited to:
                    <ul class="list-disc list-inside" style={{ marginLeft: "20px" }}>
                        <li>Industrial dispute;</li>
                        <li>Failure or fluctuation of power or telecommunication supplies;</li>
                        <li>Breakdown in computer hardware or other equipment or error in any software;</li>
                        <li>Any error or discrepancy in your instructions;</li>
                        <li>Any failure or delay in the supply of services to us by any third party.</li>
                    </ul>
                </li>
                <li>
                    <strong>6.2.</strong> We will not be liable for any indirect or consequential losses including (but not limited to) any loss of or damage to goodwill, profits or anticipated savings if we fail to act on your instructions for the reasons referred to above or any other reason whatsoever except as specifically set forth herein or where the law requires a different standard we shall not be responsible for any loss, damage, or injury or for any direct, indirect, special, incidental, exemplary, or consequential damages including (but not limited to) lost profits, loss of data files, profit or goodwill or the costs of procurement of substitute goods or services arising from or related to the service, the inability to use the service or otherwise in connection with this agreement even if there may be prior advice of the possibility of such damages.
                </li>
                <li>
                    <strong>6.3.</strong> Our liability for any loss, injury or damage resulting from any failure, delay or error in carrying out your instructions (however caused) shall be to the lower of:
                    <ul class="list-disc list-inside" style={{ marginLeft: "20px" }}>
                        <li>The amount of such loss, injury or damage;</li>
                        <li>The amount of any interest you may fail to earn or interest you may incur as a result of any such failure, delay or error less a sum equal to any interest which you would not have been entitled to receive or would have been obliged to pay if no such failure, delay or error had occurred.</li>
                    </ul>
                </li>
                <li>
                    <strong>6.4.</strong> No claim may be made against any member of the WEGAGEN Bank unless written notice of such claim giving reasonable details shall have been received by us within three months after the event or omission giving rise to any such claim.
                </li>
                <li>
                    <strong>6.5.</strong> We will not be liable in any circumstances for any losses which are not directly caused by our actions or which we could not reasonably have foreseen.
                </li>
                <li>
                    <strong>6.6.</strong> The Bank is not liable for any damages that arise from the loss or mutilation nor from loss of a PIN Code or an Internet Bank Login and Password nor for any indiscretions on the part of a Client. The Bank is not liable for Client losses that arise due to Clients negligence.
                </li>
                <li>
                    <strong>6.7.</strong> To prevent and combat money laundering and terrorist financing, the Bank enforces the rules and regulations defined in applicable international treaties, the Financial Intelligence Center Establishment Regulation, The Counter Terrorist Financing and Anti-Money 
                    Laundering Proclamation, The Banking Business Proclamation and other relevant laws of Ethiopia.
                </li>
            </ul>
        ),
    },
    {
        title: '7. Data',
        content: (
            <ul className='unorder-list'>
                <li>
                    <strong>7.1.</strong> You agree that we may use, hold and process by computer or otherwise in any location whatsoever any information given by you in your dealings with us or obtained by us in connection with or as a result of these Terms and Conditions and any information relating to your accounts.
                </li>
                <li>
                    <strong>7.2.</strong> You agree that we may:
                    <ul class="list-disc list-inside" style={{ marginLeft: "20px" }}>
                        <li>Use Data for banking and credit assessment, statistical analysis including behavior and credit scoring and to identify products and services (including those supplied by others third parties) which may be relevant to you; and</li>
                        <li>Store and process information obtained by us or given by you in your dealings with us on WEGAGEN Bank computers and in any other way.</li>
                    </ul>
                </li>
                <li>
                    <strong>7.3.</strong> We will disclose Data only:
                    <ul class="list-disc list-inside" style={{ marginLeft: "20px" }}>
                        <li>For fraud prevention purposes;</li>
                        <li>To licensed credit reference agencies (in relation to the conduct of your account(s));</li>
                        <li>Under a strict code of secrecy to subcontractors or persons acting as our agents;</li>
                        <li>To any person who may assume our rights under these Terms and Conditions; and</li>
                        <li>If we have a right or duty to disclose or are compelled to do so by law.</li>
                    </ul>
                </li>
            </ul>
        ),
    },
];

const TermsAndConditions = () => {
    return (
        <>
            <StikyNav />
            <Mega_Menu />
            <div className="terms-container">
                <Typography variant="h4" className="terms-title" gutterBottom>
                    Terms and Conditions
                </Typography>
                <Paper elevation={3} className="terms-paper">
                    {termsData.map((term, index) => (
                        <Box key={index} className="terms-section">
                            <Typography variant="h5" className="terms-subtitle">
                                {term.title}
                            </Typography>
                            <Typography variant="h6" className="terms-content">
                                {term.content}
                            </Typography>
                        </Box>
                    ))}
                </Paper>


            </div>
            <Footer />
        </>
    );
};

export default TermsAndConditions;
