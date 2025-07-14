import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='text-3xl font-bold underline mb-2'>Hello World</h1>
     <h3 className='bg-green-500 text-black p-4 rounded-md  '>This is using tailwind css</h3>
    </>
  )
}

export default App
