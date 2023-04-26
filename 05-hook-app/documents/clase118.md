## exponer metodos del Hook

Considerar que las devtools solo se pueden usar cuando estamos en desarrollo, nostros necesitamos exponer esta funcionalidad para que alguien sea otro desarrollador o nosotros mismos desde nuestros componentes que estamos usando desde customhooks, pueda manipular ese valor del counter. 
La pregunta hay que hacerse desde nuestro useCounter. Como hariamos nosotros para cambiar el valor del counter. Tenemos que llamar el valor del setCounter, para hacerlo debemos exponer alguna funcion. 

```js
const increment= () => {
        setCounter(counter+1);
      }
    
    
      return{
        counter, 
        increment,
        // el desafio es tomar esta funcion, y mandar a llamar cuando se hace click en el boton de mas uno. 
        
    }

```

lo primero que se hace para el desafio es desestructurar en CounterWithCustomHooks.jsx

```js
 const{counter, increment}= useCounter();

  <button onClick={increment} clasName="btn btn-primary">+1</button>

```
Luego de desestructurar hay que ver la info que me da ese increment, en este caso es un void, por lo cual tengo que darle cierta logica em mi hooks de useConter.

```js
 const increment= () => {
        setCounter(counter+1);
      }

return{
        counter, 
        increment,
        decrement,
        reset
    }
// como se puede ver un indicio en el return, se aplica lo mismo del increment para el decrement y el reset.
```

Incluso se puede realizar otras validaciones como por ejemplo si quiero hacer un carrito de compras yo no quiero que haya valores menores a 0. 

```js
const decrement =() =>{
        if (counter===0) return;
        setCounter(counter-1);
      }
/// nuevamente usamos la logica del useConter para las validaciones, esto hace que nuestro codigo sea facil de leer, y nuestro .jsx sea facil de leer. 
```

Como hariamos para que se incremete o decremente el contador por ejemplo de dos en dos. 

```js
const increment= (value=1) => {
        setCounter(counter+value);
      }
   // usando esta logica se tiene un comportamiento extraño ja que al darle al boton, en lugar de incrementar el valor me salta un string [object object]. Y si miramos el state en la consola notamos que se paso de un numero a un string que dice [object, object]. Recordar que cuando tenemos el evento del onClick lo que estamos haciendo es mandar el evento del click como primer argumento a mi funcion de incrementar es mas, si se hace el console log del value, en la consola vemos todo el evento click. 

    <button onClick={ (event)=> increment(event) } clasName="btn btn-primary">+1</button>
    // el evento click no me interesa en este caso, pero si me interesa el valor del 2
    <button onClick={ ()=> increment(2) } clasName="btn btn-primary">+1</button>
   
```