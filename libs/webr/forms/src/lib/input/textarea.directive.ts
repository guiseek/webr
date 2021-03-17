import { Directive, HostBinding, Input } from '@angular/core'
import { WebrInputDirective } from './input.directive'

export type ResizeType = 'none' | 'vertical' | 'horizontal' | 'both' | 'initial'

@Directive({ selector: 'textarea[webr]' })
export class WebrTextareaDirective extends WebrInputDirective {
  resizeTypes: ResizeType[] = [
    'horizontal',
    'vertical',
    'initial',
    'none',
    'both',
  ]
  private _resize: ResizeType = 'none'

  public set resize(value: ResizeType) {
    if (!this.resizeTypes.includes(value)) {
      console.log('Use umas das opções válidas: ', this.resizeTypes.join(', '))
    }
    this._resize = value
  }

  @Input()
  @HostBinding('style.resize')
  public get resize(): ResizeType {
    return this._resize
  }
}
