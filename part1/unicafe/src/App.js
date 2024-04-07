import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
      <tbody>
        <tr>
          <td>{text}</td>
          <td>{value}</td>
        </tr>
      </tbody>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  const average = (good - bad) / total
  const positive = good / total
  if (total === 0) {
    return (<p>No feedback given</p>)
  }
  return (
    <table>
      <StatisticLine text={'good'} value={good} />
      <StatisticLine text={'neutral'} value={neutral} />
      <StatisticLine text={'good'} value={bad} />
      <StatisticLine text={'all'} value={total} />
      <StatisticLine text={'average'} value={average} />
      <StatisticLine text={'positive'} value={(positive * 100).toFixed(1).concat('%')} />
    </table>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button onClick={() => setGood(good + 1)} text="good" />
        <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
        <Button onClick={() => setBad(bad + 1)} text="bad" />
      </div>


      <h1>statistics</h1>

      <Statistics good={good} neutral={neutral} bad={bad} />


    </div>
  )
}

export default App