import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatMenu, MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTabsModule} from '@angular/material/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ServicosComponent } from './produtos/servicos/servicos.component';
import { MarcasComponent } from './produtos/marcas/marcas.component';
import { MenuProdutosComponent } from './produtos/menu-produtos/menu-produtos.component';
import { PdvComponent } from './pdv/pdv.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProdutosComponent,
    ServicosComponent,
    MarcasComponent,
    MenuProdutosComponent,
    PdvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
