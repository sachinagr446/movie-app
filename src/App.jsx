import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";
import { MovieProvider } from "./context/MovieContext";
import axios from "axios";



function App() {
  const [Loading, setLoading] = useState(true)
  const [Movie, setMovie] = useState([])
  const [Error, setError] = useState({
    error:false,
    msg:"Movie Not Found1"
  })
  const [Name, setName] = useState("marvel")
  const [List, setList] = useState([])
  const Url = `https://www.omdbapi.com/?apikey=3592bffb&s=${Name}`
  const GetMovie = async(url) =>{

  axios.get(url)
  .then((res)=>
    {
      console.log(res),
    setMovie(res.data),
    setList(res.data.Search)
    if(res.data.Response == "True"){
      // setError(Movie.Error)
      setLoading(false)
      // setList(Movie.Search)
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
   
    return ()=> clearTimeout(time)
   
   
  }, [Name])
  
  return (
    <>
    <MovieProvider value={{Loading,Error,List,Name,setName}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route exact path="/movie/:id" element={<Details/>}/>
        </Routes>
      </BrowserRouter>
      </MovieProvider>
    </>
  );
}

export default App;
