export class Animal {
    constructor(name) {
        this.name = name;
    }

    hi() {
        return `Hi, my name is ${this.name}.`;
    }
}