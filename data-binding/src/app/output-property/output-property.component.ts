import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent {
@Input() valor: number = 0

@Output() mudouValor = new EventEmitter()

acrescenta() {
  this.valor++
  this.mudouValor.emit({nomeValor: this.valor})
}

decrementa() {
  this.valor--
  this.mudouValor.emit({nomeValor: this.valor})

}
}
