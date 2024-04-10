import { JsonpClientBackend } from '@angular/common/http';
import { Directive , HostListener,ElementRef} from '@angular/core';

@Directive({
  selector: '[appLoginRegisteration]'
})
export class LoginRegisterationDirective {

  constructor(private ele:ElementRef) { }
@HostListener('click') changeStatuse(){
  var ele:any = document.getElementsByClassName("tabs-label");
  for(var i = 0; i <ele.length; i++){
    ele[i].classList.remove("lab-active");
  }
  this.ele.nativeElement.parentElement.classList.add("lab-active");
}
}
