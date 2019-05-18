import { Component, OnInit } from '@angular/core';
import { Producto } from '../clases/Producto';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/services/products.service';
import { CarritoService } from 'src/services/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  private carrito : Producto[];
  private txt_stock:string = "Cantidad:";

  constructor(private service_carrito:CarritoService) { 

    
  }
  
  ngOnInit() {
    /* Traigo el carrito de compras */
    this.carrito = JSON.parse(this.service_carrito.getCarrito());
  
    if(this.carrito == null){
        this.carrito = [];
    }

  }

}
