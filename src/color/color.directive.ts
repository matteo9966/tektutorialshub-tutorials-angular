import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[bgColor]',
  exportAs: 'bgcolorchanger',
})
export class BgColorDirective {
  constructor(private el: ElementRef) {}
  @Input() color = 'red';

  @HostListener('mouseover') applyColor() {
    this.changeColor(this.color);
  }
  @HostListener('mouseleave') applyColorRemove() {
    this.changeColor('white');
  }

  changeColor(color: string) {
    this.el.nativeElement.style.background = color;
  }
}
