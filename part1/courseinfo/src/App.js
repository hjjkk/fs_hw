const Header = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <p>{props.name} {props.num}</p>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.num}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header name={course}/>
      <Content name={part1} num={exercises1} />
      <Content name={part2} num={exercises2} />
      <Content name={part3} num={exercises3} />
      <Total num = {exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App