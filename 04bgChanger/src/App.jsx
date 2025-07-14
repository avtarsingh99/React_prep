import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  return (
    <div className='flex gap-4 justify-center items-center h-screen w-screen' style={{backgroundColor: color}}>
      <button className='bg-red-500 text-black p-2 rounded-md border-2 border-red-500' onClick={() => setColor('red')}>Red</button>
      <button className='bg-blue-500 text-black p-2 rounded-md border-2 border-blue-500' onClick={() => setColor('blue')}>Blue</button>
      <button className='bg-green-500 text-black p-2 rounded-md border-2 border-green-500' onClick={() => setColor('green')}>Green</button>
      <button className='bg-yellow-500 text-black p-2 rounded-md border-2 border-yellow-500' onClick={() => setColor('yellow')}>Yellow</button>
      <button className='bg-purple-500 text-black p-2 rounded-md border-2 border-purple-500' onClick={() => setColor('purple')}>Purple</button>
      <button className='bg-orange-500 text-black p-2 rounded-md border-2 border-orange-500' onClick={() => setColor('orange')}>Orange</button>
      <button className='bg-pink-500 text-black p-2 rounded-md border-2 border-pink-500' onClick={() => setColor('pink')}>Pink</button>
    </div>
  )
}

export default App
