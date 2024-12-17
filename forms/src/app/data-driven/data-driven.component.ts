import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
    nome: [null],
    email: [null],
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
}
