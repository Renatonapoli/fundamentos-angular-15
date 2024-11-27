import { Component, Input } from '@angular/core';
import { ConteudoCard } from './conteudo-card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  // titulo: string = 'Texto aqui'
  @Input() conteudoCard: ConteudoCard = {
    titulo: '',
    conteudo: '',
    link: ''
  }
}
