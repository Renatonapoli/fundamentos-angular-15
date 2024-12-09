import { AlunosModule } from './alunos/alunos.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { GuardAuth } from './guards/guard.auth';
import { CursosGuard } from './guards/cursos.guard';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

const routes: Routes = [
  {
    path: 'cursos',
    loadChildren: () => import('../app/cursos/cursos.module').then(x => x.CursosModule),
    canActivate: [GuardAuth],
    canActivateChild: [CursosGuard]
  },
  {
    path: 'alunos',
    loadChildren: () => import('../app/alunos/alunos.module').then(x => x.AlunosModule),
    canActivate: [GuardAuth]

  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [GuardAuth],

  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full',
  },
  {
    path:'**',
    component: PaginaNaoEncontradaComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
