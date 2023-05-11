## optimizacion del codigo anterior

lo primero que podemos ver es que estamos importando dos hooks del mismo directorio

```js
import {useFetch} from "../hooks/useFetch";
import { useCounter } from '../hooks/useCounter';

```
Puedo crear un archivo de barril que se llame index.js y alli hacer las exportaciones

```js
export* from "./useCounter";
export* from "./useFetch";
export* from "./useForm";
```
a partir del isLoading tambien lo podemos optimizar

```js
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

```
como lo vamos a lograr, sera creando dos componentes uno que se llame  <LoadingQuote/> y otro que sera <Quote/>. 