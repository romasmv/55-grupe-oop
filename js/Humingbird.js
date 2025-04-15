import { Bird } from './Bird.js';

export class Humingbird extends Bird { 
  constructor(name, furColor) {
    super(name, furColor);
    this.eats = 'nectar and insects';
    this.sound = 'hummm-hummm-hummm';
    this.emoji = '🐲'
  }
}