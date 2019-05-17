import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from 'src/app/clases/Categoria';
import { Observable } from 'rxjs';
import { ItemCarrito } from 'src/app/clases/ItemCarrito';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private _urlCarrito : string = "carrito"
  constructor() { 

  }

  getCarrito(){

    return localStorage.getItem(this._urlCarrito);
  }

  guardarCarrito(carrito: ItemCarrito[]){
    localStorage.setItem("carrito",JSON.stringify(carrito));
  }

  limpiarCarrito(){
    localStorage.removeItem(this._urlCarrito);
  }

}
