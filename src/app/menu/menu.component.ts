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
  private _menuHtml : string[];
  private _itemMenu:string;

  constructor(private service: CategoriaService) {
    console.log("Construyendo el componente");
    this.id = 8;
    this._menuHtml = [];
    this.service.getCategorias().subscribe(data => {
      if(data["categories"] != null && data["categories"] != []){
        this.categorias = data["categories"];
        /*let value = 0;
        this._itemMenu = "";
        for(let indexCategoria = 0; indexCategoria < data["categories"].length; indexCategoria++){
          this.generarMenu(data["categories"],0, value);
          this._menuHtml.push(this._itemMenu);
          this._itemMenu = "";
        } 
        console.log(this._menuHtml);*/
      }
    });
  }

  generarMenu(item : Categoria[], index:number, value:number){
      let tieneSubcategorias = item[index].hasOwnProperty("sublevels");
      console.log(item[index]);
      if(!tieneSubcategorias){
        this._itemMenu = this._itemMenu + 
        ' <li class="nav-item"> '+
          ' <a class="nav-link" routerLink="/listaProductos/'+item[index].id+'" id="menu-description">'+item[index].name +
            ' <input type="text" placeholder="Buscar" /> '+
          ' </a> '+
        '</li>';
      }else{
        this._itemMenu = this._itemMenu + ' <ul class="navbar-nav flex-column"> '+
                                              '<li class="nav-item">'+
                                              '<a class="nav-link collapsed" href="#submenu1" data-toggle="collapse" data-target="#submenu1" >'+item[index].name+'</a>'+
                                              '<div class="collapse" id="submenu1" aria-expanded="false">';                                                  
        if(tieneSubcategorias){
          for(let i = 0; i < item[index].sublevels.length ; i++ ){
              this.generarMenu(item[index].sublevels, i,value++);
            }
          this._itemMenu = this._itemMenu +' </div> '+' </li> '+ ' </ul> ';
        }
      }
  }

  ngOnInit() {    
    this.isCollapsed = false;
  }
  
  toggleNavbar(){
    this.isCollapsed = !this.isCollapsed;
  }

}
