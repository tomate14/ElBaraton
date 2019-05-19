import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordenproducto'
})
export class OrdenproductoPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg != ""){
      switch (arg) {
        case "Precio Menor":
          return value.sort((a,b)=> parseInt(a.price.replace("$","").replace(",","")) - parseInt(b.price.replace("$","").replace(",","")) )
          break;
        case "Precio Mayor":
          return value.sort((a,b)=> parseInt(b.price.replace("$","").replace(",","")) - parseInt(a.price.replace("$","").replace(",","")) )
          break;
        case "Cantidad Menor":
          return value.sort((a,b)=> a.quantity - b.quantity);
          break;
        case "Cantidad Mayor":
          return value.sort((a,b)=> b.quantity - a.quantity);
          break;
        default:
          return value.sort((a,b) =>  (a.available === b.available)? 0 : a.available ? -1 : 1);
          break;
      }
  }
  return value;
  }

}
