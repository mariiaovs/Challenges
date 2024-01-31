import React from "react";
import "./styles.css";

export default function App() {
  return <HelloWorldArticle />;
}

function HelloWorldArticle() {
  return (
    <article>
      <h1>The Wonders of Cats</h1>
      <p>
        Cats, those charming companions, have been winning hearts for ages.
        Playful and independent, they bring joy to homes with their soft purrs
        and playful antics.
      </p>
      <p>
        From fluffy Persians to sleek Siamese, there{"'"}s a cat for everyone.
        These whiskered wonders communicate with expressive tails and adorable
        meows, forming unique bonds with their owners.
      </p>
      <p>
        Taking care of a cat is simple – good food, regular vet visits, and lots
        of love. Keep them happy with toys and cozy spots, and you{"'"}ll have a
        purr-fect friend for life.
      </p>
    </article>
  );
}
