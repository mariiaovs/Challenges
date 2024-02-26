import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { volumes } from "../../lib/data";
import styled from "styled-components";
import ChevronLeft from "../../icons/chevron-left.svg";
import ArrowLeft from "../../icons/arrow-left.svg";
import ArrowRight from "../../icons/arrow-right.svg";

const StyledMain = styled.main`
  background-color: var(--color-clouds);
  height: 100vh;
  margin: 0;
`;

const StyledArticle = styled.article`
  padding: 1rem;
`;

const StyledSection = styled.section`
  background-color: ${({ $color }) => $color};
  display: flex;
  padding: 1.5rem;
  gap: 1.5rem;
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  color: var(--color-clouds);
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: inherit;
  display: flex;
  text-align: ${({ $isLeft }) => ($isLeft ? "left" : "right")};
  justify-content: ${({ $isLeft }) => ($isLeft ? "flex-start" : "flex-end")};
  align-items: center;
  gap: 0.5rem;
`;

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);

  const volume = volumes[volumeIndex];
  const previousVolume = volumes[volumeIndex - 1];
  const nextVolume = volumes[volumeIndex + 1];

  if (!volume) {
    return null;
  }

  const { title, description, cover, books, color } = volume;

  return (
    <StyledMain>
      <StyledArticle>
        <StyledLink $isLeft href="/volumes">
          <ChevronLeft />
          All Volumes
        </StyledLink>
        <h1>{title}</h1>
        <p>{description}</p>
      </StyledArticle>
      <StyledSection $color={color}>
        <StyledList>
          {books.map(({ ordinal, title }) => (
            <li key={title}>
              <p>
                <i>{ordinal}</i>
              </p>
              <p>
                <strong>{title}</strong>
              </p>
            </li>
          ))}
        </StyledList>
        <Image
          src={cover}
          alt={`Cover image of ${title}`}
          width={140}
          height={230}
        />
      </StyledSection>
      {previousVolume ? (
        <div>
          <StyledLink $isLeft href={`/volumes/${previousVolume.slug}`}>
            <ArrowLeft />
            <p>
              <i>Previous Volume</i>
              <br />
              {previousVolume.title}
            </p>
          </StyledLink>
        </div>
      ) : null}
      {nextVolume ? (
        <div>
          <StyledLink href={`/volumes/${nextVolume.slug}`}>
            <p>
              <i>Next Volume</i>
              <br />
              {nextVolume.title}
            </p>
            <ArrowRight />
          </StyledLink>
        </div>
      ) : null}
    </StyledMain>
  );
}
