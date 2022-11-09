import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EstoqueComponent } from './estoque/estoque.component';
import { InicioComponent } from './inicio/inicio.component';
import { MovimentacaoComponent } from './movimentacao/movimentacao.component';
import { PedidoComponent } from './pedido/pedido.component';

const routes: Routes = [
  { path: 'estoque', component: EstoqueComponent},
  { path: 'movimentacao', component: MovimentacaoComponent},
  { path: 'pedido', component: PedidoComponent},
  { path:'', component: InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

