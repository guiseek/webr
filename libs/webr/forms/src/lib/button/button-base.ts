import { ChangeDetectorRef, Directive } from "@angular/core";

@Directive()
export class ButtonBase {
  constructor(cdr: ChangeDetectorRef) {
    cdr.detach()
  }
}
