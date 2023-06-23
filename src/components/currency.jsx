import React, { useState } from "react";
import "../styles/styling.css";

export default function Currency() {
  const [selectedCurrency, setCurrency] = useState("");

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  if (selectedCurrency === "") {
    return (
      <div className="currency-input">
        <label htmlFor="currencySelect">Select your currency:</label>
        <select
          id="currencySelect"
          value={selectedCurrency}
          onChange={handleCurrencyChange}
        >
          <option value="">Choose currency</option>
          <option value="dollar">Dollar</option>
          <option value="rupees">Rupees</option>
          <option value="more">More</option>
        </select>
      </div>
    );
  }

  return (
    <div>
      {/* Add your desired components here */}
    </div>
  );
}
