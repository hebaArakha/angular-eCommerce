import { Component, OnInit, Output } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductsService } from '../services/products.service';

// import * as productsDB from '../../assets/products-list.json';

@Component({
  selector: 'app-all-products',
  standalone: true,
  imports: [NgbModule, ProductCardComponent],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css'
})
export class AllProductsComponent {
  rate: number = 0;
  products: Product[] = []; // Initialize products as an empty array
  constructor(private productsServices: ProductsService) { }

  ngOnInit() {
    return this.productsServices.getAllProducts()
      .subscribe((res: object) => this.products = Object.values(res)[0]
        , (err) => console.log
      )
  }
}
export interface Product {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
  createdAt: string
}