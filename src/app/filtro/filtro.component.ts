import { Component, OnInit, Output, EventEmitter, DoCheck } from '@angular/core';
import { ParametrosFiltro } from '../clases/ParametrosFiltro';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit, DoCheck {

  private _precioMinimo:number;
  private _precioMaximo:number;
  private _stock:number;
  private _ordenamientoProducto:string;
  //private _ordenarPor : any[];
  @Output() OnFiltroChange: EventEmitter<ParametrosFiltro> = new EventEmitter<ParametrosFiltro>();
  @Output() OnOrdenChange: EventEmitter<string> = new EventEmitter<string>();
  
  
  constructor() { 
    this._precioMaximo = 30000;
    this._precioMinimo = 0;
    this._stock = 0;
    this._ordenamientoProducto = "";
    //this._ordenarPor = [{nombre : "Precio Menor"},{nombre : "Precio Mayor"},{nombre : "Cantidad Menor"},{nombre : "Cantidad Mayor"},{nombre : "Disponibles"} ];
  }

  ngOnInit() {

  }

  ngDoCheck(): void {
    
  }

  notificarFiltroStock($event:any){
    let filtro = new ParametrosFiltro(this._precioMinimo,this._precioMaximo, this._stock);
    this.OnFiltroChange.emit(filtro);
  }

  modificarOrdenProductos(orden : string){
    this.OnOrdenChange.emit(orden);
  }

}
