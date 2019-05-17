import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../clases/Producto';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/services/products.service';
import { CarritoComponent } from '../carrito/carrito.component';
import { ItemCarrito } from '../clases/ItemCarrito';

@Component({
  selector: 'app-routeview',
  templateUrl: './routeview.component.html',
  styleUrls: ['./routeview.component.css']
})

export class RouteviewComponent implements OnInit {
  private productos : Producto[];
  private carrito : ItemCarrito[];
  private id:string;

  constructor(private _route: ActivatedRoute, private service: ProductsService) {    
    this.id = this._route.snapshot.paramMap.get('id');
    this.carrito = [];
  }
  
  ngOnInit() {

    /*Obtenemos los productos del servicio*/
    this.service.getProductos().subscribe(data => {
      if(data["products"] != null && data["products"] != []){
        //this.productos = data["products"];     
        this.productos = data["products"].filter(producto => producto.sublevel_id == parseInt(this.id));
      }
     
    });
  }

  agregarCarrito($event:any, producto:Producto){
     let item_carrito = this.carrito.find(item => item.id == producto.id);
     if(item_carrito == undefined){
       this.carrito.push(new ItemCarrito(producto.id,1));
     }else{
       item_carrito.cantidad++;
     }
  }

}
