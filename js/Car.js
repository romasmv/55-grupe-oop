/*
intro - apibudina masinos modeli ir spalva
drive(km) - nurodzius norima nuvaziuoti atstuma, yra paskaiciuojamos degalu sanaudos, jei nepakanka degalu,  tai ribiniu atveju teisiog sustoja ir masina issijungia
1) negali vaziuoti, jei variklis yra isjungtas
2) negali vaziuoti, jei neturi pakankamai degalu
3) kiek gali vaziuoti, priklauso nuo kuro sanaudu ir atstumo
engineOn() - ijungia varikli, jei yra kuro ir jei yra ijungtas variklis
engineOff() - isjungia varikli, jei variklis yra ijungtas
refill() - uzpilti degalu, bet ne daugiau, nei telpa ir jei variklis yra isjungtas

*/


export class Car {
    constructor(model, color, tankMax ,tank, engineIsOn, carConsumption) {
        this.model = model;
        this.color = color;
        this.tankMax = tankMax;
        this.tank = tank;
        this.engineIsOn = engineIsOn;
        this.carConsumption = carConsumption
       

    
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
    startEngine() {
        if (this.tank === 0) {
            return `Error: the tank is empty`;
        }
        this.engineIsOn = true;
        return `Engine started`;
    }
    
    stopEngine() {
        if (!this.engineIsOn) {
            return `Error: the engine is already off`;
        }
        this.engineIsOn = false;
        return `Engine stopped`;
    }
    
    drive(km) {
        if (this.engineIsOn === false) {
            return `The engine is switchoff`;
        }
        if (this.tank <= 0) {
            return `Tank is empty`;
        }
        const needFuel = (km/100)*this.carConsumption;  // Fuel consumption - sanaudos
        if (needFuel > this.tank) {
            return `Not enough fuel to drive ${km} km`;
        } else {
            this.tank -= needFuel;
            return `You can drive ${km} km`;
       }
    }
} 








