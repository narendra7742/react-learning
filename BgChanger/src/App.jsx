import React, { useState }  from 'react'

function App() {
  const [color, setColor] = useState("olive");

  return (
      <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
        hello Test
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='justify-center flex flex-wrap gap-3 shadow-lg bg-white px-3 py-2'>
            <button onClick={()=>{setColor("red")}} className='outline-none px-4 rounded-full text-white shadow-lg' style={{backgroundColor:"red"}}>Red</button>
          <button onClick={()=>{setColor("black")}} className='outline-none px-4 rounded-full text-white shadow-lg' style={{backgroundColor:"black"}}>black</button>
          <button onClick={()=>{setColor("green")}} className='outline-none px-4 rounded-full text-white shadow-lg' style={{backgroundColor:"green"}}>Green</button>
          <button onClick={()=>{setColor("blue")}} className='outline-none px-4 rounded-full text-white shadow-lg' style={{backgroundColor:"blue"}}>Blue</button></div>
        </div>
       </div>




  )
}

export default App
