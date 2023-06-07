import React,{useState,useEffect} from 'react'

export default function App() {
    const [users, setusers] = useState()
    const [input, setinput] = useState('')
    useEffect(() => {
        async function fetchData(){
        const url =  await fetch('https://dummyjson.com/users')
        const data = await url.json()
        setusers(data.users);
        }
        fetchData()
    }, [])

    const handlechange =(e)=>{
        setinput(e.target.value)
    }
  return (
    <div className='container'>
        <input type='text' placeholder='search...' onChange={handlechange}/><br></br>
        <div>
            {
            // eslint-disable-next-line
            users&&users.filter((val)=>{
                if(input===''){
                    return val
                }
            else if(val.firstName.toLowerCase().includes(input.toLowerCase())){
                    return val
                }
            })
            .map((data,key)=>{
                return(
                    <p>{data.firstName}</p>
                )
            })}
        </div>
    </div>
  )
}
