import { Injectable } from '@angular/core';
import { Product } from './../shared/product.model';

@Injectable()
export class CartService {
  public lines: CartLine[] = [];
  public itemCount: number = 0;
  public cartPrice: number = 0;
  cartKey = 'cart';

 
  addLocalstorage(){
    var products = JSON.parse(localStorage.getItem(this.cartKey));
    for(var id in products) {
      this.lines.push(new CartLine(products[id].product, products[id].quantity));
    }
    this.recalculate();
  }
  addLine(product: Product, quantity: number = 1) {
    let line = this.lines.find(line => line.product._id == product._id);
    if (line != undefined) {
      line.quantity += quantity;
  } else {
    this.lines.push(new CartLine(product, quantity));
  }
    this.recalculate();
  }
  updateQuantity(product: Product, quantity: number) {
    let line = this.lines.find(line => line.product._id == product._id);
    if (line != undefined) {
      line.quantity = Number(quantity);
    }
    this.recalculate();
  }
  removeLine(id: number) {
    let index = this.lines.findIndex(line => line.product._id == id);
    this.lines.splice(index, 1);
    this.recalculate();
  }
  clear() {
    this.lines = [];
    this.itemCount = 0;
    this.cartPrice = 0;
  }
  
  private recalculate() {
    this.itemCount = 0;
    this.cartPrice = 0;
    localStorage.setItem('cart', JSON.stringify(this.lines));
    this.lines.forEach(l => {
      this.itemCount += l.quantity;
      this.cartPrice += (l.quantity * l.product.price);
    })
  }
}
export class CartLine {
  constructor(
    public product: Product,
    public quantity: number
  ) {}
  get lineTotal() {
    return this.quantity * this.product.price;
  }
}