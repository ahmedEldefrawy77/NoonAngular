import { Component, OnChanges, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../../Models/iproduct';
import { ProductServiceService } from '../../Services/product-service.service';
import { BaseResponse } from '../../Models/base-response';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrl: './electronics.component.scss'
})
export class ElectronicsComponent implements OnInit {
  product: IProduct | null = null;
  categoryProduct: IProduct[] | null = null;
  categoryName: string = "Electronics";
  bestDealsPrd: IProduct[] | null = null;
  televisions: IProduct[] | null = null;
  Laptops: IProduct[] | null = null;
  werables: IProduct[] | null = null;
  constructor(private http: HttpClient,
    private productService: ProductServiceService) {

  }
  ngOnInit(): void {
    this.productService.getAllProductByCategory(this.categoryName).subscribe(resp => {
      this.categoryProduct = resp.Response;
    })
    this.productService.getBestDealsProduct().subscribe(resp => {
      this.bestDealsPrd = resp
    })
    this.productService.getTelevisionsProduct().subscribe(resp => {
      this.televisions = resp
    })
    this.productService.getLaptopsProduct().subscribe(resp => {
      this.Laptops = resp
    })
    this.productService.getWerablesProduct().subscribe(resp => {
      this.werables = resp
    })
  }

}
