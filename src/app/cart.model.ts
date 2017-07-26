import { Product } from './product.model';

export class Cart {
	public totalPrice: number = this.products.reduce((price: number, product) => {
		let productPrice = Number(product.price);
		return price + productPrice;
	}, 0);
	public tax: number;
	public totalCost: number;

	constructor (
    public products: Product[],
  	) {
		}
}
