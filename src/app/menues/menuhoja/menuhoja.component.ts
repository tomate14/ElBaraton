import { Component, OnInit, Input } from '@angular/core';
import { Categoria } from 'src/app/clases/Categoria';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menuhoja',
  templateUrl: './menuhoja.component.html',
  styleUrls: ['./menuhoja.component.css']
})
export class MenuhojaComponent implements OnInit {

  @Input() private categoria:Categoria;
  private textoInput:string;

  constructor(private router: Router) { 
    console.log("test");
    this.textoInput = "";
  }

  ngOnInit() {
  }

  cambiarFiltroName(filtro:string, categoria:Categoria){
    //this.textoInput = filtro.target.value;
    this.router.navigate(['listaProductos', categoria.id, filtro]);

  }

}
