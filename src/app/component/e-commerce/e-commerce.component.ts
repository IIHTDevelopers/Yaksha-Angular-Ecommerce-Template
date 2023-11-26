import { Component } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

interface CartItem {
  product: Product;
  quantity: number;
}

@Component({
  selector: 'app-ecommerce',
  templateUrl: './e-commerce.component.html',
  styleUrls: ['./e-commerce.component.css']
})
export class ECommerceComponent {
  products: Product[] = [
  ];
  cartVisible: boolean = false;
  showForm: boolean = false;
  productName: string = '';
  productPrice: number = 0;
  productDescription: string = '';
  editing: boolean = false;
  editingProduct: Product | null = null;
  cart: CartItem[] = [];

  toggleForm() {
  }

  editProduct(product: Product) {
  }

  deleteProduct(product: Product) {
  }

  saveProduct() {
  }

  addToCart(product: Product) {
  }

  showCart() {
  }

  hideCart() {
  }
}
