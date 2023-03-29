## MOSTRAR LOS TITULOS DE LAS IMAGENES

Lo que buscamos es mostrar los titulos de todas las imagenes que estamos cargando
de momento tenemos el **getGifs** que nos regresa las imagenes. Se puede ver que nos regresa *promeses* 

### MANTENER UN ESTADO LOCAL DENTRO DEL gifGrid

Es importante para poder mantener las imagenes, ese mismo estado es preservado cuando se redibuja el componente

*LINEA6* Se imicializa el useState como un arreglo vacio, para no mostrarlo hasta que tengamos las imagenes, ya mas adelante se puede ver esto cuando hagamos un hook personalizado. Las imagenes de line 6 son las que vamos a usar para hacer nuestro map en el return.

#### plantear preguntas

Para establecer las imagenes yo tengo que llamar el **setImages**
el **useEffect** tiene que llamar una funcion, y cuando yo pongo el async, inmediatamente yo estoy regresando una promesa por lo tanto no es una funcion lo que esta esperando el useEfect. En sintesis no puedo usar el async cuando estoy con el **useEffect**.
Debemos elegir otras tecnicas para tomar esas imagenes. Una de ellas es usar .then esta tecnica esta bien ya que no hay mucho codigo y se trata de una anidacion. 
Pero tambien hay otra opcion que es crear una funcion la cual si puede ser *async* 
  
   ```js
    const getImages= async() =>{
        const nweImages= await getGifs(category);
        setImages(newImages);

    }
```
## TAREA 1

Hay que tomar el titulo de el hooks y pasarlo al <ol> 



Lo que tenemos que hacer es agregar los ```<li>``` de una forma dinamica, basados en la cantidad de imagenes que tenemos almacenadas en :
```js
  const [images, setImages] = useState ([]);
```
Al inicio como es un arreglo vacio no hay problema porque


    
   
    

    

    

    

    
    
    
         
         

         
         


    