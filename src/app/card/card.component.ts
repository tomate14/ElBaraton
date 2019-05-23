import { Component, OnInit, Input, Output, EventEmitter, DoCheck } from '@angular/core';
import { Producto } from '../clases/Producto';
import { ItemCarrito } from '../clases/ItemCarrito';
import { CarritoService } from 'src/services/carrito.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
 

  @Input() is_carrito: string;
  @Input() item: Producto;
  private carrito:Producto[];
  @Input() txt_stock:string;
  @Output() eliminarClicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private service_carrito:CarritoService) { 
      this.carrito = [];
  }

  ngOnInit() {
    
  }

  agregarCarrito(){
    this.service_carrito.agregarCarrito(this.item);
    this.carrito = this.service_carrito.getCarrito();
  }

  incrementar(){
   this.service_carrito.modificarCantidad('incrementar',this.item);
   this.carrito = this.service_carrito.getCarrito();
  }

  decrementar(){
     this.service_carrito.modificarCantidad('decrementar',this.item);
     this.carrito = this.service_carrito.getCarrito();
  }
  
  eliminar(item:Producto){
    this.service_carrito.eliminarItem(item);
    this.carrito = this.service_carrito.getCarrito();
    this.eliminarClicked.emit(true);  
  }

}
