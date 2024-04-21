import React from 'react'
import { useParams, } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'
import rotten from './rotten.png'
import rotten1 from './rotten1.png'
import loading from './loading.gif'
import imdb from './imdb.jpg'
function Details() {
    const {id} = useParams()
    const Url = `https://www.omdbapi.com/?apikey=3592bffb&i=${id}`
    const [Description, setDescription] = useState([])
    const [Loading, setLoading] = useState(true)
    const [Ratings, setRatings] = useState([])
    const [Error, setError] = useState({
      error:false,
      msg:"no description"
    })
   
    
    // const { Value: value2 } = Ratings[2]
    const [genre, setgenre] = useState([])
  const GetMovie = async(url) =>{

  axios.get(url)
  .then((res)=>
    {
      console.log(res),
    setDescription(res.data)

    if(res.data.Response == "True"){
      // setError(Movie.Error)
      setLoading(false)
      // setList(Movie.Search)
      setgenre(res.data.Genre.split(","))
      setRatings(Description.Ratings)
    }
      else{
        setError({
          error:true,
          msg: res.data.Error
        })
      }
     

    
  }
  )
    .catch((error)=>console.log(error));
   
   
  }

  useEffect(() => {
    setLoading(true)
    setError({
      error:false
    })
    let time = setTimeout(()=>{
      GetMovie(Url)
      
      
    },1000)
    console.log(Ratings)
    return ()=> clearTimeout(time)
   
   
  }, [id])
 


  return (
    <>
    <div>
    
    {!Error.error && Loading && <div class="lds-roller mt-10"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>}
      {Error.error && <h1>{Error.msg }</h1> }
    {Error.error && <h1>{Error.msg}</h1>}
    </div>
    <div className='container mx-0 my-0 p-0  text-left flex flex-col '>
        <div className=' mx-0 w-fit font-sans text-4xl'><h1>{Description.Title}</h1></div>
        <div className='gap-4 w-fit mt-2 mb-4'>

        <span  className='mx-1 text-lg'>{Description.Year} </span>|<span className='mx-1 text-lg'> {Description.Rated}</span>|<span className='mx-1 text-lg'> {Description.Runtime}</span>
        </div>
        <div className='flex  flex-row gap-10 w-[100%] text-left'>

        <img src={Description.Poster} className='w-1/4 ' alt="" />
        <div className='gap-1 w-2/3 flex flex-col'>
          <h1 className= 'mb-3 text-white order-last lg:order-1 text-3xl font-extrabold '>Synopsis</h1>
          <p className='text-left order-last lg:order-2 w-auto'>{Description.Plot}</p>
          <div className='mt-3 mb-1 text-xl order-3'>Release date: {Description.Released}</div>
          <div className='flex order-4 gap-3'>
            {genre.map((gen)=>{
              return <span className=' border-2 border-white rounded-2xl  my-1 w-fit p-1'>{gen}</span>
            })}
            </div>
            <div className='rating hidden lg:block  order-5 lg:flex gap-4 my-12'>
              <span className='imdb border-r-2 pr-4 text-left'>
                
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/863px-IMDB_Logo_2016.svg.png" className='lg:w-14' alt="" />
                <div className='flex '> <p className='font-bold text-lg'>{Description.imdbRating}</p><p className='translate-y-1'>/10</p><p className='px-2 translate-y-2'>({Description.imdbVotes})</p></div>
               
              </span>
              <span className='rottten mr-1 w-fit border-r-2 pr-4 text-left'>
                
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Rotten_Tomatoes_logo.svg/900px-Rotten_Tomatoes_logo.svg.png?20230226041307" className='w-32 lg:w-48' alt="" />
                <div className='flex py-2 text-lg'> 56%</div>
               
              </span>
              <span className='rottten p-0 m-0 w-full h-full  '>
                
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Metacritic_logo.svg/264px-Metacritic_logo.svg.png" className='lg:w-24 w-64 lg:h-9 h-full ' alt="" />
                <div className='flex py-2 text-lg'> 70%</div>
               
              </span>
              
            </div>
        </div>
        
        </div>
        <div className='rating  lg:hidden  flex gap-4 my-12'>
              <span className='imdb text-left border-r-2'>
                
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/863px-IMDB_Logo_2016.svg.png" className='w-14' alt="" />
                <div className='flex  '> <p className='font-bold text-lg'>{Description.imdbRating}</p><p className='translate-y-1'>/10</p><p className='px-2 translate-y-2'>({Description.imdbVotes})</p></div>
               
              </span>
              <span className='rottten mr-1 w-full border-r-2 pr-4 text-left'>
                
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Rotten_Tomatoes_logo.svg/900px-Rotten_Tomatoes_logo.svg.png?20230226041307" className='w-32' alt="" />
                <div className='flex py-2 text-lg'>56%</div>
               
              </span>
              <span className='rottten p-0 m-0 w-full h-full  '>
                
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Metacritic_logo.svg/264px-Metacritic_logo.svg.png" className=' h-full ' alt="" />
                <div className='flex py-2 text-lg my-1'>70%</div>
               
              </span>
            
              
            </div>
    </div>

    </>
  )
}

export default Details
