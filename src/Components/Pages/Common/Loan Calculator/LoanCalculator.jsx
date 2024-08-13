import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import './loancalculator.css';

const LoanCalculator = ({ isOpen, onClose }) => {

  const [loanAmount, setLoanAmount] = useState('');
  const [months, setMonths] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('end-of-period');
  const [monthlyPayment, setMonthlyPayment] = useState('0');
  const [totalInterest, setTotalInterest] = useState('0');
  const [totalPayment, setTotalPayment] = useState('0');

  const calculateLoan = () => {
    const principal = parseFloat(loanAmount);
    const calculatedMonths = parseInt(months, 10);
    const annualInterestRate = parseFloat(interestRate) / 100;
    const monthlyInterestRate = annualInterestRate / 12;

    let calculatedPayment;
    if (paymentMethod === 'end-of-period') {
      calculatedPayment =
        principal *
        (monthlyInterestRate /
          (1 - Math.pow(1 + monthlyInterestRate, -calculatedMonths)));
    } else {
      // Payment at the beginning of period
      calculatedPayment =
        principal *
        (monthlyInterestRate /
          (1 - Math.pow(1 + monthlyInterestRate, -calculatedMonths))) /
        (1 + monthlyInterestRate);
    }

    setMonthlyPayment(calculatedPayment.toFixed(2));

    const totalInterestPaid = calculatedPayment * calculatedMonths - principal;
    setTotalInterest(totalInterestPaid.toFixed(2));

    setTotalPayment((principal + totalInterestPaid).toFixed(2));

  };
  const clearFields = () => {
    setLoanAmount('');
    setMonths('');
    setInterestRate('');
    setMonthlyPayment('0');
    setTotalInterest('0');
    setTotalPayment('0');
  };

  if (!isOpen) return null;

  return (
    <>
      {isOpen && (
        <div className="loan-calculator-popup" onClick={(e) => e.stopPropagation()}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={onClose}>
              <FaTimes />
            </button>
            <div className='loan-calculator'>
              <h4 style={{ fontSize: '20px' }}>Loan Calculator</h4>

              <div className='calculatioResult'>
                <p>Monthly Payment: {monthlyPayment}</p>
                <p>Total Interest: {totalInterest}</p>
                <p>Total Payment: {totalPayment}</p>
              </div>
              <div>
                <label>Loan Amount:</label>
                <input
                  type="number"
                  placeholder="Loan Amount"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                />
              </div>
              <div>
                <label>Months:</label>
                <input
                  type="number"
                  placeholder="Number of Months"
                  value={months}
                  onChange={(e) => setMonths(e.target.value)}
                />
              </div>
              <div>
                <label>Interest Rate (%):</label>
                <input
                  type="number"
                  placeholder="Interest Rate"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                />
              </div>
              <div>
                <label>Payment Method:</label>
                <select
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                >
                  <option value="end-of-period">End of Period</option>
                  <option value="beginning-of-period">Beginning of Period</option>
                </select>
              </div>
              <button onClick={calculateLoan}>Calculate</button>
              <button className="clear-btn" onClick={clearFields}>Clear</button> 
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default LoanCalculator;