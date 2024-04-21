import React from 'react'
import { useMovie } from '../context/MovieContext'
import Movies from './Movies'
import Search from './Search'


function Home() {
   

  return (
    <div className='m-0 p-0'>

        <Search/>
      <Movies/>
    </div>
  )
}

export default Home
