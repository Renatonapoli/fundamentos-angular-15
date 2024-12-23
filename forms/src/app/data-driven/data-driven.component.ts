import { VerificaEmailService } from './services/verifica-email.service';
import { FormValidations } from './../shared/services/form-validations';
import { EstadosBr } from './../shared/models/estado-br';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { DropdownService } from '../shared/services/dropdown.service';
import { map, Observable, pipe } from 'rxjs';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.css']
})
export class DataDrivenComponent implements OnInit {

  formulario!: FormGroup;
  // estados!: EstadosBr[]
  estados!: Observable<EstadosBr[]>
  cargos!: any[]
  tecnologias!: any[]
  newsletterOp!: any[]

  frameworks = ['Angular', 'React', 'Vue', 'Sencha']

 constructor(
  private formBuilder: FormBuilder,
  private http: HttpClient,
  private dropdownService: DropdownService,
  private consultaCepService: ConsultaCepService,
  private verificaEmailService: VerificaEmailService
) {}

 ngOnInit() {

  // this.verificaEmailService.verificaEmail('email@email.com').subscribe()
  this.estados = this.dropdownService.getEstado()
  this.cargos = this.dropdownService.getCargos()
  this.tecnologias = this.dropdownService.getTecnologias()
  this.newsletterOp = this.dropdownService.getNewsletter()


  // this.dropdownService.getEstado()
  //   .subscribe(dados => {
  //     this.estados = dados
  //     console.log(dados)
  //   })

  // this.formulario = new FormGroup({
  //   nome: new FormControl(null),
  //   email: new FormControl(null),
  // })

  this.formulario = this.formBuilder.group({
    nome: [null, Validators.required],
    email: [null, [Validators.required, Validators.email], [this.validarEmailAssincrono.bind(this)]],
    confirmarEmail: [null, [Validators.required, FormValidations.equalsTo('email')]],

    endereco: this.formBuilder.group({
      cep: [null, [Validators.required, FormValidations.cepValidator]],
      numero: [null, Validators.required],
      complemento: [null],
      rua: [null, Validators.required],
      bairro: [null, Validators.required],
      cidade: [null, Validators.required],
      estado: [null, Validators.required]
    }),

    cargo: [null],
    tecnologias: [null],
    newsletter: ['s'],
    termos: [null, Validators.pattern('true')],
    frameworks: this.buildFrameworks()


    // Validators.pattern("[A-Z]0-9....")
    // Validators.minLength(3), Validators.maxLength(9)
  })
 }

 buildFrameworks() {
  const values = this.frameworks.map(v => new FormControl(false));
  return this.formBuilder.array(values, FormValidations.requiredMinCheckbox(1));
}



get frameworksArray(): FormArray {
  return this.formulario.get('frameworks') as FormArray
}

 onSubmit() {
  console.log(this.formulario)

  let valueSubmit = Object.assign({}, this.formulario.value)

  valueSubmit = Object.assign(valueSubmit, {
    frameworks: valueSubmit.frameworks
      .map((v: any, i: any) => v ? this.frameworks[i] : null )
      .filter((v: any) => v !== null)
  })

  console.log(valueSubmit)

  if(this.formulario.valid) {
    this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
      .pipe(res => res)
      .subscribe({
        next: (dados) => {
          console.log(dados)
          this.resetar()
        },
        error: () =>  alert('error')
      })
    }else {
      this.verificaAsValidacoesDoFormulario(this.formulario)
    }

  }

  verificaAsValidacoesDoFormulario(formGroup: FormGroup) {
    console.log('Fomulário inválido')
    Object.keys(formGroup.controls).forEach(campo => {
      console.log(campo)
      const controle = formGroup.get(campo)
      controle?.markAsDirty()
      if (controle instanceof FormGroup) {
        this.verificaAsValidacoesDoFormulario(controle)
      }
    })
  }

  resetar() {
    this.formulario.reset()
  }

  validaCampo(campo: any) {
    return (
      this.formulario.get(campo)?.hasError('required') &&
      (this.formulario.get(campo)?.touched || this.formulario.get(campo)?.dirty)
    )
  }

  validarEmail() {
    let campoEmail = this.formulario.get('email')
    if (campoEmail?.errors) {
      return campoEmail?.errors['email']
    }
  }

  onError(campo: string) {
    return {
      hasError: this.validaCampo(campo),
      hasFeedback: this.validaCampo(campo)
    }
  }

  consultaCEP() {
    let cep = this.formulario.get('endereco.cep')?.value

    if( cep !=null && cep !== '') {
      this.consultaCepService.consultaCEP(cep)
      .subscribe((dados: any) => this.populaForm(dados))
    }
  }

  populaForm(dados: any) {
    this.formulario.patchValue({
      endereco: {
        cep: dados.cep,
        rua: dados.logradouro,
        complemento: dados.complemento || '',
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    })
  }

  setarCargo() {
    const cargo = { nome: 'Dev', nivel: 'Pleno', desc: 'Dev PL'}
    this.formulario.get('cargo')?.setValue(cargo)
  }

  compararCargo(obj1: any, obj2: any) {
    return obj1 && obj2 ? (obj1.nome === obj2.nome && obj1.nivel === obj2.nivel) :
    obj1 === obj2
  }

  setarTecnologias() {
    return this.formulario.get('tecnologias')?.setValue(['java', 'javascript', 'php'])
  }

  validarEmailAssincrono(formControl: FormControl) {
    return this.verificaEmailService.verificaEmail(formControl.value)
      .pipe(map(emailExiste => emailExiste ? { emailInvalido: true }: null))
  }
}
