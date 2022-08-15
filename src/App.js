import './App.css';
import * as React from 'react';
import { useState, useEffect } from "react";
import { HashRouter } from 'react-router-dom';
import RootContent from './components/RootContent';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import { ColorModeContext } from './components/ColorModeToggle';

function App() {

  // const currentTheme = useState(() => {
  //   // getting stored value or default "light" mode
  //   const saved = localStorage.getItem("theme_mode");
  //   return saved || "light"
  // })

  // const theme = createTheme({
  //   palette: {
  //     mode: currentTheme == 'light' ? 'light' : 'dark'
  //   }
  // })

  // const theme = useTheme();
  // const colorMode = React.useContext(ColorModeContext);


  var mode = useState(() => {
    // getting stored value or default "light" mode
    const saved = localStorage.getItem("theme_mode");
    return saved || "light"
  },
    useEffect(() => {
      localStorage.setItem("theme_mode", theme.palette.mode === 'dark' ? "light" : "dark")
    }
    )
  )
  // const [mode, setMode] = React.useState('light');

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        mode = (mode === 'light' ? 'dark' : 'light');

      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          colorMode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <RootContent />
        </HashRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
