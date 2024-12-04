import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
// TODO Usando o providers no seletor Component para que seja exclusivo na chamada do service
providers:[CursosService]
})
export class CursosComponent implements OnInit {

  cursos: string[] = []
  // cursosService: CursosService

  constructor(private cursosService: CursosService) {
    // this.cursosService = new CursosService()
    // this.cursosService = cursosService
  }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos()
  }
}
