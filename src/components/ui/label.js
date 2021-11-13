import React from 'react'
import styled from "styled-components";
import { color, space, layout, typography, flex } from 'styled-system';

// export const Label = styled('div')`
//   ${color}
//   ${space}
//   ${layout}
//   ${typography}
// `;

export const Label = styled('div')(
  color,
  space,
  layout,
  typography,
  {
    height: '100%'
  }
);

export const SpecialLabel = ({ title, ...rest }) => <Label {...rest}>{title}</Label>;

SpecialLabel.defaultProps = {
  title: 'Title from SpecialLabel.defaultProps',
  bg: 'bg',
  color: "white",
  textAlign: "center",
  fontWeight: "bold",
  p: 3,
  my: 1
}

export const Spacer = styled.div(space);