import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  border-radius: 8px;
  isolation: isolate;

  &:hover {
    cursor: pointer;
    color: black;
  }

  select {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
  }
  .value {
    padding: 12px 52px 12px 16px;
    color: inherit;
    background-color: transparent;
    border: none;
  }
  .icon {
    z-index: -1;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    right: 16px;
  }
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <select value={value} onChange={onChange}>
        {children}
      </select>
      <div className="value">{displayedValue}</div>
      <Icon id="chevron-down" size={24} className="icon"></Icon>
    </Wrapper>
  );
};

export default Select;
