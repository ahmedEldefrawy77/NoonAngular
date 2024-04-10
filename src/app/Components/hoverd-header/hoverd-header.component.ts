import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BrandsService } from '../../Services/brands.service';
import { IBrand } from '../../Models/ibrand';
import { SpecifiedCategoryService } from '../../Services/specified-category.service';
import { ISpecifiedCategory } from '../../Models/ispecified-category';

@Component({
  selector: 'app-hoverd-header',
  templateUrl: './hoverd-header.component.html',
  styleUrl: './hoverd-header.component.scss'
})
export class HoverdHeaderComponent implements OnChanges {
@Input() CategoryName:string = "";
@Input() BrandName: string = "";
Brands: IBrand[] | null = null;
supcategory : ISpecifiedCategory[] | null = null;

constructor(private brandService: BrandsService,
  private specCatService:SpecifiedCategoryService) {
  
  
}
ngOnChanges(changes: SimpleChanges): void {
  this.getallSupcat(this.CategoryName);
  this.getallBrands(this.CategoryName);
}
getallBrands(categoryName:string):void{
  this.brandService.getAllBrandsForCategory(categoryName).subscribe(resp=>{
    this.Brands = resp.response;
  })
}
getallSupcat(categoryName: string): void {
  this.specCatService.getspecifiedCatbyCatName(categoryName).subscribe(resp => {
    this.supcategory = resp
  })
}
}
