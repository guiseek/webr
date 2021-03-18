import { Inject, ModuleWithProviders, NgModule, Optional } from '@angular/core'
import { SvgIconType, SVG_CONFIG, SVG_ICONS, SVG_ICONS_CONFIG } from './types'
import { SvgIconComponent } from './svg-icon/svg-icon.component'
import { SvgIconRegistry } from './svg-icon-registry.service'

@NgModule({
  declarations: [SvgIconComponent],
  exports: [SvgIconComponent],
})
export class WebrIconsModule {
  static forRoot(
    config: Partial<SVG_CONFIG> = {}
  ): ModuleWithProviders<WebrIconsModule> {
    return {
      ngModule: WebrIconsModule,
      providers: [
        {
          provide: SVG_ICONS_CONFIG,
          useValue: config,
        },
      ],
    }
  }

  static forChild(
    icons: SvgIconType | SvgIconType[]
  ): ModuleWithProviders<WebrIconsModule> {
    return {
      ngModule: WebrIconsModule,
      providers: [{ provide: SVG_ICONS, useValue: icons }],
    }
  }

  constructor(
    @Optional() @Inject(SVG_ICONS) icons: SvgIconType | SvgIconType[],
    private service: SvgIconRegistry
  ) {
    console.log(icons)

    if (icons) {
      this.service.register(icons)
    }
  }
}
