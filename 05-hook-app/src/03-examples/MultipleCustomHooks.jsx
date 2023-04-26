import React from 'react'
import {useFetch} from "../hooks/useFetch";
export const MultipleCustomHooks = () => {

 const {data, isLoading, hasError} = useFetch("https://rickandmortyapi.com/api/character/1");
 console.log({data})

// if (isLoading) {
//   return (<h1>Loading...</h1>  )
// }
 

 

  return (
   <>
   <h1>BreakingBad Quotes</h1>
      <hr />

      {
        isLoading
        ? (
          <div className='alert alert-info text-center' >
          Loading...
        </div>
      )
      :( 
        <blockquote className='blockquote text-end'>

        <p className='mb-1'>{data[1].character }</p>
        <footer className='blockquote-footer'>{data[1].name} </footer>


      </blockquote>
   
  )
      } 

     
     
   </>
  )


}


