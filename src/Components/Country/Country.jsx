import { useState } from "react";
import "./country.css";

const Country = ({ country }) => {
  const { name, flags, population, area } = country;
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  };
  return (
    <div className="country">
      <h3>Name: {name.common}</h3>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>
      <br />
      {visited ? "I have visited this country" : "i will visit this country"}
    </div>
  );
};

export default Country;
