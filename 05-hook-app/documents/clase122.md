## useEffect Precauciones

Se va a hacer un ejercicio donde es importante la parte de la limpieza en el useEffect.
```js

export const Message = () => {

  
  
  useEffect(() => {
    
   
      window.addEventListener("mousemove", onMouseMove);
      
      return () => {
        // window.removeEventListener("mousemove", onMouseMove); 
      } 
 } , []);

```
![window.addEventListener](../images/../public/images/Captura%20de%20pantalla%202023-04-18%20130951.jpg)

en caso de que me interesen las coordenadas de x, y, yo las puedo extraer. Si yo borro el strider2, esperariamos que ya no tengamos mas mensajes en consola. Pero yo muevo el mouse y a pesar de que el componente ya no esta hay un *listener* que esta pendiente de ese evento 

```js

useEffect(() => {
    
        window.addEventListener("mousemove", (event)=>{
         // console.log(event);
         console.log(":)")
        })
       return() =>{ 
      } 
 } , []);
  // es lo mismo que el caso anterior pero lo de la consola se reduce a una carita feliz, el efecto es el mismo, por mas que borre el strider2, el mensaje de consola sigue persistiendo. Imaginarse que esa peticion sea un http, o un proceso pesado

```

Supongamos que del event listener a mi me interesa sacar las coordenadas de x,y. Pero ahora limpieremos el problema cuando no llamo al componente Message.jsx.

**Para remover tenemos que hacer referencia a la funcion**

```js

useEffect(() => {
    
    const onMouseMove= ({x,y} ) => {
        const coords = {x,y};
        console.log(coords);

    }



        window.addEventListener("mousemove", onMouseMove) 
        
        
      
       return() =>{ 
      } 
 } , []);

 // cuando el componente se crea por primera vez podemos usar el unMouseMove, de esta forma incluso el componente queda mas limpio. En definitiva cuando el componente se monta se crea el listener mouseMove y voy a apuntar a esta funcion de la linea 48. Ahora viene la parte genia, para remover un listener seria igual 

```

```js

useEffect(() => {
    
    const onMouseMove= ({x,y} ) => {
        const coords = {x,y};
        console.log(coords);

    }



        window.addEventListener("mousemove", onMouseMove) 
        
        
      
       return() =>{ 
         window.removeEventListener("mousemove", onMouseMove)

         ///quiero remover el mouseMove y la funcion a la referencia a la funcion que quiero eliminar

      } 
 } , []);

 ```

 Si yo ahora actualizo el campo remuevo el codigo y el windowEventListener se deja de disparar. 

 Esto tiene mucho mas sentido cuando quiero hacer el cambio en un UseState 

 ```js
 export const Message = () => {
 
  const [coords, setcoords] = useState({x:0, y:0});// al inicio tengo x, y en 0
 
  
  useEffect(() => {
    
    const onMouseMove= ({x,y} ) => {
       // const coords = {x,y};
        setcoords({x,y})// cuando tengo las coordenadas las mando en setCoords

    }



    window.addEventListener("mousemove", onMouseMove) 
        
    return() =>{ 
      window.removeEventListener("mousemove", onMouseMove)
   } 
} , []);

  
  
    return (
   <>
   <h3>Usuario ya existe </h3>
   {JSON.stringify(coords)} 
  
   </>
  )
}

 ```

 ![Usando cordenadas con useState](public/../../public/images/Captura%20de%20pantalla%202023-04-18%20205642.jpg)



