import axios from "axios";
import { useContext,createContext } from "react";


export const MovieContext= createContext({
   
})

export const useMovie=()=>{
    return useContext(MovieContext)
}
export const MovieProvider = MovieContext.Provider