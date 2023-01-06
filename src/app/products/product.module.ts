import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProductsDetailComponent } from './products-detail.component';
import { ConvertTospaces } from '../shared/convert-tospaces_pipe';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ProductListComponent, ProductsDetailComponent,ConvertTospaces],
  imports: [
    RouterModule.forChild([
      {path: 'products', component: ProductListComponent},
      {path: 'products/:id', 
      canActivate : [ProductDetailGuard],
      component: ProductsDetailComponent},
    ]),
    SharedModule,

  ]
})
export class ProductModule { }
