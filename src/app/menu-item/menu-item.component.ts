import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Categoria } from '../clases/Categoria';
import { ProductsService } from 'src/services/products.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input() hijos : Categoria;
  @Input() itemColapsado:boolean;
  private hijoColapsado:boolean;
  private textoABuscar:string;

  private aux :any;

  constructor(private productos_service:ProductsService) {  
     this.hijoColapsado = false;
     this.textoABuscar = "";
   }

  ngOnInit() {
  }

  Colapsar(){
    this.hijoColapsado = !this.hijoColapsado;
  }


}
