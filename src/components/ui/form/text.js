import React from 'react';
import {inputStyle} from './styles';
import styled from 'styled-components';

const Text = ({ ...rest }) => <input type="text" {...rest} />;

export default styled(Text)`
  ${inputStyle}
`
