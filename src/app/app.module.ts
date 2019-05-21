import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { CarritoComponent } from './carrito/carrito.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { RouteviewComponent } from './routeview/routeview.component';
import { CategoriaService} from '../services/categoria.service';
import { ProductsService } from '../services/products.service';
import { CarritoService } from 'src/services/carrito.service';
import { CardComponent } from './card/card.component';
import { FiltroComponent } from './filtro/filtro.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    CarritoComponent,
    ContentComponent,
    FooterComponent,
    RouteviewComponent,
    CardComponent,
    FiltroComponent
  ],
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
    CarritoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
