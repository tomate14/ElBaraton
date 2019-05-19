import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'preciomayor'
})
export class PreciomayorPipe implements PipeTransform {

  transform(value: any, mayorque: any): any {
    if(mayorque == 0){
      return value;
    }
    let aux = value.filter(producto => parseInt(producto.price.replace("$","").replace(",","")) >= parseInt(mayorque));
    return  aux;
  }

}
