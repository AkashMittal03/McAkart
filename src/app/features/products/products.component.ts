import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productName = 'Products List';
  productDetails = [];

  constructor(
    private productService: ProductsService
  ) { }

  ngOnInit(): void {
    this.productService.getProductList().then(
      (productList: any) => {
        console.log(productList);
        
        if (productList && productList.list) {
          this.productDetails = productList.list;
        }
      }
    );
  }
}
