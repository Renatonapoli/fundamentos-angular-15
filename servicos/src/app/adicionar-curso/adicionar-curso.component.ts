import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-adicionar-curso',
  templateUrl: './adicionar-curso.component.html',
  styleUrls: ['./adicionar-curso.component.css'],
  // TODO Usando o providers no seletor Component para que seja exclusivo na chamada do service
  providers:[CursosService]
})
export class AdicionarCursoComponent implements OnInit {

  cursos: string[] = []

  constructor(private cursosService: CursosService) {
  }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos()
  }

  adicionarCurso(curso: string) {
    this.cursosService.adicionarCursos(curso)
  }
}
