## useCounter CustomHook

Hay muchas razones por la que queremos manejar un contador, y cada vez no vamos a querer crear el estado, extraerlo y hacer el setCounter. Ya que es muy complicado para algo tan sencillo, entonces que es lo que debemos hacer?  Hacer nuestro propio customHooks.
Los customHooks, se van a encargar de hacer los counters, y esto es algo que lo vamos a poder reutilizar en nuestras aplicaciones y no volver hacerlo. En nuestra carpeta src vamos a crear nuestra carpeta de hooks, vamos a crear nuestro useCounter.js. *importante mencionar de usar la palabra use para hacer referencia de que es un kooks*
un hooks no es mas que **una funcion que retorna algo**, esto puede ser un objeto un valor booleano, un arreglo, un numero. 

```js
import { useState } from "react"
export const useCounter= (initialValue=10) => {

      const [counter, setCounter] = useState(initialValue)
    return{
        counter, 
    }

}
// El valor inicial la persona me lo va a mandar por el argumento "initialValue" linea 11
// si la persona no me lo manda el initialValue va a ser igual a 10. En este caso estoy regresando cunter que es un objeto. 
```

Siguiente paso es ir a nuestro CounterWithCustomHooks y usarlo.

```js
 const{counter}= useCounter();
 //si esto retornando un objeto lo puedo desestructurar como un objeto. Si estuviera retornando un arreglo, entonces la desestructuracion seria con llaves cuadradas. Es recomendable retornar como un objeto asi puedo desestructurar exactamente lo que necesito. 

```

Analizando en la consola, veremos que tenemos nuestos hooks del counter, con el valor inicial de 10. Si lo cambio en la consola vemos que se esta actualizando mi navegador web y eso es una buena señal 