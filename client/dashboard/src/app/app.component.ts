import { Input, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import {ProductsService} from '../app/services/products.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


constructor(private productService:ProductsService){

}
  ngOnInit(): void {
   // this.generateProduct();
  }



  title = 'Admin';
  size=150;

  

}