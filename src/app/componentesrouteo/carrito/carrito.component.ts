import { Component, OnInit, } from '@angular/core';
import { Producto } from '../../clases/Producto';
import { CarritoService } from 'src/services/carrito.service';
import { ConfirmarService } from 'src/services/confirmar.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})

export class CarritoComponent implements OnInit {

  private carrito : Producto[];
  private txt_stock:string = "Cantidad:";
  private texto_boton:string;
  private total:number;
  private carritoNoVacio:boolean;

  constructor(private service_carrito:CarritoService,private confirmationDialogService: ConfirmarService) { 
    this.carritoNoVacio = null;
    this.total = 0;
    this.texto_boton = "Finalizar Compra";
    
  }
  
  ngOnInit() {
    /* Traigo el carrito de compras */
    this.carrito = this.service_carrito.getCarrito();
    this.total = this.service_carrito.getTotalCarrito();
    this.carritoNoVacio = true;
    if(this.carrito == null || this.carrito.length == 0){
      this.carritoNoVacio = false;
      this.carrito = [];
    }

  }

  onModificarItemCarrito(modificarCantidad : boolean){
    this.carrito = this.service_carrito.getCarrito();
    this.total = this.service_carrito.getTotalCarrito();
  }
  
  onEliminarClicked(eliminar : boolean){
    if(eliminar){
      this.carrito = this.service_carrito.getCarrito();
      this.total = this.service_carrito.getTotalCarrito();
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

  public openConfirmationDialog() {
    this.confirmationDialogService.confirm('Confirmar operacion', '¿Desea finalizar la compra?')
    .then((confirmed) => {
        if(confirmed){
          this.onFinalizarCompra();
        }
    });
  }

}
