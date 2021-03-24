import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { SpectatorHost, createHostFactory } from '@ngneat/spectator/jest'
import { Component } from '@angular/core'

import { WebrValidators } from './../utilities/validators'
import { WebrTextareaDirective } from './textarea.directive'
import { WebrCheckboxComponent } from './checkbox.component'
import { WebrInputDirective } from './input.directive'
import { WebrInputComponent } from './input.component'
import { WebrRadioComponent } from './radio.component'
import { WebrRangeComponent } from './range.component'

const TMPL = {
  BEGIN: `<form webr [formGroup]="form">`,
  END: `</form>`,
  TEXT: `<label webr>
  <input webr type="text" formControlName="text" />
</label>`,
  NUMBER: `<label webr>
  <input webr type="number" formControlName="number" />
</label>`,
  TEXTAREA: `<label webr>
  <textarea webr name="resumo" formControlName="textarea"></textarea>
</label>`,
  RADIO: `<fieldset webr>
  <label webr-label>
    <input webr type="radio" formControlName="radio" value="A" />
  </label>
  <label webr-label>
    <input webr type="radio" formControlName="radio" value="B" />
  </label>
</fieldset>`,
  RANGE: `<fieldset webr>
  <label webr-label>
  Range
  <input webr type="range" formControlName="range" />
</label>
</fieldset>`,
  CHECKBOX: `<label webr-label>
  <input webr type="checkbox" formControlName="checkbox" />
</label>`,
  CHECKED: `<label webr-label>
  <input webr type="checkbox" formControlName="checked" />
</label>`,
  INDETERMINATE: `<label webr-label>
  <input webr type="checkbox" name="indeterminate" formControlName="indeterminate" />
</label>`,
  EMAIL: `<label webr>
  <input webr type="email" formControlName="email" autocomplete="email" />
</label>`,
  PASSWORD: `<label webr>
  <input webr type="password" formControlName="password" />
</label>`,
  CPF: `<label webr>
  <input webr type="text" formControlName="cpf" />
</label>`,
}

@Component({ template: '' })
class FormsHostComponent {
  form = new FormGroup({
    text: new FormControl('', WebrValidators.required),
    number: new FormControl('', WebrValidators.min(18)),
    textarea: new FormControl('', [
      WebrValidators.required,
      WebrValidators.minLength(3),
    ]),
    radio: new FormControl('', WebrValidators.forbidden(/B/)),
    range: new FormControl(50, WebrValidators.min(10)),
    checkbox: new FormControl(false, WebrValidators.requiredTrue),
    checked: new FormControl(true, WebrValidators.requiredTrue),
    indeterminate: new FormControl(null),
    email: new FormControl('', WebrValidators.email),
    password: new FormControl('', [
      WebrValidators.required,
      WebrValidators.minLength(6),
    ]),
    cpf: new FormControl('', WebrValidators.cpf),
  })
}

const createForms = <C>(inputComponent: any) => {
  return createHostFactory<C>({
    component: inputComponent,
    host: FormsHostComponent,
    imports: [ReactiveFormsModule],
  })
}

describe('Webr Text Inputs', () => {
  let spectator: SpectatorHost<WebrInputDirective, FormsHostComponent>
  const createHost = createForms<WebrInputDirective>(WebrInputDirective)

  beforeEach(() => {
    spectator = createHost(`${TMPL.BEGIN} ${TMPL.TEXT} ${TMPL.END}`)
  })

  it('deve instânciar o componente', async () => {
    expect(spectator.component).toBeDefined()
  })

  it('ele deve iniciar inválido', async () => {
    expect(
      spectator.component.webrInputStates.includes('webr-invalid')
    ).toBeTruthy()
  })

  it('ele deve iniciar no estado não tocado', async () => {
    expect(spectator.element.classList.contains('webr-untouched')).toBeTruthy()
  })
  it('suas classes devem representar o estado de inválido', async () => {
    expect(spectator.element.classList.contains('webr-invalid')).toBeTruthy()
    expect(spectator.element.classList.contains('webr-valid')).toBeFalsy()
  })

  it('entrando com texto, deve mudar para válido', async () => {
    spectator.hostComponent.form?.patchValue({ text: 'valor' })
    expect(
      spectator.component.webrInputStates.includes('webr-invalid')
    ).toBeFalsy()
  })

  it('ao entrar com texto, deve mudar para válido', async () => {
    spectator.hostComponent.form?.patchValue({ text: 'valor' })
    expect(
      spectator.component.webrInputStates.includes('webr-invalid')
    ).toBeFalsy()
    expect(
      spectator.component.webrInputStates.includes('webr-valid')
    ).toBeTruthy()
  })

  it('suas classes devem representar o estado de válido', async () => {
    spyOn(spectator.hostComponent.form, 'valueChanges')
    spectator.hostComponent.form?.patchValue({ text: 'valor' })
    spectator.detectChanges()
    expect(spectator.element.classList.contains('webr-invalid')).toBeFalsy()
    expect(spectator.element.classList.contains('webr-valid')).toBeTruthy()
  })

  it('deve aproveitar o formControlName caso não seja informado um name ', async () => {
    expect(spectator.element.getAttribute('name')).toEqual('text')
  })
})

