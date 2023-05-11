## memo

este componente se esta redibujando cada vez que hay un cambio en el state. A continuacion buscamos que la etiqueta small sea regenerado en otro componente.
Hasta ahora todo siguie igual. En el small hacemos un console.log. Aqui cada vez que le doy click se redibuja en la consola. Pero que pasa cuando hay un cambio en el padre que no tiene nada que ver con el componente *small* 
En este sentido hacemos uso del componente useState. hacemos la prueba pertinente, y en la consola cuando le damos click al segundo boton, si bien no se aplica la funcion de forma directa se vuelve a dibujar, eso lo podemos ver en la consola.
Nosotros podemos memorizar el componente small, lo cual es recomendado unicamente cuando los componentes son muy grandes. 
El memo es una funcion que le dice a react, memoriza este componente. Una vez que uso esta funcion se puede ver en la consola que cuando le doy click al boton que no se necesita el componente small, no se vuelve a dibujar. 