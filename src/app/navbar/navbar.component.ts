import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  cart: number =0;
  constructor(private cartService: CartService) { }
  ngOnInit() {
    this.cartService.getCart().subscribe((count: number) => this.cart = count);
  }
}
