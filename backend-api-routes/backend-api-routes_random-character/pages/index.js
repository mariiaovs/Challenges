import styled from "styled-components";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

const StyledSection = styled.section`
  margin: 1rem;
  background-color: hsl(${({ $age }) => ($age / 120) * 360}, 100%, 50%);
  border-radius: 0.5rem;
  color: hsl(${({ $age }) => (360 - $age / 120) * 360}, 100%, 50%);
  padding: 1rem;
`;

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
    <StyledSection $age={character.age}>
      <h1>
        Name: {character.firstName} {character.lastName}
      </h1>
      <p>Age: {character.age}</p>
      <p>City: {character.city}</p>
      <p>Twitter Name: {character.twitterName}</p>
      <p>geohash: {character.geohash}</p>
    </StyledSection>
  );
}