describe('Webr Email Input', () => {
  let spectator: SpectatorHost<WebrInputDirective, FormsHostComponent>
  const createHost = createForms<WebrInputDirective>(WebrInputDirective)

  beforeEach(() => {
    spectator = createHost(`${TMPL.BEGIN} ${TMPL.EMAIL} ${TMPL.END}`)
  })

  it('deve instânciar o componente', async () => {
    expect(spectator.component).toBeDefined()
  })

  it('deve iniciar válido', async () => {
    expect(spectator.component.webrInputStates.includes('webr-valid'))
  })

  it('ao entrar com um nome deve ficar inválido', async () => {
    spectator.hostComponent.form.patchValue({ email: 'gui' })
    expect(
      spectator.component.webrInputStates.includes('webr-invalid')
    ).toBeTruthy()
  })

  it('ao entrar com um email deve ficar válido', async () => {
    spectator.hostComponent.form.patchValue({ email: 'email@guiseek.dev' })
    expect(
      spectator.component.webrInputStates.includes('webr-valid')
    ).toBeTruthy()
  })
})

describe('Webr Password Input', () => {
  let spectator: SpectatorHost<WebrInputDirective, FormsHostComponent>
  const createHost = createForms<WebrInputDirective>(WebrInputDirective)

  beforeEach(() => {
    spectator = createHost(`${TMPL.BEGIN} ${TMPL.PASSWORD} ${TMPL.END}`)
  })

  it('deve instânciar o componente', async () => {
    expect(spectator.component).toBeDefined()
  })

  it('deve iniciar inválido', async () => {
    expect(spectator.component.webrInputStates.includes('webr-invalid'))
  })

  it('ao entrar com 3 letras deve manter inválido', async () => {
    spectator.hostComponent.form.patchValue({ password: 's3n' })
    expect(
      spectator.component.webrInputStates.includes('webr-invalid')
    ).toBeTruthy()
  })

  it('ao entrar com mais de 6 caracteres deve ficar válido', async () => {
    spectator.hostComponent.form.patchValue({ password: 's3nh4fr4c4' })
    expect(
      spectator.component.webrInputStates.includes('webr-valid')
    ).toBeTruthy()
  })
})

describe('Webr CPF Input', () => {
  let spectator: SpectatorHost<WebrInputDirective, FormsHostComponent>
  const createHost = createForms<WebrInputDirective>(WebrInputDirective)

  beforeEach(() => {
    spectator = createHost(`${TMPL.BEGIN} ${TMPL.CPF} ${TMPL.END}`)
  })

  it('deve instânciar o componente', async () => {
    expect(spectator.component).toBeDefined()
  })

  it('deve iniciar válido', async () => {
    expect(spectator.component.webrInputStates.includes('webr-valid'))
  })

  it('ao entrar com um nome deve ficar inválido', async () => {
    spectator.hostComponent.form.patchValue({ cpf: 'gui' })
    expect(
      spectator.component.webrInputStates.includes('webr-invalid')
    ).toBeTruthy()
  })

  it('ao entrar com um CPF deve ficar válido', async () => {
    spectator.hostComponent.form.patchValue({ cpf: '000.000.000-00' })
    expect(
      spectator.component.webrInputStates.includes('webr-valid')
    ).toBeTruthy()
  })
})

