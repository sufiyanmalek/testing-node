import { product } from "../models/product.model";

export class ProductDomain {
  addProduct(product: product) {
    let Discount = [10, 20, 30];

    if (!Discount.includes(product.Discount)) {
      return "Please enter 10%,20% or 30% value of discount";
    }

    if (product.Price < 0) {
      return "Please enter positive price";
    }
    return product;
  }
}
