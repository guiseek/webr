import { of, Subject } from 'rxjs'
import { FormControl } from './form-control'
import { FormGroup } from './form-group'
import { FormArray } from './form-array'

type Person = {
  name: string
  phone: {
    num: number
    prefix: number
  }
  skills: string[]
}

const errorFn = (group: FormGroup) => {
  return { isInvalid: true }
}

const createGroup = (withError = false) => {
  return new FormGroup<Person>(
    {
      name: new FormControl(),
      phone: new FormGroup({
        num: new FormControl(),
        prefix: new FormControl(),
      }),
      skills: new FormArray([]),
    },
    { validators: withError ? errorFn : ([] as any) }
  )
}

describe('FormGroup', () => {
  it('should valueChanges$', () => {
    const control = createGroup()
    const spy = jest.fn()
    control.value$.subscribe(spy)
    expect(spy).toHaveBeenCalledWith({
      name: null,
      phone: { num: null, prefix: null },
      skills: [],
    })
    control.patchValue({
      name: 'changed',
    })
    expect(spy).toHaveBeenCalledWith({
      name: 'changed',
      phone: { num: null, prefix: null },
      skills: [],
    })
  })

  it('should disabledChanges$', () => {
    const control = createGroup()
    const spy = jest.fn()
    control.disabled$.subscribe(spy)
    expect(spy).toHaveBeenCalledWith(false)
    control.disable()
    expect(spy).toHaveBeenCalledWith(true)
    control.disable()
    expect(spy).toHaveBeenCalledTimes(2)
  })

  it('should enabledChanges$', () => {
    const control = createGroup()
    const spy = jest.fn()
    control.enabled$.subscribe(spy)
    expect(spy).toHaveBeenCalledWith(true)
    control.disable()
    expect(spy).toHaveBeenCalledWith(false)
    control.disable()
    expect(spy).toHaveBeenCalledTimes(2)
  })

  it('should statusChanges$', () => {
    const control = createGroup()
    const spy = jest.fn()
    control.status$.subscribe(spy)
    expect(spy).toHaveBeenCalledWith('VALID')
    control.disable()
    expect(spy).toHaveBeenCalledWith('DISABLED')
  })

  it('should select$', () => {
    const control = createGroup()
    const spy = jest.fn()
    control
      .select((state) =>
        Array.isArray(state) ? state.map((s) => s.name) : state.name
      )
      .subscribe(spy)
    expect(spy).toHaveBeenCalledWith(null)
    control.patchValue({
      name: 'changed',
    })
    expect(spy).toHaveBeenCalledWith('changed')
    control.patchValue({
      name: 'changed',
    })
    expect(spy).toHaveBeenCalledTimes(2)
  })

  it('should setValue', () => {
    const control = createGroup()

    control.setValue(
      of({
        name: 'a',
        phone: {
          num: 1,
          prefix: 2,
        },
        skills: [],
      })
    )
    expect(control.value).toEqual({
      name: 'a',
      phone: {
        num: 1,
        prefix: 2,
      },
      skills: [],
    })

    control.setValue({
      name: 'd',
      phone: {
        num: 1,
        prefix: 2,
      },
      skills: [],
    })
    expect(control.value).toEqual({
      name: 'd',
      phone: {
        num: 1,
        prefix: 2,
      },
      skills: [],
    })
  })

  it('should patchValue', () => {
    const control = createGroup()

    control.patchValue(
      of({
        name: 'patched',
      })
    )

    expect(control.value).toEqual({
      name: 'patched',
      phone: {
        num: null,
        prefix: null,
      },
      skills: [],
    })

    control.patchValue({
      name: 'dd',
      phone: {
        num: 1,
        prefix: 2,
      },
    })

    expect(control.value).toEqual({
      name: 'dd',
      phone: {
        num: 1,
        prefix: 2,
      },
      skills: [],
    })
  })

  it('should disabledWhile', () => {
    const control = createGroup()
    const subject = new Subject<boolean>()
    control.disabledWhile(subject)
    expect(control.disabled).toBeFalsy()
    subject.next(true)
    expect(control.disabled).toBeTruthy()
    subject.next(false)
    expect(control.disabled).toBeFalsy()
  })

  it('should enableWhile', () => {
    const control = createGroup()

    const subject = new Subject<boolean>()
    control.enabledWhile(subject)
    expect(control.enabled).toBeTruthy()
    subject.next(false)
    expect(control.enabled).toBeFalsy()
    subject.next(true)
    expect(control.enabled).toBeTruthy()
  })

  it('should markAsTouched/Untouched', () => {
    const control = createGroup()
    const spy = jest.fn()
    control.touch$.subscribe(spy)
    control.markAsTouched()
    expect(spy).toHaveBeenCalledWith(true)
    control.markAsUntouched()
    expect(spy).toHaveBeenCalledWith(false)
  })

  it('should markAsPristine/Dirty', () => {
    const control = createGroup()
    const spy = jest.fn()
    control.dirty$.subscribe(spy)
    control.markAllAsDirty()
    expect(spy).toHaveBeenCalledWith(true)
    control.markAsPristine()
    expect(spy).toHaveBeenCalledWith(false)
  })

  it('should markAllAsDirty', () => {
    const control = createGroup()
    spyOn(control, 'markAsDirty')
    control.markAllAsDirty()
    expect(control.markAsDirty).toHaveBeenCalled()
  })

  it('should reset', () => {
    const control = createGroup()
    spyOn(control, 'reset')
    control.reset()
    expect(control.reset).toHaveBeenCalled()
  })

  it('should setErrors', () => {
    const control = createGroup(true)
    control.setErrors({ customError: true })
    expect(control.errors).toEqual({ customError: true })
  })

  it('should mergeErrors', () => {
    const control = createGroup(true)
    control.mergeErrors({ customError: true })
    expect(control.errors).toEqual({ isInvalid: true, customError: true })
  })

  it('should removeError', () => {
    const control = createGroup()
    control.setErrors({ customError: true, otherError: true })
    control.removeError('otherError')
    expect(control.errors).toEqual({ customError: true })
  })

  it('should setValidators', () => {
    const control = createGroup()
    spyOn(control, 'setValidators')
    control.setValidators([])
    expect(control.setValidators).toHaveBeenCalled()
  })

  it('should setAsyncValidators', () => {
    const control = createGroup()
    spyOn(control, 'setAsyncValidators')
    control.setAsyncValidators([])
    expect(control.setAsyncValidators).toHaveBeenCalled()
  })

  it('should validateOn', () => {
    const control = createGroup()
    const subject = new Subject<object>()
    control.validateOn(subject)
    subject.next({ someError: true })
    expect(control.errors).toEqual({ someError: true })
    subject.next(null as any)
    expect(control.errors).toEqual(null)
  })

  it('should hasErrorAndTouched', () => {
    const control = createGroup(true)
    expect(control.hasErrorAndTouched('isInvalid')).toBeFalsy()
    control.markAsTouched()
    expect(control.hasErrorAndTouched('isInvalid')).toBeTruthy()
  })

  it('should hasErrorAndDirty', () => {
    const control = createGroup(true)
    expect(control.hasErrorAndDirty('isInvalid')).toBeFalsy()
    control.markAsDirty()
    expect(control.hasErrorAndDirty('isInvalid')).toBeTruthy()
  })

  it('should setEnable', () => {
    const control = createGroup()
    control.setEnable()
    expect(control.enabled).toBe(true)
    control.setEnable(false)
    expect(control.enabled).toBe(false)
  })

  it('should setDisable', () => {
    const control = createGroup()
    control.setDisable()
    expect(control.enabled).toBe(false)
    control.setDisable(false)
    expect(control.enabled).toBe(true)
  })

  it('should getControl', () => {
    const control = createGroup()
    const nameControl = control.getControl('name')
    expect(nameControl).toBeInstanceOf(FormControl)
    const numControl = control.getControl('phone', 'num')
    expect(numControl).toBeInstanceOf(FormControl)
  })

  it('should errorChanges$', () => {
    const control = createGroup()
    const validator = (control: FormGroup<Person>) =>
      control.getRawValue().name === 'Test' ? { invalidName: true } : null
    control.setValidators(validator as any)
    const spy = jest.fn()
    control.errors$.subscribe(spy)
    expect(spy).toHaveBeenCalledWith(null)
    spy.mockReset()
    control.patchValue({ name: 'Test' })
    expect(spy).toHaveBeenCalledWith({ invalidName: true })
    spy.mockReset()
    control.setErrors({ myError: 'So wrong' })
    expect(spy).toHaveBeenCalledWith({ myError: 'So wrong' })
  })
})
