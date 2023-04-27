import React from 'react'
import {useFetch} from "../hooks/useFetch";
import { useCounter } from '../hooks/useCounter';


export const MultipleCustomHooks = () => {

 const {data, isLoading, hasError} = useFetch("https://rickandmortyapi.com/api/character/${counter} ");
 //console.log({data})
 const {status, name}= !!data && data;

 const{counter, increment}= useCounter(1);
 // se que el incrementar va a cambiar el valor del counter
 // y cuando esto cambie va a volverse a redibujar
 // modifico el url, por backsticks, O CONCATENANDO

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

      
        <p className='mb-1'>{status }</p>
        <footer className='blockquote-footer'>{name} </footer>


      </blockquote>

  )
      } 
  
     <button 
      onClick= { ()=> increment() }
      className='btn btn-primary'>
      next status
     </button>

   </>
  )


}


//<button onClick={onResetForm}  className="btn btn-primary mt-2">Borrar</button>