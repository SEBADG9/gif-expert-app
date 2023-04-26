## Dependencias del useEffect

En la clase anterior creamos nuestro propio formulario que es lo que nosotros en teoria vamos a hacer en un futuro a mantener nuestros formularios, cada vez que nuestro componente es dibujado, nuestro useEffect es disparado. Pero posiblemente nosotros no querrramos eso y hay varaias cosas que queremos que el useEffect tenga presente. Una de ellas es que no se recomienda que se ponga el useEffect sin ninguna dependenciA, esa dependencia es el segundo valor que se se va a mandar al useEffect. El primer argumento es el callback, que es la funcion que vamos a ejecutar cada vez que el useEffect se dispare , y el otro argumento es un array de dependencias. Las dependencias son las razones por las cuales queremos que el useEffect se vuelva a disparar. Nosotros en la seccion anterior vimos una forma de realizar una peticion tan pronto nuestro componente cargaba nuestro customHooks. 

```js
 useEffect(()=>{
    console.log("useEffect called!")
   }, [] );

   // linea 8 muestra que cuando nosotros ponemos un array vacia significa que queremos que el useEffect se dispare una unica vez. Y es cuando el componente es montado la primera vez. Y entiendase montado cuando el componente se renderiza, es decir lo mandamos a llamar 


```
 ![useEffect con corchete vacio](public/../../public/images/Captura%20de%20pantalla%202023-04-15%20083216.jpg)

Que pasa si quiero disparar mi useEffect o una funcion cada vez que el formulario cambia, cada vez que el formulario cambia quiero disparar algo, pero solo el formulario, no el useConter, ni cualquier otro estado, sino solamente el formulario. Aca se recomienda que hagamos efectos especificos por cada accion que querramos ejecutar. Quiero un efecto que este pendiente del for state

```js
useEffect(()=>{
    console.log("formState Changed!")
   },[formState] );

```
![useEffect con corchete vacio](public/../../public/images/Captura%20de%20pantalla%202023-04-15%20091023.jpg)

Que pasa si quiero disparar una peticion solo cuando el correo cambia

```js

 useEffect(()=>{
    console.log("email Changed!")
   },[email] );
 // en este caso camos a tener la dependencia del email 

```
![useEffect con corchete vacio](public/../../public/images/Captura%20de%20pantalla%202023-04-15%20092118.jpg)

