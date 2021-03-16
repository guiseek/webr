import { Validators } from '@angular/forms';

/**
 * @internal
 */
export const PATTERNS = {
  /**
   * w3.org spec html52
   * @see https://www.w3.org/TR/html52/sec-forms.html#valid-e-mail-address
   */
  EMAIL: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,

  CPF: /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/,

  CNPJ: /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/,

  CPF_CNPJ: /(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$)/
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
}
