import { debounceTime, takeUntil } from 'rxjs/operators'
import { FormControl, FormGroup } from '@webr/forms'
import { Filter } from './../../models/filter'
import { Subject } from 'rxjs'
import {
  Output,
  OnInit,
  Input,
  Component,
  OnDestroy,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core'

@Component({
  selector: 'webr-filter',
  templateUrl: './filter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterComponent implements OnInit, OnDestroy {
  private _destroy = new Subject<void>()

  @Input()
  set filter(filter: Filter) {
    this.formGroup.setValue(filter, { emitEvent: false })
  }

  @Output()
  filterUpdate: EventEmitter<Filter> = new EventEmitter()

  formGroup: FormGroup = new FormGroup<Filter>({
    search: new FormControl(''),
    category: new FormGroup<Filter['category']>({
      isBusiness: new FormControl<boolean>(true),
      isPrivate: new FormControl<boolean>(false),
    }),
  })

  ngOnInit(): void {
    this.formGroup
      .get('search')
      .valueChanges.pipe(takeUntil(this._destroy), debounceTime(350))
      .subscribe((search: string) => {
        const filter = this.formGroup.value as Filter
        this.filterUpdate.emit({ ...filter, search })
      })

    this.formGroup
      .get('category')
      .valueChanges.pipe(takeUntil(this._destroy))
      .subscribe((category) => {
        const filter = this.formGroup.value as Filter
        this.filterUpdate.emit({ ...filter, category })
      })
  }

  ngOnDestroy(): void {
    this._destroy.next()
    this._destroy.complete()
  }
}
