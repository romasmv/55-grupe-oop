import { Fish } from "./Fish.js";

export class Pike extends Fish {
    constructor(name) {
        super(name);
        this.livesIn = 'freshwater'; 
        this.eating = 'small fish';
        this.emoji = '🐊';
    }
    grantWish(wish) {
        return `${this.name}: Your wish "${wish}" is granted!`;
    }
}