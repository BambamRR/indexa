import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FormularioContatoComponent } from './paginas/formulario-contato/formulario-contato.component';
import { ListaContatosComponent } from "./paginas/lista-contatos/lista-contatos.component";
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, FormularioContatoComponent, ListaContatosComponent]
})
export class AppComponent {}
