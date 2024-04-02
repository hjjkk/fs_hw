const Header = (x) => {
  console.log(x)
  return (
    <div>
      <h1>{x.name}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.props[0].name} num={props.props[0].exercises}/>
      <Part name={props.props[1].name} num={props.props[1].exercises}/>
      <Part name={props.props[2].name} num={props.props[2].exercises}/>
    </div>
  )
}

const Part = (props) => {
  return (
    <p>{props.name} {props.num}</p>
  )
}

const Total = (props) => {
  let sum = 0
  props.props.forEach(element => {
    sum += element.exercises
  });
  return (
    <p>Number of exercises {sum}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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

  return (
    <div>
      <Header name={course}/>
      <Content  props={parts}/>
      <Total props = {parts}/>
    </div>
  )
}

export default App