import React from "react";
import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article>
      <h2 className="article__title">Form</h2>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" />
      <a href="https://www.google.com" className="article__link">
        Google
      </a>
    </article>
  );
}
