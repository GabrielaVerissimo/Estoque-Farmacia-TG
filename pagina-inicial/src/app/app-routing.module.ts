import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastroComponent } from './cadastro/cadastro.component';
import { EstoqueComponent } from './estoque/estoque.component';
import { InicioComponent } from './inicio/inicio.component';
import { MovimentacaoComponent } from './movimentacao/movimentacao.component';
import { PedidoComponent } from './pedido/pedido.component';
import { VendasComponent } from './vendas/vendas.component';

const routes: Routes = [
  { path:'cadastro', component: CadastroComponent},
  { path: 'vendas', component: VendasComponent},
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

