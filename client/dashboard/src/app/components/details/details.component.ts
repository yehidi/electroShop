import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';
import { CurrentProductService } from 'src/app/services/current-product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

   product: Product ;
   subscription: Subscription;

  constructor(private productsService: ProductsService,
              private currentProductService: CurrentProductService) { }

  ngOnInit() {
     this.subscription = this.currentProductService.currentProduct.subscribe(product => this.product = product);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onDelete(){
    this.productsService.deleteProduct(this.product._id).subscribe(() => {
      this.product = null;
    });
  }

  onRefresh(){
    this.productsService.getProduct(this.product._id).subscribe(product => {
      this.product = product;
    });
  }

  onUpdate(){
    this.productsService.updateProduct(this.product).subscribe(product => {
      this.product = product;
    });
  }
}
