import { AbstractControl, ValidatorFn, Validators } from '@angular/forms'

/**
 * @internal
 */
export const PATTERNS = {
  /**
   * w3.org spec html52
   * @see https://www.w3.org/TR/html52/sec-forms.html#valid-e-mail-address
   */
  EMAIL: new RegExp(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/),

  CPF: new RegExp(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/),

  CNPJ: new RegExp(/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/),

  CPF_CNPJ: new RegExp(/(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$)/),
}

export function forbiddenValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const forbidden = nameRe.test(control.value)
    return forbidden ? { forbidden: { value: control.value } } : null
  }
}

export function compareWith(fn: (o1: any, o2: any) => boolean): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    return fn.bind(control) ? { forbidden: { value: control.value } } : null
  }
}

/**
 * @dynamic
 */
export class WebrValidators {
  static required = Validators.required
  static requiredTrue = Validators.requiredTrue

  static min = Validators.min
  static minLength = Validators.minLength
  static max = Validators.max
  static maxLength = Validators.maxLength

  static email = Validators.pattern(PATTERNS.EMAIL)
  static cpf = Validators.pattern(PATTERNS.CPF)
  static cnpj = Validators.pattern(PATTERNS.CNPJ)
  static cpf_cnpj = Validators.pattern(PATTERNS.CPF_CNPJ)

  static forbidden = forbiddenValidator
}
