import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "../Home/home.module.css";
import { format, parseISO } from "date-fns";
import StikyNav from "../Common/StikyNav";
import Mega_Menu from "../Common/Mega_Menu";
import About_us from "../../../assets/Images/common.jpg";
import Footer from "../Common/Footer";

export default function RateHistory() {
  const [rateData, setRateData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectDate, setSelectDate] = useState({
    date1: "",
    date2: "",
  });
  const [formattedDate, setFormattedDate] = useState("");
  const [formattedDate2, setFormattedDate2] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await axios(
        `https://rate.wegagen.com/api/exchange-rate-history/search?date1=${selectDate.date1}&date2=${selectDate.date2}`
      );
      console.log(selectDate)

      if (res) {
        setRateData(res.data);
        console.log(res.data)
        const date = parseISO(res?.data[0].created_at);
       
        setFormattedDate(format(date, "MMM dd, yyyy"));
        setFormattedDate2(format(date, "EEEE MMM dd, yyyy"));
        setError(null);
      }
    } catch (error) {
      setError(error.response ? error.response.data : error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchRate = async () => {
      setLoading(true);
      try {
        const response = await axios(
          "https://rate.wegagen.com/api/exchange-rate-history"
        );

        if (response) {
          setRateData(response.data);

          const date = parseISO(response.data[0].created_at);
          console.log(date)
          setFormattedDate(format(date, "MMM dd, yyyy"));
          setFormattedDate2(format(date, "EEEE MMM dd, yyyy"));
          console.log(formattedDate2)
        }
      } catch (error) {
        setError(error.response ? error.response.data : error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchRate();
  }, []);

  return (
    <>
      <StikyNav />
      <Mega_Menu />

      <div className={styles.agarImage}>
        <img src={About_us} alt="About Us" />
      </div>

      <div style={{ marginBottom: "100px" }}>
        <div className={styles.exchangeRateHistory}>
          <div className={styles.exchangeRateInfo}>
            <div className={styles.rightSide}>
              <p className={styles.headerTitle3}>Exchange Rate History</p>
              {/* <p className={styles.headerTitle2}>የዕለቱ የዉጭ ምንዛሬ ተመን</p> */}
              <p className={styles.headerTitle2}>
                Foreign Exchange Rate Applicable
              </p>
              <p
                style={{
                  color: "#ff6b0b",
                  fontSize: "23px",
                  textAlign: "center",
                }}
              >
                On {formattedDate2}
              </p>
            </div>
          </div>

          <div className="mx-auto my-10">
            <form
              onSubmit={handleSubmit}
              className="flex mx-auto gap-10 text-lg"
            >
              <div className="flex gap-10">
                <div className="flex gap-3">
                  <label htmlFor="date-one" className="mt-2">
                    Select date:
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
              <button
                type="submit"
                className="bg-orange-400 text-white p-2 rounded-lg hover:bg-black"
              >
                Search
              </button>
            </form>

            {error && (
              <p className="text-red-500 text-2xl mt-10">{error?.message}</p>
            )}
          </div>
          <div className={styles.ecxhangerightImg}>
            <div className={styles.popOuter}>
              <div
                className={styles.popexchange}
                style={{ marginBottom: "10px" }}
              >
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
                    {loading && <h3>Loading data...</h3>}
                    {rateData &&
                      rateData.map((rate, index) => (
                        <tr
                          key={rate.id}
                          className={index % 2 === 1 ? styles.active : ""}
                        >
                          <td>
                            <img
                              src={`https://weg.back.strapi.wegagen.com${rate.flag}`}
                              alt={rate.code}
                            />
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

      <Footer />
    </>
  );
}
