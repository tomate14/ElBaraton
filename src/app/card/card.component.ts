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
  @Output() modificarCantidad: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private service_carrito:CarritoService) { 
      this.carrito = [];
  }

  ngOnInit() {
    
  }
  getColor(){
    if(this.item.available){
      return 'Si';
    }
    return 'No';
  }
  agregarCarrito(){
    this.service_carrito.agregarCarrito(this.item);
  }

  incrementar(){
   this.service_carrito.modificarCantidad('incrementar',this.item);
   this.modificarCantidad.emit(true);
  }

  decrementar(){
     this.service_carrito.modificarCantidad('decrementar',this.item);
     this.modificarCantidad.emit(true);
  }
  
  eliminar(item:Producto){
    this.service_carrito.eliminarItem(item);
    this.eliminarClicked.emit(true);  
  }

}
