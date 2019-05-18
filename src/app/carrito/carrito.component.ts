import { Component, OnInit, } from '@angular/core';
import { Producto } from '../clases/Producto';
import { CarritoService } from 'src/services/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  private carrito : Producto[];
  private txt_stock:string = "Cantidad:";
  //@ViewChild(ChildComponent) viewChild: ChildComponent;

  constructor(private service_carrito:CarritoService) { 

    
  }
  
  ngOnInit() {
    /* Traigo el carrito de compras */
    this.carrito = this.service_carrito.getCarrito();
  
    if(this.carrito == null){
        this.carrito = [];
    }

  }


  onEliminarClicked(eliminar : boolean){
    if(eliminar){
      this.carrito = this.service_carrito.getCarrito();
    }

  }

}
