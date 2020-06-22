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
let randomHunger = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
let randomSleepiness = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
let randomBoredom = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
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

//Puts tamagotchi stats into an array for easy access

// console.log(factors);

//Starts timer. Game lasts for 20 minutes (1200 seconds)
let time = 0;
function startTimer() {

            const timer = setInterval(function () {    
            if (time < 1200) {
                time++;
                console.log(time);
            } else {
                console.log('It\'s always sad to say goodbye');
                clearInterval(timer);
            }

            let factors = [tamagotchi.hunger, tamagotchi.sleepiness, tamagotchi.boredom ];
            //every 5 seconds,a prompt will appear and a ranomly chosen factor will be increased by 1
            if (time % 5 === 0) {

                let that = factors[Math.floor(Math.random() * 3)];

                if (that === tamagotchi.hunger) {

                        tamagotchi.hunger = tamagotchi.hunger + 1;
                        console.log(`${tamagotchi.name}'s hunger level is ${tamagotchi.hunger}`);
                        hungerCount.textContent = tamagotchi.hunger;
                }

                // } else if (that === tamagotchi.sleepiness) {
                //     ///grab sleepy

                // } else if (that === tamagotchi.boredom) {
                //     //grab boredom
                // }
                // that++
                // console.log(that);
                
                //come back to this. need to fins a way to reflect increased stat in html***
                
                window.alert(`${tamagotchi.name} needs some attention`);
            }   

             //increases age every 60 seconds
             if (time % 60 === 0) {
                tamagotchi.age++
                console.log(`Happy birthday, ${tamagotchi.name}! You're ${tamagotchi.age} years old!`)
            }

        }, 1000) // interval
    }

    //---------------------------------------------------------

    
    //if one of the metrics goes above 10, pet will die
    if (tamagotchi.hunger >= 10 || tamagotchi.boredom >= 10 || tamagotchi.sleepiness >= 10) {
        console.log(`You have let down your precious friend. They have died from neglect.`)
    }