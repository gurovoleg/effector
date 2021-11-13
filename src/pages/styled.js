import React from 'react';
import styled, {ThemeProvider, createGlobalStyle} from 'styled-components';
import { Label, Spacer, SpecialLabel } from '../components/ui/label'

const Styled = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <h1>TestContainer</h1>

      <div>THEME SETUP:</div>
      <pre>{JSON.stringify(theme, null, 0)}</pre>

      {/* Box has access to colors defined in theme object. So we can use them of set other (not pre-defined)*/}
      <Label color="white" bg="bg" width={0.5}>width = 0.5 - 50%</Label>

      <Label color="white" bg="bg" width={3} mt={2} p={3}>
        width = theme.sizes[3] - 800px, padding = space[3] - 16px, margin-top = space[2] - 8px
      </Label>

      <Label textAlign="center" fontWeight="bold" color="white" bg="bg" p={3} mt={[1, 2, 3, 4]}>
        width 100%, margin-top depends on the breakpoints: '600px - 4px', '800px - 8px', '1000px - 16px', '1200px - 32px'
      </Label>

      <span>This is Spacer with margin-bottom = 100px</span>
      <Spacer mb={100} />

      <SpecialLabel/>
      <SpecialLabel title="SpecialLabel" bg="red"/>
      <Label color="white" bg="bg" ml='small' p={3}>
        Label with margin-left as theme.space.small
      </Label>

    </ThemeProvider>
  )
}

export default Styled

export const theme = {
  // used with media queries when we pass array to property (mt={[0,1,2]})
  breakpoints: [ '600px', '800px', '1000px', '1200px' ],
  colors: {
    bg: '#07c',
    white: '#fff'
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: [100, 200, 400, 800],
  fontFamily: 'system-ui, sans-serif'
};

// aliases
theme.space.small = 4;

const GlobalStyle = createGlobalStyle`
  * {
    font-family: ${theme.fontFamily};
  }
`;
