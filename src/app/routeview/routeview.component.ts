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
  private txt_stock:string="Stock:";
  private filterStock : number;
  private filterMenor : number;
  private filterMayor : number;
  private ordenarPor  : any[] = [];

  constructor(private _route: ActivatedRoute, private service: ProductsService, private service_carrito:CarritoService) { 
    this.filterStock = 0;
    this.filterMenor = 30000;
    this.filterMayor = 0;
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
      }else{
        this.productos = [];
      }
     
    });

  }

  onFiltroStockChange(numero : number){
    console.log("Numero en onFiltroStock: "+ numero);
    if(numero == undefined){
        this.filterStock = 0;  
    }
    this.filterStock = numero;
  }

  cambiarOrden(orden : string){
    switch (orden) {
      case "Precio Menor":
         this.productos.sort((a,b)=> parseInt(a.price.replace("$","").replace(",","")) - parseInt(b.price.replace("$","").replace(",","")) )
        break;
      case "Precio Mayor":
          this.productos.sort((a,b)=> parseInt(b.price.replace("$","").replace(",","")) - parseInt(a.price.replace("$","").replace(",","")) )
      case "Cantidad Menor":
          this.productos.sort((a,b)=> a.quantity - b.quantity);
      case "Cantidad Mayor":
          this.productos.sort((a,b)=> b.quantity - a.quantity);
        break;
      default:
          this.productos.sort((a,b) =>  (a.available === b.available)? 0 : a.available ? -1 : 1);
    }
  }


}
