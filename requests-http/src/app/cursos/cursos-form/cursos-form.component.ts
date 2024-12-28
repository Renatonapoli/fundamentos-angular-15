import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { CursosService } from '../cursos.service';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.css'],
})
export class CursosFormComponent implements OnInit {
  form!: FormGroup;
  submitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private service: CursosService,
    private modal: AlertModalService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params
      .pipe(
        map((params: any) => params['id']),
        switchMap((id) => this.service.loadById(id))
      )
      .subscribe((curso) => this.updateForm(curso));

    // concatMap => ordem da requisição importa
    // mergeMap => ordem não importa
    // exhaustMap => casos de login

    // this.route.params.subscribe((params: any) => {
    //   const id = params['id'];
    //   console.log(id);
    //   const curso$ = this.service.loadById(id);
    //   curso$.subscribe((curso) => {
    //     this.updateForm(curso);
    //   });
    // });

    this.form = this.fb.group({
      id: [null],
      nome: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(250),
        ],
      ],
    });
  }

  updateForm(curso: any) {
    this.form.patchValue({
      id: curso.id,
      nome: curso.nome,
    });
  }

  hasErro(field: string): ValidationErrors | null {
    const control = this.form.get(field);
    return control ? control.errors : null;
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.form.value);
    if (this.form.valid) {
      console.log('submit');
      this.service.create(this.form.value).subscribe(
        (success) => {
          this.modal.showAlertSuccess('Curso criado com sucesso!'),
            this.router.navigate(['/']);
        },
        (error) =>
          this.modal.showAlertDanger('Error ao criar curso, tente novamente!'),
        () => console.log('request completo')
      );
    }
  }

  onCancel() {
    this.submitted = false;
    this.form.reset();
  }
}
