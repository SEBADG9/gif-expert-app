## useCallback

este hooks esta dentro de la categoria de los hooks que memorizan valores. 
Este showIncrement que se creo es otro functional component. En el onclixk, voy a ejecutar algo que viene en las props, entonces se desestructura de las props el increment.
Luego mandamos ese showIncrement al callbackHooks. La funcion que quiero ejecutar es el de setCounter. Le ponemos const increment que al final va a ser una fincion de flecha que va a llamar al setCounter, que es tomar el counter y sumarle uno. Ahora esta funcion de incrementar.
```js
import { useState } from "react";

export const CallbackHook = () => {

  const [Counter, setCounter] = useState(10);

  const incrementFather= () => {
     setCounter(Counter+1);

  }

  return (
   
    <>
    <h1>useCallback Hook: {Counter} </h1>
    <hr />

   <ShowIncrement increment={incrementFather} />

    </>
  )
}
export const ShowIncrement = ({increment}) => {

    console.log("me volvi a generar:(")

  return (
   <button
   className="btn btn primary"
   onClick={()=> {
    increment();
   }

}
   >
    incrementar
   </button>
  )
}


```
Ahora si voy a lnavegador, le doy al boton incrementar y ya esta, se suma de a uno. Qu pasa si en ShowIncrement hago un console.log que diga "me volvi a incrementar". Vuelvo al navegador y cada click que hago me aparece el "me volvi a generar". y No deberia volverse a dibujar porque no hay nada que haya cambiado.
 Podria tomarse del react.memo y memorizar todo el componente.
 ```js
export const ShowIncrement = React.memo( ({increment}) => {

    console.log("me volvi a generar:(")

  return (
   <button
   className="btn btn-primary"
   onClick={()=> {
    increment();
   }

}
   >
    incrementar
   </button>
  )
})

 ```
Sin embargo nuevamente se vuelve a generar. Porque pasa esto? Cada vez que el componente se vuelve a dibujar esta funcion``es diferente, esta ubicada en una posicion diferente en memoria por lo cual, este objeto siempre es diferente y es por eso que no lo puedo memorizar. 
Que podemos hacer para no estar redibujando este componente?. Usualmente en ShowIncrement vamos a tener un useEffect, que solo se va a disparar una vez cuando esto se renderise y ese es el mecanismo mas comun. Pero digamos que tenemos un caso donde realmente tenemos que ser eficientes. Y que eso no se debe de redibujarse. Aqui es que viene el *useCallback* este es muy parecido al useMemo solo que sirve para memorizar por decirlo de alguna manera funciones. Y lo que regresa es una funcion para ejecutar, pero esa funcion memorizada solo se va a volver a procesar cuando algo cambie. Si usamos el snipped es muy parecida a la firma del useMemo y a la de useEffect. Que es lo que va a hacer mi funcion? es llamar al setCounter y sumar uno. Eso es exactamente lo que tenia antes, es una fincion que cuando se manda a llamar, va a ejecutar este setCounter. 
Con esta nueva funcion callback, tenemos una funcion memorizada, que para react si va cambiar. poorque va a decir "es el mismo dejemoslo asi". No a cambiado porque siempre esta apuntndo al mismo valor en memoria. Ahora si vamos al navegador se dibuja solo una vez pero luego ya no. Pero se cuenta solo una vez y porque es esto?

```js
import { useCallback, useState } from "react";

import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {

  const [Counter, setCounter] = useState(10);

  const incrementFather= useCallback(
    () => {
      setCounter (Counter+1);
    },
    [],
  )
  

//   const incrementFather= () => {
//      setCounter(Counter+1);

//   }

  return (
   
    <>
    <h1>useCallback Hook: {Counter} </h1>
    <hr />

   <ShowIncrement increment={incrementFather} />

    </>
  )
}

```
 es porque nuestra funcion solo se va a redibujar una unica vez, porque literalmente estamos volviendo a llamar la funcion del useCallback. Lo que pasa es que el counter lo tenemos memorizado, el 10 siempre va a ser 10. 
Que podemos hacer para tener el valor que estamos esperando? mas de uno va a decir, coloquemos el counter como una dependencia. Aca toco toco y toco y se esta volviend a generar. 
El setCounter lo podemos llamar con counter+1 o lo podemos llamar con un callback, que podemos llamar el valor actual del counter y sumarle 1. Ahora comprobamos en el navegador que funciona y porque? porque la funcion internamente sabe que va a tomar el valor actual del state, y le va a sumar uno cuantas veces sea necesario. Y no se va a volver a dibujar porque esta memorizada la funcion. 

```js
{ 

 const incrementFather= useCallback(
    () => {
   
    setCounter ((value)=>value+1);
},
    [],
  )
  

//   const incrementFather= () => {
//      setCounter(Counter+1);

//   }

  return (
   
    <>
    <h1>useCallback Hook: {Counter} </h1>
    <hr />

   <ShowIncrement increment={incrementFather} />

    </>
  )
}



```