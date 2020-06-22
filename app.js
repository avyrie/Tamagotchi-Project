//CREATING THE TAMAGOTCHI

//Creates Tamagotchi blueprint
class DigitalPet {
    constructor(name, hunger, sleepiness, boredom, age) {
        this.name = name;
        this.hunger = hunger;
        this.sleepiness = sleepiness;
        this.boredom = boredom;
        this.age = age;
    }
}

//Randomizes starting hunger, sleepiness, and boredom values
let randomHunger = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
let randomSleepiness = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
let randomBoredom = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
let name;

//Creates tamagotchi
let tamagotchi = new DigitalPet(name, randomHunger, randomSleepiness, randomBoredom, 0)

//Creates field and button. Whatever input is made to the field will be assigned as the tamagotchi's name upon clicking the "name your new friend" button
const chooseNameButton = document.querySelector('button');

function handleChooseName() {
    console.log('you have chosen a name')

    const newName = document.querySelector('input').value;
    tamagotchi.name = newName;
    
    console.log(`Your new friend's name is ${tamagotchi.name}`);
    console.log(tamagotchi);
}

chooseNameButton.addEventListener('click', handleChooseName);

//---------------------------------------------------------------



