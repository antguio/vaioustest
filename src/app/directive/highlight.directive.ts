import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective{
  private isHighlighted: boolean = false;

  @HostBinding('class.highlighted')
  get highlightedClass() {
    return this.isHighlighted;
  }

  @HostListener('click') onClick() {
    this.isHighlighted = !this.isHighlighted;
  }
}
