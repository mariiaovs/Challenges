import React, { useState } from "react";
import Counter from "./components/Counter";
import "./styles.css";

export default function App() {
  const [people, setPeople] = useState(1);

  function handlePlusClick() {
    setPeople(people + 1);
  }

  function handleMinusClick() {
    if (people > 1) setPeople(people - 1);
  }

  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter onPlusClick={handlePlusClick} onMinusClick={handleMinusClick} />
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}
