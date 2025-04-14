export class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    
    getCarInfo() {
        return `${this.year} ${this.make} ${this.model}`;
    }
}

const car1 = new Car('Toyota', 'Corolla', 2020);










