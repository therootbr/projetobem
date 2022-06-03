import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosComponent } from './produtos/produtos.component';
import { ServicosComponent } from './produtos/servicos/servicos.component';
import { MarcasComponent } from './produtos/marcas/marcas.component';

const routes: Routes = [
  {path: 'catalogo', component: ProdutosComponent},
  {path: 'catalogo/servicos', component: ServicosComponent},
  {path: 'catalogo/marcas', component: MarcasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
