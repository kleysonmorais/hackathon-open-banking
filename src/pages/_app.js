import '../styles/globals.css';
import '../styles/index.css';

// Theme material-ui
import { theme } from '../styles/materialUiTheme';
import { ThemeProvider } from '@material-ui/styles';

// eslint-disable-next-line
function MyApp({ Component, pageProps }) {
  // eslint-disable-next-line
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
