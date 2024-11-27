import { Component } from '@angular/core';
import { ConteudoCard } from 'src/app/components/card/conteudo-card';

@Component({
  selector: 'app-lista-cards',
  templateUrl: './lista-cards.component.html',
  styleUrls: ['./lista-cards.component.css']
})
export class ListaCardsComponent {

  diretivasDeAtributo = {
    titulo: 'Diretivas de atributo',
    conteudo: 'Altere a aparência ou o comportamento de elementos DOM e componentes Angular com diretivas de atributo.',
    link: '/diretivas-atributo'
  }
}
