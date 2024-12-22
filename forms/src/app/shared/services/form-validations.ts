import { AbstractControl, FormArray, FormControl, ValidatorFn } from "@angular/forms";

export class FormValidations {

  static requiredMinCheckbox(min = 1): ValidatorFn {
    return (control: AbstractControl) => {
      //TODO Programação estruturada
      // const values = formArray.controls
      // let totalChecked = 0
      // for (let i= 0; i <= values.length; i++)
      //   if (values[1].value) {
      //     totalChecked += 1
      //   }
      // }

      //TODO Programação Funiconal
      if (control instanceof FormArray) {
        const totalChecked = control.controls
          .map(v => v.value)
          .reduce((total, current) => (current ? total + current : total), 0);
        return totalChecked >= min ? null : { required: true };
      }
      return null; // Se não for um FormArray, não aplica a validação
    };
  }

  static cepValidator(control: FormControl) {

    const cep = control.value
    if (!cep) {
      return null
    }
    const validaCep = /^[0-9]{8}$/
    return validaCep.test(cep) ? null : { cepInvalido: true }
  }

}
