import { Component, OnChanges, OnInit, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,
  OnDestroy,
  Input} from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnChanges, OnInit,
DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,
AfterContentChecked, OnDestroy {

   @Input() valorInicial: number = 10

  constructor() {
    console.log('Contructor')
  }

  ngOnChanges() {
    console.log('ngOnChanges')
  }

  ngOnInit() {
    console.log('ngOnInit')
  }

  ngDoCheck() {
    console.log('ngDoChecked')
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit')
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked')
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked')
  }

  ngAfterViewInit() {
    console.log('AfterViewInit')
  }

  AfterViewChecked() {
    console.log('AfterViewChecked')
  }

  ngOnDestroy() {
    console.log('ngOnDestroy')
  }





}
