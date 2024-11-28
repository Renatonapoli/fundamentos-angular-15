import { Component } from '@angular/core';
import { CursoService } from './curso.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {
  curso: string

  cursos: string[] = []

  constructor (private cursosService: CursoService) {
    this.curso = 'https://loiane.training'

    this.cursos = cursosService.getCursos()
  }
}
