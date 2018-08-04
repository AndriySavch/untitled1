"use strict";
exports.__esModule = true;
var CARS = /** @class */ (function () {
    function CARS(title, model, year, price, isNew, priceWithTax) {
        this.title = title;
        this.model = model;
        this.year = year;
        this.price = price;
        this.isNew = year > 2012;
        this.priceWithTax = price * 120;
    }
    return CARS;
}());
exports.CARS = CARS;
