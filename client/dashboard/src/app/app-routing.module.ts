import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './components/overview/overview.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
   {path:'products',component:ProductsComponent},
   {path:'overview',component:OverviewComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }