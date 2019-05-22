import { Component, OnInit, Input } from '@angular/core';
import { Categoria } from '../clases/Categoria';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input() child : Categoria;
  private aux :any;

  constructor() {   }

  ngOnInit() {
  }

}
