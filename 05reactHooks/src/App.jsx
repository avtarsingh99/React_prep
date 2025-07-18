import { useState, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [charInclude, setCharInclude] = useState(false)
  const [numInclude, setNumInclude] = useState(false)
  const [password, setPassword] = useState('')

  const passRef = useRef(null)

  function copyText() {
    window.navigator.clipboard.writeText(password)
    passRef.current.select()
    // alert(password + " copied to clipboard")
  }

  useEffect(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(charInclude) str += "!@#$%&*^+"
    if(numInclude) str += "01234567890"

    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
    console.log(pass)

  } , [length, charInclude, numInclude, setPassword])

  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md align-center rounded-lg px-4 py-3 my-8 bg-gray-100 text-orange-500'>
     <h1 className='text-4xl font-bold text-blue-500 py-3 '>Password Generator</h1>
     <div className='flex shadow rounded-lg overflow-hidden mb-4' >

     <input 
     className='outline-none w-full py-1 px-3' 
     type='text' 
     value={password} 
     placeholder='Password' 
     ref={passRef}
     readOnly />

     <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 rounded-xl'
     onClick={copyText}
     >Copy</button>
     </div>

     <div className='flex px-3 py-0.5 gap-x-2 shadow rounded-lg overflow-hidden mb-4' >
     <input type='range' 
     value={length} 
     min={4}
     max={16}
     onChange={(e)=> {setLength(e.target.value)}}
      />
     <label>Length ({length})</label>
     </div>

     <div className='flex px-3 py-0.5 gap-x-2 shadow rounded-lg overflow-hidden mb-4' >
     <input type='checkbox' 
     defaultChecked={charInclude}
     id='charInput'
     onChange={()=>{
      setCharInclude((prev) => !prev)
     }}
      />
     <p>Inclue character</p>
     </div>

     <div className='flex px-3 py-0.5 gap-x-2 shadow rounded-lg overflow-hidden mb-4' >
     <input type='checkbox' 
     defaultChecked={numInclude}
     id='numInput'
     onChange={()=>{
      setNumInclude((prev) => !prev)
     }}
      />
     <label>Include Number</label>
     </div>
     </div>
     
    </>
  )
}

export default App
