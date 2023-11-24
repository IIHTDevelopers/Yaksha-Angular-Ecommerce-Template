import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  loadProducts(): void {
  }

  addToCart(product: Product): void {
  }

  deleteProduct(productId: number): void {
  }
}
