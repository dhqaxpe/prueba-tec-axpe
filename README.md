# Prueba técnica Axpe

- Daniel Heras Quesada
- Desarrollador Front End
- Agosto de 2023

## Anotaciones iniciales

### Ejercicio 1: 

#### a) Errores
1. Se ha creado una dependencia entre RegisteredUser y MultimediaContent, puesto que el primero termina ejecutando métodos del segundo. Esto produce un acoplamiento entre las clases. Además de que hay una herencia que se usa para comprobar su tipado, lo cual es redundante.
	- Solución: método getPrice() en service sin implementar, implementado en sus hijos con la llamada a MultimediaContent adecuada
2. El uso de la herencia en PremiumContent también es incorrecto y redundante. Puesto que la nueva clase solo se usa como una comprobación de tipo.
	- Solución: hacer streamingPrice y downloadPrice privados y añadir un getter que luego pueda ser sobrescrito por PremiumContent. Dejando la propiedad additionlFee de PremiumContent privada y únicamente usada por los métodos getStreamingPrice y getDownloadPrice

### Ejercicio 1
#### 1. Problemas detectados en la operación.
La clase RegisteredUser no comple el principio SOLID Abierto-Cerrado en su función getTotal, puesto que una extensión de las clases Service o MultimediaContent implicaría cambios en el método getTotal. Tampoco cumple el principio de Responsabilidad única, puesto que dicha clase será responsable de la gestión del usuario y del cálculo del importe de cada servicio mediante el manejo de objetos de MultimediaContent.
  - Solución: Delegar el cáculo del precio de un servicio a la clase Service con un método abstracto llamado getPrice(), este debe ser abstracto puesto que unicamente podremos describir un Service como una de sus subclases (disjoint). El método deberá ser implementado en las subclases.
Para que el cambio anterior cumpla los principios SOLID e implemente una arquitectura adecuada, la clase MultimediaContent deberá implementar getters y setters para sus propiedades. De esta manera se garantizará el cumplimiento del principio de Responsabilidad única al hacer que service haga de intermediario entre las otras dos clases pero no efecúe el cálculo de los precios, si no que lo obtenga de MultimediaContent.
Con ello también eliminaríamos el acoplamiento entre la clase RegisteredUser y MultimediaContent, el cual puede ser problemático y bloquearía la extensión de la clase Service.

¿Download y Streaming price no crea problemas de extensió en caso de que  apareciera un nuevo tipo? Puede que si pero no sabría arreglarlo