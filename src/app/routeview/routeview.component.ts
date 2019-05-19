import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { Producto } from '../clases/Producto';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/services/products.service';
import { CarritoService } from 'src/services/carrito.service';
import { ParametrosFiltro } from '../clases/ParametrosFiltro';
import { ItemCarrito } from '../clases/ItemCarrito';

@Component({
  selector: 'app-routeview',
  templateUrl: './routeview.component.html',
  styleUrls: ['./routeview.component.css']
})

export class RouteviewComponent implements OnInit,DoCheck {
  ngDoCheck(): void {
      console.log(this.productos);
  }
  private productos : Producto[];
  private productos_originales : Producto[];
  private carrito : ItemCarrito[];
  private id:string;
  private txt_stock:string="Stock:";
  private ordenarPor  : any[] = [];
  private filterOrden : string;

  constructor(private _route: ActivatedRoute, private service: ProductsService, private service_carrito:CarritoService) { 

    this.filterOrden = "";
    this.ordenarPor = [{nombre : "Precio Menor"},{nombre : "Precio Mayor"},{nombre : "Cantidad Menor"},{nombre : "Cantidad Mayor"},{nombre : "Disponibles"} ];
    /* Obtengo el identificador del menu seleccionado */
    this.id = this._route.snapshot.paramMap.get('id');

    /* Traigo el carrito de compras */
    this.carrito = this.service_carrito.getCarrito();

    if(this.carrito == null){
        this.carrito = [];
    }

  }
  
  ngOnInit() {

    /*Obtenemos los productos del servicio*/
    this.service.getProductos().subscribe(data => {

      /*Si trae datos, los filtro por el identificador del submenu que quiero buscar*/
      if(data[this.service._urlProducto] != null && data[this.service._urlProducto] != []){  
        this.productos = data[this.service._urlProducto].filter(producto => producto.sublevel_id == parseInt(this.id));
        this.productos_originales = this.productos;
      }else{
        this.productos = [];
      }
     
    });

  }
  
  filtrarProductos(mensaje:any){

    if(mensaje != null || mensaje != undefined){
      this.productos = this.productos_originales.filter(producto => {
        if(parseInt(producto.price.replace("$","").replace(",","")) >= mensaje.getPrecioMinimo()) {
          if(parseInt(producto.price.replace("$","").replace(",","")) <= mensaje.getPrecioMaximo()) {          
            if(producto.quantity >= mensaje.getStock()) {
              return producto;
            }
          }
        }
      });
      console.log(this.productos);
    }
    //Si cumple con los filtros de precio y de stock
  }
  /*onFiltroStockChange(numero : number){
    console.log("Numero en onFiltroStock: "+ numero);
    if(numero == undefined){
        this.filterStock = 0;  
    }
    this.filterStock = numero;
  }*/
  
  /*cambiarOrden(orden : string){
    this.filterOrden = orden;   
    switch (orden) {
      case "Precio Menor":
          this.productos.sort((a,b)=> parseInt(a.price.replace("$","").replace(",","")) - parseInt(b.price.replace("$","").replace(",","")) )
        console.log(this.productos);
        break;
      case "Precio Mayor":
        this.productos.sort((a,b)=> parseInt(b.price.replace("$","").replace(",","")) - parseInt(a.price.replace("$","").replace(",","")) )
        break;
      case "Cantidad Menor":
        this.productos.sort((a,b)=> a.quantity - b.quantity);
        break;
      case "Cantidad Mayor":
        this.productos.sort((a,b)=> b.quantity - a.quantity);
        break;
      default:
        this.productos.sort((a,b) =>  (a.available === b.available)? 0 : a.available ? -1 : 1);
        break;
    } 
  }*/


}
