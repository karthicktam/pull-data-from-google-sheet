// https://docs.google.com/spreadsheets/d/1UjNYEI2Qgqg_c6YLidNu-qe59MRDmdIQrfB8cbj7R-g/edit?usp=sharing
import React, { useEffect, useState } from "react";
import Tabletop from "tabletop";
import "./styles.css";

function BookData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    Tabletop.init({
      key: "1UjNYEI2Qgqg_c6YLidNu-qe59MRDmdIQrfB8cbj7R-g",
      callback: function (data) {
        setData(data);
        setLoading(false);
      },
      simpleSheet: true
    });
  }, []);

  return (
    <div>
      <h3>Book data fetched from google sheet</h3>
      {loading === true ? (
        <div className="loader">Loading...</div>
      ) : (
        <ul className="ulTag">
          {data.map((el) => (
            <li key={el.Books}>
              {el.Books} - {el.About}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BookData;
