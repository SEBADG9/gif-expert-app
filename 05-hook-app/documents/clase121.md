## useEffect unmount Cleanup

Que es lo que hace la funcion de retorno del useEffect?, para eso tenemos que hacer uso de la parte de desmontar un componente 

### uso del snipped del useEffect

```js

useEffect(() => {
     first
   
     return () => {
       second
     }
   }, [third])
   
   /// El use effect cuenta con 3 partes, tiene nuestro callback, tiene el cuerpo, y la funcion del  cleanup, esto del cleanup vamos a usar cuando queremos limpiar, cancelar observables, algun tipo de suscripcion, algun listener, cualquier cosa se hace en esa fase de la linea 12. n la linea 10 hacemos algun tipo de observable y en el 12 limpiamos el listener para evitar que se siga consumiendo memoria . Pero para poder apreciar esta funcion hay que crear un componente que pueda montar y desmontar . 

```

```js
export const Message = () => {
  return (
   <>
   <h3>Usuario ya existe </h3>
   </>
  )
}

```

**Yo quiero mostrar este mensaje unicamente si el usuario es strider 2**

```js
  {
            (username=== "strider2")&& <Message/>
          }

```

```js

useEffect(() => {
     console.log("Message Mounted")
   
     return () => {
       console.log("Message Unmounted")
     }
   }, [])

   ```
   ![mensaje montado-desmontado](../public/images/Captura%20de%20pantalla%202023-04-15%20101947.jpg)

   Esto que aparece en la consola es algo muy importante porque tenemos el poder de ejecutar algun tipo de codigo cuando el componente se muestra o se destruye. Seria diferente si en lugar de hacer la siguiente condicion.

   ```js
  {
            (username=== "strider2")&& <Message/>
          }

         <Message className=" username==='strider2' hiddener"/>  
         /// preguntar el sentido de la linea de este codigo 

```