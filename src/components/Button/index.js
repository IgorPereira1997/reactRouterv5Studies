import React, { useContext } from "react";
import PropTypes from "prop-types";

import { ThemeContext } from "./../../context/ThemeContext";

export default function Button(props){

  //console.log({ThemeContext});

  const {theme} = useContext(ThemeContext);

  return(
    <React.Fragment>
      <button
        onClick={props.onClick}
      >
        {theme === 'dark' ? '🌞' : '🌚'}
      </button>
    </React.Fragment>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired
}
