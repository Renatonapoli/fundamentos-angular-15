import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-properties',
  templateUrl: './input-properties.component.html',
  styleUrls: ['./input-properties.component.css']
})
export class InputPropertiesComponent {
//Passando o nome nomeCurso para ser usado no component
// @Input() nomeCurso: string = ''

//Passando o nomeCurso para ser usado internamente no componente e o nome para ser usado via data-binding no componente [nome]
@Input('nome') nomeCurso: string = ''
}
