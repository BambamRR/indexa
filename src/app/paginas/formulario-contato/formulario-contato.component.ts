import { Component } from '@angular/core';
import { ContainerComponent } from '../../componentes/container/container.component';
import { SeparadorComponent } from "../../componentes/separador/separador.component";

@Component({
    selector: 'app-formulario-contato',
    standalone: true,
    templateUrl: './formulario-contato.component.html',
    styleUrl: './formulario-contato.component.css',
    imports: [ContainerComponent, SeparadorComponent]
})
export class FormularioContatoComponent {

}
