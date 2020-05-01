import { Link } from "react-router-dom";
import styled from "styled-components";

const TransparentLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: inherit;
  }
`;

export default TransparentLink;
