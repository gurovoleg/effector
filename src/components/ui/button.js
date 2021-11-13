import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  margin-right: ${props => props.marRight ? '0.5rem' : 'inherit'};
  line-height: 1;
  height: ${props => props.height || 'auto'};
  padding: ${props => props.height ? '0 1rem' : '0.5rem 1rem'};
  width: ${props => props.width || 'auto'};
  background: ${({ primary }) => (primary ? "#337ab7" : "#f0f0f0f")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};  
  outline: none;
  border: none;
  border-radius: 4px;
  font-size: ${props => props.size || '1rem'};
  text-transform: ${props => props.textTransform || 'none'};
  color: ${(props) => (props.primary ? "#f0f0f0" : "#1c1c1c")};
  cursor: ${props => props.disabled ? 'auto' : 'pointer'};
  user-select: none;
  transition: 0.2s;
  
  &:hover {
    transform: ${props => props.disabled ? '' : 'scale(1.05)'};
  }
  
  &:active {
    transform: scale(0.95);
    opacity: 0.9
  }
`;

export const SuccessButton = styled(Button)`
  background: #5cb85c;
  color: #f0f0f0;
`;

export const DangerButton = styled(Button)`
  background: red;
  color: #f0f0f0;
`;

export default Button;
