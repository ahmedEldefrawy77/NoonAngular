import { Directive, HostListener,ElementRef } from '@angular/core';

@Directive({
  selector: '[appImgslider]'
})
export class ImgsliderDirective {

  constructor(private elementRef:ElementRef) { }
 @HostListener('click') imageChange(){
  var src:any = this.elementRef.nativeElement.src;
  var prev:any = document.getElementById("preview");
  prev.src = src;
  var imgslide:any = document.getElementsByClassName("img-slid");
  for(var i = 0 ; i < imgslide.length; i++)
  {
    imgslide[i].classList.remove("active");
  }
 
  this.elementRef.nativeElement.parentElement.classList.add("active")
 }
}
