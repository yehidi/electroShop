import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
//import { StringifyOptions } from 'node:querystring';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() productObj={productName:"",productCategory:"", productDescription:"",productPrice:0,productCountInStock:0,productImgUrl:""  };
  //update
  @Input() UpdateName="";
  @Input() currentProductId: string = "";
  @Input() UpdateDescription: string = "";
  @Input() UpdateCategory: string = "";
  @Input() UpdatePrice: number = 0;
  @Input() UpdateCountInStock: number = 0;
  //update
  products:Array<any>;
  show: any;
  constructor(private productService:ProductsService){
    this.products=new Array<any>();
  }
  ngOnInit(): void {
    this.getAllProducts();
  }
  generateProduct(){
    this.productService.addProduct(this.productObj.productName,this.productObj.productCategory,this.productObj.productDescription,this.productObj.productPrice,this.productObj.productCountInStock).subscribe((data:any)=>{
      console.log(data);
      this.getAllProducts();
    });
  }
  getAllProducts(){
    this.products=[];
    this.productService.getProducts().subscribe((data:any)=>{
     data.forEach((element:any) => {
       this.products.push(element);
       
     });
    })
    console.log(this.products);
  }
  deleteProduct(id:string){
    this.productService.deleteProduct(id).subscribe((data:any)=>{
      console.log(data);
      this.getAllProducts();
    }
    
    );

  }
 
  updateProduct(){
    console.log("succsess");
    this.productService.updateProduct(this.currentProductId,this.UpdateName,this.UpdateDescription,this.UpdateCategory,this.UpdatePrice,this.UpdateCountInStock)
    .subscribe((data:any)=>{;
      console.log("succsees");
      this.getAllProducts();
    });
  }
}
