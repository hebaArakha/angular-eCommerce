import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  constructor(private cartService : CartService){}
  cartItems: any;
  ngOnInit() {
    this.cartService.getCartItems().subscribe((res)=>this.cartItems = res);
    
  }
  removeItem(id:number){
    this.cartService.deleteItem(id);
  }
}
