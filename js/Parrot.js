import { Bird } from './Bird.js';

export class Parrot extends Bird {
 constructor(name, furColor) {
    super(name, furColor);
    this.eats = 'seeds and nuts';
    this.sound = 'squawk-squawk';
    this.emoji = '🦜';
 }
}