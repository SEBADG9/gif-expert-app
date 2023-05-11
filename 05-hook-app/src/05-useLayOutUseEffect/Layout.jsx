import {useFetch, useCounter} from "../hooks/";
import { LoadingQuote, Quote } from '../03-examples';


export const Layout = () => {

const{counter, increment}= useCounter(1);
 const {data, isLoading, hasError} = useFetch(`https://rickandmortyapi.com/api/character/${counter}`);
 //console.log({data})
 const {status, name}= !!data && data;

 
 
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
        ? <LoadingQuote />
        : <Quote name= {name} status={status} />

      }

     

       
      
  
     <button 
      disabled={isLoading}
      onClick= { ()=> increment() }
      className='btn btn-primary'>
      next status
     </button>

   </>
  )


}


//<button onClick={onResetForm}  className="btn btn-primary mt-2">Borrar</button>