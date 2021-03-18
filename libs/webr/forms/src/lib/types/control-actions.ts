import { ValidationErrors, FormArray as NgFormArray } from '@angular/forms'
import { defer, merge, Observable, of, Subscription } from 'rxjs'
import { distinctUntilChanged, map } from 'rxjs/operators'
import { coerceArray, isNil } from './utils'
import { FormArray } from './form-array'
import { FormControl } from './form-control'
import { FormGroup } from './form-group'
import {
  AbstractControl,
  ControlOptions,
  ControlState,
  ValidatorFn,
  ControlPath,
  ControlFactoryMap,
} from './types'

function getControlValue<T>(control: AbstractControl<T>): T {
  if ((control as any).getRawValue) {
    return (control as any).getRawValue()
  }
  return control.value
}

function compareErrors(a: ValidationErrors | null, b: ValidationErrors | null) {
  if (isNil(a) || isNil(b)) {
    return a === b
  }
  return JSON.stringify(a) === JSON.stringify(b)
}

export function controlValueChanges$<T>(
  control: AbstractControl<T>
): Observable<T> {
  return merge(
    defer(() => of(getControlValue(control))),
    control.valueChanges.pipe(map(() => getControlValue(control)))
  )
}

export function controlDisabled$<T>(
  control: AbstractControl<T>
): Observable<boolean> {
  return merge(
    defer(() => of(control.disabled)),
    control.statusChanges.pipe(
      map(() => control.disabled),
      distinctUntilChanged()
    )
  )
}

export function controlEnabled$<T>(
  control: AbstractControl<T>
): Observable<boolean> {
  return merge(
    defer(() => of(control.enabled)),
    control.statusChanges.pipe(
      map(() => control.enabled),
      distinctUntilChanged()
    )
  )
}

export function controlStatusChanges$<T>(
  control: AbstractControl<T>
): Observable<ControlState> {
  return merge(
    defer(() => of(control.status as ControlState)),
    control.statusChanges.pipe(
      map(() => control.status as ControlState),
      distinctUntilChanged()
    )
  )
}

export function controlErrorChanges$<E>(
  control: AbstractControl,
  errors$: Observable<Partial<E>>
): Observable<E | null> {
  return merge(
    defer(() => of(control.errors as E)),
    errors$ as Observable<E>,
    control.valueChanges.pipe(
      map(() => control.errors as E),
      distinctUntilChanged((a, b) => compareErrors(a, b))
    )
  )
}

export function enableControl<T>(
  control: AbstractControl<T>,
  enabled: boolean,
  opts?: ControlOptions
): void {
  if (enabled) {
    control.enable(opts)
  } else {
    control.disable(opts)
  }
}

export function disableControl<T>(
  control: AbstractControl<T>,
  disabled: boolean,
  opts?: ControlOptions
): void {
  enableControl(control, !disabled, opts)
}

export function controlDisabledWhile<T>(
  control: AbstractControl<T>,
  observable: Observable<boolean>,
  opts?: ControlOptions
): Subscription {
  return observable.subscribe((isDisabled) =>
    disableControl(control, isDisabled, opts)
  )
}

export function controlEnabledWhile<T>(
  control: AbstractControl<T>,
  observable: Observable<boolean>,
  opts?: ControlOptions
): Subscription {
  return observable.subscribe((isEnabled) =>
    enableControl(control, isEnabled, opts)
  )
}

export function mergeControlValidators<T, Control extends AbstractControl<T>>(
  control: Control,
  validators: ValidatorFn<T> | ValidatorFn<T>[]
): void {
  control.setValidators([
    control.validator as ValidatorFn,
    ...coerceArray(validators),
  ])
  control.updateValueAndValidity()
}

export function validateControlOn<T>(
  control: AbstractControl<T>,
  validation: Observable<null | object>
): Subscription {
  return validation.subscribe((maybeError) => {
    control.setErrors(maybeError)
  })
}

export function hasErrorAndTouched<T>(
  control: AbstractControl<T>,
  error: string,
  path?: ControlPath
): boolean {
  const hasError = control.hasError(
    error,
    !path || path.length === 0 ? undefined : path
  )
  return hasError && control.touched
}

export function hasErrorAndDirty<T>(
  control: AbstractControl<T>,
  error: string,
  path?: ControlPath
): boolean {
  const hasError = control.hasError(
    error,
    !path || path.length === 0 ? undefined : path
  )
  return hasError && control.dirty
}

export function markAllDirty<T>(control: FormArray<T> | FormGroup<T>): void {
  control.markAsDirty({ onlySelf: true })
  ;(control as any)._forEachChild((control: FormControl) =>
    control.markAllAsDirty()
  )
}

export function selectControlValue$<T, R>(
  control: FormGroup<T> | FormArray<T> | FormControl<T>,
  mapFn: (state: T | T[]) => R
): Observable<R> {
  return (control.value$ as Observable<any>).pipe(
    map(mapFn),
    distinctUntilChanged()
  )
}

export function handleFormArrays<T>(
  control: AbstractControl<T>,
  formValue: T,
  arrControlFactory: ControlFactoryMap<T>
) {
  Object.keys(formValue).forEach((controlName) => {
    const value = (formValue as any)[controlName]
    if (
      Array.isArray(value) &&
      control.get(controlName) instanceof NgFormArray
    ) {
      if (
        !arrControlFactory ||
        (arrControlFactory && !(controlName in arrControlFactory))
      ) {
        throw new Error(`Please provide arrControlFactory for ${controlName}`)
      }
      const current = control.get(controlName) as NgFormArray
      const fc = (arrControlFactory as any)[controlName]
      clearFormArray(current)
      value.forEach((v, i) => current.insert(i, fc(v)))
    }
  })
}

export function clearFormArray(control: NgFormArray) {
  while (control.length !== 0) {
    control.removeAt(0)
  }
}
