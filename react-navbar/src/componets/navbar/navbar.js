import React, { useState } from 'react'
import navbaritems from './navbaritems'
import './navbar.css'
export default function Navbar() {
    const [menubar,setmenubar] = useState(false)
    const handlemenubar = ()=>{
        setmenubar(!menubar)
    }
  return (
    <div>
        <nav className='navbar'>
            <div className='head'>
                <h1>REACT <i className="fa-brands fa-react"></i></h1>
            </div>
            <div onClick={handlemenubar} className='menubar'>
            <i className={(menubar)?"fa-solid fa-xmark":"fa-solid fa-bars"}></i>
            </div>
            <ul className={(menubar)?'items-active':'items'} >{
                navbaritems.map((data,index)=>{
                    return(
                        <li className='li' key={index}><a href={data.url}>{data.item}</a></li>
                    )
                })
                }
            <button>Sign up</button>
            </ul>
        </nav>
    </div>
  )
}
