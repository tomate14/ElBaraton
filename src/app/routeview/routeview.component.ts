import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../clases/Producto';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/services/products.service';
import { CarritoComponent } from '../carrito/carrito.component';
import { ItemCarrito } from '../clases/ItemCarrito';
import { CarritoService } from 'src/services/carrito.service';

@Component({
  selector: 'app-routeview',
  templateUrl: './routeview.component.html',
  styleUrls: ['./routeview.component.css']
})

export class RouteviewComponent implements OnInit {
  private productos : Producto[];
  private carrito : ItemCarrito[];
  private id:string;
  private _urlCarrito : string = "carrito";

  constructor(private _route: ActivatedRoute, private service: ProductsService, private service_carrito:CarritoService) { 

    /* Obtengo el identificador del menu seleccionado */
    this.id = this._route.snapshot.paramMap.get('id');

    /* Traigo el carrito de compras */
    this.carrito = JSON.parse(this.service_carrito.getCarrito());

    if(this.carrito == null){
        this.carrito = [];
    }

  }
  
  ngOnInit() {

    /*Obtenemos los productos del servicio*/
    this.service.getProductos().subscribe(data => {

      /*Si trae datos, los filtro por el identificador del submenu que quiero buscar*/
      if(data["products"] != null && data["products"] != []){  
        this.productos = data["products"].filter(producto => producto.sublevel_id == parseInt(this.id));
      }else{
        this.productos = [];
      }
     
    });

  }

  agregarCarrito($event:any, producto:Producto){

     /*Busco el item en el carrito*/ 
     let item_carrito = this.carrito.find(item => item.id == producto.id);

     /* Si ya lo tengo agrego uno a la cantidad */     
     if(item_carrito == undefined){
       this.carrito.push(new ItemCarrito(producto.id,1));
     }else{
       item_carrito.cantidad++;
     }
     /* Guardo el carrito actualizado */
     this.service_carrito.guardarCarrito(this.carrito);
  }

}
