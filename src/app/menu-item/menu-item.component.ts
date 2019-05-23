import { Component, OnInit, Input } from '@angular/core';
import { Categoria } from '../clases/Categoria';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input() hijos : Categoria;
  @Input() itemColapsado:boolean;
  private hijoColapsado:boolean;

  private aux :any;

  constructor() {  
     this.hijoColapsado = false;
   }

  ngOnInit() {
  }

  Colapsar(){
    this.hijoColapsado = !this.hijoColapsado;
  }
}
