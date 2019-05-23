import { Component, OnInit, Input } from '@angular/core';
import { Categoria } from '../../clases/Categoria';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

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

  constructor( private route: ActivatedRoute,  private router: Router) {  
     this.hijoColapsado = false;
     this.textoABuscar = "null";
   }

  ngOnInit() {
  }

  Colapsar(){
    this.hijoColapsado = !this.hijoColapsado;
  }

  cambiarFiltroName(filtro:string, categoria:Categoria){
    this.textoABuscar = filtro;
    this.router.navigate(['listaProductos', categoria.id, filtro]);

  }


}
