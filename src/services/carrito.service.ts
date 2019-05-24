import { Injectable } from '@angular/core';
import { Producto } from 'src/app/clases/Producto';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  public _urlCarrito : string = "carrito"
  private _carrito : Producto[];

  constructor() { 
    this._carrito = [];
    this._carrito =  this.getCarrito();
  }

  //Eliminar un item del carrito de compras
  eliminarItem(item: Producto) {
    this._carrito = this._carrito.filter(function(producto){ 
      return producto.id != item.id
    });
    this.guardarCarrito(this._carrito);
  }


  //Se obtiene un item del carrito de compras 
  getItemCarrito(itemProd:Producto) : Producto{
    if(this._carrito == null){
      return null;
    }
    return this._carrito.find(item => item.id == itemProd.id);
  }

  //Agregar un item al carrito de compras
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

  //Modifico un item del carrito de compras, aumneto o disminuyo la cantidad
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

  //Obtengo el carrito de compras completo
  getCarrito(){
    this._carrito = JSON.parse(localStorage.getItem(this._urlCarrito));
    if(this._carrito == null){
      return this._carrito = [];
    }
    return this._carrito;
    
  }

  //Actualizo el carrito en el Localstorage
  guardarCarrito(carrito: Producto[]){
    localStorage.setItem(this._urlCarrito,JSON.stringify(carrito));
  }

  //Calculo el monto total del carrito de compras
  getTotalCarrito(){
    let total = 0;
    this._carrito.forEach((producto)=>{
        total +=( parseInt(producto.price.replace("$","").replace(",",""))*producto.quantity)
    });
    return total;
  }
  
  //Elimino los items del carrito
  limpiarCarrito(){
    localStorage.removeItem(this._urlCarrito);
  }

}
