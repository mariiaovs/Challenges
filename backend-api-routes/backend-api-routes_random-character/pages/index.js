import Link from "next/link";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function HomePage() {
  const {
    data: character,
    error,
    isLoading,
  } = useSWR("/api/random-character", fetcher);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!character) return;
  return (
    <>
      <h1>
        Name: {character.firstName} {character.lastName}
      </h1>
      <p>Age: {character.age}</p>
      <p>City: {character.city}</p>
      <p>Twitter Name: {character.twitterName}</p>
      <p>geohash: {character.geohash}</p>
    </>
  );
}
