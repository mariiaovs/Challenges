import { StyledLink } from "@/components/StyledLink";
import { cities } from "@/lib/data";
import Head from "next/head";
import { useRouter } from "next/router";
import styled from "styled-components";

const StyledTable = styled.table`
  width: auto;
  border: 1px solid blue;
  text-align: left;
  margin: 2rem 1rem;
`;

export default function City() {
  const router = useRouter();

  if (!router.query) {
    return null;
  }
  const { slug } = router.query;
  const city = cities.find((city) => city.slug === slug);

  return (
    <>
      <Head>
        <title>{city.name}</title>
      </Head>
      <StyledLink href="/cities">Back to all cities</StyledLink>
      <StyledTable>
        <tbody>
          <tr>
            <th>City</th>
            <td>{city.name}</td>
          </tr>
          <tr>
            <th>Country</th>
            <td>{city.country}</td>
          </tr>
          <tr>
            <th>Population</th>
            <td>{city.population}</td>
          </tr>
          <tr>
            <th>Description</th>
            <td>{city.description}</td>
          </tr>
        </tbody>
      </StyledTable>
    </>
  );
}
