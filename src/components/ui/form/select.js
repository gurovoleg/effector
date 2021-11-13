import React from 'react';
import {inputStyle} from './styles';
import styled from 'styled-components';

const Select = ({ options, ...rest }) => {
  return (
    <select {...rest}>
      {options.map(user => <option key={user.id} value={user.id}>{user.name}</option>)}
    </select>
  )
}

export default styled(Select)`
  ${inputStyle}
  text-align: inherit;
  background: #fff;
  min-width: 200px;
`
