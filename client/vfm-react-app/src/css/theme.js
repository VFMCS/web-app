import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      light: '#bedd9a',
      main: '#aed581',
      dark: '#79955a',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffb851',
      main: '#ffa726',
      dark: '#b2741a',
      contrastText: '#fff',
    },
  },
});

export default theme;
