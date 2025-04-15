/*
Transporto priemones:
    Automobilinis:
        Audi
        Volkswagen
        Renault
    Motociklai:
        Suzuki
        Kawasaki
        Jawa
        Vespa
    Sunkvezimiai:
        Volvo
        Man
        Scania
*/

/*
Elektronika:
    Smart phone:
        - Samsung smart phone
        - Apple smart phone
        - Nokia smart phone
    Tablet:
        - Samsung tablet
        - Xiomi tablet
    Laptop:
        - Asus
        - Lenovo
        - IBM
        - Acer

*/

/*
Animal:
    Pet:
        - Dog
        - Cat
        - Hamster
    Bird:
        - Parrot
        - Hummingbird
        - Eagle
    Fish:
        - Shark
        - Dolphin
        - Tuna
        - Pike
*/

import { Cat } from "./js/Cat.js";
import { Dog } from "./js/Dog.js";
import { Hamster } from "./js/Hamster.js";
import { Pike } from "./js/Pike.js";
import { Shark } from "./js/Shark.js";
import { Dolphin } from "./js/Dolphin.js";
import { Tuna } from "./js/Tuna.js";
import { Eagle } from "./js/Eagle.js";
import { Parrot } from "./js/Parrot.js";
import { Humingbird } from "./js/Humingbird.js";




const rainis = new Cat('Rainis', 'mixed');
const rex = new Dog('Rex', 'black');
const keksas = new Hamster('Keksas', 'brown');
const lydeka = new Pike('Lydeka');
const antanas = new Shark('Antanas');
const delfinas = new Dolphin('Delfinas');
const tunas = new Tuna('Tunas');

const erelis = new Eagle('Erelis', 'brown');
const papuga = new Parrot('Papuga', 'mixed');
const kolibris = new Humingbird('Kolibris', 'green');

console.log(rainis.hi());
console.log(rex.hi());
console.log(keksas.voice());
console.log('-------------------------');
console.log(lydeka);
console.log(lydeka.grantWish('lots of cash'));
console.log(antanas.hi());
console.log(delfinas);
console.log(tunas.hi());
console.log(erelis.hi());
console.log(papuga.hi());
console.log(kolibris.hi());
console.log();








































