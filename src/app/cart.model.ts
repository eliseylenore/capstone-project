import { Product } from './product.model';

export class Cart {
	public totalPrice: number
	constructor (
    public products: Product[],
  	) {
			this.totalPrice = this.determineTotalPrice(this.products);
		}

		determineTotalPrice(products) {
			var totalPrice = 0;
			products.forEach((product) =>
				totalPrice += product.price * product.quantity
			);
			return totalPrice;
		}
}
