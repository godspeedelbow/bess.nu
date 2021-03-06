import React from "react";

import styled from "styled-components";

export default function Loading() {
  return (
    <LoadingContainer>
      <div></div>
      <div></div>
    </LoadingContainer>
  );
}
const LoadingContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
  margin: 30% calc(50% - 64px / 2);

  div {
    position: absolute;
    border: 4px solid gray;
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1.5s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  div:nth-child(2) {
    animation-delay: -0.5s;
  }
  @keyframes lds-ripple {
    0% {
      top: 28px;
      left: 28px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: -1px;
      left: -1px;
      width: 58px;
      height: 58px;
      opacity: 0;
    }
  }
`;
