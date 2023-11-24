import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  loadCartItems(): void {
  }

  removeFromCart(cartItem: CartItem): void {
  }

  checkout(): void {
  }
}
