import React from 'react'
const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

const total = course.parts.reduce((a,b) => a + b.exercises, 0); 

const Header = ({course}) => {
  return(
    <>
    <h1>{course}</h1>
    </>
  )

}

const Part = ({name, exercises}) => {
  return (
    <p>
      {name} {exercises}
    </p>
  )
}
const Content = ({parts}) => {
return(
  <>
    { parts.map(part => (<Part name={part.name} exercises={part.exercises} />) )}
  </>
)
}


const Total = ({total}) => {
return(
  <>
    <div>
      <p>Number of exercises {total}</p>
    </div>
  </>
)
}

const App = () => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <Total total={total} />
    </div>
  )
}

export default App; 