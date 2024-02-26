import Link from "next/link";
import { introduction, volumes } from "../../lib/data";
import Image from "next/image";
import styled from "styled-components";

const StyledMain = styled.main`
  height: 100vh;
  margin: 0;
  padding: 1rem;

  @media (prefers-color-scheme: light) {
    background-color: var(--color-clouds);
    color: var(--color-earth);
  }

  @media (prefers-color-scheme: dark) {
    color: var(--color-smoke);
    background-color: var(--color-earth);
  }
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  justify-content: space-around;
  gap: 2rem;
  padding: 0;
`;

const StyledListItem = styled.li`
  text-align: center;
`;

const StyledImage = styled(Image)`
  box-shadow: var(--box-shadow-book);
  margin-bottom: 1rem;

  &:hover {
    box-shadow: var(----box-shadow-book--hover);
  }
`;

const StyledLink = styled(Link)`
  color: unset;
  text-decoration: inherit;
`;

export default function Volumes() {
  return (
    <StyledMain>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <StyledList>
        {volumes.map((volume) => (
          <StyledListItem key={volume.slug}>
            <StyledImage
              src={volume.cover}
              alt={`Cover image of ${volume.title}`}
              width={80}
              height={130}
            />
            <br />
            <StyledLink href={`/volumes/${volume.slug}`}>
              {volume.title}
            </StyledLink>
          </StyledListItem>
        ))}
      </StyledList>
    </StyledMain>
  );
}
