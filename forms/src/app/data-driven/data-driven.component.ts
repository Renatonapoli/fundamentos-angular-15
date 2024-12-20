import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.css']
})
export class DataDrivenComponent implements OnInit {

  formulario!: FormGroup;

 constructor(
  private formBuilder: FormBuilder,
  private http: HttpClient
) {}

 ngOnInit() {

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
    })

    // Validators.pattern("[A-Z]0-9....")
    // Validators.minLength(3), Validators.maxLength(9)
  })
 }

 onSubmit() {
  console.log(this.formulario)

  this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
    .pipe(res => res)
    .subscribe({
      next: (dados) => {
        console.log(dados)
        this.resetar()
      },
      error: () =>  alert('error')
    })
  }

  resetar() {
    this.formulario.reset()
  }

  validaCampo(campo: any) {
    return !this.formulario.get(campo)?.valid && this.formulario.get(campo)?.touched
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

    cep = cep.replace(/\D/g, '');

    if (cep != "") {

      //Expressão regular para validar o CEP.
      var validacep = /^[0-9]{8}$/;

      if(validacep.test(cep)) {

        this.formulario.reset()

        this.http.get(`//viacep.com.br/ws/${cep}/json`)
        .pipe(dados => dados)
        .subscribe(dados => {
          this.populaForm(dados)
        })
      }
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
}
