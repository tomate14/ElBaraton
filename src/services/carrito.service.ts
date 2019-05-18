import { Injectable } from '@angular/core';
import { Producto } from 'src/app/clases/Producto';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  public _urlCarrito : string = "carrito"
  constructor() { 

  }

  getCarrito(){

    return localStorage.getItem(this._urlCarrito);
  }

  guardarCarrito(carrito: Producto[]){
    localStorage.setItem(this._urlCarrito,JSON.stringify(carrito));
  }

  limpiarCarrito(){
    localStorage.removeItem(this._urlCarrito);
  }

}
