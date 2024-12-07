import { AuthService } from './login/auth-service.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  idCurso: string = ''

  mostrarMenu: boolean = false

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    )
  }

  ngOnDestroy() {
    this.authService.mostrarMenuEmitter.unsubscribe()
  }
}
