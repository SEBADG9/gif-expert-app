QUE ES UN REDUCER?

-No es mas que una funcion comun y corriente.
-Debe ser una funcion pura 
-Debe retonar un nuevo estado
-Usualmente solo recibe dos argumentos, que son (initialState) y la accion a ejecutar,

Habalando de que es una funcion comun y corriente, realmente es asi. 

```js
const miFuncion = () => {

}

//Si quiero trabajar con una lista de tareas por hacer o toDo entonces yo voy a renombrar esa funcion a algo que tenga mas sentido logico como todoReducer

const todoReducer = () => {

}
```

**en cuanto a que debe de ser una funcion pura** 

- No debe tener efectos secundarios, significa que mi funcion reducer debe de resolver todo lo que se pide internamente. Sin necesidad de llamar otras funciones. 
- No debe de tener tareas asincronas
- Debe retornar siempre un nuevo estado. *este quizas es el punto mas dificil de comprender al inici, pero lo haremos bastantes veces*. 
- No debe de llamar el localStorage o sessionStorage dentro de mi reducer.
- Para modificar el state, no debe de requerir mas que una accion. Y esa accion puede tener o no argumentos, pero eso lo vamos a hablar pronto. 
  
```js
const initialTodos= [{
    id:1,
    todo:'comprar pan',
    done: false
}];

const todoReducer= (state= initialTodos, action) =>{

return state;

// si ejecutaramos esta funcion

let todos = todoreducer();
console.log(todos);
// lo que mirariamos en consola es lo siguiente
[{...}] 
   0: {id:1, todo:'Comprar pan', done:false}
   length:1

   //Para que hacer todo esto! Supongamos que nos contratan para una empresa que
   // le debemos dar mantenimiento a una aplicacion que no creamos, cuando la abrimos
   // nos damos cuenta que esa app dispara acciones por cualquier lado.En una pantalla se
   // modifican los usuarios, en otra se hace otra cosa y en la misma pantalla se estan modificando los valores. Entonces se hace dificil saber donde se hacen las modificaciones, en este caso a los toDo. Pero si escuchamos que tiene uno o varios reducers, significaria que en esa funcion reducer es donde estan las acciones de mi aplicacion, y si quiero ver que acciones son posibles, iria a ver esos reducers, y ahi tendrian que estar las manipulaciones de cada una de esas acciones que esa aplicacion puede realizar.

}
```
**ciclo de vida de un reducer**

 ![Funcionamiento](public/../../public/images/Captura%20de%20pantalla%202023-04-25%20192616.jpg)


El estado inicial es un arreglo que tiene todo , que en este caso solo es uno, luego el componente se va a mostrar en pantalla y el state, luego el state le va a pasar esos toDo a la pagina o a la vista para que los muestre en pantalla. Aqui viene lo interesante, ya que el usuario que esta viendo esa pagina decide agregar un nuevo toDo, pero la pagina no habla directo con el state. Porque si lo hacemos asi lo estariamos mutando y eso es una accion que no se hace. En cambio la pagina o la vista va a crearse una accion. **esa accion es la de agregsrse un nuevo ToDo** Quiero agregar un nuevo elemento a la lista entonces se crea una accion, esa accion es la que nosotros le vamos a mandar al *reducer* el reducer tiene todo el mapa de las acciones que puede realizar. Es decir tiene los plannos para el procedimiento de borrar, agregar, actualizar. En este caso este reducer solo tiene estas trees acciones. Pero si nosotros le mandamos una accion que el reducer no sabe que hacer, simplemente regresa al estado y dice "ok no me importa, ese es el estado que tengo" PERO en esta circunstancia nuestra accion es agtregar un nuevo toDo y el reducer tiene la logica para agregar un nuevo toDo. Entonces entra a ese cuadrito anaranjado que dice agregar , ejecuta ese procedimiento, y ese procedimiento de agregar va a modificar el state el cual va a cambiar, va a notificar a la vista, de que hay un nuevo toDo o de igual manera si sucede un error le va a notificar. **entonces la idea es que toda la info fluya en una sola via y controlada** estas tambien son las bases del redux. 