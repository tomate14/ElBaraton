import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from 'src/app/clases/Categoria';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      console.log(data);
    });

   }

   public getJSON(): Observable<any> {
      return this.http.get("../data/categories.json");
  }

  public getCategorias():Array<Categoria> {
    return null;

  }
}
