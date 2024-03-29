const Header = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.part1} num={props.exercises1}/>
      <Part name={props.part2} num={props.exercises2}/>
      <Part name={props.part3} num={props.exercises3}/>
    </div>
  )
}

const Part = (props) => {
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
      <Content  part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3}/>
      <Total num = {exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App