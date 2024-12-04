import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  emitirCursoCriado = new EventEmitter<string>()

  private cursos: string[] = ['Angular 15', 'Javascript', 'Typescript']

  constructor() {
    console.log('CursosService')
  }

  getCursos() {
    return this.cursos
  }

  adicionarCursos(curso: string) {
    this.cursos.push(curso)
    this.emitirCursoCriado.emit(curso)
  }


}
