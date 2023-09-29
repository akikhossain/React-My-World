import { useState } from "react";
import "./country.css";

const Country = ({ country, handleVisitedCountries }) => {
  const { name, flags, population, area } = country;
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  };
  console.log(handleVisitedCountries);
  return (
    <div className={` country ${visited && "visited"}`}>
      <h3 style={{ color: visited ? "purple" : "white" }}>
        Name: {name.common}
      </h3>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Area: {area}</p>

      <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>
      <button style={{ marginLeft: 10, marginBottom: 10 }}>Mark Country</button>
      <br />
      {visited ? "I have visited this country" : "i will visit this country"}
    </div>
  );
};

export default Country;
