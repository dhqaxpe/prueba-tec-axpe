# Prueba técnica Axpe

- Daniel Heras Quesada
- Desarrollador Front End a tiempo completo
- Agosto de 2023

## Anotaciones iniciales

### Ejercicio 1: 

#### a) Errores
1. Se ha creado una dependencia entre RegisteredUser y MultimediaContent, puesto que el primero termina ejecutando métodos del segundo. Esto produce un acoplamiento entre las clases. Además de que hay una herencia que se usa para comprobar su tipado, lo cual es redundante.
	- Solución: método getPrice() en service sin implementar, implementado en sus hijos con la llamada a MultimediaContent adecuada
2. El uso de la herencia en PremiumContent también es incorrecto y redundante. Puesto que la nueva clase solo se usa como una comprobación de tipo.
	- Solución: hacer streamingPrice y downloadPrice privados y añadir un getter que luego pueda ser sobrescrito por PremiumContent. Dejando la propiedad additionlFee de PremiumContent privada y únicamente usada por los métodos getStreamingPrice y getDownloadPrice