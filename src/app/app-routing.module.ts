import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ElectronicsComponent } from './Components/electronics/electronics.component';
import { ShopComponent } from './Components/shop/shop.component';
import { MobilesComponent } from './Components/mobiles/mobiles.component';

const routes: Routes = [
  {path: 'Home', component : HomeComponent},
  {path: 'Electronics', component : ElectronicsComponent},
  {path: 'Shop' , component: ShopComponent},
  {path: 'Mobiles' , component: MobilesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
