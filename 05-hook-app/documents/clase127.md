## tarea

usar el useCounter, que tienen el counter, setCounter, una funcion para incrementar, decrementar. Y de alguna manera cambiar el 1 del url por el valor del counter. Ese valor se va a cambiar cada vez que se toque el boton. Con el onClick se va a hacer esa accion. 


```js
import { useState } from "react"
export const useCounter= (initialValue=10) => {

      const [counter, setCounter] = useState(initialValue)

      
      const increment= (value=1) => {
        setCounter(counter+value);
      }
     
      
      const decrement =(value) =>{
        // if (counter===0) return;
        setCounter(counter-value);
      }

      const reset =() => {
        setCounter(initialValue);

      }

      return{
        counter, 
        increment,
        decrement,
        reset
    }

}

```

**dada esa funcion tengo que aplicarla en en MultipleCustomHooks.jsx**


```js
import React from 'react'
import {useFetch} from "../hooks/useFetch";
import { useCounter } from '../hooks/useCounter';
export const MultipleCustomHooks = () => {

 const {data, isLoading, hasError} = useFetch("https://rickandmortyapi.com/api/character/1");
 //console.log({data})
 const {status, name}= !!data && data;
// if (isLoading) {
    const {increment}= 
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
  
     <button className='btn btn-primary'>
       
       next status

     </button>

   </>
  )


}





```


Lo que yo entiendo es que voy a usar funcionalidad del useCounter, particularmente la del increment. 

