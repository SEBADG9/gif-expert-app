## useEffect
En la clase pasada surgieron dos problemas a resolver, por un un lado era de que se
estaba llamndo dos veces y lo otro era que se llama a toda la funcion cada vez que se hace algun cambio 
**que sucede** 
Sabemos que react cada vez que detecta un cambio en el componente lo vuelve a ejecutar,
pero hay ciertas situaciones que pueden sobrevivir y mantener el estado o ciertas situaciones que se le puede decir a react ejecutate solo una vez.
Al importar useState, junto a un evento onClick, surjen los mismos problemas, uno que se vuelve a disparar, dos porque se dispara dos veces. 

### importancia del Stringmode

![foto3](../imagenes-doc/Captura%20de%20pantalla%202023-03-28%20153717.jpg)

Empezamos deshabilitando el strictMode, y eso en parte resuelvo el problemo, pero en determinadas circunstancias quiero que cuando ejecute la accion, no quiero que se haga la peticion http, porque yo cada vez que quiera hacer un cambio no quiero volver a la api, ni consumir la data. Una de las formas de solucionar este problema es con el uso de **useEfect**. Como primer punto lo importamos. El **useEfect** es un *hook de react que sirve para disparar efectos secudarios*, efecto secundario hace referencia a algun proceso que quiero ejecutar cuando algo suceda, a modo de ejemplo cuando el *counter* cambie quiero disparar un efecto, cuando la *categoria* cambie, quiero disparar un efecto,cuando el *componente* se renderisa por primera vez, quiero disparar un efecto.
En este caso cuando el componente se dispara por primera vez solo ahi quiero disparar la peticion http. 
Se logro ver que cuando doy al on click gracias al useEfect, la peticion se hace solo una vez, sin embargo cuando ingreso una nueva categoria como dragon ball, se ejecuta un nuevo array, y eso es porque, esto es porque en nuestro **GifExpertapp** cada vez que tenemos una nueva categoria, esa categoria vuelve a crear este componente, pero no los anteriores, los anteriores se mantienen. Pero cuando entra una nueva categorie se mantiene y esta creando es nuevo useEffect. 
