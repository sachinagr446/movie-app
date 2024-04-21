import React from 'react'
import { useMovie } from '../context/MovieContext'
import { NavLink } from 'react-router-dom'

function Movies() {
    const {List,}= useMovie()
    console.log(List)
  return (
    <div>
    
       <section className='grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
        
      {List && List.map((Movie)=>{
          return <NavLink to={`movie/${Movie.imdbID}`} className={`my-4`} key={Movie.imdbID}>
          <div  className='w-11/12  h-96 text-center flex flex-col justify-center items-center'>
            
                <img src={Movie.Poster} className='border hell rounded-lg shadow-lg hover:translate-y-1 hover:scale-110 h-[90%]  w-[100%]   ' alt="" />
          
          
          <h2 className=' mt-4 hell font-mono font-medium mb-5 transition-shadow hover:translate-y-2 '>{Movie.Title.slice(0,40)}</h2>    
      </div>
      </NavLink> 
      })}
      </section> 
    </div>
  )
}

export default Movies
