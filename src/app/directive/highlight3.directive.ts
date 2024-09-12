import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight3]'
})
export class Highlight3Directive {

  constructor(private el: ElementRef) {
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('green');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }


}
