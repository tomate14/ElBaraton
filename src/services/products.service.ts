import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../app/clases/Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProductos(){
    return this.http.get<Array<Producto>>('../assets/products.json');
  }

}
