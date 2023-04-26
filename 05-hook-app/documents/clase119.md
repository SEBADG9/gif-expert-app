## useEffect SimpleForm

Antes de ver el useEffect necesito mantener el estado. Para eso el unico hooks que hemos visto hasta el momento es el siguiente

```js

 const [formState, setFormState] = useState({
    username: "strider",
    email: "sebastian@google.com"

   })
   // vemos que aca el state vamos a tenerlo como un objeto, con username y email con sus respectivos valores. Si vamos a la consola, podemos ver nuestro estado con esos valores.

```

## establecimiento de valores 

```js

const{username, email}= formState;


 <input 
          type="text"
           className="form-control"
           placeholder="Username"
           name="username" 
           value={username} // establecimiento del primer estado
           onChange={onImputChange}// voy a mandar como referencia en el imputChange el evento que yo haga referencia de esa funcion
           />

<input 
          type="email"
           className="form-control mt-2"
           placeholder="sebastian@google.com"
           name="email" 
           value={email}// establecimiento del segundo estado
           onChange={onImputChange} // voy a mandar como referencia en el imputChange el evento que yo haga referencia de esa funcion

           />

```

Lo siguiente es hacer una funcion que me permita hacer el cambio de cualquier imput

```js


const onImputChange= (event) =>{
    console.log (event.target);
}

// si yo paso a la consola y ponso "strider2" tengo todo el target, pero a la vez me interesa el value 

const onImputChange= (event) =>{
    console.log (event.target.value);
}
// aqui si yo pongo strider2, me aparece en la consola strider2, si en el correo pono sebastian.com2 me aparece el correo. Tambien me interesa saber que elemento esta cambiando. 

const onImputChange= (event) =>{
    console.log (event.target.name);

}
// El name es el atributo que le asignamos al input. En la consola cuando tocamos en cualquiera de los campos vemos exactamente lo que cambio de hecho es lo que termina figurando literalmente en la consola, "username", "email" y estas son las palabras claves que necesito para cambiar los valores. 

 const onImputChange= ({target} ) => {
      const{name, value}= target;
      console.log({name,value});
      }

// cuando escribo strider2, en la consola se ve que el name del imput que estoy cambiando  es username y el nuevo valor es strider2. si tocamos 2 en email, tengo que el email es el campo que esta cambiando, y el value es sebastian@gmail.com

```

## cambio del state

```js

const onImputChange= ({target} ) => {
      const{name, value}= target;
     setFormState({
      ...formState,
      [name]:value
     } );
   }

// Linea 81 mandamos a llamar el setFormState, abrimos y cerramos llave porque es un objeto, desestructuramos el formState para mantener todos los va,ores del formularios, ya que pueden ser cientos de campos-prpiedades, pero solo quiero cambiear las que el name este siendo modificada. y para esto existe en javascript las propiedades computadas de los objetos. Donde la propiedad name es la que voy a establecer en el objeto [name]:value. Aca si volvemos al navegador y escribimos cambia ya el campo.   

```

## uso del useEffect 
Ya habiamos mencionado que es usado para disparar efectos secundarios 

```js
useEffect(()=>{
    console.log("useEffect called!")
   } );
   // el useEffect es una simple funcion que internamente tiene un callback, esta funcion interna es la que se va a ejecutar cada vez que el useEffect se dispare 

```