import Link from "next/link";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;
