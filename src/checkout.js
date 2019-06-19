/* eslint-disable func-names */
function Checkout(catalogueData) {
  this.catalogue = catalogueData;
  this.basket = [];
}

Checkout.prototype = {
  scan: function (barcode) {
    return this.catalogue.find(item => item.barcode === barcode);
  },
  addToBasket: function (item) {
    this.basket.push(item);
  },
  removeItem: function (itemToRemove) {
    const item = this.basket.indexOf(itemToRemove);
    this.basket.splice(item, 1);
  },
};

module.exports = Checkout;
