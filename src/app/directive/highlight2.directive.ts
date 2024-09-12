import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appHighlight2]'
})
export class Highlight2Directive {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'red';
  }
}
