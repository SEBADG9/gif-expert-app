Volvamos a MultipleCustomHooks y creemos el estilo que queremos tener. Mi componente en teoria tiene dos estados, cuando esta cargando y cuando llegan los datos. 

```js

export const MultipleCustomHooks = () => {

 const {data, isLoading, hasError} = useFetch("https://rickandmortyapi.com/api/character/1");
 console.log({data, isLoading,hasError}) 

    if (isLoading) {

        return (
            <h1>
            Cargando...
            </h1>
        )
    }
Esto se puede hacer con la condicion de no poner hooks abajo ya que los mismos no deben ser renderizados de manera condicional.
Pero yo no quiero hacer esto, ya que quiero poner algun loading bonito. 
 }
 ```

 ```js

 return (
   <>
   <h1>BreakingBad Quotes</h1>
      <hr />

      <div className='alert alert-info text-center' >
        Loading...
      </div>

      <blockquote className='blockquote text-end'>

        <p className='mb-1'>Hola mundo</p>
        <footer className='blockquote-footer'> Sebastian Diaz</footer>


      </blockquote>
   
   </>
  )

 ```

![como quedan los datos con estilos](../public/images/Captura%20de%20pantalla%202023-04-25%20125530.jpg)

Yo lo unico que quiero alternar es el bloque celeste.
Algo interesante es lo que podemos alternar con el loading,

```js

if (isLoading) {
  return (<h1>Loading...</h1>  )

  // Si esta cargando las lineas de abajo no las ejecuta, porque
  // si esta esperando un return hasta ahi llega. 
}
 
```

finalmente dada la teoria pasamos a la practica pero esta vez usamos el if ternario, donde si es verdad que esta cargando usamos el bloque celeste, sino surge el hola mundo junto a mi nombre.

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

        <p className='mb-1'>Hola mundo</p>
        <footer className='blockquote-footer'> Sebastian Diaz</footer>


      </blockquote>
   
  )
      } 

```

Hasta el momento hicimos uso del isLoading, ahora haremos uso de la data

```js
 <blockquote className='blockquote text-end'>

      
        <p className='mb-1'>{data.character }</p>
        <footer className='blockquote-footer'>{data.name} </footer>


      </blockquote>
   


```
**mejorando la sintaxis**

```js

const {data, isLoading, hasError} = useFetch("https://rickandmortyapi.com/api/character/1");
/// desestructuramos algo que viene de la data, el problema es que yo no puedo desestucturar, ni el status ni el name si es null. DA UN ERROR DE JAVASCRIPT. Pero si puedo desestructural de algo que tenga valor. Pero el status y el name tienen valor de undifined.
// La sintaxis de abajo significa que si la data tiene un valor, entonces toma la data.
// este simbolo (!!) es la doble negacion, se puede investigar un poco mas.
const {status, name}= !!data && data;



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
  
   </>
  )


}





```