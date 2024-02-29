import { StyledLink } from "@/components/StyledLink";
import { cities } from "@/lib/data";
import Head from "next/head";
import styled from "styled-components";

const StyledListElement = styled.li`
  list-style: none;
  padding: 1rem;
  margin: 0.5rem;
  padding: 1rem;
  width: 10rem;
  border-radius: 0.5rem;
  background-color: rgb(${({ $num }) => $num * 255}, 100, 100);
  color: rgb(${({ $num }) => 255 - $num * 255}, 0, 0);
  text-shadow: white 2px 2px 5px;
`;

const StyledHeading = styled.h1`
  margin-left: 3rem;
  color: blue;
`;

export default function CitiesPage() {
  return (
    <>
      <Head>
        <title>Cities</title>
      </Head>
      <StyledHeading>Cities</StyledHeading>
      <ul>
        {cities.map((city, index, cities) => (
          <StyledListElement $num={city.id / cities.length} key={city.id}>
            <StyledLink href={`/cities/${city.slug}`}>{city.name}</StyledLink>
          </StyledListElement>
        ))}
      </ul>
    </>
  );
}
