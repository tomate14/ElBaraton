import { Component, OnInit } from '@angular/core';
import { CategoriaService} from '../../services/categoria.service';
import { Categoria } from '../clases/Categoria';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public isCollapsed = null;
  protected _categorias: Array<Categoria>;

  constructor(protected myService: CategoriaService) {
    
  }

  ngOnInit() {
    this.isCollapsed = false;
    //this._categorias = this.myService.getCategorias();
   /* this.myService.getJSON().subscribe(data => {
        console.log(data);
    });*/
   
  }

  toggleNavbar(){
    this.isCollapsed = !this.isCollapsed;
  }

}
