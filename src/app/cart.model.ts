import { Product } from './product.model';

export class Cart {
	constructor (
    public products: Product[],
    public totalPrice: number,
  	) {}
}
