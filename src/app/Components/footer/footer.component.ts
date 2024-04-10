import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
 electronicsli : string[];
  constructor(){
    this.electronicsli = ["mobiles","Laptops","cameras","headphones"]
  }
  ngOnInit(): void {
    
  }
}
