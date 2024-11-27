import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})

export class HighlightDirective {
  @Input('appHighlight') corSelecionada: string = ''

  constructor(private element: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    // this.highlight('yellow');
    this.highlight(this.corSelecionada || 'red')
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('')
  }


  private highlight(color: string) {
    this.element.nativeElement.style.backgroundColor = color

  }

}
