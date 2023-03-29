## fetchApi

Lo primero que hay que hacer es ir a la documentacion del endpoint que vamos a tener que 
llamar, en este caso traemos el del search, entre otras cosas deberiamos tener nuestro
**api key**, asi como el **query string**. por ejemplo *chesse burguers* traer esas img
antes de programarlo en react es importante saber como funciona el end point, entonces
lo que hacemos es enviarlo a postman al *gif.url*. Nos va a saltar un error porque debemos
proporcionar el **api key** , luego en los parametrps del mismo postman ingresamos el **query string** . Luego de esto al enviar send tendremos las 20 imagenes. 

### descripcion del codigo


```js
export  const getGifs=async (category) => {

    const url ="https://api.giphy.com/v1/gifs/search?api_key=hlmG55gMxT925EeRXFXytmjESRfILSvP&q=${category}&limit=20"
   const resp= await fetch (url);
   const {data}= await resp.json();

   const gifs=data.map (img=>({
       
      id:img.id,
      title:img.title,
      url: img.images.downsized_medium.url
       
   }));

   console.log(gifs);
   return gifs;

   
   }
 
```



### SUBTITULO

el texto que sea 

**NEGRITAS**

*Cursivas*

*lista
*lista
*lista

