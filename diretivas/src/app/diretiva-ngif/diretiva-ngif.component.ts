import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.css']
})
export class DiretivaNgifComponent {
  listaDeCursos: string[] = ["Angular"]

  mostrarCursos: boolean = false

  validaLista() {
    this.mostrarCursos = !this.mostrarCursos
  }
}
