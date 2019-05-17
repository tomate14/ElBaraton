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
  public categorias : Categoria[];
  public id : number;

  constructor(private service: CategoriaService) {
    console.log("Construyendo el componente");
    this.id = 8;
  }
  
  ngOnInit() {
    console.log("Construyendo el ngOnInit");
    this.isCollapsed = false;
    this.service.getCategorias().subscribe(data => {
      if(data["categories"] != null && data["categories"] != []){
        this.categorias = data["categories"];     
      }
      console.log(this.categorias);   
    });
  }
  
  toggleNavbar(){
    this.isCollapsed = !this.isCollapsed;
  }

}
