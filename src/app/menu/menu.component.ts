import { Component, OnInit } from '@angular/core';
import { CategoriaService} from '../../services/categoria.service';
import { Categoria } from '../clases/Categoria';
import { ProductsService } from '../../services/products.service';
import { Producto } from '../clases/Producto';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isCollapsed = null;
  private categorias : Categoria[];
  private id : number;

  constructor(private service: CategoriaService) {
    this.isCollapsed = false;
    this.id = 8;
    this.service.getCategorias().subscribe(data => {
      if(data["categories"] != null && data["categories"] != []){
        this.categorias = data["categories"];
      }
    });
  }
  
  ngOnInit() {    
  }
  
  toggleNavbar(){
    this.isCollapsed = !this.isCollapsed;
  }

}
