import { EstadosBr } from './../shared/models/estado-br';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DropdownService } from '../shared/services/dropdown.service';
import { Observable, pipe } from 'rxjs';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';

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

 constructor(
  private formBuilder: FormBuilder,
  private http: HttpClient,
  private dropdownService: DropdownService,
  private consultaCepService: ConsultaCepService
) {}

 ngOnInit() {

  this.estados = this.dropdownService.getEstado()
  this.cargos = this.dropdownService.getCargos()

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
    email: [null, [Validators.required, Validators.email]],

    endereco: this.formBuilder.group({
      cep: [null, Validators.required],
      numero: [null, Validators.required],
      complemento: [null],
      rua: [null, Validators.required],
      bairro: [null, Validators.required],
      cidade: [null, Validators.required],
      estado: [null, Validators.required]
    }),

    cargo: [null]

    // Validators.pattern("[A-Z]0-9....")
    // Validators.minLength(3), Validators.maxLength(9)
  })
 }

 onSubmit() {
  console.log(this.formulario)

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
    return !this.formulario.get(campo)?.valid && (this.formulario.get(campo)?.touched || this.formulario.get(campo)?.dirty)
  }

  verificarEmailInvalido() {
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
}
