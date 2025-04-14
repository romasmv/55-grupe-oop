// class(klase) -> object(objektas)
// blyno receptas -> blynas (valgomas)
// namo brezinys -> namas (gyvenamas)


class Dog {
     constructor(vardas, furColor) {
         this.name = vardas;
         this.furColor = furColor;
         this.age = 0;
         this.legsCount = 4;
         this.hasTail = true;
         this.isStanding = true;
     }
     hi() {
         return `Hi, my name is ${this.name}!`;
}
    intro(){
            return `My name is ${this.name}, I am ${this.age} years old and my fur color is ${this.furColor}.`;
    }
    birthday() {
        
        return `Happy birthday, ${++this.name}! You are now ${this.age} years old.`; //++this.age padidina amziu po 1
    }
    lostTail() {
        this.hasTail = false;
    }
    lostLegs() {
        if (this.legsCount > 0) {
            this.legsCount --;  //legCount-- sumazina po 1
        } else {
            console.log('I have no legs left!');
        }
    }
    changePose() {
        this.isStanding = !this.isStanding //jeigu standing == true, tai standing = false
        
      /*  if (this.isStanding) {
            this.isStanding = false;
        }else {
            this.isStanding = true;
        } */
    }
    changeFurColor(newColor) {
        this.furColor = newColor;
        return `${this.name} has ${this.furColor} fur now!`;
    }

}

const rex = new Dog('Rex', 'black');
const brisius = new Dog('Brisius', 'white');

console.log(rex);
console.log(rex.age);
console.log(brisius.furColor);
console.log(rex.hi());
console.log(brisius.intro());
console.log(rex.birthday());

brisius.changePose();
brisius.lostLegs();
brisius.lostTail();
brisius.changeFurColor('red');
console.log(brisius);


























