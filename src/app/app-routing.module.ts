import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RouteviewComponent } from './routeview/routeview.component';
import { CarritoComponent } from './carrito/carrito.component';

const routes: Routes = [
    {
        path: 'listaProductos',
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
