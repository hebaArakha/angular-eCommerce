import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart = new BehaviorSubject<number>(0);
  private cartItems = new BehaviorSubject<Object[]>([]);
  constructor() { }
  getCart() {
    return this.cart.asObservable()
  }
  getCartItems() {
    return this.cartItems.asObservable()
  }
  setCart(newCart: number) {
    this.cart.next(newCart)
  }
  addCartItem(cartItem: Object) {
    const currentCartItems = this.cartItems.getValue();
    console.log(currentCartItems);

    currentCartItems.push(cartItem);
    this.cartItems.next(currentCartItems);
  }
  deleteItem(id: number) {
    const currentCartItems = this.cartItems.getValue();
    const filteredCartItems = currentCartItems.filter((item: any) => item.id !== id);
    this.cartItems.next(filteredCartItems);
  }
}