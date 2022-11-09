import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { CadastroComponent } from '../cadastro/cadastro.component';
import { EstoqueComponent } from '../estoque/estoque.component';
import { MovimentacaoComponent } from '../movimentacao/movimentacao.component';
import { PedidoComponent } from '../pedido/pedido.component';
import { VendasComponent } from '../vendas/vendas.component';
import { MenuComponent } from './menu.component';

@NgModule({
    declarations: [
        CadastroComponent,
        EstoqueComponent,
        MovimentacaoComponent,
        PedidoComponent,
        VendasComponent,
    ],

    imports: [
        BrowserModule,
        FormsModule
    ],

    providers: [],
    bootstrap: [MenuComponent]
})

export class MenuModule { }