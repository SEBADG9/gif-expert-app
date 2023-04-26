import { useState } from "react";


export const useForm = (initialForm={}) => {

    const [formState, setFormState] = useState(initialForm);

       ///Entonces en lugar de que sea el objeto de linea 6 que lo corto y lo pego en FormWith
       //CustomHooks.jsx 
       // el initial form lo voy a andar al useState 
    
       
       
    
       const onImputChange= ({target} ) => {
          const{name, value}= target;
         setFormState({
          ...formState,
          [name]:value
         } );
       }

       const onResetForm= () => {
   
         setFormState (initialForm);
      
      }

       
       return {
        ...formState,
        formState,
        onImputChange,
        onResetForm
}

 }
