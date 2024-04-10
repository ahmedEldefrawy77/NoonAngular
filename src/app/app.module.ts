import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ElectronicsComponent } from './Components/electronics/electronics.component';
import { ShopComponent } from './Components/shop/shop.component';
import { ImgsliderDirective } from './Directives/imgslider.directive';
import { SupnavbarDirective } from './Directives/supnav/supnavbar.directive';
import { LoginRegisterationDirective } from './Directives/login-registeration.directive';
import { HttpClientModule } from '@angular/common/http';
import { HoverCategoryDirective } from './Directives/hover-category.directive';
import { HoverdHeaderComponent } from './Components/hoverd-header/hoverd-header.component';
import { MobilesComponent } from './Components/mobiles/mobiles.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ElectronicsComponent,
    ShopComponent,
    ImgsliderDirective,
    SupnavbarDirective,
    LoginRegisterationDirective,
  
    HoverCategoryDirective,
        HoverdHeaderComponent,
        MobilesComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
