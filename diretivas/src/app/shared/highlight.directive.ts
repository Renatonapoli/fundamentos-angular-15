import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnInit {

  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = this.background
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = this.backgroundColorDefault
  }

  @HostBinding('style.backgroundColor') backgroundColor: string


  @Input() backgroundColorDefault: string = 'white'
  // @Input() background: string = 'yellow'
  @Input('highlight') background: string = 'yellow'

  constructor() { }

  ngOnInit() {
    this.backgroundColor = this.backgroundColorDefault
  }

}
