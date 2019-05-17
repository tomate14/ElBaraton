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
  public productos : Array<Producto>;

  constructor(private service: ProductsService) {
    this.productos = new Array<Producto>();
  }

  ngOnInit() {
    this.isCollapsed = false;
    this.service.getProductos().subscribe((data: Array<Producto>) => {
      this.productos = Array<Producto>();
      Array.prototype.push.apply(this.productos, data["products"]);
      
      console.log(this.productos);
    });
   
  }
  
  toggleNavbar(){
    this.isCollapsed = !this.isCollapsed;
  }

}
