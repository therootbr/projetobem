import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosComponent } from './produtos/produtos.component';
import { ServicosComponent } from './produtos/servicos/servicos.component';
import { MarcasComponent } from './produtos/marcas/marcas.component';
import { PdvComponent } from './pdv/pdv.component';

const routes: Routes = [
  {path: 'catalogo', component: ProdutosComponent},
  {path: 'catalogo/servicos', component: ServicosComponent},
  {path: 'catalogo/marcas', component: MarcasComponent},
  {path: 'pdv', component: PdvComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
