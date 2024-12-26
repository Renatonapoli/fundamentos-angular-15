import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos.service';
import { Curso } from '../curso';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss'],
  preserveWhitespaces: true
})
export class CursosListaComponent implements OnInit {
  cursos!: Curso[]

  constructor(private cursoService: CursosService) {}

  ngOnInit() {
    this.cursoService.list().subscribe(dados => this.cursos = dados)
  }
}
