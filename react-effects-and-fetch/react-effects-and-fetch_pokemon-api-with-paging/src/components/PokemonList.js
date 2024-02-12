import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [URL, setURL] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
  );
  const [nextURL, setNextURL] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20"
  );
  const [prevURL, setPrevURL] = useState(null);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setPokemon(data.results);
        setNextURL(data.next);
        setPrevURL(data.previous);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [URL]);

  return (
    <main>
      <button type="button" onClick={() => setURL(prevURL)}>
        Previous Page
      </button>
      <button type="button" onClick={() => setURL(nextURL)}>
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
