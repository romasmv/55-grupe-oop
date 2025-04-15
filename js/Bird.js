import { Animal } from "./Animal.js";

export class Bird extends Animal { 
    constructor(name, furColor) {
        super(name);
        this.furColor = furColor;
        this.legsCount = 2;
        this.wingsCount = 2;
        this.sound = 'au miau krimst';
        this.emoji = '🐕🐈🐹';
    }

    voice() {
        const sound = (' ' + this.sound).repeat(2);
        const emojies = this.emoji.repeat(2);
        return `${this.name}:${sound} ${emojies}!`;
    }

}