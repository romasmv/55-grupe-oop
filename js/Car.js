/*
intro - apibudina masinos modeli ir spalva
drive() - nurodzius norima nuvaziuoti atstuma, yra paskaiciuojamos degalu sanaudos, jei nepakanka degalu,  tai ribiniu atveju teisiog sustoja ir masina issijungia
engineOn() - ijungia varikli, jei yra kuro ir jei yra ijungtas variklis
engineOff() - isjungia varikli, jei variklis yra ijungtas
refill() - uzpilti degalu, bet ne daugiau, nei telpa ir jei variklis yra isjungtas

*/


export class Car {
    constructor(model, color, tankMax) {
        this.model = model;
        this.color = color;
        this.tankMax = tankMax;
        this.tank = 0;
        this.engineIsOn = false;
    
    }
    intro() {
        return `This is a ${this.color} ${this.model}`;   
    }
    refill(volue) {
        if (this.engineIsOn) {
            return `Error: to refill the tank, you must turn off the engine first`;
        }
        if(typeof volue !== 'number' || !isFinite(volue)) {
            return `Error: Only real numbers are allowed`;
        }
        if (volue < 0) {
            return `Refill with ${volue} litres is not allowed`;
        }
        if (this.tankMax - this.tank >= volue) {
            this.tank += volue;
        } else {
            this.tank = this.tankMax;
        }
      }
}








