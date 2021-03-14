import { Component, ViewEncapsulation } from '@angular/core'
import { WebrGroupCommon } from './../common/group-common'

@Component({
  selector: 'label[webr]',
  templateUrl: '../common/group-common.html',
  styleUrls: ['./label.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class WebrLabelComponent extends WebrGroupCommon {}
