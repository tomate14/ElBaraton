import { Component, OnInit } from '@angular/core';
import { Producto } from '../clases/Producto';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/services/products.service';
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
  private txt_stock:string="Stock:";
  private ordenarPor  : any[] = [];
  private filterOrden : string;

  constructor(private _route: ActivatedRoute, private service: ProductsService, private service_carrito: CarritoService) { 

    this.filterOrden = "";
    
    /* Obtengo el identificador del menu seleccionado */
    this.id = this._route.snapshot.paramMap.get('id');
    /*Obtenemos los productos del servicio*/
    this.carrito = this.service_carrito.getCarrito();

    if(this.carrito == null){
        this.carrito = [];
    }
  }
  
  ngOnInit() {
    
    this.service.getProductos().subscribe(data => {
  
      /*Si trae datos, los filtro por el identificador del submenu que quiero buscar*/
      if(data[this.service._urlProducto] != null && data[this.service._urlProducto] != []){  
        this.productos = data[this.service._urlProducto].filter(producto => producto.sublevel_id == parseInt(this.id));
      }else{
        this.productos = [];
      }
      this.service.setProductos(this.productos);
      
    });

  }
  
  filtrarProductos(mensaje:any){
    if(mensaje != null || mensaje != undefined){
      this.productos = this.service.filtrarProductos(mensaje);
    }    
  }

  
  ordenarProductos(orden : string){
    this.filterOrden = orden;  
    this.productos = this.service.ordenarProductos(this.productos,orden); 
     console.log(this.productos);
  }


}