import { Component, OnInit } from '@angular/core';
import { CategoriaService} from '../../../services/categoria.service';
import { Categoria } from '../../clases/Categoria';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  private menuColapsado = null;
  private itemColapsado = null;
  private estadosPrimerasSubcategorias:Object[];

  constructor(private service: CategoriaService) {
    this.menuColapsado = false;
    this.itemColapsado = false;
    this.estadosPrimerasSubcategorias = [];
    this.service.getCategorias().subscribe(data => {
      if(data["categories"] != null && data["categories"] != []){
        this.service._categoria = data["categories"];
      }
      for(let index = 0; index < this.service._categoria.length; index++){
        this.estadosPrimerasSubcategorias.push({id: this.service._categoria[index].id,mostrar:false});
      }
    });
  }
  
  ngOnInit() {    
  }
  
  visualizarSubcategoria(id:string){
    let estadoCategoria:Object = this.estadosPrimerasSubcategorias.find((item)=> item["id"] == id);
    estadoCategoria["mostrar"] = !estadoCategoria["mostrar"];
  }

  getEstadoSubcategoria(id:number){
    return this.estadosPrimerasSubcategorias.find((item)=> item["id"] == id)["mostrar"];

  }

  toggleNavbar(){
    this.menuColapsado = !this.menuColapsado;
  }
  Colapsar(){
    this.itemColapsado = !this.itemColapsado;
  }

}
