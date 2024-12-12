import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {

  usuario: any = {
    nome: null,
    email: null
  }

  constructor(private http: HttpClient) {}


  onSubmit(form:any) {
    console.log(form)

  }

  validaCampo(campo: any) {
    return !campo.valid && campo.touched
  }

  onError(campo: any) {
    return {
      hasError: this.validaCampo(campo),
      hasFeedback: this.validaCampo(campo)
    }
  }

  consultaCEP(event: FocusEvent) {
    const inputElement = event.target as HTMLInputElement
    const cep = inputElement?.value?.replace(/\D/g, '');

    if (cep != "") {

      //Expressão regular para validar o CEP.
      var validacep = /^[0-9]{8}$/;

      if(validacep.test(cep)) {

        this.http.get(`//viacep.com.br/ws/${cep}/json`)
        .pipe(dados => dados)
        .subscribe(dados => {
          console.log(dados)
        })
      }
    }
  }
}
