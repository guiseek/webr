import { SvgIconRegistry } from './../svg-icon-registry.service'
import { SVG_CONFIG, SVG_ICONS_CONFIG } from './../types'
import { coerceCssPixelValue } from '../utils'
import {
  Input,
  Inject,
  Component,
  ElementRef,
  ChangeDetectionStrategy,
} from '@angular/core'

@Component({
  selector: 'webr-svg-icon',
  styleUrls: ['./svg-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '',
})
export class SvgIconComponent {
  @Input()
  set key(name: string) {
    if (this.registry.get(name)) {
      this.element.setAttribute('aria-label', `${name}-icon`)
      this.element.classList.remove(`svg-icon-${this.lastKey}`)
      this.lastKey = name
      this.element.classList.add(`svg-icon-${name}`)
      this.element.innerHTML = this.registry.get(name)
    }
  }

  @Input()
  set size(value: keyof SVG_CONFIG['sizes']) {
    this.element.style.fontSize = this.mergedConfig.sizes[value]
  }

  @Input() set width(value: number | string) {
    this.element.style.width = coerceCssPixelValue(value)
  }

  @Input() set height(value: number | string) {
    this.element.style.height = coerceCssPixelValue(value)
  }

  @Input()
  set fontSize(value: number | string) {
    this.element.style.fontSize = coerceCssPixelValue(value)
  }

  @Input()
  set color(color: string) {
    this.element.style.color = color
  }

  private mergedConfig: SVG_CONFIG
  private lastKey!: string

  constructor(
    private host: ElementRef,
    private registry: SvgIconRegistry,
    @Inject(SVG_ICONS_CONFIG) private config: SVG_CONFIG
  ) {
    this.mergedConfig = this.createConfig()
    this.element.style.fontSize = this.mergedConfig.sizes[
      this.mergedConfig.defaultSize || 'md'
    ]
  }

  get element() {
    return this.host.nativeElement
  }

  private createConfig() {
    const defaults: SVG_CONFIG = {
      sizes: {
        xs: '0.5rem',
        sm: '0.75rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        xxl: '2.5rem',
      },
    }

    return {
      ...defaults,
      ...this.config,
    }
  }
}
