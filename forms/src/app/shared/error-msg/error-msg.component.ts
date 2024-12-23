import { AbstractControl, FormControl } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { FormValidations } from '../services/form-validations';

@Component({
  selector: 'app-error-msg',
  templateUrl: './error-msg.component.html',
  styleUrls: ['./error-msg.component.css']
})
export class ErrorMsgComponent implements OnInit {

  //@Input() mostraErro: Boolean | any = false
  //@Input() mensagemDeErro: string = ''

  @Input() control?: AbstractControl | null;
  @Input() label!: string

  constructor() { }

  ngOnInit() {
  }

  get errorMessage() {
    if (this.control instanceof FormControl && this.control.errors && this.control.touched) {
      for (const propertyName in this.control.errors) {
        if (this.control.errors.hasOwnProperty(propertyName)) {
          return FormValidations.getErrorMsg(
            this.label,
            propertyName,
            this.control.errors[propertyName]
          );
        }
      }
    }
    return null;
  }

}
