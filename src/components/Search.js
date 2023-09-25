import React, { useState } from "react";
import classes from "./Search.module.css";
import Card from "./Card";
export default function Search() {
  const [country, setCountry] = useState("India");
  //const [search, setSearch] = useState("India");
  // const countryChangeHancler = (event) => {
  //   setTimeout(() => {
  //     setCountry(event.target.value);
  //   }, 5000);
  // };
  const searchHandler = () => {
    console.log("hi");
    setCountry(document.getElementById("name").value);
  };

  return (
    <><div className={classes.images}>
<div className={classes.topnav}>
      <h1>React Weather App</h1>
    </div>
      <div className={classes.box}>
      <input type="text" placeholder="Search.." id="name" />
      <button onClick={searchHandler}>Search</button>
      
      </div>
      <Card country={country} />
    </div>
    
      </>
  );
}
