## useMemo

Nos va a audar en el proceso de ciertas tareas pesadas. 

```js
const heavyStuff = (iterationNumber=100) =>{
      for(let i =0; i<iterationNumber; i++)  {
     console.log("ahi vamos...");

     

      }
      return `${iterationNumber} iteraciones realizadas `;
}
// Esta funcion es importante hacerla fuera del componente para que no vuelva a asignar en la memoria la funcion
```

```js
<h4>{heavyStuff(5000) } </h4>
// En este caso notamos que indistintamente el boton que toquemos se dibuja codigo que en un boton si queremos que se dibuje y en otro no. 
```

```js
<h4>{heavyStuff(counter) } </h4>

 const{counter, increment}= useCounter(4000);// linea 18 de MemoHook, 
 // cada vez que toque el boton de incrementar entonces deberiamos de volver a 
 // ejecutar el proceso de la cantidad +1 (cada vez que toco el mas un pasa de 4000 a 4001)
 // Pero ese proceso se deberia de ejecutar si el valor del counter cambia, no deberia de 
 // volverse a ejecutar si el valor del true o false de nuestro show, cambia. 
 // Aqui viene el uso del useMemo. Yo puedo memorizar el resultado para que cuando react vuelva a redibujar el componente, no vuelva a reprocesar este proceso pesado. Como hacemos para que esto no se vuelva a disparar cada vez que hay un cambio en nuestro estado del componente?. Lo hacemos con el useMemo

  const memorizeValue= useMemo( () => heavyStuff(counter), [counter] )
  // se parece mucho al useEffect su estructura, el useMemo memoriza un valor, lo que sea que retorne, y se va a mantener asi a menos de que las dependencias del useMemo cambien, el primer argumento es una fincion que debe regresar algo. Yo lo que voy a mandar a llamar es el heavyStuff, que es el procedimiento. Queremos que se reprocese el valor del counter, pero se va a reprocesar si y solo si las dependencias, en este caso quiero memorizarlo cada vez que el valor del counter cambie. 

  
   <h4>{memorizeValue} </h4>

   // Ahora si toco el mas1 se vuelve a disparar, pero si toco el boton del show and hide, no se vuelve a disparar el proceo porque el valor memorizado no cambio, es decir la dependencia no ha cambiado en consecuencia 
   

```