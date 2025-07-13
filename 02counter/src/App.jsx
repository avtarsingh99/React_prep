import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [title, setTitle] = useState("Counter")

  const incCounter = () => {
    if (count < 20) {
      setCount(count + 1)
      setTitle("Counter")
    }
    else{
      setTitle("You can't increase the count more than 20")
    }
  }

  const decCounter = () => {
    if (count > 0) {
      setCount(count - 1)
      setTitle("Counter")
    }
    else{
      setTitle("You can't decrease the count below 0")
    }
  }

  return (
    <>
      <h1>{title}</h1>
      <button onClick={incCounter}>Increase Now</button>
      <button onClick={decCounter}>Decrease Now</button>
      <button onClick={() => setCount(0)}>Reset Now</button>
      <p>Count : {count}</p>
    </>
  )
}

export default App
