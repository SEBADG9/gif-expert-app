## formulario con customHook

Una aplicacion web puede tener x cantidad de formularios. En esta nueva aplicacion se puede ver que el formulario es muy similar al anterior. Solo que ahora se va a tener un nuevo imput que va a ser el password

```js
export const FormWithCustomHook = () => {

   const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: ""

   })

   
   const{username, email, password}= formState;

   <input 
          type="password"
           className="form-control mt-2"
           placeholder="contraseña"
           name="password" 
           value={password}
           onChange={onImputChange}

           />

        
   </>
  )
}

```

En teoria esto esta bien, de hecho si vamos a la consola, a la parte de state vemos que tambien se agrego la propiedad de contraseña. Pero nuevamente hacemos referencia a que si el dia de mañana nos hacen hacer un formulario y otro y otro, vamos a repetir codigo muchas veces. Vamos a tener que **importar useState, crear formulario, desestructurar los campos, crear el imputChange en cada uno de ellos** mucha cosa que hay que hacer y repetir. 
Seria genial que podamos hacer un customHook que pueda recibir cual es el estado del formulario y que nos de todo lo que nosotros necesitamos para poder trabajar ese formulario de una manera rapida, y eso incluye el **onImputChange** Entonces hagamos eso, haremos un *customHooks* que se llame *useForm* 

```js

export const useForm = () => {

     const [formState, setFormState] = useState({
        username: "",
        email: "",
        password: ""
    
       })
    
       
       const{username, email, password}= formState;
    
       const onImputChange= ({target} ) => {
          const{name, value}= target;
         setFormState({
          ...formState,
          [name]:value
         } );
       }

 return { formState,
        onImputChange,
}

}
// usualmente es mejor trabajar con objetos en los return.
// A continuacion creo un archivo useForm.js en el que corto y pego la extraccion del onImputState, y lo de mas arriba que esta en el FormWithCustomHook.jsx. Linea 41 hasta el return se especifica lo que traigo. 
// Que es lo que necesito exponer al mundo extrior, seguramente, el formState,tambien el onImputChange, es decir la extencion para cambiarlo y el valor del formulario. 


```

en el caso que lo dejaramos asi nuestro useForm, solo va a poder manejar un formulario que tenga la siguiente estructura.

``` js
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: ""

   })

```

Yo no quiero eso, yo quiero ser capaz de poder mandarle en el *UseForm* el objeto inicial, en este caso *initialForm*

```js



```




Nuestro componente quedo muy facil, creamos nuestro customHook, tenemos el formState y los valores del usename, email, password. 
Algo bien comuncuando este usando mi formulario es que cuando este usando mi useForm, es poder extraer las propiedades rapidamente. Y poderme ahorrar este paso 
``` const{username, email, password} = formState; ``` 
Pero para hacer algo asi mi UseForm tiene que retornar esas variables. Una forma bien sencilla de hacer eso es desestructurar el formulario 
```js

 
       return {
        ...formState, // en este momento el formState tiene el userName, name y el password. Y esas son las propiedades que va a estar creando aqui 
        formState,
        onImputChange,
}

```

Hay que ser creativos con los customHooksd, y separar la logica de lo que va en el componente com tal. Para que los componentes sean faciles de leer y de mantener. Muchas personas pueden tener su formulario pero el mismo no esta funcionando entonces yo ya se que el problema esta en *useForm.js* . Pero nuestros desarrolladores saben cue nuestro customHooks estan altamente probados, entonces el problema puede estar en el html del componente en si. 