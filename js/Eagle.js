import { Bird } from './Bird.js';

export class Eagle extends Bird {
    constructor(name, furColor) {
        super(name, furColor);
        this.eats = 'meat';
        this.sound = 'kri-kri-kri';
        this.emoji = '🦅';
} 
}