import { AbstractControl, FormArray, FormControl, FormGroup, ValidatorFn } from "@angular/forms";

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

    if(!validaCep.test(cep)) {
      return { cepInvalido: cep }
    }
    return null
  }

  static equalsTo(otherField: string) {
    const validator  = (formControl: FormControl) => {
      if (otherField == null) {
        throw new Error('É necessário informar um campo.')
      }

      if (!formControl.root || !(<FormGroup>formControl.root).controls) {
        return null
      }

      const field = (<FormGroup>formControl.root).get(otherField)

      if (!field) {
        throw new Error('É necessário informar um campo válido.')
      }

      if (field.value !== formControl.value) {
        return { equalsTo : otherField }
      }
      return null
    }

    return validator
  }

  static getErrorMsg(fieldName: string, validatorName: string, validatorValue?: any) {
    const config: { [key: string]: string } = {
      'required': `${fieldName} é obrigatório.`,
      'minlength': `${fieldName} precisa ter no mínimo ${validatorValue.requiredLength} caracteres.`,
      'maxlength': `${fieldName} precisa ter no máximo ${validatorValue.required} caracteres.`,
      'cepInvalido': 'CEP inválido.'
    }

    return config[validatorName]
  }
}
