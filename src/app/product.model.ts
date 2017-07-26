export class Product {
  public id: String;
  public quantity: number;
  constructor (
    public name: string,
    public gender: string,
    public clothing: string,
    public price: number,
    public size: string,
    public color: string,
    public description: string,
    public imageUrl: string) {
      this.quantity = 1;
    }
}
