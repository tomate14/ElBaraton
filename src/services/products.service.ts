import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../app/clases/Producto';
import { Observable } from 'rxjs';
import { ParametrosFiltro } from 'src/app/clases/ParametrosFiltro';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  //Funciona como cache de productos
  public productos : Producto[];

  //Url para obtener los productos
  public _urlProducto : string;

  private nombreFiltrar : string;

  //Constructor del servicio
  constructor(private http: HttpClient) { 
    this._urlProducto = "products";
    this.productos = [];
  }

  //Obtiene los productos de donde se quiera traerlos
  //En este caso, trae los productos mockeados del json.
  getProductos(): Observable<Producto[]>{
    return this.http.get<Producto[]>('../assets/products.json');
  }

  //Instancia por primera vez la cache de los productos
  setProductos(productosIniciales : Producto[]){
    this.productos = productosIniciales;
  }

  /*Si bien se podria haber filtrado con pipes, esto mapeado a gran escala de productos
    es super ineficiente para Angular ya que en cada cambio de algun input el pipe hace
    ejecutar todo el ciclo de vida al componente. */
    
  //Ordena los productos en vista por el orden enviado por parametro
  ordenarProductos(productosDesordenados : Producto[], orden: string) {
    try {
      switch (orden) {
        case "Precio Menor":
            return productosDesordenados.sort((a,b)=> parseInt(a.price.replace("$","").replace(",","")) - parseInt(b.price.replace("$","").replace(",","")) )
          break;
        case "Precio Mayor":
          return productosDesordenados.sort((a,b)=> parseInt(b.price.replace("$","").replace(",","")) - parseInt(a.price.replace("$","").replace(",","")) )
          break;
        case "Cantidad Menor":
          return productosDesordenados.sort((a,b)=> a.quantity - b.quantity);
          break;
        case "Cantidad Mayor":
          return productosDesordenados.sort((a,b)=> b.quantity - a.quantity);
          break;
        default:
          return productosDesordenados.sort((a,b) =>  (a.available === b.available)? 0 : a.available ? -1 : 1);
          break;
      }
    } catch (error) {
      throw new Error("Error al ordenar los productos: " + error.toString());
    }
  }

  //Filtramos los productos de la cache por los parametros que entran
  filtrarProductos( filtro: ParametrosFiltro): Producto[] {
    try {
        return this.productos.filter(producto => {
        if(parseInt(producto.price.replace("$","").replace(",","")) >= filtro.getPrecioMinimo()) {
          if(parseInt(producto.price.replace("$","").replace(",","")) <= filtro.getPrecioMaximo()) {          
            if(producto.quantity >= filtro.getStock()) {
                return producto;
              }
            }
          }
        });     
    } catch (error) {
      throw new Error("Error al filtrar los productos" + error.toString());
    }
  }

  setNombreFiltrar(nombre :string){
    this.nombreFiltrar = nombre;
    this.productos = this.productos.filter(producto => producto.name.search(nombre));
    console.log(this.productos);
  }

  
  

}
