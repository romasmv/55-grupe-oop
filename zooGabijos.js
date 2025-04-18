

//zoo soda su liutais, pingvinais ir flamingais
//vardas, amzius, alki, rusis, koju kieki
class animal{
    constructor(name, age)
    {
        this.name = name;
        this.age = age;
        this.legCount = 0;
        this.isHungry = true;
        this.species = "unknown";
        this.sound = '';
        this.emoji = '';
        this.energija = 40;
    }
    
    feed(food) //liutas nori mesos, pingvinas nori zuvies, flamingas nori krevečiu
        {    
         if (this.energija<40){
        this.energija +=10;
        this.energija = Math.min(this.energija + 10, 40);
    }

       if(this.isHungry===true && this.wantedFood === food)
        {
            this.isHungry=false;
            return "Ačiū už pietus"
        }
        else if(this.isHungry === true)
        {
            return "Duok tinkamą maistą!!"
        }
        else
        {
            return "Nenoriu valgyti."
        }
            
    }
    hi() {
        if(this.energija >= 5){
            this.energija -= 5;
    return `Hi, my name is ${this.name}.`;  
        }
        else {
        `${this.name} yra pavargęs ir negali pasakyti savo vardo `
        }
    }
    voice() {
        const sound = (' ' + this.sound);
        const emojies = this.emoji;
        return `${this.name}:${sound} ${emojies}!`;
    }
    sleep(){
        this.energija += 20;
        this.energija = Math.min(this.energija + 10, 40);

        return `${this.name} miega`;
    }
    HappyBirthday(){
    this.age += 1;
    return `Su Gimtadieniu ${this.name}, dabar tau ${this.age} metu, tavo tortas is ${this.wantedFood} paruostas!`;
    }
}






class Lion extends animal{
    constructor(name, age)
    {
        super(name, age)
        this.legCount = 4;
        this.species = "liutas";
        this.wantedFood = "meat"
        this.sound = 'roar!';
        this.emoji = '🦁';
    }
}

class Penguin extends animal{

    constructor(name, age)
    {
        super(name, age)
        this.legCount = 2;
        this.wingCount = 2;
        this.isHungry = false;
        this.species = "pingvinas";
        this.wantedFood = "fish";
        this.sound = 'honk honk :)';
        this.emoji = '🐧';
    }
    triukas(a){
 if(this.energija >= 10){
    this.energija -= 10;
        if (a ==='hi'|| a==='hello'|| a==='labas') {
            return `Labas, mano vardas ${this.name}`
         }
       
        else{
          return `${this.name} paplojo ir pamojavo. `
        }
    }

   return  `${this.name} yra pavargęs ir negali atlikti triuko, reikia pavalgyti arba pamiegoti kad atgauti jiegas`

}

}


class Flamingo extends animal{

    constructor(name, age)
    {
        super(name, age)
        this.legCount = 2;
        this.wingCount = 2;
        this.isHungry = false;
        this.species = "flamingas";
        this.wantedFood = "shrimp";
        this.sound = 'Huh-huh-huh';
        this.emoji = '🦩';
    }

}

const simba = new Lion("Simba", 4)
//console.log(simba.name);
//console.log(simba.isHungry);
//console.log(simba.feed("meat"));
//console.log(simba.isHungry);
//console.log(simba.feed());

const kowalski = new Penguin("Kowalski", 10)
//console.log(kowalski.legCount)


const zoo = [kowalski, simba, new Lion("Puma", 8), new Penguin("Rico", 3), new Flamingo("Richard", 6)]

//console.log("-------------------")


function oldestAnimal(animals)
{
    let animal
    let maxAmzius = 0;

    for(let i in animals)
    {
        if(animals[i].age>maxAmzius)
        {
            animal = animals[i].name;
            maxAmzius = animals[i].age;
        }
    }
    return animal;
}

//console.log(oldestAnimal(zoo))

function collectBirds(animals)
{
    const birds = [];

    for(let i in animals)
    {
        if(animals[i].wingCount!=undefined)
        {
            birds.push(animals[i]);
        }
    }
    return birds
}

//console.log(collectBirds(zoo))


/*
function oldestAnimal(animals) {
    let animal;
    let maxAmzius = 0;

    for (const animalObj of animals) { // Naudojamas for...of
        if (animalObj.age > maxAmzius) {
            animal = animalObj.name;
            maxAmzius = animalObj.age;
        }
    }
    return animal;
}

function collectBirds(animals) {
    const birds = [];

    for (const animalObj of animals) { // Naudojamas for...of
        if (animalObj.wingCount != undefined) {
            birds.push(animalObj);
        }
    }
    return birds;
}
*/

class Monkey extends animal{
    constructor(name, age)
    {
        super(name, age)
        this.legCount = 2;
        this.armsCount = 2;
        this.species = "bezdzione";
        this.wantedFood = "banana"
        this.sound = 'Ooh ooh aah aah';
        this.emoji = '🙉';
    }
    triukas(a,b){
        if(this.energija >= 10){
            this.energija -= 10;
            if (a<5&&b<5){
                return `${this.name} parodė ${a+b} pirštus`
              }
              else {
                 return `${this.name} mete saują purvo`
              }  
        }
      
     return   `${this.name} yra pavargęs ir negali atlikti triuko, reikia pavalgyti arba pamiegoti kad atgauti jiegas `
    

       }
}

const bezdzione = new Monkey ('Bezdzione',5)

class Elephant extends animal{

    constructor(name, age)
    {
        super(name, age)
        this.legCount = 4;
        this.isHungry = false;
        this.species = "dramblys";
        this.wantedFood = "fruit,leavers from trees";
        this.sound = 'Pawoo';
        this.emoji = '🐘';
        this.energija = 40;
    }

    triukas(a) {
        if (this.energija >= 10) {
            this.energija -= 10;
            if (a === 'sauleta') {
                return `${this.name} papurkškia vandenį ir padaro vaivorykštę 🌈.`;
            } else if (a === 'debesuota') {
                return `${this.name} tiesiog purškia vandenį 🐘💧.`;
            } else if (a === 'salta') {
                return `${this.name} tave aplaiste 🥶.`;
            } else {
                return `${this.name} nežino, ką daryti su sąlyga '${a}'.`;
            }
        } else {
            return `${this.name} yra pavargęs ir negali atlikti triuko, reikia pavalgyti arba pamiegoti kad atgauti jiegas`;
        }
    }
}

const dramblys = new Elephant ('Dramblys',15)

zoo.push(dramblys,bezdzione)

//console.log(dramblys.triukas('sauleta'));
//console.log(kowalski.triukas('hi'));


console.log(bezdzione.hi());
console.log(bezdzione.triukas(2,3));

console.log(bezdzione.feed("banana"));

console.log(bezdzione.sleep());
console.log(bezdzione.energija);






































































































