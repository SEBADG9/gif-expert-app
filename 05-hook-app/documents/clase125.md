## useFetch - CustomHook

Este ejercicio vamos a comunicar varios custom hooks entre si 

Hacemos uso de Postman para captar informacion de la api de ricky and morfy. Nosotros vamos a ir cambiando el id basado en nuestro customHooks del useConter pero a la vez vamos a crear un customHooks para manejar todo lo que es la peticion del postman. 

```js
export const useFetch = (url) => {
      
      // apenas tengo este url y el hooks se monte quiero disparar un useEffect,
      // por ahora solo definamoslo, la dependencia que vamos a usar es el url. 
      // es decir que cada vez que el url cambie se va a disparar el useEffect. 

      useEffect(() => {

}, [url])



    return;
   }



```

a continuacion lo que vamos a hacer es disparar la peticion fetch, 

```js

export const useFetch = (url) => {
      
    
    const getFetch=async () =>{
      const resp= await fetch(url);
      const data= await resp.json();

      console.log(data);
    }

      useEffect(() => {
     getFetch();
}, [url])

// Una vez se detecta que monta nuestro componente, se dispara por primera vez, 
// vemos nuestro url, el useEffect va a disparar el getFetch, el getFetch se va a encargar de imprimir la data. 


    return;
   }

 el useEffect puede tener tareas asincronas pero no puedo definir
 que su callback va a ser asincrono. Porque el useEffect esta esperando una
 funcion pura para hacer una limpieza, no una promesa. 



```

vamos a usar el useFetch en el componente que acabamos de crear "MultipleCustomHooks"

```js

export const MultipleCustomHooks = () => {

   const {} = useFetch ("https://rickandmortyapi.com/api/character/1");

    return(
      
      <>
         <h1>BreakingBad Quotes </h1>

         <hr/>

         </>


       )


 }

```
ACA VIENE LA PARTE GENIAL DE CREAR NUESTRA LOGICA CON UN HOOK, YO PUEDO
 INCLUSIVE CUANDO ESTOY CARGANDO, CUANDO HAY CAMBIOS, CUANDO SE TIENE , 
 CUANDO SE RESUELVE Y TAMBIEN DECIRLE A MI COMPONENTE DE REACT CUANDO 
VOLVERSE A REDIBUJAR. MIRAR LINEA 5

```js

useFetch.js
 
 export const useFetch = (url) => {

    
  const [state, setState] = useState({
     data: null,
     isLoading: true,
     hasError:null,
  })
 }

 /// siguiente paso es cambiar el state, con el setState

  setState({
        ...state,
        isLoading:true
    });


```

```js 



// aqui me gustaria tener cierta informacion producto de mi useFetch, como por ejemplo si tengo data, si estoy cargando o si hay un error. Una forma de regresar todo es retornar todo el state asi como esta. 


return {
        data: state.data,
        isLoading:state.isLoading,
        hasError:state.hasError,
    }; 



```
una vez que especifico el return, puedo desestructurar la data, el isLoading y el hasError em el archivo MultipleCustomHooks.jsx

```js

 const {data, isLoading, hasError} = useFetch("https://rickandmortyapi.com/api/character/1");
 console.log({data, isLoading,hasError})

```
![Imprimiendo en consola lo desestructurado en el return](../public/images/Captura%20de%20pantalla%202023-04-25%20101255.jpg)

hay un punto en el que en componente se renderiza por primera vez y ahi monta nuestro hook
