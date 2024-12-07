import { AlunosModule } from './alunos/alunos.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { GuardAuth } from './guards/guard-auth';

const routes: Routes = [
  {
    path: 'cursos',
    loadChildren: () => import('../app/cursos/cursos.module').then(x => x.CursosModule),
    canActivate: [GuardAuth]
  },
  {
    path: 'alunos',
    loadChildren: () => import('../app/alunos/alunos.module').then(x => x.AlunosModule),
    canActivate: [GuardAuth]
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [GuardAuth]
  },
  {
    path: 'login',
    component: LoginComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
