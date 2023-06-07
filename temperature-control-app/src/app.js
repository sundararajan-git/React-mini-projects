import React, { useState } from 'react'

export default function App() {
    const [temp,setemp] = useState(0)
    const [color ,setcolor] = useState('cold')
    const increment =()=>{
        if(temp===30)return
        if(temp>=15){
            setcolor('hot')
        }
        setemp(temp+1)
    }
    const decrement =()=>{
        if(temp===0)return
        if(temp<17){
            setcolor('cold')
        }
        setemp(temp-1)
    }
  return (
    <div className='body'>
    <div className='container'>
        <div className='display'><p className={color}><span>{temp}°C</span></p></div>
        <button id='btn1' onClick={increment}>+</button>
        <button id='btn2' onClick={decrement}>-</button>
    </div>
    </div>
  )
}
