import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'preciomenor'
})
export class PreciomenorPipe implements PipeTransform {

  transform(value: any, menorque: any): any {
    if(menorque == 0){
      return value;
    }
    return value.filter(producto => parseInt(producto.price.replace("$","").replace(",","")) <= parseInt(menorque));
  }

}
