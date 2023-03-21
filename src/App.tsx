import { ThemeProvider } from 'styled-components';
import Default from './themes/Default';
import GlobalStyles from './styles/GlobalStyles';
import Home from './pages/Home';
import { TempProvider } from './context/TempContext';

const App = () => {
  return (
    <ThemeProvider theme={Default}>
      <GlobalStyles />
      <TempProvider>
        <Home />
      </TempProvider>
    </ThemeProvider>
  )
}

export default App
