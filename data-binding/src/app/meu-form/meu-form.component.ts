import { Component } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css']
})
export class MeuFormComponent {

  pessoa: any = {
    nome: 'Renato',
    idade: '34'
  }
}
