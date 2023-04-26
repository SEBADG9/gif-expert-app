import { useEffect, useState } from "react";


export const useFetch = (url) => {


  const [state, setState] = useState({
     data: null,
     isLoading: true,
     hasError:null,
  })

  // esta  data de arriba es que luego voy a terminar ingresando en el return

 
   const getFetch= async () => {

    setState({
        ...state,
        isLoading:true
    });

     const resp= await fetch(url);
     const data= await resp.json();

    setState({
        data,
        isLoading:false,
        hasError:null,
    })

    // si mando un setState a un objeto tengo que mandar todas las propiedades
    
   }

   /// lineas de arriba es la peticion que quiero usar. 

 useEffect(() => {
   
    getFetch();

  },[url])   
 
 
    return {
        data: state.data,
        isLoading:state.isLoading,
        hasError:state.hasError,
    }; 
}
/// cada vez que el url cambie se va a disparar este useEffect, 
/// si es el mismo entonces no hace nada. En la linea 8 lo que 
/// queremos es disparar la peticion fetch. 



/// ACA VIENE LA PARTE GENIAL DE CREAR NUESTRA LOGICA CON UN HOOK, YO PUEDO
// INCLUSIVE CUANDO ESTOY CARGANDO, CUANDO HAY CAMBIOS, CUANDO SE TIENE , 
// CUANDO SE RESUELVE Y TAMBIEN DECIRLE A MI COMPONENTE DE REACT CUANDO 
// VOLVERSE A REDIBUJAR. MIRAR LINEA 5