import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RouteviewComponent } from './componentesrouteo/routeview/routeview.component';
import { CarritoComponent } from './componentesrouteo/carrito/carrito.component';

const routes: Routes = [
    {
        path: 'listaProductos/:id/:filtrar',
        component: RouteviewComponent
    },
    {
      path: 'carrito',
      component: CarritoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
