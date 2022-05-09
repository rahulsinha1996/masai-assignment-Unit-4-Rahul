import React, { useState } from "react";
import data from "./db.json";
import Card from "./Card";

const Restauent-Details = () => {
  const [resData, setresData] = useState(data);
  const [sort, setSort] = useState(0);
  const [type, setType] = useState("");
  const [sortPrice, setSortPrice] = useState("");

  const handleChange = (e) => {
    setSort(e.target.value);
  };

  const handleClick = (e) => {
    setSort(0);
    setType(e.target.name);
  };

  const handlePrice = (e) => {
    setSort(0);
    setType("");
    setSortPrice(e.target.name);
  };
  return (
    <>
      <h1>
        Restaurant Details
      </h1>
      <div>
        <div>
          <h4>Filter by:</h4>
          <select name="sort" onChange={handleChange}>
            <option value="0">Filter</option>
            <option value="1">Above 1 star</option>
            <option value="2">Above 2 star</option>
            <option value="3">Above 3 star</option>
            <option value="4">Above 4 star</option>
          </select>
        </div>
        <div>
          <h4> Restaurants Type: </h4>

          <button name="cash" onClick={handleClick}>
            Cash Only
          </button>
          <button name="card" onClick={handleClick}>
            Card Only
          </button>
          <button name="" onClick={handleClick}>
            All
          </button>
        </div>

        <div>
          <h4> Sort By Cost for one: </h4>
          <button name="h2l" onClick={handlePrice}>
            High To Low
          </button>
          <button name="l2h" onClick={handlePrice}>
            Low To High
          </button>
        </div>
      </div>

      <div>
        {sort
          ? resData
              .filter((el) => el.rating > sort)
              .sort((a, b) => a.rating - b.rating)
              .map((item, index) => <Card key={index} {...item} />)
          : type
          ? resData
              .filter((el) => el.payment_methods[type] === true)
              .map((item, index) => <Card key={index} {...item} />)
          : sortPrice === "h2l"
          ? resData
              .sort((a, b) => b.total_cost - a.total_cost)
              .map((item, index) => <Card key={index} {...item} />)
          : sortPrice === "l2h"
          ? resData
              .sort((a, b) => a.total_cost - b.total_cost)
              .map((item, index) => <Card key={index} {...item} />)
          : resData.map((item, index) => (
              <Card key={index} {...item} />
            ))}
      </div>
    </>
  );
};

export default Restaurant-Details;
