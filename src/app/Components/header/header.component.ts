import { Component, OnChanges, OnInit, SimpleChanges, Input } from '@angular/core';
import { WepInfo } from '../../ViewModel/wep-info';
import { ChangeDetectorRef } from '@angular/core';
import { ICategory } from '../../Models/icategory';
import { CategoryService } from '../../Services/category.service';
import { IBrand } from '../../Models/ibrand';
import { BrandsService } from '../../Services/brands.service';
import { ISpecifiedCategory } from '../../Models/ispecified-category';
import { SpecifiedCategoryService } from '../../Services/specified-category.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnChanges {
  wepInfo: WepInfo;
  isContentCollapsed: boolean = true;
  isSupCategoriesVisible: boolean = false;
  categories: ICategory[] | null = null;
  brands: IBrand[] | null = null;
  supcategory: ISpecifiedCategory[] | null = null;
  @Input() categoryName: string = "Electronics";
  constructor(private catservice: CategoryService,
    private brandService: BrandsService,
    private specCatService: SpecifiedCategoryService) {
    this.wepInfo = new WepInfo("noon", "https://f.nooncdn.com/s/app/com/noon/design-system/logos/noon-logo-en.svg")

  }
  ngOnInit(): void {
    this.catservice.getAllCategories().subscribe(resp => {
      this.categories = resp.response;
    })


  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['categoryName']) {
      this.getallBrands(changes['categoryName'].currentValue);
    }

  }
  getallBrands(categoryName: string): void {
    this.brandService.getAllBrandsForCategory(categoryName).subscribe(resp => {
      this.brands = resp.response;
    })

  }
 
  toggleContentCollapse() {
    this.isContentCollapsed = !this.isContentCollapsed;
  }
  toggleSupCategoriesVisibilty() {
    this.isSupCategoriesVisible = !this.isSupCategoriesVisible;

  }

}
