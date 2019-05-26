# ElBaraton

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


Si se tiene instalado el node, descargarlo de la pagina oficial. https://nodejs.org/es/
--> Si no esta instalado, descargarlo e instalarlo

Verificar si tenemos instalado npm con (npm -v)
-->Si no esta instalado 
	--> Ejecutar (npm install -g)
-->Si esta instalado, 
	-->Actualizar NPM para bajar las dependencias mas actuales (npm install -g npm@latest)

Verificar si se tiene instalado Angular 7 con (ng -v)
-->Si no esta instalado
	--> Ejecutar npm uninstall -g @angular/cli para borrar versiones viejas de angular CLI
	--> Ejecutar npm install -g @angular/cli@latest para instalar la ultima version del CLI

Descargar el repo
   Se puede secargar via ssh o via html. 
   -->El link del repo via ssh es: git@github.com:tomate14/ElBaraton.git
   -->El link via https es: https://github.com/tomate14/ElBaraton.git.
   --> En caso de que no deje clonarlo, la url del repo es: https://github.com/tomate14/ElBaraton.
		--> Bajarlo manual

Ejecutar npm install para descargar el node_module e installar la aplicacion.

Luego hay que ejecutar ng serve y entrar a http://localhost:4200 que es el puerto que levanta la aplicacion por defecto angular

Consideraciones de la resolucion:
	--> Quiza se podria mejorar la forma de obtener los productos en base a la cantidad que se obtengan. En este caso, la cantidad era fija y en un volumen no muy grande. 
	--> Se agrego una confirmacion extra al momento de eliminar un producto del carrito o al momento de finalizar la compra.
	--> Los datos del contacto estan hardcodeados con el fin de mostrar como se veria la informacion del usuario.
	--> No se especifico hacer una ventana de login, por lo que no se hizo.
	