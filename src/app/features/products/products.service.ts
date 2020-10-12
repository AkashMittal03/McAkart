import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  // Function gets the product list details
  getProductList() {
    return fetch('assets/mock-data/product-list.json').then(
      response =>  {
        return response.json();
      }
    );
  }
}
