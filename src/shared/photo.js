import React from "react";
import styled from "styled-components";

const Img = styled.img`
  width: 100%;
`;

const Photo = ({ url, title, ...restProps }) => {
  return <Img src={url} title={title} alt={title} {...restProps} />;
};

export default Photo;
