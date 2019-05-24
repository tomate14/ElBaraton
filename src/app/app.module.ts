import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentesgenerales/header/header.component';
import { MenuComponent } from './menues/menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { CarritoComponent } from './componentesrouteo/carrito/carrito.component';
import { ContentComponent } from './componentesgenerales/content/content.component';
import { RouteviewComponent } from './componentesrouteo/routeview/routeview.component';
import { CategoriaService} from '../services/categoria.service';
import { ProductsService } from '../services/products.service';
import { CarritoService } from 'src/services/carrito.service';
import { CardComponent } from './card/card.component';
import { FiltroComponent } from './filtro/filtro.component';
import { FormsModule } from '@angular/forms';
import { MenuItemComponent } from './menues/menu-item/menu-item.component';
import { MenuuserComponent } from './menues/menuuser/menuuser.component';
import { ConfirmarComponent } from '../app/componentesgenerales/confirmar/confirmar.component';
import { ConfirmarService } from 'src/services/confirmar.service';
import { MensajeinicialComponent } from './mensajeinicial/mensajeinicial.component';
import { MenuhojaComponent } from './menues/menuhoja/menuhoja.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    CarritoComponent,
    ContentComponent,
    RouteviewComponent,
    CardComponent,
    FiltroComponent,
    MenuItemComponent,
    MenuuserComponent,
    ConfirmarComponent,
    MensajeinicialComponent,
    MenuhojaComponent
  ],
  entryComponents: [ConfirmarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],  
  providers: [
    CategoriaService,
    ProductsService,
    CarritoService,
    ConfirmarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
