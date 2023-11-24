import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-update-product',
  templateUrl: './add-update-product.component.html',
  styleUrls: ['./add-update-product.component.css']
})
export class AddUpdateProductComponent implements OnInit {
  product: Product = new Product();
  productForm!: FormGroup;
  isEditMode: boolean = false;

  constructor(
  ) {
  }

  ngOnInit(): void {
  }

  saveProduct(): void {
  }
}
