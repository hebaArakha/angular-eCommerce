import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',

})
export class ProductCardComponent {
  @Input() product: any;
  cart: number = 0;
  constructor(private router: Router, private cartService: CartService) { }
  goToDetails() {
    this.router.navigate(['/product-details', this.product.id]);
  }
  ngOnInit() {
    this.cartService.getCart().subscribe((count)=>this.cart = count);
    this.cartService.getCart().subscribe((count)=>this.cart = count);
  }
  addToCart(product : {}) {
    this.cartService.setCart(this.cart + 1)
    this.cartService.addCartItem(product)    
    
  }
}