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
  background-color: hsl(${({ $num }) => $num * 360}, 100%, 50%);
  color: hsl(${({ $num }) => 360 - $num * 360}, 100%, 50%);
  text-shadow: black 1px 1px 2px;
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
        {cities.map((city) => (
          <StyledListElement $num={city.id / cities.length} key={city.id}>
            <StyledLink href={`/cities/${city.slug}`}>{city.name}</StyledLink>
          </StyledListElement>
        ))}
      </ul>
    </>
  );
}
