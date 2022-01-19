import React from 'react'; 

const Hello = (props) => {
  function mulitplyName () {
    let string = ''
    for (let i = 0; i < props.name.length ; i ++){
      string += props.name + ' '; 
    }
    return string;
  }
return(
  <p> {mulitplyName()} </p>
)
}

export const App = () => {
  return(
    <>
    <h1> Hello World </h1>
    <Hello name="ishaq"/> 
    <Hello name="andre" />
    <Hello name="four" />
    <Hello name="three" />
    <Hello name="neo" /> 
    </>
    
  )
}
