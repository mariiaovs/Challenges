import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Sum valueA={11} valueB={22} />
      <Sum valueA={123} valueB={345} />
    </div>
  );
}

function Sum({ valueA, valueB }) {
  return (
    <p>
      {valueA} + {valueB} = {valueA + valueB}
    </p>
  );
}
