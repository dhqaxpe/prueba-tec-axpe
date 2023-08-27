*(copia de la explicación del ejercicio 2 en el README.md del repositorio)*
# Prueba técnica Axpe

- Daniel Heras Quesada
- Desarrollador Front End
- Agosto de 2023

## Instalación

1. Clone el repositorio.

```
$ git clone https://github.com/dhqaxpe/prueba-tec-axpe.git
```

2. Acceda al directorio *react-meetup*

```
$ cd prueba-tec-axpe/react-meetup
```

3. Instale las dependencias del proyecto con npm o yarn.

```
$ npm i
o
$ yarn install
```

### Despliegue de desarrollo

1. Ejecute la versión de desarrollo del proyecto

```
$ npm run start
```

### Despliegue de producción

1. Construya la versión de producción del proyecto

```
$ npm run build
```

2. Instale el servidor a nivel de máquina (global).

```
# npm install -g serve
```

3. Ejecute el servidor con la versión ya compilada del proyecto.

```
$ serve -s build
```

### Ejecución de los test

1. Ejecute los test

```
$ npm run test
```

## Soluciones planteadas

### Animación de la barra superior 

- `src/components/common/main-navigation/MainNavigation.js` : Para la animación de la barra de navegación se ha implementado una función que determine la diferencia entre el desplazamiento vertical actual y el del instante anterior. Para ello maneja dos _hook de estado_, uno que contendrá un _número_ con la última posición del desplazamiento vertical de la página; y otro con un valor _lógico_ que determinará si se muestra o no la barra de navegación. Esta función se registrará como un `EventListener` asociado al evento `scroll` de la ventana.
- `src/components/common/main-navigation/MainNavigation.module.css` : La animación como tal se hará aplicando una clase de css que determine la altura de la barra de navegación, dejando la clase base del contenedor con una altura igual a 0 y una propiedad _transition_ con las características de la animación. Esta es la forma más simple y efectiva de aplicar una animación básica, si la complejidad de la animación aumentase sería conveniente emplear `@keyframes` para componer la transición compleja.

### Navegación con parámetros de URL

Para reflejar la navegación en la URL y que esta sirva también para crear accesos directos a los diferentes módulos de la página se ha usado React-Router, que se ha instalado como una dependencia externa `react-router-dom`.
- `src/App.js` : Añado el componente _BrowserRouter_ sobre un conjunto de rutas definidas por _Routes_ y una ruta base _Route_ con `path="/"` para establecer con ella una ruta base sin parámetros de URL y aplicarle un layout a todas las rutas contenidas bajo ella. De esta forma defino todas las rutas que quiero admitir en la aplicación y aplico el layout deseado de modo uniforme.
- `src/components/layout/Layout.js` : El nuevo layout deberá colocar el componente _Outlet_ de `react-router-dom` allí dónde quiera alojar el hijo del componente layout. _Outlet_ es el sustituto al _children_ del anterior.

### Gestión de estado de favoritos

Para resolver el problema del estado global de aplicación que está asociado al mantenimiento en memoria una lista de favoritos he decidido usar _Redux_, importado como referencia externa de `react-redux`. Ya que las alternativas de usar una cascada de propiedades o el `localstorage` del navegador limitarían la capacidad de escalado del proyecto.
- `src/utils/favoriteReducer.js` : He definido el _Reducer_ con las acciones de añadir y eliminar favorito.
- `src/store.js` : He configurado una _Store_ para el proyecto con el reducer anterior.
-  `src/index.js` : He añadido el proveedor de la _Store_ a toda la aplicación.
Por último he usado los reducers previamente descritos en los distintos componentes de la aplicación para proveerla de un estado global centralizado.

## Testing

He corregido los test previos, ya que fallaban desde la introducción de _Redux_, al necesitar varios de los componentes un proveedor. Además he añadido dos test que servirán para comprobar el correcto funcionamiento de la aplicación.
- El primer grupo de test hará pruebas unitarias de los componentes que forman las páginas del proyecto.
- El segundo comprobará que la Aplicación base concuerda con la snapshot.
- El tercero comprobará que el componente de navegación está pudiendo acceder a la _store_ y mostrando adecuadamente el número de Meetups favoritos.

## Organization

He hecho pequeños ajustes en la organización del proyecto para aumentar la claridad. Por miedo a conseguir el efecto contrario al ser este un proyecto estándar no he alterado el contenido del componente de meetups, pero sería conveniente agrupar ficheros de componente con su CSS asociado en un directorio exclusivo.
