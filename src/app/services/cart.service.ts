import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart = new BehaviorSubject<number>(0);
  getCart() {
    return this.cart.asObservable()
  }
  setCart(newCart: number) {
    this.cart.next(newCart)
  }
}