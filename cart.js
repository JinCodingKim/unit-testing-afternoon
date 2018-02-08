const cars = require("./data/cars");

module.exports = {
  cart: [],
  total: 0,

  addToCart: function(car) {
    //length to increase by 1
    //object to push to end of array
    //total to increase
    this.cart.push(car);
    this.total += car.price;
  },

  removeFromCart: function(index, price) {
    //length to decrease by 1
    //array should maintain order
    //price to decrease
    for (let i = 0; i < this.cart.length; i++) {
      if (i === index) {
        this.cart.splice(i, 1);
        this.total -= price;
      }
    }
  },

  checkout: function() {
    this.cart = [];
    this.total = 0;
  }
};
