import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from 'src/app/clases/Categoria';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  getCategorias(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>('../assets/categories.json');
  }
}
