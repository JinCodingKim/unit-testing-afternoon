const cart = require("./cart.js");
const cars = require("./data/cars.js");

describe("Cart Properties:", () => {
  test("Cart property should be an empty array", () => {
    expect(Array.isArray(cart.cart)).toBe(true);
    expect(cart.cart.length).toBe(0);
  });
  test("Total property should be the number zero", () => {
    expect(Number.isInteger(cart.total)).toBe(true);
  });
});

describe("Cart Methods:", () => {
  afterEach(function() {
    cart.cart = [];
    cart.total = 0;
  });
  test("Cart length should increase 1 each call and Car object to appear at the end of the cart array", () => {
    cart.addToCart(cars[0]);
    cart.addToCart(cars[1]);
    cart.addToCart(cars[5]);
    expect(cart.cart.length).toBe(3);
    expect(cart.cart[0]).toBe(cars[0]);
    expect(cart.cart[2]).toBe(cars[5]);
  });
  test("Total property should increase by each car object on each call", () => {
    cart.addToCart(cars[2]);
    cart.addToCart(cars[4]);
    expect(cart.total).toBe(cars[2].price + cars[4].price);
  });
  test("Cart length should decrease 1 each call and Cart order maintained within array", () => {
    cart.addToCart(cars[0]);
    cart.addToCart(cars[1]);
    cart.addToCart(cars[5]);
    cart.removeFromCart(1, cars[1].price);
    expect(cart.cart.length).toBe(2);
    expect(cart.cart[1]).toBe(cars[5]);
    expect(cart.total).toBe(
      cars[0].price + cars[5].price + cars[1].price - cars[1].price
    );
  });
  test("Checkout should make cart and total equal to 0", () => {
    cart.checkout();
    expect(cart.cart.length).toBe(0);
    expect(cart.total).toBe(0);
  });
});
