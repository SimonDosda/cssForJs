import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const Wrapper = styled.label`
  position: relative;
  display: block;
  width: var(--width);
  border-bottom: 1px solid black;
  color: ${COLORS.gray700};

  &:hover {
    color: black;
  }
  .icon {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  input {
    width: 100%;
    border: none;
    padding-left: calc(var(--font-size) + 8px);
    outline-offset: 2px;

    color: inherit;
    font-size: var(--font-size);
    font-weight: 700;

    &::placeholder {
      font-weight: normal;
      color: ${COLORS.gray500};
    }
  }
`;

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const pxSize = size === "large" ? 21 : 16;
  return (
    <Wrapper style={{ "--width": width + "px", "--font-size": pxSize + "px" }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <Icon id={icon} size={pxSize} className="icon" />
      <input id="input" placeholder={placeholder}></input>
    </Wrapper>
  );
};

export default IconInput;
