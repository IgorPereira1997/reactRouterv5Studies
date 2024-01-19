import React, {useContext} from 'react';

import { Container } from './styles';

import { ThemeContext } from "./../../context/ThemeContext";
import Button from '../Button';

export default function Footer() {

  const { onToggleTheme } = useContext(ThemeContext);

  return (
    <Container>
      <span>Igor's JStack Blog. All Rights Reserved.</span>
      <Button onClick={onToggleTheme}></Button>
    </Container>
  );
}
