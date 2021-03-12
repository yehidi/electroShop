import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';
//import { CurrentProductService } from 'src/app/services/current-product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
    
  products : Product[] = [];  

  constructor(private productsService : ProductsService, 
              private currentProductService: CurrentProductService){}

  ngOnInit() {
    this.load();
  }

  load(){
    this.productsService.getProducts().subscribe(data => {
      this.products = data;
    });
  }
  
  onClick(product : Product){
    this.currentProductService.changeCurrentProduct(product);
  }

  handlePanel(action : string){
    this.load();
  }
}
