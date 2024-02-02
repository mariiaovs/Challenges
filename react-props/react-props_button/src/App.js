import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Button color="red" disabled text="Click me!" />
      <Button color="blue" text="Click me!" />
    </div>
  );
}

function Button({ color, disabled, text }) {
  return (
    <div>
      <button disabled={disabled} style={{ color: color }}>
        {text}
      </button>
    </div>
  );
}
