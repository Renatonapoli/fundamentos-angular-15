import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent {

  livro: any = {
    Editora : "Bertrand Brasil; 8ª edição",
    Data: new Date(2016, 5, 23),
    Preco: 44.99,
    Idioma: "Português",
    CapaComum : 308,
    ISBNOne: 6558380544,
    ISBNTwo: 978-6558380542,
    Dimensoes: "15.5 x 1.7 x 23 cm"
  }
}