describe('Webr Number Inputs', () => {
  let spectator: SpectatorHost<WebrInputDirective, FormsHostComponent>
  const createHost = createForms<WebrInputDirective>(WebrInputDirective)

  beforeEach(() => {
    spectator = createHost(`${TMPL.BEGIN} ${TMPL.NUMBER} ${TMPL.END}`)
  })

  it('deve instânciar o componente', async () => {
    expect(spectator.component).toBeDefined()
  })

  it('ele deve iniciar válido', async () => {
    expect(
      spectator.component.webrInputStates.includes('webr-valid')
    ).toBeTruthy()
  })

  it('ele deve iniciar no estado não tocado', async () => {
    expect(spectator.element.classList.contains('webr-untouched')).toBeTruthy()
  })
  it('suas classes devem representar o estado de válido', async () => {
    expect(spectator.element.classList.contains('webr-valid')).toBeTruthy()
    expect(spectator.element.classList.contains('webr-invalid')).toBeFalsy()
  })

  it('entrando com 10, deve mudar para inválido', async () => {
    spectator.hostComponent.form?.patchValue({ number: 10 })
    expect(
      spectator.component.webrInputStates.includes('webr-invalid')
    ).toBeTruthy()
  })

  it('ao alterar para 18, deve mudar para válido', async () => {
    spectator.hostComponent.form?.patchValue({ number: 18 })
    expect(
      spectator.component.webrInputStates.includes('webr-invalid')
    ).toBeFalsy()
    expect(
      spectator.component.webrInputStates.includes('webr-valid')
    ).toBeTruthy()
  })

  it('suas classes devem representar o estado de válido', async () => {
    spyOn(spectator.hostComponent.form, 'valueChanges')
    spectator.hostComponent.form?.patchValue({ number: 18 })
    spectator.detectChanges()
    expect(spectator.element.classList.contains('webr-invalid')).toBeFalsy()
    expect(spectator.element.classList.contains('webr-valid')).toBeTruthy()
  })

  it('deve aproveitar o formControlName caso não seja informado um name ', async () => {
    expect(spectator.element.getAttribute('name')).toEqual('number')
  })
})

describe('Webr Textarea', () => {
  let spectator: SpectatorHost<WebrTextareaDirective, FormsHostComponent>
  const createHost = createForms<WebrTextareaDirective>(WebrTextareaDirective)

  beforeEach(() => {
    spectator = createHost(`${TMPL.BEGIN} ${TMPL.TEXTAREA} ${TMPL.END}`)
  })

  it('deve instânciar o componente', async () => {
    expect(spectator.component).toBeDefined()
  })

  it('ele deve iniciar inválido', async () => {
    expect(
      spectator.component.webrInputStates.includes('webr-invalid')
    ).toBeTruthy()
  })

  it('ele deve iniciar no estado não tocado', async () => {
    expect(spectator.element.classList.contains('webr-untouched')).toBeTruthy()
  })
  it('suas classes devem representar o estado de inválido', async () => {
    expect(spectator.element.classList.contains('webr-invalid')).toBeTruthy()
    expect(spectator.element.classList.contains('webr-valid')).toBeFalsy()
  })

  it('entrando com 2 letras, deve manter inválido', async () => {
    spectator.hostComponent.form?.patchValue({ textarea: 'oi' })
    expect(
      spectator.component.webrInputStates.includes('webr-invalid')
    ).toBeTruthy()
  })

  it('entrando com 3 letras, deve mudar para válido', async () => {
    spectator.hostComponent.form?.patchValue({ textarea: 'tudo bem?' })
    expect(
      spectator.component.webrInputStates.includes('webr-valid')
    ).toBeTruthy()
    expect(
      spectator.component.webrInputStates.includes('webr-invalid')
    ).toBeFalsy()
  })

  it('suas classes devem representar o estado de válido', async () => {
    spyOn(spectator.hostComponent.form, 'valueChanges')
    spectator.hostComponent.form?.patchValue({ textarea: 'beleza' })
    spectator.detectChanges()
    expect(spectator.element.classList.contains('webr-invalid')).toBeFalsy()
    expect(spectator.element.classList.contains('webr-valid')).toBeTruthy()
  })

  it('deve usar o name informado e descartar formControlName ', async () => {
    expect(spectator.element.getAttribute('name')).toEqual('resumo')
  })
})

