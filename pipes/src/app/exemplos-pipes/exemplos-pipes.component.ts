import { Component } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';

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

  }

  livros: string[] = ["Angular15", "Javascript", "Java"]
  filtro: string = ''

  obterCurso() {
    if(this.livros.length === 0 || this.livros === undefined ||
      this.filtro.trim() === '') {
        return this.livros
      }

    return this.livros.filter(liv => {
      if(liv.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0){
        return true
      }
      return false
    })
  }

  valorAsync = new Promise((resolve, reject) =>{
    setTimeout(() => resolve("Valor Assícrono"), 2000 )
  })

  valorAsync2 = of(2000).pipe(
    delay(2000),
    map(valor => "Valor Assícrono")
  )
}
