clase 80. Es importante pensar antes de hacer las cosas, en este sentido
eventualmente nuestro arreglo va a tener mas lineas, es decir va a tener un
titulo y ese titulo va a tener debajo un elemento que va a mostrar todas las imagenes que 
corresponden a la categoria.


## TITULO
### SUBTITULO

el texto que sea 

**NEGRITAS**

*Cursivas*

*lista
*lista
*lista

# codigo

``` js export  const getGifs=async (category) => {

    const url ="https://api.giphy.com/v1/gifs/search?api_key=hlmG55gMxT925EeRXFXytmjESRfILSvP&q=${category}&limit=20"
   const resp= await fetch (url);
   const {data}= await resp.json();

   const gifs=data.map (img=>({
       
      id:img.id,
      title:img.title,
      url: img.images.downsized_medium.url
       
   }));

   console.log(gifs);
   return gifs;    ```

   