describe('Webr Radio Input', () => {
  let spectator: SpectatorHost<WebrRadioComponent, FormsHostComponent>
  const createHost = createForms<WebrRadioComponent>(WebrRadioComponent)

  beforeEach(() => {
    spectator = createHost(`${TMPL.BEGIN} ${TMPL.RADIO} ${TMPL.END}`)
  })

  it('deve instânciar o componente', async () => {
    expect(spectator.component).toBeDefined()
  })

  it('ele deve iniciar válido', async () => {
    expect(
      spectator.component.webrInputStates.includes('webr-valid')
    ).toBeTruthy()
  })

  it('ele deve iniciar no estado não tocado', async () => {
    expect(spectator.element.classList.contains('webr-untouched')).toBeTruthy()
  })
  it('suas classes devem representar o estado de válido', async () => {
    expect(spectator.element.classList.contains('webr-valid')).toBeTruthy()
    expect(spectator.element.classList.contains('webr-invalid')).toBeFalsy()
  })

  it('entrando com B, deve mudar para inválido', async () => {
    spectator.hostComponent.form?.patchValue({ radio: 'B' })
    expect(
      spectator.component.webrInputStates.includes('webr-invalid')
    ).toBeTruthy()
  })

  it('ao alterar para 18, deve mudar para válido', async () => {
    spectator.hostComponent.form?.patchValue({ radio: 'A' })
    expect(
      spectator.component.webrInputStates.includes('webr-invalid')
    ).toBeFalsy()
    expect(
      spectator.component.webrInputStates.includes('webr-valid')
    ).toBeTruthy()
  })

  it('suas classes devem representar o estado de válido', async () => {
    spyOn(spectator.hostComponent.form, 'valueChanges')
    spectator.hostComponent.form?.patchValue({ radio: 'A' })
    spectator.detectChanges()
    expect(spectator.element.classList.contains('webr-invalid')).toBeFalsy()
    expect(spectator.element.classList.contains('webr-valid')).toBeTruthy()
  })

  it('deve aproveitar o formControlName caso não seja informado um name ', async () => {
    expect(spectator.element.getAttribute('name')).toEqual('radio')
  })
})

describe('Webr Range Input', () => {
  let spectator: SpectatorHost<WebrRangeComponent, FormsHostComponent>
  const createHost = createForms<WebrRangeComponent>(WebrRangeComponent)

  beforeEach(() => {
    spectator = createHost(`${TMPL.BEGIN} ${TMPL.RANGE} ${TMPL.END}`)
  })

  it('deve instânciar o componente', async () => {
    expect(spectator.component).toBeDefined()
  })

  it('ele deve iniciar válido', async () => {
    expect(
      spectator.component.webrInputStates.includes('webr-valid')
    ).toBeTruthy()
  })

  it('ele deve iniciar no estado não tocado', async () => {
    expect(spectator.element.classList.contains('webr-untouched')).toBeTruthy()
  })
  it('suas classes devem representar o estado de válido', async () => {
    expect(spectator.element.classList.contains('webr-valid')).toBeTruthy()
    expect(spectator.element.classList.contains('webr-invalid')).toBeFalsy()
  })

  it('entrando com B, deve mudar para inválido', async () => {
    spectator.hostComponent.form?.patchValue({ range: 6 })
    expect(
      spectator.component.webrInputStates.includes('webr-invalid')
    ).toBeTruthy()
  })

  it('ao alterar para 18, deve mudar para válido', async () => {
    spectator.hostComponent.form?.patchValue({ range: 20 })
    expect(
      spectator.component.webrInputStates.includes('webr-invalid')
    ).toBeFalsy()
    expect(
      spectator.component.webrInputStates.includes('webr-valid')
    ).toBeTruthy()
  })

  it('suas classes devem representar o estado de válido', async () => {
    spyOn(spectator.hostComponent.form, 'valueChanges')
    spectator.hostComponent.form?.patchValue({ range: 20 })
    spectator.detectChanges()
    expect(spectator.element.classList.contains('webr-invalid')).toBeFalsy()
    expect(spectator.element.classList.contains('webr-valid')).toBeTruthy()
  })

  it('deve aproveitar o formControlName caso não seja informado um name ', async () => {
    expect(spectator.element.getAttribute('name')).toEqual('range')
  })
})

