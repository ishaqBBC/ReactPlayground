 import React from 'react'; 
 const Button = ({handleClick, text}) => {
    return (
      <button onClick={handleClick(text)}> {text} </button>
    )
  }

  export default Button; 