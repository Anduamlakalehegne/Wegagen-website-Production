import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./App.css";
import Header from "./Components/Pages/Common/Header";
import Home from "./Components/Pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./Components/Pages/AboutUs/AboutUs";
import CoprativeGovernance from "./Components/Pages/AboutUs/CoprativeGovernance";
import TimeLine from "./Components/Pages/AboutUs/TimeLine";
import CSR from "./Components/Pages/AboutUs/CSR";
import News from "./Components/Pages/News/News";
// import AgarAccount from './Components/Pages/Personal Banking/Personal_Banking';
import GohJunior from "./Components/Pages/Personal Banking/GohJunior";
import AnnualReport from "./Components/Pages/News/AnnualReport";
import NigatSaving from "./Components/Pages/Personal Banking/NigatSaving";
import DiasporaSaving from "./Components/Pages/Personal Banking/DiasporaSaving";
import Wadya_Aman_Saving from "./Components/Pages/Interest Free/Wadya_Aman_Saving";
import Loan_Facilities from "./Components/Pages/Personal Loan/Loan_Facilities";
// import CustomerLoan from './Components/Pages/Personal Loan/CustomerLoan';
import AdmasLoan from "./Components/Pages/Personal Loan/AdmasLoan";
// import DiasporaLoan from './Components/Pages/Personal Loan/DiasporaLoan';
import CardBanking from "./Components/Pages/DigitalBanking/CardBanking";
import School_management from "./Components/Pages/DigitalBanking/School_management";
import MobileBanking from "./Components/Pages/DigitalBanking/MobileBanking";
import InternetBanking from "./Components/Pages/DigitalBanking/InternetBanking";
// import TradeService from './Components/Pages/International_Banking/International_Banking';
import LoanCalculator from './Components/Pages/Common/Loan Calculator/LoanCalculator';
import AgentBanking from './Components/Pages/DigitalBanking/AgentBanking'
import Asset_Financing_Loans from './Components/Pages/Personal Loan/Asset_Financing_Loans';
import Letter_of_Bank_Guarantee_Facilities from './Components/Pages/Personal Loan/Letter_of_Bank_Guarantee_Facilities';
import Rental_Loan from './Components/Pages/Personal Loan/Rental_Loan';
import Diaspora_Loans from './Components/Pages/Personal Loan/Diaspora_Loans';
import Personal_Loans_for_Salaried_Persons from './Components/Pages/Personal Loan/Personal_Loans_for_Salaried_Persons';
import International_Banking from './Components/Pages/International_Banking/International_Banking';
import Financing_Products from './Components/Pages/Interest Free/Financing_Products';
import Guarantee_Kafalah from './Components/Pages/Interest Free/Guarantee_Kafalah';
import Personal_Banking from './Components/Pages/Personal Banking/Personal_Banking';
import Working_Capital_Loan from './Components/Pages/Personal Loan/Working_Capital_Loan';
import Branch_Terms_And_Tariffs from './Components/Pages/Terms and Tariffs/Branch_Terms_And_Tariffs';
import Digital_Terms_And_Tariffs from './Components/Pages/Terms and Tariffs/Digital_Terms_And_Tariffs';
import Credit_Terms_And_Tariffs from './Components/Pages/Terms and Tariffs/Credit_Terms_And_Tariffs';
import International_Terms_And_Tariffs from './Components/Pages/Terms and Tariffs/International_Terms_And_Tariffs';
import IFB_Terms_And_Tariffs from './Components/Pages/Terms and Tariffs/IFB_Terms_And_Tariffs';
import Gallery from './Components/Pages/News/Gallery';
import Interest_Rate from './Components/Pages/Terms and Tariffs/Interest_Rate';
import NewsLetter from './Components/Pages/News/NewsLetter';
import ATM_Location from './Components/Pages/Locations/ATM_Location';
import Branch_Location from './Components/Pages/Locations/Branch_Location';
import Vacancy from './Components/Pages/Vacancy/Vacancy';
import Bid from './Components/Pages/Bid/Bid';
import Notification from './Components/Pages/Notification/Notification';
import BankFormat from './Components/Pages/News/BankFormats';
import Efoyta_Terms_And_Tariffs from './Components/Pages/Terms and Tariffs/Efoyta_Terms_And_Tariffs';
import EnvironmentalPolicy from './Components/Pages/News/EnvironmentalPolicy';
import RateHistory from "./Components/Pages/RateHistory/RateHistory";
import TermsAndConditions from "./Components/Pages/Terms_and_Conditions/TermsAndConditions";
import PrivacyPolicy from "./Components/Pages/PrivacyPolicy/PrivacyPolicy";
import EfoytaPrivacyPolicy from "./Components/Pages/PrivacyPolicy/EfoytaPrivacyPolicy";
import Share_Terms_and_Tariffs from "./Components/Pages/Terms and Tariffs/Share_Terms_and_Tariffs";
// import JinglePlayer from './Components/Pages/JinglePlayer';
// import JinglePlayer from './Components/Pages/JinglePlayer';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        {/* <JinglePlayer /> */}
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route
            path="/CoprativeGovernance"
            element={<CoprativeGovernance />}
          />
          <Route path="/TimeLine" element={<TimeLine />} />
          <Route path="/CSR" element={<CSR />} />
          <Route path="/News" element={<News />} />
          <Route path="/Personal_Banking" element={<Personal_Banking />} />
          <Route path="/GohJunior" element={<GohJunior />} />
          <Route path="/NigatSaving" element={<NigatSaving />} />
          <Route path="/DiasporaSaving" element={<DiasporaSaving />} />
          <Route path="/annualReport" element={<AnnualReport />} />
          <Route path="/Wadya_Aman_Saving" element={<Wadya_Aman_Saving />} />
          <Route path="/Financing_Products" element={<Financing_Products />} />
          <Route path="/Guarantee_Kafalah" element={<Guarantee_Kafalah />} />
          <Route path="/loanFacilities" element={<Loan_Facilities />} />
          <Route
            path="/Asset_Financing_Loans"
            element={<Asset_Financing_Loans />}
          />
          <Route
            path="/Letter_of_Bank_Guarantee_Facilities"
            element={<Letter_of_Bank_Guarantee_Facilities />}
          />
          <Route path="/Rental_Loan" element={<Rental_Loan />} />
          <Route path="/Diaspora_Loans" element={<Diaspora_Loans />} />
          <Route
            path="/Working_Capital_Loan"
            element={<Working_Capital_Loan />}
          />
          <Route path="/AdmasLoan" element={<AdmasLoan />} />
          <Route
            path="/Personal_Loans_for_Salaried_Persons"
            element={<Personal_Loans_for_Salaried_Persons />}
          />
          <Route path="/CardBanking" element={<CardBanking />} />
          <Route path="/School_management" element={<School_management />} />
          <Route path="/MobileBanking" element={<MobileBanking />} />
          <Route path="/InternetBanking" element={<InternetBanking />} />
          <Route path="/AgentBanking" element={<AgentBanking />} />
          <Route
            path="/International_Banking"
            element={<International_Banking />}
          />
          <Route path="/LoanCalculator" element={<LoanCalculator />} />
          <Route
            path="/Branch_Terms_And_Tariffs"
            element={<Branch_Terms_And_Tariffs />}
          />
          <Route
            path="/Digital_Terms_And_Tariffs"
            element={<Digital_Terms_And_Tariffs />}
          />
          <Route
            path="/Credit_Terms_And_Tariffs"
            element={<Credit_Terms_And_Tariffs />}
          />
          <Route
            path="/International_Terms_And_Tariffs"
            element={<International_Terms_And_Tariffs />}
          />
          <Route
            path="/IFB_Terms_And_Tariffs"
            element={<IFB_Terms_And_Tariffs />}
          />
          <Route
            path="/Efoyta_Terms_And_Tariffs"
            element={<Efoyta_Terms_And_Tariffs />}
          />
           <Route
            path="/Share_Terms_and_Tariffs"
            element={<Share_Terms_and_Tariffs />}
          />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Interest_Rate" element={<Interest_Rate />} />
          <Route path="/NewsLetter" element={<NewsLetter />} />
          <Route path="/environmentalPolicy" element={<EnvironmentalPolicy />} />
          <Route path="/ATM_Location" element={<ATM_Location />} />
          <Route path="/Branch_Location" element={<Branch_Location />} />
          <Route path="/Vacancy" element={<Vacancy />} />
          <Route path="/Bid" element={<Bid />} />
          <Route path="/Notification" element={<Notification />} />
          <Route path="/BankFormat" element={<BankFormat />} />
          <Route path="/Rate_History" element={<RateHistory />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/privacy-and-police" element={<PrivacyPolicy />} />
          <Route path="/efoyta-privacy-Policy" element={<EfoytaPrivacyPolicy />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
