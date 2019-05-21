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
  @Input() carrito:Producto[];
  @Input() txt_stock:string;
  @Output() eliminarClicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private service_carrito:CarritoService) { 
    
  }

  ngOnInit() {
    
  }

  getItemCarrito() : Producto{
    return this.carrito.find(item => item.id == this.item.id);
  }

  agregarCarrito($event:any){

    /*Busco el item en el carrito*/ 
    let item_carrito = null;
   
    item_carrito = this.getItemCarrito();

    /* Si ya lo tengo agrego uno a la cantidad */     
    if(item_carrito === undefined){
      this.carrito.push(<Producto>{id:this.item.id, quantity:1, name:this.item.name ,price:this.item.price });
    }else{
      item_carrito.quantity++;
    }
    /* Guardo el carrito actualizado */
    this.service_carrito.guardarCarrito(this.carrito);
 }

 incrementar($event:any){
  /*Busco el item en el carrito*/ 
  let item_carrito = null;
   
  item_carrito = this.getItemCarrito();
  item_carrito.quantity++;

   /* Guardo el carrito actualizado */
   this.service_carrito.guardarCarrito(this.carrito);

 }

 decrementar($event:any){
  /*Busco el item en el carrito*/ 
    let item_carrito = null;
    
    item_carrito = this.getItemCarrito();
    if(item_carrito.quantity > 0){
      item_carrito.quantity--;
    }    
    /* Guardo el carrito actualizado */
    this.service_carrito.guardarCarrito(this.carrito);
  }
  eliminar($event:any,item){
      this.carrito = this.carrito.filter(function(producto){ 
        return producto.id != item.id
      });
      this.service_carrito.guardarCarrito(this.carrito);
      this.eliminarClicked.emit(true);  
      //Falta re renderizar el componente
  }

}
