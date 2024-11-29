import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent {
@Input() valor: number = 0

@Output() mudouValor = new EventEmitter()

@ViewChild('campoInput') valorElementRef: ElementRef

acrescenta() {
  this.valorElementRef.nativeElement.value++
  // this.valor++
  this.mudouValor.emit({nomeValor: this.valor})
}

decrementa() {
  this.valorElementRef.nativeElement.value--
  // this.valor--
  this.mudouValor.emit({nomeValor: this.valor})

}
}
