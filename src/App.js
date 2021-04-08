import React, { useEffect } from "react";
import "./style.css";
import CurrencyRow from "./CurrencyRow";

const BASE_URL =
  "https://free.currconv.com/api/v7/convert?q=USD_PHP&compact=ultra&apiKey=36f50985d8ec0d331113";

export default function App() {
  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => console.log(data));
  }, []);

  return (
    <>
      <h1>Convert</h1>
      <CurrencyRow />
      <div className="equals">=</div>
      <CurrencyRow />
    </>
  );
}