describe('Webr Checkbox Input', () => {
  let spectator: SpectatorHost<WebrCheckboxComponent, FormsHostComponent>
  const createHost = createForms<WebrCheckboxComponent>(WebrCheckboxComponent)

  it('deve instânciar o componente', async () => {
    spectator = createHost(`${TMPL.BEGIN} ${TMPL.CHECKBOX} ${TMPL.END}`)
    expect(spectator.component).toBeDefined()
  })

  it('checkbox deve iniciar inválido', async () => {
    spectator = createHost(`${TMPL.BEGIN} ${TMPL.CHECKBOX} ${TMPL.END}`)
    expect(
      spectator.component.webrInputStates.includes('webr-invalid')
    ).toBeTruthy()
  })
  it('checkbox deve iniciar no estado não tocado', async () => {
    spectator = createHost(`${TMPL.BEGIN} ${TMPL.CHECKBOX} ${TMPL.END}`)
    expect(spectator.element.classList.contains('webr-untouched')).toBeTruthy()
  })

  it('checked deve iniciar válido', async () => {
    spectator = createHost(`${TMPL.BEGIN} ${TMPL.CHECKED} ${TMPL.END}`)
    expect(
      spectator.component.webrInputStates.includes('webr-valid')
    ).toBeTruthy()
  })
  it('checked iniciar no estado não tocado', async () => {
    spectator = createHost(`${TMPL.BEGIN} ${TMPL.CHECKED} ${TMPL.END}`)
    expect(spectator.element.classList.contains('webr-untouched')).toBeTruthy()
  })

  it('indeterminado deve iniciar válido', async () => {
    spectator = createHost(`${TMPL.BEGIN} ${TMPL.INDETERMINATE} ${TMPL.END}`)
    expect(
      spectator.component.webrInputStates.includes('webr-valid')
    ).toBeTruthy()
  })
  it('indeterminado iniciar no estado não tocado', async () => {
    spectator = createHost(`${TMPL.BEGIN} ${TMPL.INDETERMINATE} ${TMPL.END}`)
    expect(spectator.element.classList.contains('webr-untouched')).toBeTruthy()
  })

  it('classes do checkbox devem representar o estado de inválido', async () => {
    spectator = createHost(`${TMPL.BEGIN} ${TMPL.CHECKBOX} ${TMPL.END}`)
    expect(spectator.element.classList.contains('webr-invalid')).toBeTruthy()
    expect(spectator.element.classList.contains('webr-valid')).toBeFalsy()
  })

  it('classes do checked devem representar o estado de válido', async () => {
    spectator = createHost(`${TMPL.BEGIN} ${TMPL.CHECKED} ${TMPL.END}`)
    expect(spectator.element.classList.contains('webr-valid')).toBeTruthy()
    expect(spectator.element.classList.contains('webr-invalid')).toBeFalsy()
  })

  it('marcando o checkbox, deve mudar para válido', async () => {
    spectator = createHost(`${TMPL.BEGIN} ${TMPL.CHECKBOX} ${TMPL.END}`)
    spyOn(spectator.hostComponent.form, 'valueChanges')
    spectator.hostComponent.form.patchValue({ checkbox: true })
    spectator.detectChanges()
    expect(
      spectator.component.webrInputStates.includes('webr-valid')
    ).toBeTruthy()
  })

  it('suas classes devem representar o estado de válido', async () => {
    spectator = createHost(`${TMPL.BEGIN} ${TMPL.CHECKBOX} ${TMPL.END}`)
    spyOn(spectator.hostComponent.form, 'valueChanges')
    spectator.hostComponent.form?.patchValue({ checkbox: true })
    spectator.detectChanges()
    expect(spectator.element.classList.contains('webr-invalid')).toBeFalsy()
    expect(spectator.element.classList.contains('webr-valid')).toBeTruthy()
  })

  it('deve aproveitar o formControlName caso não seja informado um name ', async () => {
    expect(spectator.element.getAttribute('name')).toEqual('checkbox')
  })
})
