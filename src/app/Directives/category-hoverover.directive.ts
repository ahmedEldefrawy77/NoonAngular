import { Directive , HostListener, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appCategoryHoverover]'
})
export class CategoryHoveroverDirective {
  @Input() appHoverCategory: string = '';
  @Output() categoryNameChange: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }
  @HostListener('mouseenter') onMouseEnter() {
    this.categoryNameChange.emit(this.appHoverCategory);
  }
}
