import { Injectable } from '@angular/core';
import { Producto } from 'src/app/clases/Producto';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  public _urlCarrito : string = "carrito"
  private _carrito : Producto[];
  constructor() { 
    this._carrito =  this.getCarrito();
  }


  eliminarItem(item: Producto) {
    this._carrito = this._carrito.filter(function(producto){ 
      return producto.id != item.id
    });
    this.guardarCarrito(this._carrito);
  }


  getItemCarrito(itemProd:Producto) : Producto{
    if(this._carrito == null){
      return null;
    }
    return this._carrito.find(item => item.id == itemProd.id);
  }

  agregarCarrito(item:Producto){
    let item_carrito = null;
   
    item_carrito = this.getItemCarrito(item);

    /* Si ya lo tengo agrego uno a la cantidad */     
    if((item_carrito === undefined)||(item_carrito == null)){
      this._carrito.push(<Producto>{id:item.id, quantity:1, name:item.name ,price:item.price });
    }else{
      item_carrito.quantity++;
    }
    /* Guardo el carrito actualizado */
    this.guardarCarrito(this._carrito);

  }

  modificarCantidad(operacion:string,item:Producto){
    /*Busco el item en el carrito*/ 
    let item_carrito = null;
    
    item_carrito = this.getItemCarrito(item);

    switch(operacion){
      case 'incrementar':
        item_carrito.quantity++;
        break;
      case 'decrementar':
        if(item_carrito.quantity > 0){
          item_carrito.quantity--;
        }    
        break
      
    }
    /* Guardo el carrito actualizado */
    this.guardarCarrito(this._carrito);
  }

  getCarrito(){
    if(this._carrito == null){
      this._carrito = [];
    }
    return JSON.parse(localStorage.getItem(this._urlCarrito));
    
  }

  guardarCarrito(carrito: Producto[]){
    localStorage.setItem(this._urlCarrito,JSON.stringify(carrito));
  }

  limpiarCarrito(){
    localStorage.removeItem(this._urlCarrito);
  }

}
