"use strict";
exports.__esModule = true;
var car_model_1 = require("./car.model");
var cars_1 = require("./cars");
var mashina = cars_1.CARS_ARRAY;
var function1 = function (value) {
    var array1 = [];
    for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
        var Object_1 = value_1[_i];
        array1.push(new car_model_1.CARS(Object_1.title, Object_1.model, Object_1.year, Object_1.price, Object_1.isNew, Object_1.priceWithTax));
    }
    return array1;
};
console.log(function1(mashina));
