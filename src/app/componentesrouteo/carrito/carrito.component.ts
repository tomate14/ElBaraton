import { Component, OnInit, } from '@angular/core';
import { Producto } from '../../clases/Producto';
import { CarritoService } from 'src/services/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  private carrito : Producto[];
  private txt_stock:string = "Cantidad:";
  private carritoNoVacio:boolean;

  constructor(private service_carrito:CarritoService) { 
    this.carritoNoVacio = null;
    
  }
  
  ngOnInit() {
    /* Traigo el carrito de compras */
    this.carrito = this.service_carrito.getCarrito();
    this.carritoNoVacio = true;
    if(this.carrito == null || this.carrito.length == 0){
      this.carritoNoVacio = false;
      this.carrito = [];
    }

  }


  onEliminarClicked(eliminar : boolean){
    if(eliminar){
      this.carrito = this.service_carrito.getCarrito();
      if(this.carrito == null || this.carrito.length == 0){
        this.carritoNoVacio = false;
      }
    }

  }

  onFinalizarCompra(){
    this.service_carrito.limpiarCarrito();
    this.carrito = this.service_carrito.getCarrito();
    this.carritoNoVacio = false;
  }

}
