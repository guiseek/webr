import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, WebrValidators } from '@webr/forms'
import { ICONS, SvgIconRegistry, SvgIconType } from '@webr/icons'
import { BehaviorSubject } from 'rxjs'
import { debounceTime } from 'rxjs/operators'

@Component({
  selector: 'webr-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss'],
})
export class IconsComponent implements OnInit {
  readonly icons = ICONS
  private _list = new BehaviorSubject<SvgIconType[]>(ICONS)
  public list$ = this._list.asObservable()

  svgForm = new FormGroup<SvgIconType>({
    name: new FormControl('', WebrValidators.required),
    data: new FormControl(''),
  })
  search = new FormControl<string>()

  constructor(readonly service: SvgIconRegistry) {}

  ngOnInit(): void {
    this.search.value$.pipe(debounceTime(400)).subscribe((value = '') => {
      const toSearch = (icon: SvgIconType, value: string) =>
        icon.name.toLowerCase().indexOf(value.toLowerCase()) > -1

      if (value) {
        this._list.next(this.icons.filter((icon) => toSearch(icon, value)))
      } else {
        this._list.next(this.icons)
      }
    })
  }
}
