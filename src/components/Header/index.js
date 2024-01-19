import React, { useContext } from 'react';

import { Container } from './styles';

import { ThemeContext } from "./../../context/ThemeContext";
import Button from '../Button';

export default function Header() {

  const { onToggleTheme } = useContext(ThemeContext);

  return (
    <Container>
      <h1>Igor's JStack Blog</h1>
      <Button onClick={onToggleTheme}></Button>
    </Container>
  );
}
