import { Animal } from "./Animal.js";

export class Fish extends Animal { 
 constructor(name) {
        super(name);
        this.livesIn = 'ocean';
        this.eating = 'fish and squid';
        this.byDietType = 'carnivore'; // carnivore -mesaede
    }

}