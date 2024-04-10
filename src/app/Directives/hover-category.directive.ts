import { Directive, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appHoverCategory]'
})
export class HoverCategoryDirective {
  @Input() categoryName: string = '';
  @Output() categoryNameChange: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }
  @HostListener('mouseenter') onMouseEnter() {
    this.categoryNameChange.emit(this.categoryName);
  }
}
