export class Pet {
    constructor(name, furColor) {
        this.name = name;
        this.furColor = furColor;
        this.legsCount = 4;
        this.eyesCount = 2;
    }

    hi() {
        return `Hi! My name is ${this.name} and I am ${this.furColor}`;
    }
    voice() {
        const sound = (' ' + this.sound).repeat(2);
        const emoji = this.emoji.repeat(2);
        return `${this.name}: ${sound} ${emoji}!`;
    }

}