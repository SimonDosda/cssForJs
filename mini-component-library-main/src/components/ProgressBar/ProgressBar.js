/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const OuterProgressBar = styled.div`
  position: relative;
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--radius);
  padding: var(--padding);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const Wrapper = styled.div`
  overflow: hidden;
  border-radius: 4px;
`;

const InnerProgressBar = styled.div`
  background-color: ${COLORS.primary};
  width: var(--width);
  height: var(--height);
`;

const ProgressBar = ({ value, size }) => {
  const padding = size === 'large' ? 4 : 0;
  const radius = 4 + padding;
  const height = {
    large: '16px',
    medium: '12px',
    small: '8px'
  }[size]
  return <OuterProgressBar 
    role="progressbar" 
    aria-valuenow={value} 
    aria-valuemin="0" 
    aria-valuemax="100" 
    style={{
      '--radius': radius+'px', 
      '--padding': padding+'px', 
      '--height': height
    }}
    >
    <Wrapper>
      <InnerProgressBar style={{'--width': value + '%', '--height': height}}></InnerProgressBar>
    </Wrapper>
    <VisuallyHidden>{value}%</VisuallyHidden>
  </OuterProgressBar>
};

export default ProgressBar;
