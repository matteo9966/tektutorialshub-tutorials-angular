import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[showContent]',
})
export class ShowDirective {
  _show: boolean;
  constructor(
    private viewContainer: ViewContainerRef,
    private template: TemplateRef<any>
  ) {}

  @Input()
  set showContent(show: boolean) {
    this._show = show;
    this._updateView();
  }

  _updateView() {
    if (this._show) {
      this.viewContainer.createEmbeddedView(this.template);
    } else {
      this.viewContainer.clear();
    }
  }
}
