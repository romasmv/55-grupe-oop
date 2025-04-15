
import{ Car } from './js/Car.js';


const volvo = new Car('Volvo S40', 'red', 55, 30, true,5);
const zapas = new Car('Zapas', 'white', 35, 20, false, 10);
console.log(volvo.intro());
console.log(zapas.intro());
console.log(zapas.startEngine());
console.log(zapas.drive(200));

































