import { css } from "styled-components"

export const inputStyle = css`
  border: none;
  border-radius: 4px;
  box-shadow: 0 0 1px inset rgba(0, 0, 0, 0.5);
  font-size: ${(props) => props.size || '1em'};
  text-align: center;
  margin: ${props => props.margin};
  padding: 0px 0.5rem;
  height: 40px;
`