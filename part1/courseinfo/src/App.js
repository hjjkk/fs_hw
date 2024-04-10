import { useState } from 'react'

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing buttons
      </div>
    )
  }
  return (
    <div>
      button press History: {props.allClicks.join(' ')}
    </div>
  )
}

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    setLeft(left + 1)
    setAll(allClicks.concat('L'))
    setTotal(left + right)
  }

  const handleRightClick = () => {
    setRight(right + 1)
    setAll(allClicks.concat('R'))
    setTotal(left + right)
  }

  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left add</button>
      <button onClick={handleRightClick}> right add </button>
      {right}
      <History allClicks={allClicks} />
    </div>
  )
}

export default App