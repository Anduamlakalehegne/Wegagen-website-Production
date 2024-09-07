import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "../Home/home.module.css";
import { format, parseISO } from "date-fns";

export default function RateHistory() {
  const [rateData, setRateData] = useState(null);
  const [error, setError] = useState(null);
  const [selectDate, setSelectDate] = useState({
    date1: "",
    date2: "",
  });
  const [formattedDate, setFormattedDate] = useState("");
  const [formattedDate2, setFormattedDate2] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios(
        `http://localhost:8000/api/exchange-rate-history/search?date1=${selectDate.date1}&date2=${selectDate.date2}`
      );

      if (res) {
        setRateData(res.data);
        const date = parseISO(res?.data[0].attributes.date);
        setFormattedDate(format(date, "MMM dd, yyyy"));
        setFormattedDate2(format(date, "EEEE MMM dd, yyyy"));
        setError(null);
      }
    } catch (error) {
      console.log(error.response ? error.response.data : error.message);
      setError(error.response ? error.response.data : error.message);
    }
  };

  useEffect(() => {
    const fetchRate = async () => {
      try {
        const response = await axios(
          "http://localhost:8000/api/exchange-rate-history"
        );

        if (response) {
          setRateData(response.data);

          const date = parseISO(response.data[0].rate_date);
          setFormattedDate(format(date, "MMM dd, yyyy"));
          setFormattedDate2(format(date, "EEEE MMM dd, yyyy"));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchRate();
  }, []);

  return (
    <div className="conatiner">
      <h1>History</h1>

      <div className="mx-auto flex flex-col gap-20">
        <form onSubmit={handleSubmit} className="flex mx-auto gap-10 text-lg">
          <div className="flex gap-10">
            <div className="flex gap-3">
              <label htmlFor="date-one" className="mt-2">
                Date:
              </label>
              <input
                type="date"
                id="date1"
                name="date1"
                className="border-2 border-black rounded-lg p-1"
                onChange={(e) =>
                  setSelectDate({ ...selectDate, date1: e.target.value })
                }
              />
            </div>
            {/* <div className="flex gap-3">
              <label htmlFor="date-two" className="mt-2">
                To:
              </label>
              <input
                type="date"
                id="date2"
                name="date2"
                className="border-2 border-black rounded-lg p-1"
                onChange={(e) =>
                  setSelectDate({ ...selectDate, date2: e.target.value })
                }
              />
            </div> */}
          </div>
          <button type="submit" className="bg-black text-white p-2 rounded-lg">
            Search
          </button>
        </form>

        {error && <p className="text-red-500">{error?.message}</p>}

        <div style={{ marginBottom: "100px" }}>
          <div className={styles.exchangeRate}>
            <div className={styles.exchangeRateInfo}>
              <div className={styles.rightSide}>
                <p className={styles.headerTitle3}>Exchange Rate</p>
                <p className={styles.headerTitle2}>የዕለቱ የዉጭ ምንዛሬ ተመን</p>
                <p style={{ color: "#ff6b0b", fontSize: "17px" }}>
                  Foreign Exchange Rate Applicable
                </p>
                <p style={{ color: "#ff6b0b", fontSize: "17px" }}>
                  On {formattedDate2}
                </p>
              </div>
            </div>
            <div className={styles.ecxhangerightImg}>
              <div className={styles.popOuter}>
                <div
                  className={styles.popexchange}
                  style={{ marginBottom: "10px" }}
                ></div>

                {/* table data */}
                <table>
                  <thead>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th colSpan={2} style={{ paddingLeft: "5%" }}>
                      Cash Notes
                    </th>
                    <th colSpan={2} style={{ paddingLeft: "5%" }}>
                      Transactions
                    </th>
                  </thead>
                  <thead>
                    <tr>
                      <th>{formattedDate}</th>
                      <th>Currency Code</th>
                      <th>Unit</th>
                      <th>Buying</th>
                      <th>Selling</th>
                      <th>Buying</th>
                      <th>Selling</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rateData &&
                      rateData.map((rate, index) => (
                        <tr
                          key={rate.id}
                          className={index % 2 === 1 ? styles.active : ""}
                        >
                          <td>
                            {/* <img
                    src={`https://weg.back.strapi.wegagen.com${rate.attributes.flag.data[0].attributes.url}`}
                    alt={rate.attributes.code}
                  /> */}
                            image
                          </td>
                          <td>{rate.code}</td>
                          <td>{rate.unit}</td>
                          <td>{rate.buying}</td>
                          <td>{rate.selling}</td>
                          <td>{rate.tra_buying}</td>
                          <td>{rate.tra_selling}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
