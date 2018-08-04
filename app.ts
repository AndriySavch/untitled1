import { CARS_ARRAY } from './cars';
import { Car } from './car.model';
import * as _ from 'lodash';

let myCars = CARS_ARRAY;

const getUpdatedCars = (cars: [], sortValue: string) => {
    let updatedCars = [];
    for (let carObj of cars) {
        updatedCars.push(new Car(carObj.title, carObj.model, carObj.year, carObj.price));
    }

    return _.sortBy(updatedCars, [sortValue]);
}

let newCars = getUpdatedCars(myCars, 'price');

console.log(newCars);
