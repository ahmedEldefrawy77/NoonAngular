import { Directive,HostListener,ElementRef } from '@angular/core';

@Directive({
  selector: '[appSupnavbar]'
})
export class SupnavbarDirective {

  constructor(private el:ElementRef)
   {

    }
 @HostListener('click') hoversupnav(){
 this.el.nativeElement.click.active;
 this.el.nativeElement.router.add
 }
}
