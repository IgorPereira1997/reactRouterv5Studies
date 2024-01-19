import React, { useState, createContext , useMemo } from "react";
import { ThemeProvider } from 'styled-components';
import themes from './../styles/themes';

export const ThemeContext = createContext('dark');

export function ThemeSwitcher(props){

  const [theme, setTheme] = useState('dark');

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark;
  }, [theme]);

  function handleToggleTheme(){
    setTheme((prevState) => (
      prevState === 'dark'
        ? 'light'
        : 'dark'
    ));
  }

  return(
    <ThemeContext.Provider
      value={{
        theme,
        onToggleTheme: handleToggleTheme
      }}
    >
      <ThemeProvider theme={currentTheme}>
        {props.children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
