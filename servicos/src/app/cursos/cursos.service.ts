import { EventEmitter, Injectable } from '@angular/core';
import { LogService } from '../shared/log.service';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  emitirCursoCriado = new EventEmitter<string>()
  static criouNovoCurso = new EventEmitter<string>()

  private cursos: string[] = ['Angular 15', 'Javascript', 'Typescript']

  constructor(private log: LogService) {
    console.log('CursosService')
  }

  getCursos() {
    this.log.consoleLog('Mostrando os cursos')
    return this.cursos
  }

  adicionarCursos(curso: string) {
    this.log.consoleLog('Adicionando curso na lista')
    this.cursos.push(curso)
    this.emitirCursoCriado.emit(curso)
    CursosService.criouNovoCurso.emit(curso)
  }


}
