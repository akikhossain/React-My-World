import "./countries.css";
import React, { useEffect, useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountries = (country) => {
    console.log("add this to country component");
    console.log(country);
  };
  return (
    <div>
      <h2 className="countries-length">Countries: {countries.length}</h2>
      <div>
        <h3>Visited Countries</h3>
        <ul></ul>
      </div>
      <div className="countries-component">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            handleVisitedCountries={handleVisitedCountries}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
