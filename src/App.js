import React from 'react';

import { ThemeSwitcher } from './context/ThemeContext';


import GlobalStyle from './styles/global';
import Layout from './components/Layout';


function App() {
  return (
    <ThemeSwitcher>
      {/* <ThemeProvider theme={themes[currentTheme]}> */}
        <GlobalStyle />
        <Layout />
      {/* </ThemeProvider> */}
    </ThemeSwitcher>
  );
};

export default App;
