import './App.css';
import * as React from 'react';
import { HashRouter } from 'react-router-dom';
import RootContent from './components/RootContent';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ColorModeContext } from './components/ColorModeToggle';



function App() {
  const [mode, setMode] = React.useState('light');

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          const newMode = prevMode === 'light' ? 'dark' : 'light';
          return (newMode);
        });
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {/* <TitleContext.Provider value={title}> */}
          <HashRouter>
            <RootContent />
          </HashRouter>
        {/* </TitleContext.Provider> */}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
