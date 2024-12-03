import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  // TODO Usando em tag específica
  // selector: 'p[fundoAmarelo]'
  selector: '[fundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    // this.element.nativeElement.style.backgroundColor = 'yellow'

    // TODO usando as boas práticas para a segurança no Angular.

    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'yellow'
    )

  }

}
