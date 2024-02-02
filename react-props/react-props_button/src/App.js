import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Button color="red" disabled text="Click me!" backgroundColor="yellow" />
      <Button color="white" text="Click me!" backgroundColor="black" />
    </div>
  );
}

function Button({ color, disabled, text, backgroundColor }) {
  return (
    <div>
      <button
        disabled={disabled}
        style={{ color: color, backgroundColor: backgroundColor }}
      >
        {text}
      </button>
    </div>
  );
}
