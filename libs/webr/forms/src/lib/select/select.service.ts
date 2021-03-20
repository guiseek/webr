import { Injectable } from '@angular/core'
import { WebrSelectComponent } from './select.component'

@Injectable({
  providedIn: 'root',
})
export class WebrSelectService {
  private select!: WebrSelectComponent

  public register(select: WebrSelectComponent) {
    this.select = select
  }

  public getSelect(): WebrSelectComponent {
    return this.select
  }
}
