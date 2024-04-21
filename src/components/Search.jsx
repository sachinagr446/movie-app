import React from 'react'
import { useMovie } from '../context/MovieContext'

function Search() {
    const {Name,setName,Loading,Error}=useMovie()
  return (
    <div className=''>
      <h1 className='hi text flex justify-center mb-3 items-start'>Movie App</h1>
      <input type="text" className='colsd border rounded-3xl mb-3 px-4 w-[70%] lg:w-[20%] h-10' placeholder='Enter Movie Name' value={Name} onChange={(e)=>setName(e.target.value)} />
      <div>
      {!Error.error && Loading && <div class="lds-roller mt-10"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>}
      {Error.error && <h1>{Error.msg }</h1> }

      </div>
    </div>
  )
}

export default Search
