## TAREA Implementar funcionalidad de reset 

se implementa un boton

```js

<button onClick={onResetForm}  className="btn btn-primary mt-2">Borrar</button>

```

 La tarea es implementar la funcionalidad de reset. Cuando yo toque el boton va a llamar el onResetForm, el cual va a establecer todos los valores al punto inicial del formulario. 
Hasta ahora sabemos que la logica la pondremos en useForm. En donde nos cuestionamos si hacer uso de useState o useEffect. Que hacia el useEffect? 


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
useEffect(() => {
     console.log("Message Mounted")
   
     return () => {
       console.log("Message Unmounted")
     }
   }, [])
// Seria bueno probar con algo de esto, el primer paso es que este hooks lo pueda ver en la consola
```


## SOLUCION DE FERNANDO

Como implementamos la parte del reset en useForm? Automaticamente aplica una funcion sin ningun argumento. 

```js


const onResetForm= () => {
   
   setFormState (initialForm);

}



```

de esta forma ya tenemos un customHooks que tiene varias funciones interesantes de manejo de formularios. Preguntas interesantes que nos hacemos aqui es como queremos gestionar el formulario, actualmente contamos con esto; 

```js

export const FormWithCustomHook = () => {

  const {formState, onImputChange, onResetForm ,username, email, password} = useForm( 
   {
     username: "",
     email: "",
     password: ""
});

```

Hay un paquete externo a react que es reactHookForm. Alli tenemos una funcion para registrar componentes, el handleSubmint para manejar el submit del formulario, watch para detectar cambios en alguna parte del formulario, el estado del formulario entre otras cosas. Es interesana adaptar ocsas de tercero pero primero es importante saber como son las funcionalidades de react, como trabajan los hooks. Es importante hacer en lo posible lo que nos ofrece react en lugar de empezar a instalar un monton de cosas. Por ejemplo 
