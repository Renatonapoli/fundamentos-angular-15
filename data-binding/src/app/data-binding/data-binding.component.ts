import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  url: string = 'https://loiane.training/'
  cursoAngular: boolean = true
  urlImagem: string = 'https://m.media-amazon.com/images/I/8114U+3cgcL._AC_UF894,1000_QL80_.jpg'
  urlImagem2: string = 'https://m.media-amazon.com/images/I/71xYKz7LmhL._AC_UF894,1000_QL80_.jpg'

  valorAtual: string = ''
  valorEnter: string = ''

  mouseOver: boolean = false

  nome: string = 'abc'
  nomeDoCurso = 'Angular'
  novoValor: number = 10

  getValor() {
    return 1
  }

  getCurtirCurso() {
    return true
  }

  botaoClicado() {
    alert('Clicou no botão')
  }

  OnKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value
  }

  salvarValor(valor: any) {
    this.valorEnter = valor
  }

  onMouseOver() {
    this.mouseOver = !this.mouseOver
  }

  onMudouValor(evento: any) {
    console.log(evento.nomeValor)
  }
}
