## useState

actualmente la app cuando doy click se pierde toda la informacion, el desafio es que cuando le de click en +1, aumente el contador.

## nuestro estado actual

```js
const [{counter1,counter2,counter3}, setCounter] = useState({
    counter1:10,
    counter2:20,
    counter3:30,

})
// mi estado es un objeto que tiene tres propiedades, cuando dentro del return mando a llamar esta esta instruccion 
 ()=>setCounter(counter1+1)
 // no hay ningun error pero si nuestro setCounter esta cambiando el estado, 
 //(ir a la consola), si vamos a la consola se puede ver justamente que el estado del componente es un objeto que tiene counter1, counter2, counter 3. con sus respectivos valores. Si toco el boton el estado pasa a ser 11. Nada me impide  mutar el estado dentro de un useState.
 // La forma en que persista la informacion es de la siguiente manera;

   ()=>setCounter( {
        counter1:counter1 + 1,
        counter2:counter2,
        counter3:counter3,
     } )

     // cuando tenemos un objeto en el useState hay que preservar los valores anteriores, especialmente si lo que queremos es cambiar una nueva propiedad. Recordad que cuando llamamos un setCounter, este objeto de arriba sera el nuevo valor del state.
```
Esta sintaxis es muy fea, imaginar un state que tenga muchas propiedades, hay una forma sencilla de mantener todo el estado y cambiar lo que me interesa y es usando el operador spread. Y para usar el operador spread lo que debemos hacer es cambiar nuestro estado actual de la siguiente manera..

## el cambio de estado para uso de spread operator

```js
const [state, setCounter] = useState({
    counter1:10,
    counter2:20,
    counter3:30,

})

const{counter1,counter2,counter3}= state;


// de este modo en el setCounter lo rediseñamos de la siguiente forma

 ()=>setCounter( {
      ...state,
        counter1:counter1 + 1,
        
     } )

```
