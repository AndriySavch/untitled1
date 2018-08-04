import {CARS} from "./car.model";
import {CARS_ARRAY} from "./cars";

let mashina = CARS_ARRAY;
const function1 = (value) =>{
    let array1 = [];
    for (let Object of value)
    {
        array1.push(new CARS(Object.title, Object.model, Object.year, Object.price, Object.isNew, Object.priceWithTax))
    }
    return array1;
}
console.log(function1(mashina));
