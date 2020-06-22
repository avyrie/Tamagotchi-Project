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

    const newName = document.querySelector('input').value;
    tamagotchi.name = newName;
    
    console.log(`Your new friend's name is ${tamagotchi.name} :) `);
    console.log(tamagotchi);
}

chooseNameButton.addEventListener('click', handleChooseName);

//Clears form after input
function clearForm () {
    document.getElementById('name-input').value = "";
}
chooseNameButton.addEventListener('click', clearForm);

//---------------------------------------------------------------

//When the name is assigned via button click, the starting age, hunger, sleepiness, and boredom values will be displayed along with your chosen name
chooseNameButton.addEventListener('click', displayName)
let nameAppear = document.getElementById('name-appear');
function displayName () {
    nameAppear.textContent = tamagotchi.name;
}

chooseNameButton.addEventListener('click', assignAge)
let ageCount = document.getElementById('age-count');
function assignAge () {
    ageCount.textContent = tamagotchi.age;
}

chooseNameButton.addEventListener('click', assignHunger)
let hungerCount = document.getElementById('hunger-count');
function assignHunger () {
    hungerCount.textContent = tamagotchi.hunger;
}

chooseNameButton.addEventListener('click', assignSleepy)
let sleepyCount = document.getElementById('sleepy-count');
function assignSleepy () {
    sleepyCount.textContent = tamagotchi.sleepiness;
}

chooseNameButton.addEventListener('click', assignBoredom)
let boredomCount = document.getElementById('boredom-count');
function assignBoredom () {
    boredomCount.textContent = tamagotchi.boredom;
}

//-----------------------------------------------------------------
