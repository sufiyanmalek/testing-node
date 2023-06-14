import { ProductDomain } from "../domain/product.domain";
import { product } from "../models/product.model";

test("Nagative price", () => {
  const productDomain = new ProductDomain();
  const product: product = {
    ID: 1,
    Name: "Product 1",
    Price: -20,
    Qty: 1,
    Total: 1,
    Discount: 10,
    NetAmount: 100,
  };
  expect(productDomain.addProduct(product)).toEqual(
    "Please enter positive price"
  );
});

test("Invalid discount value", () => {
  const productDomain = new ProductDomain();
  const product: product = {
    ID: 1,
    Name: "Product 1",
    Price: 20,
    Qty: 1,
    Total: 1,
    Discount: 11,
    NetAmount: 100,
  };
  expect(productDomain.addProduct(product)).toEqual(
    "Please enter 10%,20% or 30% value of discount"
  );
});

test("Valid product", () => {
  const productDomain = new ProductDomain();
  const product: product = {
    ID: 1,
    Name: "Product 1",
    Price: 20,
    Qty: 1,
    Total: 1,
    Discount: 20,
    NetAmount: 100,
  };
  expect(productDomain.addProduct(product)).toEqual(product);
});
