import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RouteviewComponent } from './componentesrouteo/routeview/routeview.component';
import { CarritoComponent } from './componentesrouteo/carrito/carrito.component';
import { MensajeinicialComponent } from './mensajeinicial/mensajeinicial.component'

const routes: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full'  },
    { path:'inicio', component: MensajeinicialComponent },
    { path: 'listaProductos/:id/:filtrar', component: RouteviewComponent },
    { path: 'carrito',  component: CarritoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
