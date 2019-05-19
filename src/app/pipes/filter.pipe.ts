import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, stock: any): any {
    if(value != undefined){
      if(stock == 0 || stock == null){
        return value;
      }
      return value.filter(producto => producto.quantity >= stock);
    }
    return [];
  }

}
