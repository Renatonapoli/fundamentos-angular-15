import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') eventoAoPassarOMouse() {
    // this.renderer2.setStyle(
    //   this.elementRef.nativeElement,
    //   'background-color',
    //   'yellow'
    // )
    this.backgroundColor = 'yellow'
  }

  @HostListener('mouseleave') eventoAoRetirarOMouse() {
    // this.renderer2.setStyle(
    //   this.elementRef.nativeElement,
    //   'background-color',
    //   'white'
    // )

    this.backgroundColor = 'white'
  }

  // @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.backgroundColor') get setColor() {
    //Pode ser inserido qualquer lógica antes de retornar a cor
    return this.backgroundColor
  }

  private backgroundColor: string

  constructor(
    // private elementRef: ElementRef,
    // private renderer2: Renderer2
  ) {}


}
