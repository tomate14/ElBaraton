import { Component, OnInit, DoCheck } from '@angular/core';
import { Producto } from '../../clases/Producto';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/services/products.service';
import { ItemCarrito } from '../../clases/ItemCarrito';
import { CarritoService } from 'src/services/carrito.service';

@Component({
  selector: 'app-routeview',
  templateUrl: './routeview.component.html',
  styleUrls: ['./routeview.component.css']
})

export class RouteviewComponent implements OnInit, DoCheck{
  private productos : Producto[];
  private carrito : ItemCarrito[];
  private rutaVieja:string;
  private rutaNueva:string;
  private id : string;
  private txt_stock:string="Stock:";
  private nameFilter : string
  
  constructor(private _route: ActivatedRoute, private router: Router, private service: ProductsService, private service_carrito: CarritoService) { 

    this.nameFilter = null;
    this.rutaVieja = null;
    this.rutaNueva = null;
    /* Obtengo el identificador del menu seleccionado */
  }

  ngDoCheck(): void {
    let ruta = this.router.url;
    if((this.rutaVieja == null)||(this.rutaVieja != ruta)){
      
      let idProducto = this._route.snapshot.paramMap.get('id');
      let filtroNombre = this._route.snapshot.paramMap.get('filtrar');
      this.id = idProducto;
      this.nameFilter = filtroNombre;
      this.buscarProductos();
      this.rutaVieja = this.rutaNueva;
      this.rutaNueva = this.router.url;
    }
  }
  
  buscarProductos(){
    this.service.getProductos().subscribe(data => {
      
      /*Si trae datos, los filtro por el identificador del submenu que quiero buscar*/
      if(data[this.service._urlProducto] != null && data[this.service._urlProducto] != []){  
        this.productos = data[this.service._urlProducto].filter(producto => {
            if(this.nameFilter == "null"){
              return producto.sublevel_id == parseInt(this.id);
            }else{
              return (producto.sublevel_id == parseInt(this.id) && producto.name.includes(this.nameFilter));
            }
          
        });
      }else{
        this.productos = [];
      }
      this.service.setProductos(this.productos);
      
    });
  }

  ngOnInit() {
    
    this.id = this._route.snapshot.paramMap.get('id');
    this.nameFilter = this._route.snapshot.paramMap.get('filtrar');
    this.buscarProductos();

  }
  
  filtrarProductos(mensaje:any){
    if(mensaje != null || mensaje != undefined){
      this.productos = this.service.filtrarProductos(mensaje);
    }    
  }

  
  ordenarProductos(orden : string){
    this.productos = this.service.ordenarProductos(this.productos,orden); 
  }


}