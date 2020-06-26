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
const chooseNameButton = document.getElementById('name-your-friend');

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

//interactive buttons

//If you click the "Feed!" button, the hunger level is decreased by 1
const feedButton = document.getElementById('feed');
function handleFeedPet () {
    tamagotchi.hunger = tamagotchi.hunger - 1;
    console.log(`Mmmmmmm, that was yummy!`)
    console.log(`${tamagotchi.name}'s hunger level is ${tamagotchi.hunger}`);
    hungerCount.textContent = tamagotchi.hunger
}

feedButton.addEventListener('click', handleFeedPet);

//If you click the "Time For Bed" button, the sleepiness level is decreased by 1
const sleepyButton = document.getElementById('sleep');
function handleSleepyPet () {
    tamagotchi.sleepiness = tamagotchi.sleepiness - 1;
    console.log(`Zzzzzzzzzzzzz...`);
    console.log(`${tamagotchi.name}'s sleepiness level is ${tamagotchi.sleepiness}`);
    sleepyCount.textContent = tamagotchi.sleepiness;
}

sleepyButton.addEventListener('click', handleSleepyPet);

//If you click the "Play!" button, the boredom level is decreased by 1
const boredomButton = document.getElementById('play');
function handleBoredPet () {
    tamagotchi.boredom = tamagotchi.boredom - 1;
    console.log(`Wowza, that was so much fun!!!`);
    console.log(`${tamagotchi.name}'s boredom level is ${tamagotchi.boredom}`);
    boredomCount.textContent = tamagotchi.boredom;
    startCharacter.setAttribute(`id`, `bounce-house`);
}

boredomButton.addEventListener('click', handleBoredPet);
//--------------------------------------------------------------------

//Click button to start timer
const startButton = document.getElementById('start');
startButton.addEventListener('click', startTimer);

//Hides start button after click
function hideStartButton () {
    (startButton).style.visibility = "hidden";
}
startButton.addEventListener('click', hideStartButton)

//Hides naming options after start game button is clicked
const nameStrip = document.getElementById('name-strip');
function hideName () {
    (nameStrip).style.visibility = "hidden";
}
startButton.addEventListener('click', hideName);

//--------------------------------------------------------------

//Starts timer. Game lasts for 20 minutes (1200 seconds)
let time = 0;
let endVideo;
function startTimer() {
            let secondCharacter;
            let thirdCharacter;
            const timer = setInterval(function () {    
            if (time < 300) {
                time++;
                console.log(time);
            } else {
                alert('It\'s always sad to say goodbye...');
                startCharacter.src="/Users/folder-of-secrets/Desktop/SEI/projects/tamagotchi/ally-tamagotchi/images/ghost-drawing-2.png";
                clearInterval(timer);
                endVideo = document.getElementById(`hide`);
                endVideo.removeAttribute(`id`);
                endVideo.setAttribute(`id`, `video`);
            }
            
            //Put tamagotchi factors into an array for easy random access
            let factors = [tamagotchi.hunger, tamagotchi.sleepiness, tamagotchi.boredom ];
            //every 5 seconds,a prompt will appear and a ranomly chosen factor will be increased by 1
            if (time % 8 === 0) {

                let randomFactor = factors[Math.floor(Math.random() * 3)];

                if (randomFactor === tamagotchi.hunger) {

                        tamagotchi.hunger = tamagotchi.hunger + 1;
                        console.log(`${tamagotchi.name}'s hunger level is ${tamagotchi.hunger}`);
                        hungerCount.textContent = tamagotchi.hunger;

                } else if (randomFactor === tamagotchi.sleepiness) {

                    tamagotchi.sleepiness = tamagotchi.sleepiness + 1;
                        console.log(`${tamagotchi.name}'s sleepiness level is ${tamagotchi.sleepiness}`);
                        sleepyCount.textContent = tamagotchi.sleepiness;

                } else if (randomFactor === tamagotchi.boredom) {

                    tamagotchi.boredom = tamagotchi.boredom + 1;
                        console.log(`${tamagotchi.name}'s boredom level is ${tamagotchi.boredom}`);
                        boredomCount.textContent = tamagotchi.boredom;
                }
                //---------------------------------------------------------
                
                window.alert(`${tamagotchi.name} needs some attention`);
            }   

             //increases age every 30 seconds
             if (time % 20 === 0) {
                tamagotchi.age++;
                alert(`Happy birthday, ${tamagotchi.name}! You're ${tamagotchi.age} years old!`);
                ageCount.textContent = tamagotchi.age;
            }

            //if one of the metrics goes above 10, pet will die
            if (tamagotchi.hunger >= 10 || tamagotchi.boredom >= 10 || tamagotchi.sleepiness >= 10) {
                startCharacter.src="/Users/folder-of-secrets/Desktop/SEI/projects/tamagotchi/ally-tamagotchi/images/ghost-drawing-2.png";
                secondCharacter.src="/Users/folder-of-secrets/Desktop/SEI/projects/tamagotchi/ally-tamagotchi/images/ghost-drawing-2.png";
                thirdCharacter.src="/Users/folder-of-secrets/Desktop/SEI/projects/tamagotchi/ally-tamagotchi/images/ghost-drawing-2.png";
                clearInterval(timer);
                alert(`You have let down your precious friend. They have died from neglect.`)
                endVideo = document.getElementById(`hide`);
                endVideo.removeAttribute(`id`);
                endVideo.setAttribute(`id`, `video`);
            }


    // When the tamagotchi gets to 5, 10, and 15 minutes the lifestage and image will change
    
            //First evolution
            if (time == 100) {
                function secondStage() {
                startCharacter.remove();
                secondCharacter = document.createElement(`img`);
                secondCharacter.setAttribute(`class`, `character-two`);
                secondCharacter.src="/Users/folder-of-secrets/Desktop/SEI/projects/tamagotchi/ally-tamagotchi/images/littler-cat.png";
                document.querySelector(`.nest`).appendChild(secondCharacter);
                }
                secondStage();
            }

            //Second evolution
            if (time === 200) {
                function thirdStage() {
                secondCharacter.remove();
                thirdCharacter = document.createElement(`img`);
                thirdCharacter.setAttribute(`class`, `character-three`);
                thirdCharacter.src="/Users/folder-of-secrets/Desktop/SEI/projects/tamagotchi/ally-tamagotchi/images/black cat evil looking.png";
                document.querySelector(`.nest`).appendChild(thirdCharacter);
                }
                thirdStage();
            }

        }, 1000) // interval
    }

    //---------------------------------------------------------

    // When game begins the character image changes to the starting image

    const startCharacter = document.getElementById('shaking-character');

    function firstStage() {
        startCharacter.setAttribute(`id`, `character`);
        startCharacter.src = "/Users/folder-of-secrets/Desktop/SEI/projects/tamagotchi/ally-tamagotchi/images/black-blob-first.png";
    }

    startButton.addEventListener('click', firstStage);